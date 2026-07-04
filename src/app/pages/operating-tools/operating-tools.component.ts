import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContentCollectionViewModel, OperatingToolItem } from '../../core/content/content.models';
import { ContentService } from '../../core/content/content.service';

type OperatingToolState =
  | 'activated'
  | 'avoiding'
  | 'unclear'
  | 'pressured'
  | 'looping'
  | 'unstructured'
  | 'show-all';

interface OperatingToolStateOption {
  id: OperatingToolState;
  label: string;
}

interface OperatingToolRecommendationSpec {
  slug: string;
  sentence: string;
}

interface OperatingToolRecommendationView {
  tool: OperatingToolItem;
  sentence: string;
}

interface OperatingToolGroupView {
  id: string;
  title: string;
  description: string;
  items: OperatingToolItem[];
}

const OPERATING_TOOLS_HERO = {
  eyebrow: 'Operating Tools',
  headline: 'What state are you in?',
  intro: 'Pick the closest match. The tools below will narrow.',
  prompt: "I'm feeling..."
} as const;

const EMPTY_OPERATING_TOOLS_PAGE: ContentCollectionViewModel<OperatingToolItem> = {
  meta: {
    version: 1,
    updatedOn: '2026-07-04',
    eyebrow: OPERATING_TOOLS_HERO.eyebrow,
    headline: OPERATING_TOOLS_HERO.headline,
    intro: OPERATING_TOOLS_HERO.intro
  },
  items: []
};

const STATE_OPTIONS: OperatingToolStateOption[] = [
  { id: 'activated', label: 'Spun up' },
  { id: 'avoiding', label: 'Stuck before starting' },
  { id: 'unclear', label: "Can't see the next move" },
  { id: 'pressured', label: 'Need to decide' },
  { id: 'looping', label: 'Same pattern again' },
  { id: 'unstructured', label: 'Need structure' },
  { id: 'show-all', label: 'Show all' }
];

const STATE_RECOMMENDATIONS: Record<Exclude<OperatingToolState, 'show-all'>, OperatingToolRecommendationSpec> = {
  activated: {
    slug: 'operating-tools/activation-response',
    sentence: 'Move charged mental energy out of rumination and into physical motion.'
  },
  avoiding: {
    slug: 'operating-tools/avoid-act-loop',
    sentence: 'Touch the work once so the task stops growing in your head.'
  },
  unclear: {
    slug: 'operating-tools/question-to-action-filter',
    sentence: 'Turn a vague problem into a cleaner next move.'
  },
  pressured: {
    slug: 'operating-tools/decision-tree-guide',
    sentence: 'Make the options visible before choosing the next branch.'
  },
  looping: {
    slug: 'operating-tools/see-the-pattern-choose-the-path',
    sentence: 'Use the pattern without getting trapped inside it.'
  },
  unstructured: {
    slug: 'operating-tools/run-the-day-with-structure',
    sentence: 'Turn intention into observable execution.'
  }
};

const FILTERED_TOOL_SLUGS: Record<Exclude<OperatingToolState, 'show-all'>, string[]> = {
  activated: [
    'operating-tools/activation-response',
    'operating-tools/map-the-habit-loop',
    'operating-tools/reframe-the-belief-retrain-the-response'
  ],
  avoiding: [
    'operating-tools/avoid-act-loop',
    'operating-tools/pattern-to-progress-guide',
    'operating-tools/start-where-the-signal-appears'
  ],
  unclear: [
    'operating-tools/a-compass-not-a-map',
    'operating-tools/question-to-action-filter',
    'operating-tools/from-vision-to-measurable-action'
  ],
  pressured: [
    'operating-tools/decision-tree-guide',
    'operating-tools/run-the-decision-experiment',
    'operating-tools/decision-pattern-guide'
  ],
  looping: [
    'operating-tools/see-the-pattern-choose-the-path',
    'operating-tools/map-the-habit-loop',
    'operating-tools/pattern-to-progress-guide'
  ],
  unstructured: [
    'operating-tools/run-the-day-with-structure',
    'operating-tools/close-the-loop',
    'operating-tools/prime-the-day'
  ]
};

const SHOW_ALL_GROUP_SPECS = [
  {
    id: 'get-unstuck',
    title: 'Get unstuck',
    description: 'For activation, avoidance, stuck energy, and the first useful move.',
    slugs: [
      'operating-tools/activation-response',
      'operating-tools/avoid-act-loop',
      'operating-tools/pattern-to-progress-guide',
      'operating-tools/map-the-habit-loop',
      'operating-tools/see-the-pattern-choose-the-path'
    ]
  },
  {
    id: 'make-the-decision-visible',
    title: 'Make the decision visible',
    description: 'For vague questions, noisy options, branching consequences, and decision pressure.',
    slugs: [
      'operating-tools/question-to-action-filter',
      'operating-tools/decision-tree-guide',
      'operating-tools/run-the-decision-experiment',
      'operating-tools/start-where-the-signal-appears',
      'operating-tools/decision-pattern-guide'
    ]
  },
  {
    id: 'lead-through-ambiguity',
    title: 'Lead through ambiguity',
    description: 'For unclear direction, recurring friction, operating power, and turning insight into structure.',
    slugs: [
      'operating-tools/a-compass-not-a-map',
      'operating-tools/becoming-the-solution-provider',
      'operating-tools/operational-power-system',
      'operating-tools/from-vision-to-measurable-action'
    ]
  },
  {
    id: 'run-and-reset',
    title: 'Run and reset',
    description: 'For daily structure, reflection, reset, and state preparation.',
    slugs: [
      'operating-tools/run-the-day-with-structure',
      'operating-tools/close-the-loop',
      'operating-tools/prime-the-day',
      'operating-tools/prepare-the-night',
      'operating-tools/reframe-the-belief-retrain-the-response'
    ]
  },
  {
    id: 'additional-practice-tools',
    title: 'Additional practice tools',
    description: 'Useful supporting tools for deeper state work and practice.',
    slugs: [
      'operating-tools/design-the-dream-state',
      'operating-tools/meditation-to-lucidity'
    ]
  }
] as const;

@Component({
  selector: 'cw-operating-tools',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './operating-tools.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './operating-tools.component.scss'
})
export class OperatingToolsComponent {
  private readonly contentService = inject(ContentService);

  readonly page = toSignal(this.contentService.getOperatingToolsPage(), {
    initialValue: EMPTY_OPERATING_TOOLS_PAGE
  });
  readonly hero = OPERATING_TOOLS_HERO;
  readonly stateOptions = STATE_OPTIONS;
  readonly selectedState = signal<OperatingToolState>('show-all');
  readonly operatingToolMap = computed(
    () => new Map(this.page().items.map((item) => [item.slug, item] as const))
  );
  readonly selectedRecommendation = computed<OperatingToolRecommendationView | null>(() => {
    const state = this.selectedState();

    if (state === 'show-all') {
      return null;
    }

    const spec = STATE_RECOMMENDATIONS[state];
    const tool = this.operatingToolMap().get(spec.slug);
    return tool ? { tool, sentence: spec.sentence } : null;
  });
  readonly selectedStateLabel = computed(
    () => this.stateOptions.find((option) => option.id === this.selectedState())?.label ?? 'Show all'
  );
  readonly filteredItems = computed<OperatingToolItem[]>(() => {
    const state = this.selectedState();

    if (state === 'show-all') {
      return [];
    }

    return this.resolveItems(FILTERED_TOOL_SLUGS[state]);
  });
  readonly groupedSections = computed<OperatingToolGroupView[]>(() =>
    SHOW_ALL_GROUP_SPECS.map((section) => ({
      id: section.id,
      title: section.title,
      description: section.description,
      items: this.resolveItems(section.slugs)
    })).filter((section) => section.items.length > 0)
  );

  selectState(state: OperatingToolState): void {
    this.selectedState.set(state);
  }

  isSelected(state: OperatingToolState): boolean {
    return this.selectedState() === state;
  }

  getOperatingToolRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  trackBySlug(_: number, item: OperatingToolItem): string {
    return item.slug;
  }

  private resolveItems(slugs: readonly string[]): OperatingToolItem[] {
    const toolMap = this.operatingToolMap();

    return slugs.flatMap((slug) => {
      const tool = toolMap.get(slug);
      return tool ? [tool] : [];
    });
  }
}
