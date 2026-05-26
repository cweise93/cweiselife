import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { CompanionAsset, CompanionCallToAction, CompanionRelatedItem, CompanionSnapshotItem, CompanionTocItem, FrameworkItem } from '../../core/content/content.models';
import { ContentRendererComponent } from '../../shared/content/content-renderer.component';
import { FrameworkStickyContextBarComponent } from '../../features/frameworks/components/framework-sticky-context-bar/framework-sticky-context-bar.component';
import { FrameworkResourceDialogComponent } from './framework-resource-dialog.component';

@Component({
  selector: 'cw-framework-detail',
  imports: [RouterLink, DatePipe, MatButtonModule, MatDialogModule, MatIconModule, ContentRendererComponent, FrameworkStickyContextBarComponent],
  templateUrl: './framework-detail.component.html',
  styleUrl: './framework-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworkDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private observedSections: Array<{ anchor: string; element: HTMLElement }> = [];
  private readonly viewportListener = () => this.updateActiveSectionFromScroll();

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      switchMap((slug) => this.contentService.getFrameworkBySlug(slug))
    ),
    { initialValue: null as FrameworkItem | null }
  );

  readonly frameworkComponents = computed(() => this.item()?.body.components ?? []);
  readonly tocItems = computed<CompanionTocItem[]>(() => this.item()?.companion?.toc ?? []);
  readonly snapshotItems = computed<CompanionSnapshotItem[]>(() => this.item()?.companion?.snapshot ?? []);
  readonly assetItems = computed<CompanionAsset[]>(() => this.item()?.companion?.assets ?? []);
  readonly frameworkAssetItems = computed<CompanionAsset[]>(() => this.assetItems().filter((item) => item.type === 'image'));
  readonly templateItems = computed<CompanionAsset[]>(() => this.assetItems().filter((item) => item.type === 'template'));
  readonly relatedItems = computed<CompanionRelatedItem[]>(() => this.item()?.companion?.related ?? []);
  readonly callToActionItems = computed<CompanionCallToAction[]>(() => this.item()?.companion?.callsToAction ?? []);
  readonly coreQuestion = computed(() => this.snapshotValue('Core question'));
  readonly fallbackSnapshotItems = computed<CompanionSnapshotItem[]>(() => {
    const framework = this.item();
    if (!framework || this.snapshotItems().length) {
      return [];
    }

    return [
      { label: 'Category', value: framework.category },
      { label: 'Published', value: framework.publishedOn },
      { label: 'Tags', value: framework.tags.join(' · ') }
    ].filter((item) => !!item.value);
  });
  readonly activeSectionAnchor = signal<string | null>(null);
  readonly activeSectionLabel = computed(() => {
    const anchor = this.activeSectionAnchor();
    if (!anchor) {
      return this.tocItems()[0]?.label ?? null;
    }

    return this.tocItems().find((item) => item.anchor === anchor)?.label ?? this.tocItems()[0]?.label ?? null;
  });

  constructor() {
    effect(() => {
      const framework = this.item();
      const tocItems = this.tocItems();

      if (!framework || !tocItems.length) {
        this.observedSections = [];
        this.activeSectionAnchor.set(null);
        return;
      }

      this.activeSectionAnchor.set(tocItems[0]?.anchor ?? null);
      queueMicrotask(() => this.setupObservedSections(tocItems));
    });

    this.document.defaultView?.addEventListener('scroll', this.viewportListener, { passive: true });
    this.document.defaultView?.addEventListener('resize', this.viewportListener, { passive: true });

    this.destroyRef.onDestroy(() => {
      this.document.defaultView?.removeEventListener('scroll', this.viewportListener);
      this.document.defaultView?.removeEventListener('resize', this.viewportListener);
    });
  }

  snapshotValue(label: string): string {
    const structured = this.snapshotItems().find((item) => item.label === label)?.value;
    if (structured) {
      return structured;
    }

    if (label === 'Category') {
      return this.item()?.category ?? '';
    }

    return '';
  }

  slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  scrollToSection(item: CompanionTocItem): void {
    const target = this.document.getElementById(item.anchor);
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    this.activeSectionAnchor.set(item.anchor);
  }

  openTemplateLibrary(): void {
    if (!this.templateItems().length) {
      return;
    }

    this.dialog.open(FrameworkResourceDialogComponent, {
      data: {
        mode: 'template-library',
        title: 'Download templates',
        description: 'Choose the implementation artifact you want to take with you. Downloads stay direct and the framework stays in view.',
        assets: this.templateItems()
      },
      autoFocus: false,
      maxWidth: '96vw',
      panelClass: 'cw-framework-dialog'
    });
  }

  openAsset(item: CompanionAsset): void {
    this.dialog.open(FrameworkResourceDialogComponent, {
      data: {
        mode: 'asset-preview',
        title: item.label,
        asset: item
      },
      autoFocus: false,
      maxWidth: '96vw',
      panelClass: 'cw-framework-dialog'
    });
  }

  downloadAsset(item: CompanionAsset, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();

    const link = this.document.createElement('a');
    link.href = item.href;
    link.download = item.href.split('/').pop() ?? item.label;
    link.rel = 'noopener';
    this.document.body.appendChild(link);
    link.click();
    this.document.body.removeChild(link);
  }

  private setupObservedSections(tocItems: CompanionTocItem[]): void {
    this.observedSections = tocItems
      .map((item) => {
        const element = this.document.getElementById(item.anchor);
        return element ? { anchor: item.anchor, element } : null;
      })
      .filter((item): item is { anchor: string; element: HTMLElement } => !!item);

    this.updateActiveSectionFromScroll();
  }

  private updateActiveSectionFromScroll(): void {
    if (!this.observedSections.length) {
      return;
    }

    const rootStyle = getComputedStyle(this.document.documentElement);
    const toolbarHeight = this.readCssPx(rootStyle.getPropertyValue('--cw-toolbar-current-height')) || 58;
    const contextHeight = this.readCssPx(rootStyle.getPropertyValue('--framework-context-bar-height')) || 98;
    const probeLine = toolbarHeight + contextHeight + 32;

    let currentAnchor = this.observedSections[0]?.anchor ?? null;

    for (const section of this.observedSections) {
      if (section.element.getBoundingClientRect().top <= probeLine) {
        currentAnchor = section.anchor;
      } else {
        break;
      }
    }

    if (currentAnchor) {
      this.activeSectionAnchor.set(currentAnchor);
    }
  }

  private readCssPx(value: string): number {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
}
