import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { CompanionAsset, CompanionCallToAction, CompanionRelatedItem, CompanionSnapshotItem, CompanionTocItem, WritingItem } from '../../core/content/content.models';
import { ContentRendererComponent } from '../../shared/content/content-renderer.component';

@Component({
  selector: 'cw-writing-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, MatButtonModule, MatIconModule, ContentRendererComponent],
  templateUrl: './writing-detail.component.html',
  styleUrl: './writing-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WritingDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      switchMap((slug) => this.contentService.getWritingBySlug(slug))
    ),
    { initialValue: null as WritingItem | null }
  );

  readonly tocItems = computed<CompanionTocItem[]>(() => this.item()?.companion?.toc ?? []);
  readonly snapshotItems = computed<CompanionSnapshotItem[]>(() => this.item()?.companion?.snapshot ?? []);
  readonly assetItems = computed<CompanionAsset[]>(() => this.item()?.companion?.assets ?? []);
  readonly relatedItems = computed<CompanionRelatedItem[]>(() => this.item()?.companion?.related ?? []);
  readonly callToActionItems = computed<CompanionCallToAction[]>(() => this.item()?.companion?.callsToAction ?? []);

  slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  isLocalAnchor(href: string): boolean {
    return href.startsWith('#');
  }

  anchorFromHref(href: string): string {
    return href.replace(/^#/, '');
  }
}
