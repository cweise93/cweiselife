import { DatePipe, Location } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { curveCatmullRom, line } from 'd3';
import { startWith } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { FrameworkItem, GuideItem, HomeContentViewModel, WritingItem } from '../../core/content/content.models';
import { HOME_PUBLISHING_PATH, PublishingPathAct, PublishingPathActId, PublishingPathItem, PublishingPathViewMode } from '../../data/home-publishing-path.data';
import { HomeGuideSelectorComponent } from './home-guide-selector.component';
import { HomeGuideSelectorBenefit, HomeGuideSelectorMoment } from './home-guide-selector.models';

interface HomeGuideMomentConfig {
  prompt: string;
  slug: string;
}

interface PublishingPathRailGroup {
  id: string;
  label: string;
  title: string;
  summary: string;
  items: PublishingPathItem[];
}

interface PublishingPathGraphBand {
  id: PublishingPathActId;
  label: string;
  title: string;
  x: number;
  width: number;
  centerX: number;
}

interface PublishingPathGraphNode {
  item: PublishingPathItem;
  x: number;
  y: number;
  act: PublishingPathAct;
}

interface PublishingPathGraphData {
  width: number;
  height: number;
  path: string;
  bands: PublishingPathGraphBand[];
  nodes: PublishingPathGraphNode[];
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

const HOME_HERO = {
  eyebrow: 'Organizational Sensemaking & Execution',
  headlineLines: ['Operational Clarity', 'for Complex Organizations'],
  subheadline: 'Surface the truth. Structure the evidence. Operationalize the answer.',
  intro: [
    'I help complex organizations turn scattered operational knowledge into clear decisions, repeatable systems, and measurable action.',
    'My work sits where strategy, field experience, technology, and execution meet. I design the rooms, workflows, frameworks, and operating models that help experienced people surface what the organization already knows but cannot yet see clearly.'
  ]
} as const;

const HOME_CAPABILITIES_SECTION = {
  eyebrow: 'Core Capabilities',
  headline: 'How I Create Value',
  support: 'The work is not more reporting, more meetings, or more tools. It is turning organizational knowledge into operational reality.'
} as const;

const HOME_CAPABILITIES = [
  {
    id: 'surface-the-signal',
    icon: 'hub',
    title: 'Surface the Signal',
    description: 'Create environments where experienced leaders can expose what is actually blocking execution without reducing the problem to opinion, politics, or anecdote.'
  },
  {
    id: 'structure-the-evidence',
    icon: 'fact_check',
    title: 'Structure the Evidence',
    description: 'Turn fragmented input from people, systems, workflows, and history into patterns leadership can evaluate with confidence.'
  },
  {
    id: 'operationalize-the-answer',
    icon: 'account_tree',
    title: 'Operationalize the Answer',
    description: 'Convert insight into ownership, cadence, workflow, technology, accountability, and measurable follow-through.'
  }
] as const;

const HOME_WRITING_SECTION = {
  eyebrow: 'Featured Writing',
  headline: 'Selected Essays'
} as const;

const HOME_FRAMEWORK_SECTION = {
  eyebrow: 'Featured Framework',
  headline: 'Relationship Capital → Revenue Intelligence',
  support: 'A framework for making trust, expertise, delivered work, unmet client need, and next-best internal connections visible enough to drive measurable growth.'
} as const;

const HOME_ABOUT_SECTION = {
  eyebrow: 'About'
} as const;

const EMPTY_HOME: HomeContentViewModel = {
  meta: {
    version: 1,
    updatedOn: '2026-05-16',
    siteName: 'cweise.com',
    siteUrl: 'https://cweise.com',
    title: 'Operational Clarity for Complex Organizations',
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
  imports: [RouterLink, DatePipe, MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule, HomeGuideSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  private readonly contentService = inject(ContentService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private publishingPathObserver?: IntersectionObserver;

  @ViewChild('publishingPathSection') private publishingPathSection?: ElementRef<HTMLElement>;
  @ViewChildren('publishingPathStop') private publishingPathStops?: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('publishingPathLayout') private publishingPathLayout?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathStoryColumn') private publishingPathStoryColumn?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathSticky') private publishingPathSticky?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathTimeline') private publishingPathTimeline?: ElementRef<HTMLElement>;
  @ViewChild('publishingPathMapSurface') private publishingPathMapSurface?: ElementRef<HTMLElement>;
  readonly homeContent = toSignal(this.contentService.getHomeContent(), { initialValue: EMPTY_HOME });
  readonly homeHero = HOME_HERO;
  readonly homeCapabilitiesSection = HOME_CAPABILITIES_SECTION;
  readonly homeCapabilities = HOME_CAPABILITIES;
  readonly homeWritingSection = HOME_WRITING_SECTION;
  readonly homeFrameworkSection = HOME_FRAMEWORK_SECTION;
  readonly homeAboutSection = HOME_ABOUT_SECTION;
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
  readonly publishingPathViewMode = signal<PublishingPathViewMode>('story-arc');
  readonly activePublishingPathId = signal(this.publishingPath.defaultStoryId);
  readonly publishingPathStoryPinMode = signal<'static' | 'fixed' | 'released'>('static');
  readonly publishingPathStoryPinTop = signal(0);
  readonly publishingPathStoryPinLeft = signal(0);
  readonly publishingPathStoryPinWidth = signal(0);
  readonly publishingPathStoryReleaseTop = signal(0);
  readonly publishingPathLineProgress = signal(0);
  readonly basePublishingPathItems = computed(() =>
    [...this.publishingPath.items].sort((left, right) =>
      this.publishingPathViewMode() === 'release-order'
        ? left.releaseOrder - right.releaseOrder
        : left.narrativeOrder - right.narrativeOrder
    )
  );
  readonly orderedPublishingPathItems = computed(() =>
    this.publishingPathGraph().nodes.map((node) => node.item)
  );
  readonly publishingPathOrderLookup = computed(() =>
    new Map(this.orderedPublishingPathItems().map((item, index) => [item.id, index] as const))
  );
  readonly activePublishingPathIndex = computed(() => {
    const activeId = this.activePublishingPathId();
    const activeIndex = this.publishingPathOrderLookup().get(activeId);
    return activeIndex ?? 0;
  });
  readonly activePublishingPathItem = computed(() => {
    const orderedItems = this.orderedPublishingPathItems();
    return orderedItems[this.activePublishingPathIndex()] ?? orderedItems[0]!;
  });
  readonly activePublishingPathAct = computed(() =>
    this.publishingPath.acts.find((act) => act.id === this.activePublishingPathItem().actId) ?? this.publishingPath.acts[0]!
  );
  readonly publishingPathCompletion = computed(() => {
    const itemCount = this.orderedPublishingPathItems().length;
    return itemCount ? (this.activePublishingPathIndex() + 1) / itemCount : 0;
  });
  readonly publishingPathRailGroups = computed<PublishingPathRailGroup[]>(() => {
    if (this.publishingPathViewMode() === 'release-order') {
      return [
        {
          id: 'release-order',
          label: 'Release order',
          title: 'How the work actually shipped',
          summary: 'Chronology stays visible, but it is no longer the primary organizing idea.',
          items: this.orderedPublishingPathItems()
        }
      ];
    }

    return this.publishingPath.acts
      .map((act) => ({
        ...act,
        items: this.orderedPublishingPathItems().filter((item) => item.actId === act.id)
      }))
      .filter((group) => group.items.length);
  });
  readonly publishingPathGraph = computed(() =>
    this.buildPublishingPathGraph(
      this.basePublishingPathItems(),
      this.publishingPathViewMode()
    )
  );

  constructor() {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const story = params.get('story');
        const view = params.get('view');

        if (story && this.publishingPath.items.some((item) => item.id === story)) {
          this.activePublishingPathId.set(story);
        } else if (!story) {
          this.activePublishingPathId.set(this.publishingPath.defaultStoryId);
        }

        if (view === 'story-arc' || view === 'release-order') {
          this.publishingPathViewMode.set(view);
        } else if (!view) {
          this.publishingPathViewMode.set('story-arc');
        }
      });
  }

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
    return item.slug ? this.slugToRoute(item.slug) : [];
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

  publishingPathHasRoute(item: PublishingPathItem): boolean {
    return item.availability === 'published' && !!item.slug;
  }

  publishingPathIsActive(item: PublishingPathItem): boolean {
    return this.activePublishingPathItem().id === item.id;
  }

  publishingPathIsComplete(item: PublishingPathItem): boolean {
    const itemIndex = this.publishingPathOrderLookup().get(item.id) ?? -1;
    return itemIndex > -1 && itemIndex < this.activePublishingPathIndex();
  }

  publishingPathItemNumber(item: PublishingPathItem): string {
    const index = (this.publishingPathOrderLookup().get(item.id) ?? 0) + 1;
    return `${index}`.padStart(2, '0');
  }

  selectPublishingPathItem(item: PublishingPathItem, syncRoute = true): void {
    if (!item) {
      return;
    }

    this.activePublishingPathId.set(item.id);

    if (syncRoute) {
      this.updatePublishingPathUrl(item.id, this.publishingPathViewMode());
    }
  }

  setPublishingPathViewMode(mode: PublishingPathViewMode): void {
    if (mode !== 'story-arc' && mode !== 'release-order') {
      return;
    }

    if (this.publishingPathViewMode() === mode) {
      return;
    }

    this.publishingPathViewMode.set(mode);
    queueMicrotask(() => {
      this.setupPublishingPathObserver();
      this.syncPublishingPathFromViewport();
      this.updatePublishingPathLineProgress();
      this.updatePublishingPathStoryPin();
    });

    this.updatePublishingPathUrl(this.activePublishingPathItem().id, mode);
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

  private buildPublishingPathGraph(
    items: PublishingPathItem[],
    viewMode: PublishingPathViewMode
  ): PublishingPathGraphData {
    const width = 1000;
    const height = 280;
    const paddingX = 52;
    const actTrackY = [176, 122, 88, 144];
    const waveY = [154, 122, 96, 136, 168];
    const nodes = items.map((item, index) => {
      const activeActIndex = this.publishingPath.acts.findIndex((act) => act.id === item.actId);
      const defaultX = items.length === 1
        ? width / 2
        : paddingX + (index / Math.max(items.length - 1, 1)) * (width - paddingX * 2);
      const defaultY = viewMode === 'story-arc'
        ? actTrackY[Math.max(activeActIndex, 0)] + (index % 2 === 0 ? -10 : 14)
        : waveY[index % waveY.length];
      const act = this.publishingPath.acts[activeActIndex] ?? this.publishingPath.acts[0]!;

      return {
        item,
        x: defaultX,
        y: defaultY,
        act
      };
    });

    const path = line<PublishingPathGraphNode>()
      .x((node) => node.x)
      .y((node) => node.y)
      .curve(curveCatmullRom.alpha(0.74))(nodes) ?? '';

    const bands = this.publishingPath.acts
      .map((act) => {
        const actNodes = nodes.filter((node) => node.item.actId === act.id);
        if (!actNodes.length) {
          return null;
        }

        const minX = Math.min(...actNodes.map((node) => node.x));
        const maxX = Math.max(...actNodes.map((node) => node.x));
        const x = Math.max(20, minX - 28);
        const right = Math.min(width - 20, maxX + 28);

        return {
          id: act.id,
          label: act.label,
          title: act.title,
          x,
          width: Math.max(right - x, 72),
          centerX: x + Math.max(right - x, 72) / 2
        };
      })
      .filter((band): band is PublishingPathGraphBand => band !== null);

    return { width, height, path, bands, nodes };
  }

  private updatePublishingPathUrl(storyId: string, viewMode: PublishingPathViewMode): void {
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        story: storyId,
        view: viewMode
      }
    });

    this.location.replaceState(this.router.serializeUrl(urlTree));
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
      const nextItem = this.orderedPublishingPathItems()[candidates[0].index];
      if (nextItem) {
        this.selectPublishingPathItem(nextItem, false);
      }
      return;
    }

    const firstStopTop = stops[0]?.nativeElement.getBoundingClientRect().top ?? 0;
    const lastStopBottom = stops[stops.length - 1]?.nativeElement.getBoundingClientRect().bottom ?? 0;

    if (firstStopTop > anchor) {
      const firstItem = this.orderedPublishingPathItems()[0];
      if (firstItem) {
        this.selectPublishingPathItem(firstItem, false);
      }
      return;
    }

    if (lastStopBottom < anchor) {
      const orderedItems = this.orderedPublishingPathItems();
      const lastItem = orderedItems[orderedItems.length - 1];
      if (lastItem) {
        this.selectPublishingPathItem(lastItem, false);
      }
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
