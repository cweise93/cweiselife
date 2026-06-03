import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  effect,
  HostListener,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import * as d3 from 'd3';
import {
  AI_SPEND_LEVER_DEFAULTS,
  AiSpendLeverDefinition,
  AiSpendLeversPrioritizationConfig,
  DEFAULT_BENEFIT_HIGH_TO_LOW,
  DEFAULT_DIFFICULTY_HIGH_TO_LOW
} from './ai-spend-levers-prioritization-map.data';
import { AiSpendLeversPrioritizationMapState } from './ai-spend-levers-prioritization-map.state';

interface LeverPoint extends AiSpendLeverDefinition {
  effortScore: number;
  benefitScore: number;
}

interface ChartLabelPart {
  text: string;
  dy: number;
}

interface ChartPoint extends LeverPoint {
  x: number;
  y: number;
  labelY: number;
  labelParts: ChartLabelPart[];
}

@Component({
  selector: 'app-ai-spend-levers-prioritization-map',
  imports: [CdkDrag, CdkDropList, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './ai-spend-levers-prioritization-map.component.html',
  styleUrl: './ai-spend-levers-prioritization-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiSpendLeversPrioritizationMapComponent {
  readonly title = input('AI Spend Levers Prioritization Map');
  readonly description = input(
    'Rank the seven levers by implementation difficulty and expected benefit, then watch the D3 map update the current quick wins, strategic bets, and deferrals.'
  );
  readonly config = input<Record<string, unknown> | undefined>();

  private readonly state = inject(AiSpendLeversPrioritizationMapState);
  private readonly dimensions = signal({ width: 740, height: 520 });
  private readonly svgRef = viewChild<ElementRef<SVGSVGElement>>('chartSvg');
  private readonly activeDrag = signal<{ id: string; pointerId: number; x: number; y: number } | null>(null);

  readonly parsedConfig = computed<AiSpendLeversPrioritizationConfig>(() => {
    const value = this.config();
    return value && typeof value === 'object' ? (value as AiSpendLeversPrioritizationConfig) : {};
  });

  readonly leverDefinitions = computed<AiSpendLeverDefinition[]>(() => {
    const configLevers = this.parsedConfig().levers ?? [];
    if (!configLevers.length) {
      return AI_SPEND_LEVER_DEFAULTS;
    }

    const byTitle = new Map(AI_SPEND_LEVER_DEFAULTS.map((lever) => [lever.title, lever]));
    return configLevers.map((lever, index) => {
      const fallback = byTitle.get(lever.title) ?? AI_SPEND_LEVER_DEFAULTS[index] ?? AI_SPEND_LEVER_DEFAULTS[0]!;
      return {
        ...fallback,
        ...lever,
        id: lever.id ?? fallback.id,
        sequence: lever.sequence ?? fallback.sequence,
        shortLabel: lever.shortLabel ?? fallback.shortLabel,
        description: lever.description ?? fallback.description,
        icon: lever.icon ?? fallback.icon,
        color: lever.color ?? fallback.color
      };
    });
  });

  readonly leverMap = computed(() => new Map(this.leverDefinitions().map((lever) => [lever.id, lever])));

  readonly difficultyIds = this.state.difficultyIds;
  readonly benefitIds = this.state.benefitIds;
  readonly selectedLeverId = this.state.selectedLeverId;
  readonly layoutMode = computed(() => this.parsedConfig().layout ?? 'full');
  readonly showControls = computed(() => this.layoutMode() === 'full' || this.layoutMode() === 'controls');
  readonly showChart = computed(() => this.layoutMode() === 'full' || this.layoutMode() === 'chart');
  readonly difficultyRankedLevers = computed(() => this.idsToLevers(this.difficultyIds()));
  readonly benefitRankedLevers = computed(() => this.idsToLevers(this.benefitIds()));
  readonly configSignature = computed(() =>
    JSON.stringify({
      levers: this.leverDefinitions().map((lever) => lever.id),
      difficulty: this.parsedConfig().difficultyHighToLow ?? [...DEFAULT_DIFFICULTY_HIGH_TO_LOW],
      benefit: this.parsedConfig().benefitHighToLow ?? [...DEFAULT_BENEFIT_HIGH_TO_LOW]
    })
  );

  readonly points = computed<LeverPoint[]>(() => {
    const levers = this.leverDefinitions();
    const total = levers.length;
    const difficultyOrder = new Map(this.difficultyIds().map((id, index) => [id, index]));
    const benefitOrder = new Map(this.benefitIds().map((id, index) => [id, index]));

    return levers.map((lever) => ({
      ...lever,
      effortScore: total - (difficultyOrder.get(lever.id) ?? total - 1),
      benefitScore: total - (benefitOrder.get(lever.id) ?? total - 1)
    }));
  });

  readonly quickWins = computed(() =>
    this.points()
      .filter((point) => point.effortScore <= 3 && point.benefitScore >= 5)
      .sort((left, right) => right.benefitScore - left.benefitScore || left.effortScore - right.effortScore)
      .map((point) => point.shortLabel)
  );

  readonly strategicBets = computed(() =>
    this.points()
      .filter((point) => point.effortScore >= 4 && point.benefitScore >= 4)
      .sort((left, right) => right.benefitScore - left.benefitScore)
      .map((point) => point.shortLabel)
  );

  readonly deferItems = computed(() =>
    this.points()
      .filter((point) => point.effortScore >= 5 && point.benefitScore <= 3)
      .sort((left, right) => right.effortScore - left.effortScore)
      .map((point) => point.shortLabel)
  );

  readonly xAxisLabel = computed(
    () => this.parsedConfig().xAxisLabel || 'Implementation difficulty'
  );

  readonly yAxisLabel = computed(
    () => this.parsedConfig().yAxisLabel || 'Expected benefit'
  );

  readonly chartGeometry = computed(() => {
    const { width, height } = this.dimensions();
    const margin = { top: 58, right: 36, bottom: 64, left: 64 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const midX = margin.left + plotWidth / 2;
    const midY = margin.top + plotHeight / 2;

    return {
      width,
      height,
      margin,
      plotWidth,
      plotHeight,
      midX,
      midY,
      quadrants: [
        {
          x: margin.left,
          y: margin.top,
          width: plotWidth / 2,
          height: plotHeight / 2,
          fill: 'rgba(34, 197, 94, 0.08)',
          label: 'Quick wins',
          subtitle: 'High benefit · lower difficulty',
          tx: margin.left + 18,
          ty: margin.top + 22
        },
        {
          x: midX,
          y: margin.top,
          width: plotWidth / 2,
          height: plotHeight / 2,
          fill: 'rgba(59, 130, 246, 0.08)',
          label: 'Major projects',
          subtitle: 'High benefit · higher difficulty',
          tx: midX + 18,
          ty: margin.top + 22
        },
        {
          x: margin.left,
          y: midY,
          width: plotWidth / 2,
          height: plotHeight / 2,
          fill: 'rgba(139, 92, 246, 0.06)',
          label: 'Fill-ins',
          subtitle: 'Lower benefit · lower difficulty',
          tx: margin.left + 18,
          ty: midY + plotHeight / 2 - 28
        },
        {
          x: midX,
          y: midY,
          width: plotWidth / 2,
          height: plotHeight / 2,
          fill: 'rgba(249, 115, 22, 0.06)',
          label: 'Defer or reassess',
          subtitle: 'Lower benefit · higher difficulty',
          tx: midX + 18,
          ty: midY + plotHeight / 2 - 28
        }
      ]
    };
  });

  readonly chartPoints = computed<ChartPoint[]>(() => {
    const points = this.points();
    const { width, height, margin } = this.chartGeometry();
    const xScale = d3.scaleLinear().domain([1, 7]).range([margin.left, width - margin.right]);
    const yScale = d3.scaleLinear().domain([1, 7]).range([height - margin.bottom, margin.top]);
    const drag = this.activeDrag();

    return points.map((point) => ({
      ...point,
      x: drag?.id === point.id ? drag.x : xScale(point.effortScore),
      y: drag?.id === point.id ? drag.y : yScale(point.benefitScore),
      labelY: point.shortLabel.includes(' / ') || point.shortLabel.includes(' & ') || point.shortLabel.split(' ').length > 2 ? 42 : 40,
      labelParts: this.buildLabelParts(point.shortLabel)
    }));
  });

  constructor() {
    effect(() => {
      const levers = this.leverDefinitions();
      const difficulty = this.sanitizeOrder(
        this.parsedConfig().difficultyHighToLow ?? [...DEFAULT_DIFFICULTY_HIGH_TO_LOW],
        levers
      );
      const benefit = this.sanitizeOrder(
        this.parsedConfig().benefitHighToLow ?? [...DEFAULT_BENEFIT_HIGH_TO_LOW],
        levers
      );

      this.state.initialize(this.configSignature(), difficulty, benefit);
    });
  }

  resetDefaults(): void {
    const levers = this.leverDefinitions();
    this.difficultyIds.set(this.sanitizeOrder([...DEFAULT_DIFFICULTY_HIGH_TO_LOW], levers));
    this.benefitIds.set(this.sanitizeOrder([...DEFAULT_BENEFIT_HIGH_TO_LOW], levers));
  }

  reorderDifficulty(event: CdkDragDrop<string[]>): void {
    const next = [...this.difficultyIds()];
    moveItemInArray(next, event.previousIndex, event.currentIndex);
    this.difficultyIds.set(next);
  }

  reorderBenefit(event: CdkDragDrop<string[]>): void {
    const next = [...this.benefitIds()];
    moveItemInArray(next, event.previousIndex, event.currentIndex);
    this.benefitIds.set(next);
  }

  highlightLever(id: string | null): void {
    this.state.selectedLeverId.set(id);
  }

  startChartDrag(event: PointerEvent, id: string): void {
    if (!this.showChart()) {
      return;
    }

    const point = this.clientPointToChartPoint(event);
    if (!point) {
      return;
    }

    this.activeDrag.set({ id, pointerId: event.pointerId, ...point });
    this.state.selectedLeverId.set(id);
    (event.currentTarget as SVGElement | null)?.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }

  @HostListener('document:pointermove', ['$event'])
  onDocumentPointerMove(event: PointerEvent): void {
    const drag = this.activeDrag();
    if (!drag || event.pointerId !== drag.pointerId) {
      return;
    }

    const point = this.clientPointToChartPoint(event);
    if (!point) {
      return;
    }

    this.activeDrag.set({ ...drag, ...point });
    this.updateRankingsFromChartPoint(drag.id, point.x, point.y);
    event.preventDefault();
  }

  @HostListener('document:pointerup', ['$event'])
  @HostListener('document:pointercancel', ['$event'])
  onDocumentPointerEnd(event: PointerEvent): void {
    const drag = this.activeDrag();
    if (!drag || event.pointerId !== drag.pointerId) {
      return;
    }

    this.activeDrag.set(null);
  }

  private idsToLevers(ids: string[]): AiSpendLeverDefinition[] {
    const map = this.leverMap();
    return ids.map((id) => map.get(id)).filter((lever): lever is AiSpendLeverDefinition => !!lever);
  }

  private sanitizeOrder(order: string[], levers: AiSpendLeverDefinition[]): string[] {
    const ids = new Set(levers.map((lever) => lever.id));
    const normalized = order.filter((id) => ids.has(id));
    for (const lever of levers) {
      if (!normalized.includes(lever.id)) {
        normalized.push(lever.id);
      }
    }
    return normalized;
  }

  private buildLabelParts(label: string): ChartLabelPart[] {
    const parts = label.includes(' / ')
      ? label.split(' / ')
      : label.includes(' & ')
        ? label.split(' & ')
        : label.split(' ').length > 2
          ? [label.split(' ').slice(0, -1).join(' '), label.split(' ').slice(-1).join(' ')]
          : [label];

    return parts.map((part, index) => ({
      text: index === 0 && parts.length > 1 && label.includes(' & ') ? `${part} &` : part,
      dy: index === 0 ? 0 : 16
    }));
  }

  private clientPointToChartPoint(event: PointerEvent): { x: number; y: number } | null {
    const svg = this.svgRef()?.nativeElement;
    if (!svg) {
      return null;
    }

    const rect = svg.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return null;
    }

    const { width, height, margin } = this.chartGeometry();
    const rawX = ((event.clientX - rect.left) / rect.width) * width;
    const rawY = ((event.clientY - rect.top) / rect.height) * height;

    return {
      x: this.clamp(rawX, margin.left, width - margin.right),
      y: this.clamp(rawY, margin.top, height - margin.bottom)
    };
  }

  private updateRankingsFromChartPoint(id: string, x: number, y: number): void {
    const { width, height, margin } = this.chartGeometry();
    const xScale = d3.scaleLinear().domain([1, 7]).range([margin.left, width - margin.right]);
    const yScale = d3.scaleLinear().domain([1, 7]).range([height - margin.bottom, margin.top]);
    const total = this.leverDefinitions().length;

    const effortScore = this.clamp(Math.round(xScale.invert(x)), 1, total);
    const benefitScore = this.clamp(Math.round(yScale.invert(y)), 1, total);
    const difficultyIndex = total - effortScore;
    const benefitIndex = total - benefitScore;

    this.difficultyIds.set(this.moveIdToIndex(this.difficultyIds(), id, difficultyIndex));
    this.benefitIds.set(this.moveIdToIndex(this.benefitIds(), id, benefitIndex));
  }

  private moveIdToIndex(ids: string[], id: string, targetIndex: number): string[] {
    const next = [...ids];
    const currentIndex = next.indexOf(id);
    if (currentIndex === -1 || currentIndex === targetIndex) {
      return next;
    }

    next.splice(currentIndex, 1);
    next.splice(this.clamp(targetIndex, 0, Math.max(next.length, 0)), 0, id);
    return next;
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
