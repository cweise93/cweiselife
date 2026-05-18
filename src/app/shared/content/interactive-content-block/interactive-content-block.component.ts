import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { INTERACTIVE_COMPONENT_REGISTRY, isRegisteredInteractiveComponent } from '../interactive-component-registry';
import { RelationshipValueExplorerComponent } from '../../interactive/relationship-value-explorer/relationship-value-explorer.component';

@Component({
  selector: 'app-interactive-content-block',
  imports: [RelationshipValueExplorerComponent],
  templateUrl: './interactive-content-block.component.html',
  styleUrl: './interactive-content-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveContentBlockComponent {
  readonly componentKey = input.required<string>();
  readonly fallback = input<string | undefined>();
  readonly title = input<string | undefined>();
  readonly description = input<string | undefined>();

  readonly registeredComponent = computed(() => {
    const key = this.componentKey();
    return isRegisteredInteractiveComponent(key)
      ? INTERACTIVE_COMPONENT_REGISTRY[key]
      : null;
  });

  readonly fallbackTitle = computed(() => this.title() || 'Interactive component unavailable');
  readonly fallbackDescription = computed(
    () => this.description() || this.fallback() || 'This interactive artifact is not available yet.'
  );
}
