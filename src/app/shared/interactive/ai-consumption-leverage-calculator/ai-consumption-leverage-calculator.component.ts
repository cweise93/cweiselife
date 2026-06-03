import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { AiConsumptionLeverageCalculatorService } from './ai-consumption-leverage-calculator.service';
import { CapabilityDefinition, CapabilityKey } from './ai-consumption-leverage-calculator.data';
import {
  EstimatorCapabilityDialogComponent,
  EstimatorCapabilityDialogResult
} from './estimator-capability-dialog.component';

interface RemoveProviderDialogData {
  title: string;
}

@Component({
  selector: 'app-remove-provider-dialog',
  standalone: true,
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
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    NgTemplateOutlet,
    MatSelectModule,
    MatStepperModule
  ],
  templateUrl: './ai-consumption-leverage-calculator.component.html',
  styleUrl: './ai-consumption-leverage-calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiConsumptionLeverageCalculatorComponent {
  private readonly workspace = inject(AiConsumptionLeverageCalculatorService);
  private readonly dialog = inject(MatDialog);
  private readonly capabilityMap = new Map(this.workspace.capabilities.map((capability) => [capability.key, capability]));

  readonly title = input('AI Contract Cost Estimator');
  readonly description = input(
    'Start with vendor and contract structure, then reveal only the pricing drivers your deal actually needs.'
  );
  readonly config = input<Record<string, unknown> | undefined>();

  readonly providers = this.workspace.providers;
  readonly contractStructureOptions = this.workspace.contractStructureOptions;
  readonly contractTermOptions = this.workspace.contractTermOptions;
  readonly usageProfileOptions = this.workspace.usageProfileOptions;
  readonly capabilities = this.workspace.capabilities;
  readonly primaryRecord = this.workspace.primaryRecord;
  readonly additionalRecords = this.workspace.additionalRecords;
  readonly estimateSummaries = this.workspace.estimateSummaries;
  readonly stepIndices = signal<Record<string, number>>({});

  readonly stepDefinitions = [
    {
      label: 'Core',
      title: 'Start Here.',
      description: 'Choose the components that apply to this contract.'
    },
    {
      label: 'Environment',
      title: 'Infrastructure.',
      description: 'Refine your environment.'
    },
    {
      label: 'Users',
      title: 'User Behavior.',
      description: 'Model your user behavior.'
    },
    {
      label: 'Technical',
      title: 'Technical Details',
      description: 'Tune deployment and weights.'
    }
  ] as const;
  reset = this.workspace.reset.bind(this.workspace);

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

  selectedCapabilities(recordId: string) {
    return this.workspace.getSelectedCapabilities(recordId);
  }

  estimateSummary(recordId: string) {
    return this.workspace.getEstimateSummary(recordId);
  }

  infrastructureCapabilities(recordId: string) {
    return this.capabilitiesFor(recordId, ['provisionedThroughput', 'contextCaching', 'connectors', 'adminSecurity', 'dataResidency']);
  }

  behaviorCapabilities(recordId: string) {
    return this.capabilitiesFor(recordId, ['workspaceSeats', 'apiAccess']);
  }

  pricingCapabilities(recordId: string) {
    return this.capabilitiesFor(recordId, ['prioritySupport']);
  }

  updateNumber(recordId: string, key: Parameters<AiConsumptionLeverageCalculatorService['updateNumber']>[1], value: number): void {
    this.workspace.updateNumber(recordId, key, value);
  }

  updateEnum(recordId: string, key: Parameters<AiConsumptionLeverageCalculatorService['updateEnum']>[1], value: any): void {
    this.workspace.updateEnum(recordId, key, value);
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

  isCapabilitySelected(recordId: string, key: CapabilityKey): boolean {
    return this.recordState(recordId).includedCapabilities[key];
  }

  onCapabilityToggle(recordId: string, capability: CapabilityDefinition, checked: boolean): void {
    if (!checked) {
      this.workspace.setCapabilityEnabled(recordId, capability.key, false);
      return;
    }

    this.openCapabilityDialog(recordId, capability, true);
  }

  editCapability(recordId: string, capability: CapabilityDefinition, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    this.openCapabilityDialog(recordId, capability, false);
  }

  private openCapabilityDialog(recordId: string, capability: CapabilityDefinition, isNewSelection: boolean): void {
    const snapshot = this.workspace.snapshotState(recordId);

    if (isNewSelection) {
      this.workspace.setCapabilityEnabled(recordId, capability.key, true);
    }

    const dialogRef = this.dialog.open(EstimatorCapabilityDialogComponent, {
      data: {
        recordId,
        capability,
        fields: this.workspace.getCapabilityFields(capability.key),
        state: this.workspace.snapshotState(recordId)
      },
      autoFocus: false,
      width: '640px',
      maxWidth: '96vw',
      panelClass: 'cw-framework-dialog'
    });

    dialogRef.afterClosed().subscribe((result?: EstimatorCapabilityDialogResult) => {
      if (result?.applied) {
        return;
      }

      this.workspace.restoreState(recordId, snapshot);
    });
  }

  private capabilitiesFor(recordId: string, keys: CapabilityKey[]): CapabilityDefinition[] {
    return keys
      .map((key) => this.capabilityMap.get(key))
      .filter((capability): capability is CapabilityDefinition => Boolean(capability));
  }

  private ensureStepIndex(recordId: string): void {
    if (this.stepIndices()[recordId] !== undefined) {
      return;
    }

    this.stepIndices.update((current) => ({ ...current, [recordId]: 0 }));
  }
}
