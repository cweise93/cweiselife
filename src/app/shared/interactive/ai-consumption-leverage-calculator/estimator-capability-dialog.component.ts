import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AiConsumptionLeverageCalculatorService,
  CapabilityFieldDefinition,
  ContractEstimatorState
} from './ai-consumption-leverage-calculator.service';
import { CapabilityDefinition } from './ai-consumption-leverage-calculator.data';

export interface EstimatorCapabilityDialogData {
  recordId: string;
  capability: CapabilityDefinition;
  fields: CapabilityFieldDefinition[];
  state: ContractEstimatorState;
}

export interface EstimatorCapabilityDialogResult {
  applied: boolean;
}

@Component({
  selector: 'app-estimator-capability-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  template: `
    <h2 mat-dialog-title>
      <span class="dialog-title">
        <mat-icon>{{ data.capability.icon }}</mat-icon>
        {{ data.capability.label }}
      </span>
    </h2>

    <mat-dialog-content>
      <p class="dialog-description">{{ data.capability.description }}</p>

      <form class="dialog-form" [formGroup]="form">
        @for (field of data.fields; track field.key) {
          <mat-form-field appearance="outline">
            <mat-label>{{ field.label }}</mat-label>
            <input matInput type="number" [formControlName]="field.key" />
            @if (field.suffix) {
              <span matTextSuffix>{{ field.suffix }}</span>
            }
          </mat-form-field>
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
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .dialog-form mat-form-field {
        width: 100%;
      }

      @media (max-width: 720px) {
        .dialog-form {
          grid-template-columns: 1fr;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstimatorCapabilityDialogComponent {
  readonly data = inject<EstimatorCapabilityDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<EstimatorCapabilityDialogComponent>);
  private readonly formBuilder = inject(FormBuilder);
  private readonly workspace = inject(AiConsumptionLeverageCalculatorService);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = this.formBuilder.group(
    Object.fromEntries(this.data.fields.map((field) => [field.key, this.data.state[field.key] as number]))
  );

  constructor() {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.workspace.previewCapabilityConfig(
          this.data.recordId,
          this.data.capability.key,
          value as Partial<ContractEstimatorState>
        );
      });
  }

  close(): void {
    this.dialogRef.close({ applied: false } satisfies EstimatorCapabilityDialogResult);
  }

  apply(): void {
    this.workspace.previewCapabilityConfig(
      this.data.recordId,
      this.data.capability.key,
      this.form.getRawValue() as Partial<ContractEstimatorState>
    );
    this.dialogRef.close({ applied: true } satisfies EstimatorCapabilityDialogResult);
  }
}
