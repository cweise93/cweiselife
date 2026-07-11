import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContentCollectionViewModel, OperatingToolItem } from '../../core/content/content.models';
import { ContentService } from '../../core/content/content.service';
import { FeelingKey, OPERATING_TOOL_FEELING_OPTIONS } from './operating-tools-selector.component';

type OperatingToolsViewMode = 'list' | 'tiles';
type OperatingToolsSortMode = 'recommended' | 'alphabetical';

interface OperatingToolsGroupConfig {
  id: string;
  title: string;
  description: string;
  accent: string;
  slugs: string[];
  appendUnmapped?: boolean;
}

interface OperatingToolsGroupViewModel extends OperatingToolsGroupConfig {
  anchor: string;
  tools: OperatingToolItem[];
}

const EMPTY_OPERATING_TOOLS_PAGE: ContentCollectionViewModel<OperatingToolItem> = {
  meta: {
    version: 1,
    updatedOn: '2026-07-05',
    eyebrow: 'Operating Tools',
    headline: 'Operating tools for the moment before the plan.',
    intro:
      'Practical operating tools to help you think clearly, decide well, and lead through ambiguity before you commit to a plan.'
  },
  items: []
};

const OPERATING_TOOLS_GROUPS: OperatingToolsGroupConfig[] = [
  {
    id: 'get-unstuck',
    title: 'Get unstuck',
    description: 'Clarify what is happening and create space to move.',
    accent: '#2563eb',
    slugs: [
      'operating-tools/avoid-act-loop',
      'operating-tools/activation-response',
      'operating-tools/start-where-the-signal-appears',
      'operating-tools/pattern-to-progress-guide',
      'operating-tools/reframe-the-belief-retrain-the-response'
    ]
  },
  {
    id: 'make-the-decision-visible',
    title: 'Make the decision visible',
    description: 'Structure the choice and clarify trade-offs.',
    accent: '#f15a24',
    slugs: [
      'operating-tools/decision-tree-guide',
      'operating-tools/run-the-decision-experiment',
      'operating-tools/decision-pattern-guide',
      'operating-tools/question-to-action-filter'
    ]
  },
  {
    id: 'lead-through-ambiguity',
    title: 'Lead through ambiguity',
    description: 'Communicate direction and build alignment.',
    accent: '#20a7a5',
    slugs: [
      'operating-tools/a-compass-not-a-map',
      'operating-tools/from-vision-to-measurable-action',
      'operating-tools/see-the-pattern-choose-the-path',
      'operating-tools/map-the-habit-loop'
    ]
  },
  {
    id: 'run-and-reset',
    title: 'Run and reset',
    description: 'Take action, learn, and adapt.',
    accent: '#d99b09',
    slugs: [
      'operating-tools/run-the-day-with-structure',
      'operating-tools/prime-the-day',
      'operating-tools/close-the-loop',
      'operating-tools/prepare-the-night'
    ]
  },
  {
    id: 'align-contribution-and-value',
    title: 'Align contribution and value',
    description: 'Clarify the need, the contribution, and how value will be recognized.',
    accent: '#8b5cf6',
    slugs: ['operating-tools/the-value-contract']
  },
  {
    id: 'additional-practice-tools',
    title: 'Additional practice tools',
    description: 'Short, focused exercises to build skill and judgment.',
    accent: '#7c5fd6',
    slugs: [
      'operating-tools/becoming-the-solution-provider',
      'operating-tools/operational-power-system',
      'operating-tools/design-the-dream-state',
      'operating-tools/meditation-to-lucidity'
    ],
    appendUnmapped: true
  }
];

@Component({
  selector: 'cw-operating-tools',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  templateUrl: './operating-tools.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './operating-tools.component.scss'
})
export class OperatingToolsComponent {
  private readonly contentService = inject(ContentService);

  readonly page = toSignal(this.contentService.getOperatingToolsPage(), {
    initialValue: EMPTY_OPERATING_TOOLS_PAGE
  });

  readonly searchTerm = signal('');
  readonly selectedTool = signal<OperatingToolItem | null>(null);
  readonly selectedFeelingIds = signal<FeelingKey[]>(['show-all']);
  readonly viewMode = signal<OperatingToolsViewMode>('list');
  readonly sortMode = signal<OperatingToolsSortMode>('recommended');
  readonly selectorControls = OPERATING_TOOL_FEELING_OPTIONS;
  readonly stateControls = computed(() => this.selectorControls.filter((control) => control.id !== 'show-all'));
  readonly showAllControl = computed(() => this.selectorControls.find((control) => control.id === 'show-all')!);
  readonly activeFeelings = computed(() => {
    const selected = new Set(this.selectedFeelingIds());
    return this.stateControls().filter((control) => selected.has(control.id));
  });
  readonly visibleSlugSet = computed(() => {
    const activeFeelings = this.activeFeelings();

    if (!activeFeelings.length) {
      return null;
    }

    return new Set(activeFeelings.flatMap((feeling) => feeling.relatedSlugs));
  });

  readonly filteredTools = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const visibleSlugSet = this.visibleSlugSet();

    return this.page().items.filter((tool) => {
      if (visibleSlugSet && !visibleSlugSet.has(tool.slug)) {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = [tool.title, tool.summary, tool.body.intro, ...tool.tags].join(' ').toLowerCase();

      return haystack.includes(query);
    });
  });

  readonly groupedTools = computed<OperatingToolsGroupViewModel[]>(() => {
    const visibleTools = this.filteredTools();
    const visibleMap = new Map(visibleTools.map((tool) => [tool.slug, tool] as const));
    const used = new Set<string>();

    return OPERATING_TOOLS_GROUPS.map((group) => {
      const explicitTools = group.slugs.flatMap((slug) => {
        const tool = visibleMap.get(slug);
        if (!tool || used.has(slug)) {
          return [];
        }

        used.add(slug);
        return [tool];
      });

      const remainingTools = group.appendUnmapped
        ? visibleTools.filter((tool) => !used.has(tool.slug))
        : [];

      for (const tool of remainingTools) {
        used.add(tool.slug);
      }

      const tools = this.sortTools([...explicitTools, ...remainingTools], group);

      return {
        ...group,
        anchor: group.id,
        tools
      };
    }).filter((group) => group.tools.length > 0);
  });

  readonly hasResults = computed(() => this.groupedTools().length > 0);
  readonly selectedToolImage = computed(() => {
    const tool = this.selectedTool();
    return tool?.heroImage ?? tool?.productionAssets?.socialImage?.href ?? null;
  });

  updateSearch(event: Event): void {
    const input = event.target as HTMLInputElement | null;
    this.searchTerm.set(input?.value ?? '');
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }

  isFeelingActive(feelingId: FeelingKey): boolean {
    return this.selectedFeelingIds().includes(feelingId);
  }

  setFeelingSelection(feelingId: FeelingKey): void {
    if (feelingId === 'show-all') {
      this.selectedFeelingIds.set(['show-all']);
      return;
    }

    const current = new Set(this.selectedFeelingIds());
    current.delete('show-all');

    if (current.has(feelingId)) {
      current.delete(feelingId);
    } else {
      current.add(feelingId);
    }

    this.selectedFeelingIds.set(current.size ? [...current] : ['show-all']);
  }

  selectTool(tool: OperatingToolItem): void {
    this.selectedTool.update((selectedTool) => (selectedTool?.id === tool.id ? null : tool));
  }

  clearSelectedTool(): void {
    this.selectedTool.set(null);
  }

  setViewMode(mode: OperatingToolsViewMode): void {
    if (mode === 'list' || mode === 'tiles') {
      this.viewMode.set(mode);
    }
  }

  setSortMode(mode: OperatingToolsSortMode): void {
    if (mode === 'recommended' || mode === 'alphabetical') {
      this.sortMode.set(mode);
    }
  }

  getOperatingToolRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  private sortTools(tools: OperatingToolItem[], group: OperatingToolsGroupConfig): OperatingToolItem[] {
    if (this.sortMode() === 'alphabetical') {
      return [...tools].sort((left, right) => left.title.localeCompare(right.title));
    }

    const preferredOrder = new Map(group.slugs.map((slug, index) => [slug, index] as const));

    return [...tools].sort((left, right) => {
      const leftRank = preferredOrder.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
      const rightRank = preferredOrder.get(right.slug) ?? Number.MAX_SAFE_INTEGER;

      if (leftRank !== rightRank) {
        return leftRank - rightRank;
      }

      if (left.featured !== right.featured) {
        return left.featured ? -1 : 1;
      }

      return left.title.localeCompare(right.title);
    });
  }
}
