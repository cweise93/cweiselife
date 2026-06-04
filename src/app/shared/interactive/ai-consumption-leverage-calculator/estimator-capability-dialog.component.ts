import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  EstimatorControlType,
  EstimatorFieldDefinition,
  EstimatorValue,
  SelectOption,
  isRoutingSplitValue,
  isWeightedMetricValue
} from './ai-consumption-leverage-calculator.data';
import {
  AiConsumptionLeverageCalculatorService,
  CardEditorContext,
  CardEditorResult,
  ModelSelectionWarning
} from './ai-consumption-leverage-calculator.service';

export interface EstimatorCapabilityDialogData {
  recordId: string;
  editor: CardEditorContext;
}

@Component({
  selector: 'app-estimator-capability-dialog',
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  template: `
    <h2 mat-dialog-title>
      <span class="dialog-title">
        <mat-icon>tune</mat-icon>
        {{ data.editor.title }}
      </span>
    </h2>

    <mat-dialog-content>
      <p class="dialog-description">{{ data.editor.description }}</p>

      @if (modelSelectionWarning(); as warning) {
        <div class="selection-warning" role="status" aria-live="polite">
          <mat-icon>warning</mat-icon>
          <p>{{ warning.message }}</p>
        </div>
      }

      <form class="dialog-form" [formGroup]="form">
        @for (field of data.editor.fields; track field.key) {
          @if (field.controlType === 'boolean') {
            <mat-checkbox class="dialog-checkbox" [formControlName]="field.key">
              {{ field.label }}
            </mat-checkbox>
          } @else if (field.controlType === 'weightedMetric') {
            <div class="metric-grid">
              <mat-form-field appearance="outline">
                <mat-label>{{ field.label }} value</mat-label>
                <input matInput type="number" [formControlName]="metricValueControlName(field.key)" />
                <span matTextSuffix>%</span>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>{{ field.label }} weight</mat-label>
                <input matInput type="number" [formControlName]="metricWeightControlName(field.key)" />
                <span matTextSuffix>%</span>
              </mat-form-field>
            </div>
          } @else if (field.controlType === 'object') {
            <div class="metric-grid">
              <mat-form-field appearance="outline">
                <mat-label>{{ field.label }} hosted</mat-label>
                <input matInput type="number" [formControlName]="routingControlName(field.key, 'hosted')" />
                <span matTextSuffix>%</span>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>{{ field.label }} hybrid</mat-label>
                <input matInput type="number" [formControlName]="routingControlName(field.key, 'hybrid')" />
                <span matTextSuffix>%</span>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>{{ field.label }} local</mat-label>
                <input matInput type="number" [formControlName]="routingControlName(field.key, 'local')" />
                <span matTextSuffix>%</span>
              </mat-form-field>
            </div>
          } @else if (field.controlType === 'array<string>' || field.controlType === 'textarea') {
            <mat-form-field appearance="outline">
              <mat-label>{{ field.label }}</mat-label>
              <textarea matInput rows="4" [formControlName]="field.key"></textarea>
            </mat-form-field>
          } @else if (useSelect(field)) {
            <mat-form-field appearance="outline">
              <mat-label>{{ field.label }}</mat-label>
              <mat-select [formControlName]="field.key">
                @for (option of fieldOptions(field.key); track option.value) {
                  <mat-option [value]="option.value">{{ option.label }}</mat-option>
                }
              </mat-select>
            </mat-form-field>
          } @else {
            <mat-form-field appearance="outline">
              <mat-label>{{ field.label }}</mat-label>
              <input
                matInput
                [type]="inputType(field.controlType)"
                [formControlName]="field.key"
              />
              @if (suffixFor(field.controlType)) {
                <span matTextSuffix>{{ suffixFor(field.controlType) }}</span>
              }
            </mat-form-field>
          }
        }

        @if (data.editor.kind === 'model-allocation' && data.editor.modelUsageValues?.length) {
          <div class="allocation-block">
            <p class="allocation-title">Model allocation</p>
            @for (usage of data.editor.modelUsageValues; track usage.modelGroupId) {
              <mat-form-field appearance="outline">
                <mat-label>{{ usage.label }}</mat-label>
                <input matInput type="number" [formControlName]="allocationControlName(usage.modelGroupId)" />
                <span matTextSuffix>%</span>
              </mat-form-field>
            }

            <p class="allocation-total" [class.allocation-total--invalid]="allocationTotal() !== 100">
              Allocation total: {{ allocationTotal() }}%
            </p>
          </div>
        }
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="close()">Cancel</button>
      <button mat-flat-button color="primary" type="button" (click)="apply()">Apply</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .dialog-title {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .dialog-title mat-icon {
        color: var(--cw-accent);
      }

      .dialog-description {
        margin: 0 0 18px;
        color: var(--cw-muted);
        line-height: 1.6;
      }

      .dialog-form {
        display: grid;
        gap: 14px;
      }

      .selection-warning {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 10px;
        align-items: start;
        padding: 12px 14px;
        margin-bottom: 16px;
        border: 1px solid color-mix(in srgb, var(--cw-accent) 22%, var(--cw-line));
        border-radius: 14px;
        background: color-mix(in srgb, var(--cw-accent) 6%, var(--cw-panel));
      }

      .selection-warning mat-icon {
        color: var(--cw-accent);
        margin-top: 2px;
      }

      .selection-warning p {
        margin: 0;
        color: var(--cw-ink);
        line-height: 1.5;
      }

      .dialog-form mat-form-field {
        width: 100%;
      }

      .dialog-checkbox {
        margin: 2px 0 4px;
      }

      .metric-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
      }

      .allocation-block {
        display: grid;
        gap: 12px;
        padding-top: 4px;
      }

      .allocation-title {
        margin: 0;
        color: var(--cw-accent);
        font-size: 0.76rem;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .allocation-total {
        margin: 0;
        color: var(--cw-muted);
        font-weight: 700;
      }

      .allocation-total--invalid {
        color: #b42318;
      }

      @media (max-width: 720px) {
        .metric-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstimatorCapabilityDialogComponent {
  readonly data = inject<EstimatorCapabilityDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<EstimatorCapabilityDialogComponent, CardEditorResult | undefined>);
  private readonly formBuilder = inject(FormBuilder);
  private readonly workspace = inject(AiConsumptionLeverageCalculatorService);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = this.formBuilder.group(this.buildControls());

  constructor() {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.workspace.previewEditor(this.data.recordId, this.data.editor, this.buildResult());
    });
  }

  close(): void {
    this.dialogRef.close(undefined);
  }

  apply(): void {
    this.dialogRef.close(this.buildResult());
  }

  fieldOptions(fieldKey: string): SelectOption[] {
    return this.workspace.getFieldOptions(fieldKey, this.data.recordId);
  }

  modelSelectionWarning(): ModelSelectionWarning | null {
    if (this.data.editor.kind !== 'model-group') {
      return null;
    }

    const selectedModelId = String(this.form.get('modelId')?.value ?? this.data.editor.values['modelId'] ?? '');
    return selectedModelId ? this.workspace.getModelSelectionWarning(this.data.recordId, selectedModelId) : null;
  }

  useSelect(field: EstimatorFieldDefinition): boolean {
    return field.controlType === 'select' && this.fieldOptions(field.key).length > 0;
  }

  inputType(controlType: EstimatorControlType): string {
    return controlType === 'date' ? 'date' : controlType === 'text' ? 'text' : 'number';
  }

  suffixFor(controlType: EstimatorControlType): string {
    switch (controlType) {
      case 'percent':
        return '%';
      case 'currency':
      case 'currencyPerMillion':
        return '$';
      case 'multiplier':
        return 'x';
      default:
        return '';
    }
  }

  metricValueControlName(key: string): string {
    return `${key}__value`;
  }

  metricWeightControlName(key: string): string {
    return `${key}__weight`;
  }

  routingControlName(key: string, part: 'hosted' | 'hybrid' | 'local'): string {
    return `${key}__${part}`;
  }

  allocationControlName(modelGroupId: string): string {
    return `allocation__${modelGroupId}`;
  }

  allocationTotal(): number {
    return Math.round(
      (this.data.editor.modelUsageValues ?? []).reduce(
        (sum, usage) => sum + Number(this.form.get(this.allocationControlName(usage.modelGroupId))?.value ?? 0),
        0
      )
    );
  }

  private buildControls(): Record<string, unknown> {
    const controls: Record<string, unknown> = {};

    for (const field of this.data.editor.fields) {
      const currentValue = this.data.editor.values[field.key] ?? null;

      if (field.controlType === 'weightedMetric') {
        const metric = isWeightedMetricValue(currentValue) ? currentValue : { value: 0.5, weight: 0.05 };
        controls[this.metricValueControlName(field.key)] = metric.value * 100;
        controls[this.metricWeightControlName(field.key)] = metric.weight * 100;
        continue;
      }

      if (field.controlType === 'object') {
        const routing = isRoutingSplitValue(currentValue) ? currentValue : { hosted: 1, hybrid: 0, local: 0 };
        controls[this.routingControlName(field.key, 'hosted')] = routing.hosted * 100;
        controls[this.routingControlName(field.key, 'hybrid')] = routing.hybrid * 100;
        controls[this.routingControlName(field.key, 'local')] = routing.local * 100;
        continue;
      }

      if (field.controlType === 'array<string>') {
        controls[field.key] = Array.isArray(currentValue) ? currentValue.join('\n') : '';
        continue;
      }

      if (field.controlType === 'percent') {
        controls[field.key] = typeof currentValue === 'number' ? currentValue * 100 : 0;
        continue;
      }

      controls[field.key] = currentValue;
    }

    for (const usage of this.data.editor.modelUsageValues ?? []) {
      controls[this.allocationControlName(usage.modelGroupId)] = usage.usagePercent * 100;
    }

    return controls;
  }

  private buildResult(): CardEditorResult {
    const raw = this.form.getRawValue() as Record<string, unknown>;
    const values: Record<string, EstimatorValue | null> = {};

    for (const field of this.data.editor.fields) {
      if (field.controlType === 'weightedMetric') {
        values[field.key] = {
          value: this.toFraction(raw[this.metricValueControlName(field.key)]),
          weight: this.toFraction(raw[this.metricWeightControlName(field.key)])
        };
        continue;
      }

      if (field.controlType === 'object') {
        values[field.key] = {
          hosted: this.toFraction(raw[this.routingControlName(field.key, 'hosted')]),
          hybrid: this.toFraction(raw[this.routingControlName(field.key, 'hybrid')]),
          local: this.toFraction(raw[this.routingControlName(field.key, 'local')])
        };
        continue;
      }

      if (field.controlType === 'array<string>') {
        values[field.key] = String(raw[field.key] ?? '')
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean);
        continue;
      }

      if (field.controlType === 'percent') {
        values[field.key] = this.toFraction(raw[field.key]);
        continue;
      }

      if (field.controlType === 'number' || field.controlType === 'currency' || field.controlType === 'currencyPerMillion' || field.controlType === 'multiplier') {
        values[field.key] = Number(raw[field.key] ?? 0);
        continue;
      }

      if (field.controlType === 'boolean') {
        values[field.key] = raw[field.key] === true;
        continue;
      }

      values[field.key] = (raw[field.key] as EstimatorValue | null) ?? null;
    }

    const modelUsageValues = this.data.editor.modelUsageValues?.map((usage) => ({
      ...usage,
      usagePercent: this.toFraction(raw[this.allocationControlName(usage.modelGroupId)])
    }));

    return {
      values,
      modelUsageValues
    };
  }

  private toFraction(value: unknown): number {
    const numeric = Number(value ?? 0);
    if (!Number.isFinite(numeric)) {
      return 0;
    }
    return Math.min(Math.max(numeric / 100, 0), 1);
  }
}
