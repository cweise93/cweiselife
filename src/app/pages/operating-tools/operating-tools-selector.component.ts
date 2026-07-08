import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ContentCollectionViewModel, OperatingToolItem } from '../../core/content/content.models';
import { ContentService } from '../../core/content/content.service';
import {
  OperatingToolsAssemblyPlateComponent,
  OperatingToolsAssemblyTile
} from './operating-tools-puzzle.component';
import { OperatingToolPreviewDialogComponent } from './operating-tool-preview-dialog.component';

export type FeelingKey =
  | 'overloaded'
  | 'stuck'
  | 'foggy'
  | 'under-pressure'
  | 'repeating'
  | 'scattered'
  | 'show-all';
type PrimaryFeelingKey = Exclude<FeelingKey, 'show-all'>;

export interface FeelingOption {
  id: FeelingKey;
  label: string;
  caption: string;
  icon: string;
  accent: string;
  recommendedSlug?: string;
  relatedSlugs: string[];
}

const EMPTY_OPERATING_TOOLS_PAGE: ContentCollectionViewModel<OperatingToolItem> = {
  meta: {
    version: 1,
    updatedOn: '2026-07-05',
    eyebrow: 'Operating Tools',
    headline: 'Choose the tool for the moment you are actually in.',
    intro:
      'Leadership friction usually shows up as a state before it becomes a plan: activation, avoidance, ambiguity, unclear decisions, or a pattern that keeps repeating. These tools help turn that moment into the next useful move.'
  },
  items: []
};

export const OPERATING_TOOL_FEELING_OPTIONS: FeelingOption[] = [
  {
    id: 'show-all',
    label: 'Show all tools',
    caption: 'See every tool',
    icon: 'apps',
    accent: 'var(--cw-accent)',
    relatedSlugs: []
  },
  {
    id: 'overloaded',
    label: 'Overloaded',
    caption: 'Too much mental motion',
    icon: 'psychology_alt',
    accent: '#6d5bd0',
    recommendedSlug: 'operating-tools/activation-response',
    relatedSlugs: [
      'operating-tools/activation-response',
      'operating-tools/map-the-habit-loop',
      'operating-tools/reframe-the-belief-retrain-the-response'
    ]
  },
  {
    id: 'stuck',
    label: 'Stuck',
    caption: 'I have not started',
    icon: 'pause_circle',
    accent: '#2563eb',
    recommendedSlug: 'operating-tools/avoid-act-loop',
    relatedSlugs: [
      'operating-tools/avoid-act-loop',
      'operating-tools/pattern-to-progress-guide',
      'operating-tools/start-where-the-signal-appears'
    ]
  },
  {
    id: 'foggy',
    label: 'Foggy',
    caption: 'I cannot see the next move',
    icon: 'cloud_queue',
    accent: '#20a7a5',
    recommendedSlug: 'operating-tools/question-to-action-filter',
    relatedSlugs: [
      'operating-tools/question-to-action-filter',
      'operating-tools/a-compass-not-a-map',
      'operating-tools/from-vision-to-measurable-action'
    ]
  },
  {
    id: 'under-pressure',
    label: 'Under pressure',
    caption: 'I need to decide',
    icon: 'speed',
    accent: '#f15a24',
    recommendedSlug: 'operating-tools/decision-tree-guide',
    relatedSlugs: [
      'operating-tools/decision-tree-guide',
      'operating-tools/run-the-decision-experiment',
      'operating-tools/decision-pattern-guide',
      'operating-tools/question-to-action-filter'
    ]
  },
  {
    id: 'repeating',
    label: 'Repeating',
    caption: 'Same pattern again',
    icon: 'sync',
    accent: '#d99b09',
    recommendedSlug: 'operating-tools/see-the-pattern-choose-the-path',
    relatedSlugs: [
      'operating-tools/see-the-pattern-choose-the-path',
      'operating-tools/map-the-habit-loop',
      'operating-tools/pattern-to-progress-guide',
      'operating-tools/reframe-the-belief-retrain-the-response'
    ]
  },
  {
    id: 'scattered',
    label: 'Scattered',
    caption: 'I need structure',
    icon: 'scatter_plot',
    accent: '#7c5fd6',
    recommendedSlug: 'operating-tools/run-the-day-with-structure',
    relatedSlugs: [
      'operating-tools/run-the-day-with-structure',
      'operating-tools/close-the-loop',
      'operating-tools/prime-the-day',
      'operating-tools/prepare-the-night'
    ]
  }
];

@Component({
  selector: 'cw-operating-tools-selector',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    OperatingToolsAssemblyPlateComponent
  ],
  templateUrl: './operating-tools-selector.component.html',
  styleUrl: './operating-tools-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatingToolsSelectorComponent {
  private readonly contentService = inject(ContentService);
  private readonly dialog = inject(MatDialog);

  readonly page = toSignal(this.contentService.getOperatingToolsPage(), {
    initialValue: EMPTY_OPERATING_TOOLS_PAGE
  });
  readonly controls = OPERATING_TOOL_FEELING_OPTIONS;
  readonly selectedFeelingIds = signal<FeelingKey[]>(['show-all']);
  readonly showAllControl = computed(() => this.controls.find((control) => control.id === 'show-all')!);
  readonly primaryControls = computed(
    () => this.controls.filter((control): control is FeelingOption & { id: PrimaryFeelingKey } => control.id !== 'show-all')
  );
  readonly activeFeelingIds = computed<PrimaryFeelingKey[]>(() =>
    this.selectedFeelingIds().filter((feelingId): feelingId is PrimaryFeelingKey => feelingId !== 'show-all')
  );
  readonly activeFeelings = computed(() =>
    this.primaryControls().filter((control) => this.activeFeelingIds().includes(control.id))
  );
  readonly isAllMode = computed(() => this.activeFeelingIds().length === 0);
  readonly assemblyMode = computed<'all' | 'focused'>(() => (this.isAllMode() ? 'all' : 'focused'));
  readonly slugMatchCounts = computed(() => {
    const counts = new Map<string, number>();

    for (const feeling of this.activeFeelings()) {
      for (const slug of feeling.relatedSlugs) {
        counts.set(slug, (counts.get(slug) ?? 0) + 1);
      }
    }

    return counts;
  });
  readonly primarySlug = computed(() => {
    if (this.isAllMode()) {
      return null;
    }

    const activeFeelings = this.activeFeelings();
    const counts = this.slugMatchCounts();
    let bestSlug: string | null = null;
    let bestScore = -1;
    let bestRecommendedScore = -1;

    for (const [slug, score] of counts) {
      const recommendedScore = activeFeelings.reduce(
        (total, feeling) => total + (feeling.recommendedSlug === slug ? 1 : 0),
        0
      );

      if (score > bestScore || (score === bestScore && recommendedScore > bestRecommendedScore)) {
        bestSlug = slug;
        bestScore = score;
        bestRecommendedScore = recommendedScore;
      }
    }

    return bestSlug;
  });
  readonly hubTitle = computed(() =>
    this.isAllMode()
      ? 'Operating view'
      : this.activeFeelings().length === 1
        ? this.activeFeelings()[0]!.label.toUpperCase()
        : 'Multi-state view'
  );
  readonly hubIcon = computed(() =>
    this.isAllMode()
      ? 'apps'
      : this.activeFeelings().length === 1
        ? this.activeFeelings()[0]!.icon
        : 'tune'
  );
  readonly hubSubtitle = computed(() =>
    this.isAllMode()
      ? 'Select a state to surface the right tools'
      : this.activeFeelings().length === 1
        ? this.activeFeelings()[0]!.caption
        : `${this.activeFeelings().length} signals selected`
  );
  readonly assemblyTiles = computed<OperatingToolsAssemblyTile[]>(() => {
    const counts = this.slugMatchCounts();
    const primarySlug = this.primarySlug();
    const allMode = this.isAllMode();

    return this.page().items.map((tool) => ({
      id: tool.slug,
      slug: tool.slug,
      title: tool.title,
      icon: tool.icon,
      imageSrc: tool.heroImage,
      summary: tool.summary,
      bodyIntro: tool.body.intro,
      primary: !allMode && primarySlug === tool.slug,
      related: allMode ? true : counts.has(tool.slug),
      faded: allMode ? false : !counts.has(tool.slug)
    }));
  });
  readonly previewTiles = computed(() => {
    const tiles = [...this.assemblyTiles()];

    if (this.isAllMode()) {
      return tiles;
    }

    return tiles
      .filter((tile) => tile.related)
      .sort((left, right) => {
        const leftRank = left.primary ? 0 : 1;
        const rightRank = right.primary ? 0 : 1;

        if (leftRank !== rightRank) {
          return leftRank - rightRank;
        }

        return left.title.localeCompare(right.title);
      });
  });

  isFeelingActive(feelingId: FeelingKey): boolean {
    return this.selectedFeelingIds().includes(feelingId);
  }

  toggleFeeling(feelingId: FeelingKey): void {
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

  openToolPreview(tile: OperatingToolsAssemblyTile): void {
    const tools = this.previewTiles();
    const initialIndex = Math.max(0, tools.findIndex((previewTile) => previewTile.slug === tile.slug));

    this.dialog.open(OperatingToolPreviewDialogComponent, {
      data: {
        tools,
        initialIndex
      },
      maxWidth: '860px',
      width: 'min(860px, calc(100vw - 32px))',
      autoFocus: 'dialog',
      restoreFocus: true
    });
  }
}
