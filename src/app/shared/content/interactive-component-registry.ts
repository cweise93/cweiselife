import { InteractiveComponentKey } from '../../core/content/content.models';

export interface InteractiveComponentDefinition {
  key: InteractiveComponentKey;
  label: string;
  description?: string;
}

export const INTERACTIVE_COMPONENT_REGISTRY: Record<
  InteractiveComponentKey,
  InteractiveComponentDefinition
> = {
  'relationship-value-explorer': {
    key: 'relationship-value-explorer',
    label: 'Relationship-Value Explorer',
    description:
      'Interactive D3 graph for exploring clients, services, employees, and revenue opportunities.'
  }
};

export function isRegisteredInteractiveComponent(
  key: string
): key is InteractiveComponentKey {
  return key in INTERACTIVE_COMPONENT_REGISTRY;
}
