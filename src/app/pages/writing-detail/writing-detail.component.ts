import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { CompanionAsset, CompanionCallToAction, CompanionRelatedItem, CompanionSnapshotItem, CompanionTocItem, WritingItem, WritingReference } from '../../core/content/content.models';
import {
  CitationSegment,
  buildReferenceLookup,
  canonicalReferenceUrl,
  cloneCitationCounts,
  createCitationParseState,
  formatReferenceAuthors,
  formatReferenceYear,
  parseCitationSegments,
  referenceAnchorId,
  referenceLinkLabel,
  resolveWritingReferences
} from '../../core/content/writing-citations';
import { SeoService } from '../../core/seo/seo.service';
import { ContentRendererComponent } from '../../shared/content/content-renderer.component';
import { InlineCitationTextComponent } from '../../shared/content/inline-citation-text.component';

@Component({
  selector: 'cw-writing-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, MatButtonModule, MatIconModule, ContentRendererComponent, InlineCitationTextComponent],
  templateUrl: './writing-detail.component.html',
  styleUrl: './writing-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WritingDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);
  private readonly seoService = inject(SeoService);

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const year = params.get('year');
        const month = params.get('month');
        const day = params.get('day');
        const slug = params.get('slug');

        return year && month && day && slug ? `writing/${year}/${month}/${day}/${slug}` : '';
      }),
      switchMap((slug) => this.contentService.getWritingBySlug(slug))
    ),
    { initialValue: null as WritingItem | null }
  );

  readonly tocItems = computed<CompanionTocItem[]>(() => this.item()?.companion?.toc ?? []);
  readonly snapshotItems = computed<CompanionSnapshotItem[]>(() => this.item()?.companion?.snapshot ?? []);
  readonly assetItems = computed<CompanionAsset[]>(() => this.item()?.companion?.assets ?? []);
  readonly relatedItems = computed<CompanionRelatedItem[]>(() => this.item()?.companion?.related ?? []);
  readonly callToActionItems = computed<CompanionCallToAction[]>(() => this.item()?.companion?.callsToAction ?? []);
  readonly resolvedReferences = computed<WritingReference[]>(() => resolveWritingReferences(this.item()));
  readonly introCitationDocument = computed(() => {
    const references = this.resolvedReferences();
    const lookup = buildReferenceLookup(references);
    const state = createCitationParseState();
    const paragraphs = this.rawIntroParagraphs().map((paragraph) =>
      parseCitationSegments(paragraph, lookup, state, this.item()?.slug)
    );

    return {
      paragraphs,
      counts: cloneCitationCounts(state)
    };
  });
  readonly introParagraphs = computed<CitationSegment[][]>(() => this.introCitationDocument().paragraphs);
  readonly introCitationCounts = computed<Record<string, number>>(() => this.introCitationDocument().counts);
  readonly sourceCount = computed(() => this.resolvedReferences().length);
  readonly hasRailContent = computed(
    () =>
      this.snapshotItems().length ||
      this.tocItems().length ||
      this.sourceCount() ||
      this.assetItems().length ||
      this.relatedItems().length ||
      this.callToActionItems().length
  );
  readonly rawIntroParagraphs = computed<string[]>(() => {
    const intro = this.item()?.body.intro ?? '';

    return intro
      .split(/\n\s*\n/g)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  });

  constructor() {
    effect(() => {
      const item = this.item();

      if (item) {
        this.seoService.applyContentMetadata(item);
      }
    });
  }

  slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  assetUrl(href: string): string {
    if (!href || /^(?:https?:|mailto:|tel:|#|\/)/i.test(href)) {
      return href;
    }

    const servedHref = href.startsWith('assets/') ? href.replace(/\.(png|jpe?g)$/i, '.webp') : href;

    return servedHref.startsWith('assets/') ? `/${servedHref}` : servedHref;
  }

  isLocalAnchor(href: string): boolean {
    return href.startsWith('#');
  }

  anchorFromHref(href: string): string {
    return href.replace(/^#/, '');
  }

  referenceId(reference: WritingReference): string {
    return referenceAnchorId(reference.id);
  }

  referenceUrl(reference: WritingReference): string {
    return canonicalReferenceUrl(reference);
  }

  referenceUrlLabel(reference: WritingReference): string {
    return referenceLinkLabel(reference);
  }

  referenceAuthors(reference: WritingReference): string {
    return formatReferenceAuthors(reference.authors);
  }

  referenceYear(reference: WritingReference): string {
    return formatReferenceYear(reference);
  }
}
