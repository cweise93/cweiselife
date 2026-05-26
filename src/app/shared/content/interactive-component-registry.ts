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
  },
  'agent-grading-calculator': {
    key: 'agent-grading-calculator',
    label: 'Agent Grading Calculator',
    description:
      'Interactive scoring tool for classifying enterprise AI agents by materiality, evidence, and governance posture.'
  }
};

export function isRegisteredInteractiveComponent(
  key: string
): key is InteractiveComponentKey {
  return key in INTERACTIVE_COMPONENT_REGISTRY;
}
