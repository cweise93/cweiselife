import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { startWith } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { FrameworkItem, GuideItem, HomeContentViewModel, WritingItem } from '../../core/content/content.models';
import { HOME_PUBLISHING_PATH, PublishingPathItem } from '../../data/home-publishing-path.data';
import { HomeGuideSelectorComponent } from './home-guide-selector.component';
import { HomeGuideSelectorBenefit, HomeGuideSelectorMoment } from './home-guide-selector.models';

interface HomeGuideMomentConfig {
  prompt: string;
  slug: string;
}

const HOME_GUIDE_MOMENTS: HomeGuideMomentConfig[] = [
  { prompt: 'Get unstuck', slug: 'guides/avoid-act-loop' },
  { prompt: 'Find direction', slug: 'guides/a-compass-not-a-map' },
  { prompt: 'Break a pattern', slug: 'guides/see-the-pattern-choose-the-path' },
  { prompt: 'Make a decision', slug: 'guides/decision-tree-guide' },
  { prompt: 'Structure today', slug: 'guides/run-the-day-with-structure' },
  { prompt: 'Reset and learn', slug: 'guides/close-the-loop' }
];

const HOME_GUIDE_BENEFITS: HomeGuideSelectorBenefit[] = [
  { icon: 'schedule', title: 'Fast to start', description: 'Begin in under 1 minute.' },
  { icon: 'visibility', title: 'Visual clarity', description: 'See the big picture at a glance.' },
  { icon: 'autorenew', title: 'Repeatable', description: 'Use it again and get better.' },
  { icon: 'task_alt', title: 'Action focused', description: 'Designed to move you forward.' }
];

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
  imports: [RouterLink, DatePipe, MatButtonModule, MatCardModule, MatIconModule, MatListModule, HomeGuideSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  private readonly contentService = inject(ContentService);
  private readonly destroyRef = inject(DestroyRef);
  private publishingPathObserver?: IntersectionObserver;

  @ViewChild('publishingPathSection') private publishingPathSection?: ElementRef<HTMLElement>;
  @ViewChildren('publishingPathStop') private publishingPathStops?: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('publishingPathLayout') private publishingPathLayout?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathStoryColumn') private publishingPathStoryColumn?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathSticky') private publishingPathSticky?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathTimeline') private publishingPathTimeline?: ElementRef<HTMLElement>;
  readonly homeContent = toSignal(this.contentService.getHomeContent(), { initialValue: EMPTY_HOME });
  readonly guideItems = toSignal(this.contentService.getGuidesIndex(), { initialValue: [] as GuideItem[] });
  readonly featuredWritingItems = computed<WritingItem[]>(() => this.homeContent().featuredWriting ?? []);
  readonly homeGuideMoments = computed<HomeGuideSelectorMoment[]>(() =>
    HOME_GUIDE_MOMENTS.flatMap((entry) => {
      const guide = this.guideItems().find((item) => item.slug === entry.slug);
      return guide ? [{ prompt: entry.prompt, guide, route: this.getGuideRoute(guide) }] : [];
    })
  );
  readonly homeGuideBenefits = HOME_GUIDE_BENEFITS;
  readonly selectedHomeGuideMomentIndex = signal(0);
  readonly featuredFrameworkItem = computed<FrameworkItem | null>(() => this.homeContent().featuredFrameworks?.[0] ?? null);
  readonly viewportWidth = signal(typeof window === 'undefined' ? 1440 : window.innerWidth);
  readonly cardsPerSlide = signal(this.getWritingCardsPerSlide());
  readonly currentWritingSlide = signal(0);
  readonly writingSlides = computed(() => this.chunkWritingItems(this.featuredWritingItems(), this.cardsPerSlide()));
  readonly hasWritingCarousel = computed(() => this.writingSlides().length > 1);
  readonly publishingPath = HOME_PUBLISHING_PATH;
  readonly activePublishingPathIndex = signal(0);
  readonly publishingPathStoryPinMode = signal<'static' | 'fixed' | 'released'>('static');
  readonly publishingPathStoryPinTop = signal(0);
  readonly publishingPathStoryPinLeft = signal(0);
  readonly publishingPathStoryPinWidth = signal(0);
  readonly publishingPathStoryReleaseTop = signal(0);
  readonly publishingPathLineProgress = signal(0);
  readonly activePublishingPathItem = computed(() => this.publishingPath.items[this.activePublishingPathIndex()]!);
  readonly publishingPathCompletion = computed(() => {
    const itemCount = this.publishingPath.items.length;
    return itemCount ? (this.activePublishingPathIndex() + 1) / itemCount : 0;
  });

  ngAfterViewInit(): void {
    this.publishingPathStops?.changes
      .pipe(startWith(this.publishingPathStops), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => queueMicrotask(() => {
        this.setupPublishingPathObserver();
        this.updatePublishingPathLineProgress();
        this.updatePublishingPathStoryPin();
      }));
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

    this.syncPublishingPathFromViewport();
    this.updatePublishingPathLineProgress();
    this.updatePublishingPathStoryPin();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.syncPublishingPathFromViewport();
    this.updatePublishingPathLineProgress();
    this.updatePublishingPathStoryPin();
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

  selectHomeGuideMoment(index: number): void {
    if (index < 0 || index >= this.homeGuideMoments().length) {
      return;
    }

    this.selectedHomeGuideMomentIndex.set(index);
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

  publishingPathStoryInlineTop(): number | null {
    const mode = this.publishingPathStoryPinMode();
    if (mode === 'fixed') {
      return this.publishingPathStoryPinTop();
    }
    if (mode === 'released') {
      return this.publishingPathStoryReleaseTop();
    }
    return null;
  }

  publishingPathStoryInlineLeft(): number | null {
    return this.publishingPathStoryPinMode() === 'fixed' ? this.publishingPathStoryPinLeft() : null;
  }

  publishingPathStoryInlineWidth(): number | null {
    return this.publishingPathStoryPinMode() === 'fixed' ? this.publishingPathStoryPinWidth() : null;
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

  private setupPublishingPathObserver(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.publishingPathObserver?.disconnect();

    if (!('IntersectionObserver' in window)) {
      this.syncPublishingPathFromViewport();
      return;
    }

    const stops = this.publishingPathStops?.toArray() ?? [];
    if (!stops.length) {
      return;
    }

    this.publishingPathObserver = new IntersectionObserver(
      () => this.syncPublishingPathFromViewport(),
      {
        root: null,
        rootMargin: '-18% 0px -44% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1]
      }
    );

    stops.forEach((stop) => this.publishingPathObserver?.observe(stop.nativeElement));
    this.syncPublishingPathFromViewport();
  }

  private syncPublishingPathFromViewport(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const stops = this.publishingPathStops?.toArray() ?? [];
    if (!stops.length) {
      return;
    }

    const anchor = window.innerHeight * 0.34;
    const candidates = stops
      .map((stop, index) => {
        const rect = stop.nativeElement.getBoundingClientRect();
        const isNearViewport = rect.bottom > 0 && rect.top < window.innerHeight;
        return { index, rect, distance: Math.abs(rect.top - anchor), isNearViewport };
      })
      .filter((candidate) => candidate.isNearViewport)
      .sort((left, right) => left.distance - right.distance);

    if (candidates[0]) {
      this.activePublishingPathIndex.set(candidates[0].index);
      return;
    }

    const firstStopTop = stops[0]?.nativeElement.getBoundingClientRect().top ?? 0;
    const lastStopBottom = stops[stops.length - 1]?.nativeElement.getBoundingClientRect().bottom ?? 0;

    if (firstStopTop > anchor) {
      this.activePublishingPathIndex.set(0);
      return;
    }

    if (lastStopBottom < anchor) {
      this.activePublishingPathIndex.set(this.publishingPath.items.length - 1);
    }
  }

  private updatePublishingPathLineProgress(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const timeline = this.publishingPathTimeline?.nativeElement;
    if (!timeline) {
      return;
    }

    const timelineRect = timeline.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.34;
    const railInset = 18;
    const usableHeight = Math.max(timelineRect.height - railInset * 2, 1);
    const rawProgress = (viewportAnchor - timelineRect.top - railInset) / usableHeight;

    this.publishingPathLineProgress.set(Math.min(1, Math.max(0, rawProgress)));
  }

  private updatePublishingPathStoryPin(): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.viewportWidth() <= 1000) {
      this.publishingPathStoryPinMode.set('static');
      return;
    }

    const layout = this.publishingPathLayout?.nativeElement;
    const storyColumn = this.publishingPathStoryColumn?.nativeElement;
    const sticky = this.publishingPathSticky?.nativeElement;

    if (!layout || !storyColumn || !sticky) {
      return;
    }

    const toolbarHeight = this.getPublishingPathToolbarHeight();
    const stickyOffset = toolbarHeight + 24;
    const layoutRect = layout.getBoundingClientRect();
    const storyColumnRect = storyColumn.getBoundingClientRect();
    const stickyHeight = sticky.getBoundingClientRect().height;
    const releaseTop = Math.max(layout.offsetHeight - stickyHeight, 0);

    this.publishingPathStoryPinTop.set(stickyOffset);
    this.publishingPathStoryPinLeft.set(storyColumnRect.left);
    this.publishingPathStoryPinWidth.set(storyColumnRect.width);
    this.publishingPathStoryReleaseTop.set(releaseTop);

    if (layoutRect.top > stickyOffset) {
      this.publishingPathStoryPinMode.set('static');
      return;
    }

    if (layoutRect.bottom <= stickyOffset + stickyHeight) {
      this.publishingPathStoryPinMode.set('released');
      return;
    }

    this.publishingPathStoryPinMode.set('fixed');
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
}
