import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { AiConsumptionLeverageCalculatorService, SurfaceCardViewModel } from './ai-consumption-leverage-calculator.service';
import { EstimatorLevel, FIELD_DEFINITION_MAP, isWeightedMetricValue } from './ai-consumption-leverage-calculator.data';
import {
  EstimatorCapabilityDialogComponent,
  EstimatorCapabilityDialogData
} from './estimator-capability-dialog.component';

interface RemoveProviderDialogData {
  title: string;
}

type TechnicalPreviewKey = 'performance' | 'cost-efficiency' | 'reliability' | 'governance-risk';

interface TechnicalPreviewAttribute {
  label: string;
  score: number;
  scoreLabel: string;
}

const TECHNICAL_PREVIEW_FIELDS: Record<TechnicalPreviewKey, string[]> = {
  performance: [
    'taskPerformanceUsefulness',
    'generalizationTaskTransfer',
    'instructionAdherence',
    'transparencyExplainability'
  ],
  'cost-efficiency': [
    'modelComplexitySophistication',
    'inferenceCostEfficiency',
    'scalabilityThroughputFit',
    'latencyResponsiveness',
    'workflowIntegrationEfficiency'
  ],
  reliability: ['robustnessReliability', 'stabilityConsistency', 'adaptabilityFineTunability'],
  'governance-risk': ['biasFairnessSafety', 'operationalMaintenanceBurden', 'trainingAdaptationBurden']
};

@Component({
  selector: 'app-remove-provider-dialog',
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Remove provider estimate?</h2>
    <mat-dialog-content>
      <p>
        Remove <strong>{{ data.title }}</strong> from the combined estimate totals?
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="dialogRef.close(false)">Cancel</button>
      <button mat-flat-button color="warn" type="button" (click)="dialogRef.close(true)">Remove from estimate</button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoveProviderDialogComponent {
  readonly dialogRef = inject(MatDialogRef<RemoveProviderDialogComponent, boolean>);
  readonly data = inject<RemoveProviderDialogData>(MAT_DIALOG_DATA);
}

@Component({
  selector: 'app-ai-consumption-leverage-calculator',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    NgTemplateOutlet
  ],
  templateUrl: './ai-consumption-leverage-calculator.component.html',
  styleUrl: './ai-consumption-leverage-calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiConsumptionLeverageCalculatorComponent {
  private readonly workspace = inject(AiConsumptionLeverageCalculatorService);
  private readonly dialog = inject(MatDialog);

  readonly title = input('AI Contract Cost Estimator');
  readonly description = input(
    'Start with vendor and contract structure, then reveal only the pricing drivers your deal actually needs.'
  );
  readonly config = input<Record<string, unknown> | undefined>();

  readonly providers = this.workspace.providers;
  readonly contractStructureOptions = this.workspace.contractStructureOptions;
  readonly usageProfileOptions = this.workspace.usageProfileOptions;
  readonly primaryRecord = this.workspace.primaryRecord;
  readonly additionalRecords = this.workspace.additionalRecords;
  readonly estimateSummaries = this.workspace.estimateSummaries;
  readonly stepIndices = signal<Record<string, number>>({});
  readonly technicalPreviewGroups = signal<Record<string, TechnicalPreviewKey>>({});

  readonly stepDefinitions: Array<{ label: EstimatorLevel; title: string; description: string }> = [
    {
      label: 'Core',
      title: 'Start Here.',
      description: 'Choose the commercial and capability assumptions that apply to this contract.'
    },
    {
      label: 'Environment',
      title: 'Infrastructure.',
      description: 'Refine hosting, cloud, residency, and network assumptions.'
    },
    {
      label: 'Users',
      title: 'User Behavior.',
      description: 'Model demand by cohort instead of averaging everyone together.'
    },
    {
      label: 'Technical',
      title: 'Technical Details',
      description: 'Tune models, allocations, and operational realism.'
    }
  ];

  readonly reset = this.workspace.reset.bind(this.workspace);

  constructor() {
    const primaryId = this.primaryRecord()?.id;
    if (primaryId) {
      this.ensureStepIndex(primaryId);
    }
  }

  stepIndex(recordId: string): number {
    return this.stepIndices()[recordId] ?? 0;
  }

  setStep(recordId: string, index: number): void {
    this.stepIndices.update((current) => ({ ...current, [recordId]: index }));
  }

  nextStep(recordId: string): void {
    this.setStep(recordId, Math.min(this.stepIndex(recordId) + 1, this.stepDefinitions.length - 1));
  }

  previousStep(recordId: string): void {
    this.setStep(recordId, Math.max(this.stepIndex(recordId) - 1, 0));
  }

  recordState(recordId: string) {
    return this.workspace.getRecordState(recordId);
  }

  cardsFor(recordId: string, level: EstimatorLevel): SurfaceCardViewModel[] {
    return this.workspace.getStepCards(recordId, level);
  }

  technicalModelCards(recordId: string): SurfaceCardViewModel[] {
    return this.cardsFor(recordId, 'Technical').filter((card) => card.kind === 'model-group');
  }

  technicalAddModelCard(recordId: string): SurfaceCardViewModel | null {
    return this.cardsFor(recordId, 'Technical').find((card) => card.cardKey === 'add-model') ?? null;
  }

  technicalPreviewCards(recordId: string): SurfaceCardViewModel[] {
    return this.cardsFor(recordId, 'Technical').filter((card) =>
      ['performance', 'cost-efficiency', 'reliability', 'governance-risk'].includes(card.cardKey)
    );
  }

  technicalSecondaryCards(recordId: string): SurfaceCardViewModel[] {
    return this.cardsFor(recordId, 'Technical').filter(
      (card) =>
        card.kind !== 'model-group' &&
        card.cardKey !== 'add-model' &&
        !['performance', 'cost-efficiency', 'reliability', 'governance-risk'].includes(card.cardKey)
    );
  }

  technicalPreviewGroup(recordId: string): TechnicalPreviewKey {
    const available = this.technicalPreviewCards(recordId).map((card) => card.cardKey as TechnicalPreviewKey);
    const preferred = this.technicalPreviewGroups()[recordId];
    if (preferred && available.includes(preferred)) {
      return preferred;
    }
    return available[0] ?? 'performance';
  }

  setTechnicalPreviewGroup(recordId: string, key: TechnicalPreviewKey): void {
    this.technicalPreviewGroups.update((current) => ({ ...current, [recordId]: key }));
  }

  technicalPreviewAttributes(recordId: string): TechnicalPreviewAttribute[] {
    const state = this.recordState(recordId);
    const group = this.technicalPreviewGroup(recordId);
    return (TECHNICAL_PREVIEW_FIELDS[group] ?? []).map((fieldKey) => {
      const value = state.values[fieldKey];
      const score = isWeightedMetricValue(value) ? Math.round(Math.min(Math.max(value.value, 0), 1) * 100) : 50;
      return {
        label: FIELD_DEFINITION_MAP.get(fieldKey)?.label ?? fieldKey,
        score,
        scoreLabel: this.technicalScoreLabel(score)
      };
    });
  }

  technicalRemainingAttributes(recordId: string): number {
    const total = Object.values(TECHNICAL_PREVIEW_FIELDS).reduce((sum, items) => sum + items.length, 0);
    return Math.max(total - this.technicalPreviewAttributes(recordId).length, 0);
  }

  technicalPreviewCard(recordId: string): SurfaceCardViewModel | null {
    const key = this.technicalPreviewGroup(recordId);
    return this.technicalPreviewCards(recordId).find((card) => card.cardKey === key) ?? null;
  }

  technicalPreviewCardTitle(recordId: string): string {
    return this.technicalPreviewCard(recordId)?.title ?? 'Model attributes';
  }

  technicalRoleLabel(recordId: string, card: SurfaceCardViewModel): string {
    const value = this.modelCardValue(recordId, card, 'routingRole');
    const options = this.workspace.getFieldOptions('routingRole', recordId);
    return options.find((option) => option.value === value)?.label ?? String(value || 'Primary');
  }

  technicalRoleTone(recordId: string, card: SurfaceCardViewModel): string {
    const role = String(this.modelCardValue(recordId, card, 'routingRole') || 'primary');
    return role;
  }

  technicalDeploymentRange(recordId: string, card: SurfaceCardViewModel): string {
    return String(this.modelCardValue(recordId, card, 'deploymentRangeLabel') || 'Model range');
  }

  technicalDeploymentSummary(recordId: string, card: SurfaceCardViewModel): string {
    const deployed = Number(this.modelCardValue(recordId, card, 'deploymentQuantity') || 0);
    return `${deployed} deployed`;
  }

  technicalModelNote(recordId: string, card: SurfaceCardViewModel): string {
    const usageShare = Math.round(Number(this.modelCardValue(recordId, card, 'usagePercent') || 0) * 100);
    const costSource = String(this.modelCardValue(recordId, card, 'costSource') || '');
    return costSource === 'contractedRate'
      ? `Contracted pricing • ${usageShare}% share`
      : `${usageShare}% of routed usage`;
  }

  technicalScoreTrack(score: number): string {
    return `${Math.min(Math.max(score, 0), 100)}%`;
  }

  validationIssues(recordId: string, level: EstimatorLevel) {
    return this.workspace.getValidationIssues(recordId, level);
  }

  updateQuickEstimate(recordId: string, key: string, value: unknown): void {
    this.workspace.updateQuickEstimate(recordId, key, value as never);
  }

  addAdditionalProvider(sourceRecordId: string): void {
    const newId = this.workspace.addProviderRecord(sourceRecordId);
    this.ensureStepIndex(newId);
  }

  removeProvider(recordId: string): void {
    const summary = this.estimateSummary(recordId);
    const dialogRef = this.dialog.open(RemoveProviderDialogComponent, {
      data: { title: summary?.title ?? 'this provider' },
      autoFocus: false,
      width: '420px',
      maxWidth: '92vw',
      panelClass: 'cw-framework-dialog'
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }

      this.workspace.removeProviderRecord(recordId);
      this.stepIndices.update((current) => {
        const next = { ...current };
        delete next[recordId];
        return next;
      });
    });
  }

  estimateSummary(recordId: string) {
    return this.workspace.estimateSummaries().find((summary) => summary.id === recordId) ?? null;
  }

  onCardToggle(recordId: string, card: SurfaceCardViewModel, checked: boolean): void {
    this.workspace.toggleCard(recordId, card.cardKey, checked);
    if (checked && card.detailAvailable) {
      this.openCardEditor(recordId, card, () => this.workspace.toggleCard(recordId, card.cardKey, false));
    }
  }

  openCard(recordId: string, card: SurfaceCardViewModel, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();

    if (card.kind === 'action') {
      if (card.cardKey === 'add-user-group') {
        const userGroupId = this.workspace.addUserGroup(recordId);
        const targetCard = this.cardsFor(recordId, 'Users').find((item) => item.userGroupId === userGroupId);
        if (targetCard) {
          this.openCardEditor(recordId, targetCard, () => this.workspace.removeUserGroup(recordId, userGroupId));
        }
        return;
      }

      if (card.cardKey === 'add-model') {
        const modelGroupId = this.workspace.addModelGroup(recordId);
        const targetCard = this.cardsFor(recordId, 'Technical').find((item) => item.modelGroupId === modelGroupId);
        if (targetCard) {
          this.openCardEditor(recordId, targetCard, () => this.workspace.removeModelGroup(recordId, modelGroupId));
        }
      }
      return;
    }

    let revertSelection: (() => void) | undefined;
    if (card.optional && !card.selected) {
      this.workspace.toggleCard(recordId, card.cardKey, true);
      revertSelection = () => this.workspace.toggleCard(recordId, card.cardKey, false);
    }

    if (card.detailAvailable) {
      this.openCardEditor(recordId, card, revertSelection);
    }
  }

  removeCardItem(recordId: string, card: SurfaceCardViewModel, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (card.userGroupId) {
      this.workspace.removeUserGroup(recordId, card.userGroupId);
      return;
    }

    if (card.modelGroupId) {
      this.workspace.removeModelGroup(recordId, card.modelGroupId);
    }
  }

  private modelCardValue(recordId: string, card: SurfaceCardViewModel, key: string): unknown {
    const group = this.recordState(recordId).modelGroups.find((item) => item.id === card.modelGroupId);
    return group?.values[key] ?? null;
  }

  private technicalScoreLabel(score: number): string {
    if (score >= 90) {
      return 'Very high';
    }
    if (score >= 72) {
      return 'High';
    }
    if (score >= 55) {
      return 'Medium';
    }
    if (score >= 35) {
      return 'Moderate';
    }
    return 'Low';
  }

  private openCardEditor(recordId: string, card: SurfaceCardViewModel, onCancel?: () => void): void {
    const editor = this.workspace.buildEditor(recordId, card);
    if (!editor) {
      return;
    }
    const snapshot = this.workspace.snapshotRecordState(recordId);

    const dialogRef = this.dialog.open(EstimatorCapabilityDialogComponent, {
      data: {
        recordId,
        editor
      } satisfies EstimatorCapabilityDialogData,
      autoFocus: false,
      width: '760px',
      maxWidth: '96vw',
      panelClass: 'cw-framework-dialog'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        if (snapshot) {
          this.workspace.restoreRecordState(recordId, snapshot);
        }
        onCancel?.();
        return;
      }

      this.workspace.applyEditor(recordId, editor, result);
    });
  }

  private ensureStepIndex(recordId: string): void {
    if (this.stepIndices()[recordId] !== undefined) {
      return;
    }

    this.stepIndices.update((current) => ({ ...current, [recordId]: 0 }));
  }
}
