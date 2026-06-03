import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AiConsumptionLeverageCalculatorService } from './ai-consumption-leverage-calculator.service';

@Component({
  selector: 'app-ai-consumption-leverage-calculator',
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './ai-consumption-leverage-calculator.component.html',
  styleUrl: './ai-consumption-leverage-calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiConsumptionLeverageCalculatorComponent {
  private readonly workspace = inject(AiConsumptionLeverageCalculatorService);

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
  readonly executive = this.workspace.executive;
  readonly providerDefinition = this.workspace.providerDefinition;
  readonly selectedCapabilities = this.workspace.selectedCapabilities;
  readonly capabilityCount = this.workspace.capabilityCount;
  readonly capabilityFields = this.workspace.capabilityFields;

  updateNumber = this.workspace.updateNumber.bind(this.workspace);
  updateEnum = this.workspace.updateEnum.bind(this.workspace);
  toggleCapability = this.workspace.toggleCapability.bind(this.workspace);
  reset = this.workspace.reset.bind(this.workspace);
}
