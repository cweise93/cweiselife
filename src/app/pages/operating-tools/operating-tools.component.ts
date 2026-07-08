import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OperatingToolsSelectorComponent } from './operating-tools-selector.component';

const OPERATING_TOOLS_HERO = {
  eyebrow: 'Operating Tools',
  headline: 'Choose the tool for the moment you are actually in.',
  intro:
    'Leadership friction usually shows up as a state before it becomes a plan: activation, avoidance, ambiguity, unclear decisions, or a pattern that keeps repeating. These tools help turn that moment into the next useful move.'
} as const;

@Component({
  selector: 'cw-operating-tools',
  standalone: true,
  imports: [OperatingToolsSelectorComponent],
  templateUrl: './operating-tools.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './operating-tools.component.scss'
})
export class OperatingToolsComponent {
  readonly hero = OPERATING_TOOLS_HERO;
}
