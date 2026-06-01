import { DatePipe, KeyValuePipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ContentService } from '../../core/content/content.service';
import { FrameworkItem, GuideItem, HomeContentViewModel, WritingItem } from '../../core/content/content.models';
import { HOME_PUBLISHING_PATH, PublishingPathItem } from '../../data/home-publishing-path.data';
import { scrollSpriteFrameState } from '../../shared/content/scroll-sprite-sequence';

const EMPTY_HOME: HomeContentViewModel = {
  meta: {
    version: 1,
    updatedOn: '2026-05-16',
    siteName: 'cweise.com',
    siteUrl: 'https://cweise.com',
    title: 'Operational Intelligence for Complex Organizations',
    description: '',
    author: 'Charles Weise',
    footerTagline: '',
    contactEmail: 'iweise@me.com'
  },
  navigation: { primary: [], social: [] },
  footer: { featuredLinks: [] },
  connect: {
    eyebrow: 'Stay Connected',
    headline: '',
    intro: '',
    note: '',
    ctaLabel: '',
    ctaUrl: ''
  },
  home: {
    eyebrow: '',
    headline: '',
    subheadline: '',
    intro: [],
    heroImage: '',
    featuredWritingSlugs: [],
    featuredFrameworkSlugs: [],
    featuredGuideSlugs: [],
    themes: [],
    themesSection: { eyebrow: '', headline: '', support: '' },
    writingSection: { eyebrow: '', headline: '', support: '' },
    frameworkSection: { eyebrow: '', headline: '', support: '' },
    guidesSection: { eyebrow: '', headline: '', support: '' },
    aboutSection: { eyebrow: '', headline: '', support: '' }
  },
  featuredWriting: [],
  featuredFrameworks: [],
  featuredGuides: [],
  about: {
    headline: '',
    narrative: [],
    principles: [],
    focusAreas: [],
    closing: ''
  }
};

@Component({
  selector: 'cw-home',
  standalone: true,
  imports: [RouterLink, DatePipe, KeyValuePipe, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  private readonly contentService = inject(ContentService);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('publishingPathSection') private publishingPathSection?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathStoryColumn') private publishingPathStoryColumn?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathSticky') private publishingPathSticky?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathTimeline') private publishingPathTimeline?: ElementRef<HTMLElement>;
  @ViewChildren('publishingPathStepCard') private publishingPathStepCards?: QueryList<ElementRef<HTMLElement>>;

  readonly homeContent = toSignal(this.contentService.getHomeContent(), { initialValue: EMPTY_HOME });
  readonly featuredWritingItems = computed<WritingItem[]>(() => this.homeContent().featuredWriting ?? []);
  readonly featuredGuideItems = computed<GuideItem[]>(() => this.homeContent().featuredGuides ?? []);
  readonly featuredGuideLead = computed<GuideItem | null>(() => this.featuredGuideItems()[0] ?? null);
  readonly featuredGuideGridItems = computed<GuideItem[]>(() => this.featuredGuideItems().slice(1));
  readonly featuredFrameworkItem = computed<FrameworkItem | null>(() => this.homeContent().featuredFrameworks?.[0] ?? null);
  readonly viewportWidth = signal(typeof window === 'undefined' ? 1440 : window.innerWidth);
  readonly homeGuideGridCols = computed(() => {
    const width = this.viewportWidth();

    if (width < 760) {
      return 1;
    }

    if (width < 1120) {
      return 2;
    }

    return 3;
  });
  readonly homeGuideRowHeight = computed(() => {
    const width = this.viewportWidth();

    if (width < 760) {
      return '248px';
    }

    if (width < 1120) {
      return '272px';
    }

    return '296px';
  });
  readonly cardsPerSlide = signal(this.getWritingCardsPerSlide());
  readonly currentWritingSlide = signal(0);
  readonly writingSlides = computed(() => this.chunkWritingItems(this.featuredWritingItems(), this.cardsPerSlide()));
  readonly hasWritingCarousel = computed(() => this.writingSlides().length > 1);
  readonly publishingPath = HOME_PUBLISHING_PATH;
  readonly publishingPathProgress = signal(0);
  readonly publishingPathJourneyProgress = signal(0);
  readonly publishingPathPulseOffset = signal(0);
  readonly publishingPathBackdropState = signal<'before' | 'pinned' | 'after'>('before');
  readonly publishingPathStoryRunway = signal<number | null>(null);
  readonly activePublishingPathIndex = signal(0);
  readonly publishingPathDebugEnabled = signal(false);
  readonly publishingPathPhase = computed(() => this.phaseForProgress(this.publishingPathProgress()));
  readonly publishingPathDebug = signal<Record<string, string | number> | null>(null);
  readonly activePublishingPathItem = computed(() => this.publishingPath.items[this.activePublishingPathIndex()]!);
  readonly publishingPathFrameState = computed(() =>
    scrollSpriteFrameState(this.publishingPathJourneyProgress(), this.publishingPath.sequence, this.publishingPath.sprite)
  );
  readonly publishingPathBackdropOpacity = computed(() => this.mapProgress(this.publishingPathProgress(), 0.015, 0.08));
  readonly publishingPathCurtainOpacity = computed(() => 1 - this.mapProgress(this.publishingPathProgress(), 0.01, 0.1));
  readonly publishingPathIntroEnterProgress = computed(() => this.mapProgress(this.publishingPathProgress(), 0.04, 0.11));
  readonly publishingPathStoryEnterProgress = computed(() => this.mapProgress(this.publishingPathProgress(), 0.14, 0.24));
  readonly publishingPathTimelineEnterProgress = computed(() => this.mapProgress(this.publishingPathProgress(), 0.22, 0.32));
  readonly publishingPathIntroOpacity = computed(() => this.mapProgress(this.publishingPathProgress(), 0.04, 0.11));
  readonly publishingPathStoryOpacity = computed(() => this.mapProgress(this.publishingPathProgress(), 0.14, 0.24));
  readonly publishingPathTimelineOpacity = computed(() => this.mapProgress(this.publishingPathProgress(), 0.22, 0.32));
  readonly publishingPathIntroLift = computed(() => Math.round((1 - this.publishingPathIntroEnterProgress()) * 20));
  readonly publishingPathStoryLift = computed(() => Math.round((1 - this.publishingPathStoryEnterProgress()) * 28));
  readonly publishingPathTimelineLift = computed(() => Math.round((1 - this.publishingPathTimelineEnterProgress()) * 22));

  ngAfterViewInit(): void {
    this.publishingPathDebugEnabled.set(this.isPublishingPathDebugEnabled());
    queueMicrotask(() => this.updatePublishingPathState());

    this.publishingPathStepCards?.changes
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => queueMicrotask(() => this.updatePublishingPathState()));
  }

  @HostListener('window:resize')
  onResize(): void {
    this.viewportWidth.set(typeof window === 'undefined' ? 1440 : window.innerWidth);

    const nextCardsPerSlide = this.getWritingCardsPerSlide();
    if (nextCardsPerSlide === this.cardsPerSlide()) {
    } else {
      this.cardsPerSlide.set(nextCardsPerSlide);
      this.currentWritingSlide.set(
        Math.min(this.currentWritingSlide(), Math.max(this.writingSlides().length - 1, 0))
      );
    }

    this.updatePublishingPathState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updatePublishingPathState();
  }

  previousWritingSlide(): void {
    const totalSlides = this.writingSlides().length;
    if (totalSlides < 2) {
      return;
    }

    this.currentWritingSlide.set((this.currentWritingSlide() - 1 + totalSlides) % totalSlides);
  }

  nextWritingSlide(): void {
    const totalSlides = this.writingSlides().length;
    if (totalSlides < 2) {
      return;
    }

    this.currentWritingSlide.set((this.currentWritingSlide() + 1) % totalSlides);
  }

  goToWritingSlide(index: number): void {
    if (index < 0 || index >= this.writingSlides().length) {
      return;
    }

    this.currentWritingSlide.set(index);
  }

  getWritingRoute(article: WritingItem): string[] {
    return this.slugToRoute(article.slug);
  }

  getFrameworkRoute(slug: string): string[] {
    return this.slugToRoute(slug);
  }

  getGuideRoute(guide: GuideItem): string[] {
    return this.slugToRoute(guide.slug);
  }

  getGuideTags(guide: GuideItem, limit = 3): string[] {
    return guide.tags.slice(0, limit);
  }

  getHomeGuideIntroColspan(): number {
    return this.homeGuideGridCols() === 1 ? 1 : this.homeGuideGridCols() === 2 ? 2 : 1;
  }

  getHomeGuideLeadColspan(): number {
    return this.homeGuideGridCols() === 3 ? 2 : this.homeGuideGridCols() === 2 ? 2 : 1;
  }

  getPublishingPathRoute(item: PublishingPathItem): string[] {
    return this.slugToRoute(item.slug);
  }

  publishingPathKindClass(item: PublishingPathItem): string {
    return `is-${item.kind.toLowerCase()}`;
  }

  publishingPathStatusClass(item: PublishingPathItem): string {
    return `is-${item.status.toLowerCase()}`;
  }

  private getWritingCardsPerSlide(): number {
    if (typeof window === 'undefined') {
      return 3;
    }

    if (window.innerWidth < 720) {
      return 1;
    }

    if (window.innerWidth < 1120) {
      return 2;
    }

    return 3;
  }

  private chunkWritingItems(items: WritingItem[], size: number): WritingItem[][] {
    if (!items.length || size < 1) {
      return [];
    }

    const slides: WritingItem[][] = [];
    for (let index = 0; index < items.length; index += size) {
      slides.push(items.slice(index, index + size));
    }

    return slides;
  }

  private slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  private updatePublishingPathState(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const section = this.publishingPathSection?.nativeElement;
    if (!section) {
      return;
    }

    const sectionRect = section.getBoundingClientRect();
    const toolbarHeight = this.getPublishingPathToolbarHeight();
    const availableViewport = Math.max(window.innerHeight - toolbarHeight, 1);
    const scrollableDistance = Math.max(sectionRect.height - availableViewport, 1);
    const progress = Math.min(1, Math.max(0, (toolbarHeight - sectionRect.top) / scrollableDistance));
    const journeyProgress = this.mapProgress(progress, 0.24, 0.96);

    if (sectionRect.top > toolbarHeight) {
      this.publishingPathBackdropState.set('before');
    } else if (sectionRect.bottom <= toolbarHeight + availableViewport) {
      this.publishingPathBackdropState.set('after');
    } else {
      this.publishingPathBackdropState.set('pinned');
    }

    this.publishingPathProgress.set(progress);
    this.publishingPathJourneyProgress.set(journeyProgress);

    const timeline = this.publishingPathTimeline?.nativeElement;
    const stepCards = this.publishingPathStepCards?.toArray().map((card) => card.nativeElement) ?? [];
    if (!timeline || !stepCards.length) {
      this.activePublishingPathIndex.set(0);
      this.publishingPathPulseOffset.set(0);
      this.publishingPathStoryRunway.set(null);
      return;
    }

    const targetY = toolbarHeight + availableViewport * (window.innerWidth < 1000 ? 0.28 : 0.4);
    let activeIndex = 0;
    let activeDistance = Number.POSITIVE_INFINITY;

    stepCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - targetY);
      if (distance < activeDistance) {
        activeDistance = distance;
        activeIndex = index;
      }
    });

    this.activePublishingPathIndex.set(activeIndex);

    const timelineRect = timeline.getBoundingClientRect();
    const stickyRect = this.publishingPathSticky?.nativeElement.getBoundingClientRect();
    const firstRect = stepCards[0]!.getBoundingClientRect();
    const lastRect = stepCards[stepCards.length - 1]!.getBoundingClientRect();
    const firstCenter = firstRect.top - timelineRect.top + firstRect.height / 2;
    const lastCenter = lastRect.top - timelineRect.top + lastRect.height / 2;
    const pulseOffset = firstCenter + (lastCenter - firstCenter) * journeyProgress;

    this.publishingPathPulseOffset.set(Math.max(firstCenter, Math.min(lastCenter, pulseOffset)));

    if (window.innerWidth < 1000 || !stickyRect) {
      this.publishingPathStoryRunway.set(null);
    } else {
      const requiredRunway = Math.ceil(
        Math.max(
          timelineRect.height,
          stickyRect.height + lastCenter - targetY + 24
        )
      );
      this.publishingPathStoryRunway.set(requiredRunway);
    }

    this.updatePublishingPathDebug({
      toolbarHeight,
      availableViewport,
      sectionRect,
      timelineRect,
      scrollableDistance,
      targetY,
      firstCenter,
      lastCenter,
      activeDistance
    });
  }

  private getPublishingPathToolbarHeight(): number {
    if (typeof window === 'undefined') {
      return 72;
    }

    const styles = getComputedStyle(document.documentElement);
    const currentValue = styles.getPropertyValue('--cw-toolbar-current-height').trim();
    const fallbackValue = styles.getPropertyValue('--cw-toolbar-height').trim();
    const toolbarHeight = Number.parseFloat(currentValue || fallbackValue);
    return Number.isFinite(toolbarHeight) ? toolbarHeight : 72;
  }

  private mapProgress(progress: number, start: number, end: number): number {
    if (end <= start) {
      return progress >= end ? 1 : 0;
    }

    return Math.min(1, Math.max(0, (progress - start) / (end - start)));
  }

  private windowProgress(progress: number, enterStart: number, enterEnd: number, exitStart: number, exitEnd: number): number {
    const enter = this.mapProgress(progress, enterStart, enterEnd);
    const exit = 1 - this.mapProgress(progress, exitStart, exitEnd);
    return Math.max(0, Math.min(1, enter * exit));
  }

  private phaseForProgress(progress: number): string {
    if (progress < 0.04) {
      return 'curtain';
    }
    if (progress < 0.14) {
      return 'intro';
    }
    if (progress < 0.24) {
      return 'story-reveal';
    }
    if (progress < 0.32) {
      return 'timeline-reveal';
    }
    if (progress < 0.96) {
      return 'journey';
    }
    return 'release';
  }

  private isPublishingPathDebugEnabled(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.location.hostname === 'localhost' || window.location.search.includes('debugPublishingPath=1');
  }

  private updatePublishingPathDebug(context: {
    toolbarHeight: number;
    availableViewport: number;
    sectionRect: DOMRect;
    timelineRect: DOMRect;
    scrollableDistance: number;
    targetY: number;
    firstCenter: number;
    lastCenter: number;
    activeDistance: number;
  }): void {
    if (!this.publishingPathDebugEnabled() || typeof window === 'undefined') {
      return;
    }

    const stickyRect = this.publishingPathSticky?.nativeElement.getBoundingClientRect();
    const storyColumnRect = this.publishingPathStoryColumn?.nativeElement.getBoundingClientRect();

    const debug = {
      phase: this.publishingPathPhase(),
      progress: this.publishingPathProgress().toFixed(3),
      journey: this.publishingPathJourneyProgress().toFixed(3),
      active: `${this.activePublishingPathIndex() + 1}/${this.publishingPath.items.length}`,
      sectionTop: Math.round(context.sectionRect.top),
      sectionBottom: Math.round(context.sectionRect.bottom),
      sectionHeight: Math.round(context.sectionRect.height),
      scrollable: Math.round(context.scrollableDistance),
      toolbar: Math.round(context.toolbarHeight),
      viewport: Math.round(context.availableViewport),
      backdrop: this.publishingPathBackdropState(),
      targetY: Math.round(context.targetY),
      stickyTop: stickyRect ? Math.round(stickyRect.top) : 'n/a',
      stickyHeight: stickyRect ? Math.round(stickyRect.height) : 'n/a',
      storyRunway: this.publishingPathStoryRunway() ?? 'n/a',
      storyColumnHeight: storyColumnRect ? Math.round(storyColumnRect.height) : 'n/a',
      timelineTop: Math.round(context.timelineRect.top),
      timelineHeight: Math.round(context.timelineRect.height),
      pulse: Math.round(this.publishingPathPulseOffset()),
      firstCenter: Math.round(context.firstCenter),
      lastCenter: Math.round(context.lastCenter),
      activeDistance: Math.round(context.activeDistance)
    };

    this.publishingPathDebug.set(debug);
    (window as Window & { __publishingPathDebug?: Record<string, string | number> }).__publishingPathDebug = debug;
  }
}
