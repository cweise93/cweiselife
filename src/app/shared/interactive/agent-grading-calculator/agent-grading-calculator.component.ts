import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { AgentGradingWorkspaceService } from './agent-grading-workspace.service';

interface CalculatorDimension {
  key: string;
  label: string;
  question: string;
  scale: string[];
}

interface ScoreBand {
  min: number;
  max: number;
  grade: string;
  posture: string;
}

interface CalculatorConfig {
  dimensions: CalculatorDimension[];
  scoreBands: ScoreBand[];
  hardOverrides: string[];
  classificationBlockers: string[];
}

interface ExportPayload {
  generatedAt: string;
  totalScore: number;
  grade: string;
  posture: string;
  selectedOverrides: string[];
  selectedBlockers: string[];
  blockersPresent: boolean;
  overridesPresent: boolean;
  scores: Array<{
    key: string;
    label: string;
    score: number;
    selectedMeaning: string;
  }>;
}

const EMPTY_CONFIG: CalculatorConfig = {
  dimensions: [],
  scoreBands: [],
  hardOverrides: [],
  classificationBlockers: []
};

@Component({
  selector: 'app-agent-grading-calculator',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  templateUrl: './agent-grading-calculator.component.html',
  styleUrl: './agent-grading-calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgentGradingCalculatorComponent {
  private readonly workspace = inject(AgentGradingWorkspaceService);
  private readonly destroyRef = inject(DestroyRef);
  readonly title = input('Agent Grading Calculator');
  readonly description = input(
    'Score an enterprise AI agent across seven dimensions and review the resulting governance posture.'
  );
  readonly config = input<Record<string, unknown> | undefined>();

  readonly scores = signal<Record<string, number>>({});
  readonly selectedOverrides = signal<Record<string, boolean>>({});
  readonly selectedBlockers = signal<Record<string, boolean>>({});

  readonly parsedConfig = computed<CalculatorConfig>(() => this.normalizeConfig(this.config()));
  readonly dimensions = computed(() => this.parsedConfig().dimensions);
  readonly scoreBands = computed(() => this.parsedConfig().scoreBands);
  readonly hardOverrides = computed(() => this.parsedConfig().hardOverrides);
  readonly classificationBlockers = computed(() => this.parsedConfig().classificationBlockers);
  readonly maxScore = computed(() => this.dimensions().length * 4);
  readonly totalScore = computed(() =>
    this.dimensions().reduce((total, dimension) => total + this.scoreFor(dimension.key), 0)
  );
  readonly scorePercent = computed(() => {
    const max = this.maxScore();
    return max ? (this.totalScore() / max) * 100 : 0;
  });
  readonly completedDimensions = computed(() =>
    this.dimensions().filter((dimension) => this.scores()[dimension.key] !== undefined).length
  );
  readonly scoreBand = computed(
    () =>
      this.scoreBands().find((band) => {
        const total = this.totalScore();
        return total >= band.min && total <= band.max;
      }) ?? null
  );
  readonly activeOverrideLabels = computed(() =>
    this.hardOverrides().filter((label) => this.selectedOverrides()[label])
  );
  readonly activeBlockerLabels = computed(() =>
    this.classificationBlockers().filter((label) => this.selectedBlockers()[label])
  );
  readonly blockersPresent = computed(() => this.activeBlockerLabels().length > 0);
  readonly overridesPresent = computed(() => this.activeOverrideLabels().length > 0);
  readonly requiredEvidence = computed(() =>
    this.dimensions()
      .filter((dimension) => this.scoreFor(dimension.key) <= 2)
      .map((dimension) => `Strengthen evidence for ${dimension.label.toLowerCase()}.`)
  );
  readonly liveStatusText = computed(() => {
    const completed = this.completedDimensions();
    const total = this.dimensions().length;

    if (!total) {
      return 'Configuration unavailable';
    }

    if (!completed) {
      return 'Score updates as you select each dimension';
    }

    if (completed < total) {
      return `${completed} of ${total} dimensions scored`;
    }

    return `All ${total} dimensions scored`;
  });
  readonly gradeCode = computed(() => (this.scoreBand()?.grade.split('—')[0] ?? 'G0').trim());
  readonly gradeTitle = computed(() => {
    const grade = this.scoreBand()?.grade ?? 'Not classified';
    const parts = grade.split('—');
    return (parts[1] ?? parts[0]).trim();
  });
  readonly statusTone = computed(() => {
    const gradeCode = this.gradeCode();
    if (gradeCode.startsWith('G3')) {
      return 'agent-calculator--g3';
    }
    if (gradeCode.startsWith('G2')) {
      return 'agent-calculator--g2';
    }
    if (gradeCode.startsWith('G1')) {
      return 'agent-calculator--g1';
    }
    return 'agent-calculator--g0';
  });
  readonly exportPayload = computed<ExportPayload>(() => ({
    generatedAt: new Date().toISOString(),
    totalScore: this.totalScore(),
    grade: this.scoreBand()?.grade ?? 'Not classified',
    posture: this.scoreBand()?.posture ?? 'No matching posture',
    selectedOverrides: this.activeOverrideLabels(),
    selectedBlockers: this.activeBlockerLabels(),
    blockersPresent: this.blockersPresent(),
    overridesPresent: this.overridesPresent(),
    scores: this.dimensions().map((dimension) => ({
      key: dimension.key,
      label: dimension.label,
      score: this.scoreFor(dimension.key),
      selectedMeaning: dimension.scale[this.scoreFor(dimension.key)] ?? ''
    }))
  }));

  constructor() {
    effect(() => {
      this.workspace.update({
        totalScore: this.totalScore(),
        maxScore: this.maxScore(),
        completedDimensions: this.completedDimensions(),
        totalDimensions: this.dimensions().length,
        grade: this.scoreBand()?.grade ?? 'Not classified',
        gradeCode: this.gradeCode(),
        gradeTitle: this.gradeTitle(),
        posture: this.scoreBand()?.posture ?? 'Choose scores to classify the agent',
        overrideCount: this.activeOverrideLabels().length,
        blockerCount: this.activeBlockerLabels().length,
        overrideLabels: this.activeOverrideLabels(),
        blockerLabels: this.activeBlockerLabels(),
        requiredEvidence: this.requiredEvidence()
      });
      this.workspace.registerExports(() => this.exportJson(), () => this.exportCsv());
    });

    this.destroyRef.onDestroy(() => this.workspace.reset());
  }

  scoreFor(key: string): number {
    return this.scores()[key] ?? 0;
  }

  setScore(key: string, score: number): void {
    this.scores.update((current) => ({ ...current, [key]: score }));
  }

  dimensionIcon(key: string): string {
    const icons: Record<string, string> = {
      operationalMateriality: 'account_tree',
      institutionalKnowledge: 'psychology',
      controlAuditability: 'fact_check',
      costTraceability: 'receipt_long',
      businessValue: 'diamond',
      reliabilityModelRisk: 'verified_user',
      usefulLife: 'update'
    };

    return icons[key] ?? 'insights';
  }

  primaryEvidenceAction(): string {
    if (this.blockersPresent()) {
      return 'Resolve classification blockers before asset-level review.';
    }

    if (this.overridesPresent()) {
      return 'Escalate for finance, audit, security, or executive review.';
    }

    const lowestDimension = [...this.dimensions()].sort((left, right) => this.scoreFor(left.key) - this.scoreFor(right.key))[0];
    if (!lowestDimension) {
      return 'Begin scoring the seven dimensions to identify the next artifact.';
    }

    const nextArtifactMap: Record<string, string> = {
      operationalMateriality: 'Update the agent charter with intended use, owner, and business scope.',
      institutionalKnowledge: 'Document the reusable logic and expert reasoning captured by the agent.',
      controlAuditability: 'Strengthen the control matrix and evidence trail for reviewability.',
      costTraceability: 'Complete the cost ledger and accounting memo before classification.',
      businessValue: 'Quantify the business outcome the agent changes before advancing the grade.',
      reliabilityModelRisk: 'Define monitored thresholds, fallback controls, and review checkpoints.',
      usefulLife: 'Establish useful-life assumptions, review cadence, and retirement triggers.'
    };

    return nextArtifactMap[lowestDimension.key] ?? 'Review the lowest-scoring dimension and add evidence.';
  }

  toggleOverride(label: string, checked: boolean): void {
    this.selectedOverrides.update((current) => ({ ...current, [label]: checked }));
  }

  toggleBlocker(label: string, checked: boolean): void {
    this.selectedBlockers.update((current) => ({ ...current, [label]: checked }));
  }

  exportJson(): void {
    const payload = JSON.stringify(this.exportPayload(), null, 2);
    this.downloadFile('agent-grading-result.json', payload, 'application/json');
  }

  exportCsv(): void {
    const rows = [
      ['dimension_key', 'dimension_label', 'score', 'selected_meaning'],
      ...this.exportPayload().scores.map((item) => [
        item.key,
        item.label,
        String(item.score),
        item.selectedMeaning
      ]),
      [],
      ['total_score', String(this.exportPayload().totalScore)],
      ['grade', this.exportPayload().grade],
      ['posture', this.exportPayload().posture],
      ['overrides', this.exportPayload().selectedOverrides.join(' | ')],
      ['blockers', this.exportPayload().selectedBlockers.join(' | ')]
    ];
    const csv = rows
      .map((row) => row.map((value) => this.escapeCsv(value ?? '')).join(','))
      .join('\n');
    this.downloadFile('agent-grading-result.csv', csv, 'text/csv;charset=utf-8');
  }

  private normalizeConfig(raw: Record<string, unknown> | undefined): CalculatorConfig {
    if (!raw) {
      return EMPTY_CONFIG;
    }

    const dimensions = Array.isArray(raw['dimensions'])
      ? raw['dimensions']
          .map((item) => {
            if (!item || typeof item !== 'object') {
              return null;
            }

            const candidate = item as Record<string, unknown>;
            const scale = Array.isArray(candidate['scale'])
              ? candidate['scale'].filter((entry): entry is string => typeof entry === 'string')
              : [];

            if (
              typeof candidate['key'] !== 'string' ||
              typeof candidate['label'] !== 'string' ||
              typeof candidate['question'] !== 'string' ||
              scale.length !== 5
            ) {
              return null;
            }

            return {
              key: candidate['key'],
              label: candidate['label'],
              question: candidate['question'],
              scale
            } satisfies CalculatorDimension;
          })
          .filter((item): item is CalculatorDimension => item !== null)
      : [];

    const scoreBands = Array.isArray(raw['scoreBands'])
      ? raw['scoreBands']
          .map((item) => {
            if (!item || typeof item !== 'object') {
              return null;
            }

            const candidate = item as Record<string, unknown>;
            if (
              typeof candidate['min'] !== 'number' ||
              typeof candidate['max'] !== 'number' ||
              typeof candidate['grade'] !== 'string' ||
              typeof candidate['posture'] !== 'string'
            ) {
              return null;
            }

            return {
              min: candidate['min'],
              max: candidate['max'],
              grade: candidate['grade'],
              posture: candidate['posture']
            } satisfies ScoreBand;
          })
          .filter((item): item is ScoreBand => item !== null)
      : [];

    const hardOverrides = Array.isArray(raw['hardOverrides'])
      ? raw['hardOverrides'].filter((item): item is string => typeof item === 'string')
      : [];
    const classificationBlockers = Array.isArray(raw['classificationBlockers'])
      ? raw['classificationBlockers'].filter((item): item is string => typeof item === 'string')
      : [];

    return {
      dimensions,
      scoreBands,
      hardOverrides,
      classificationBlockers
    };
  }

  private escapeCsv(value: string): string {
    const escaped = value.replace(/"/g, '""');
    return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
  }

  private downloadFile(filename: string, content: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }
}
