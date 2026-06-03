export interface AiSpendLeverDefinition {
  id: string;
  sequence: number;
  title: string;
  shortLabel: string;
  description: string;
  icon: string;
  color: string;
}

export interface AiSpendLeversPrioritizationConfig {
  levers?: Array<Partial<AiSpendLeverDefinition> & Pick<AiSpendLeverDefinition, 'title'>>;
  difficultyHighToLow?: string[];
  benefitHighToLow?: string[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  layout?: 'full' | 'controls' | 'chart';
}

export const AI_SPEND_LEVER_DEFAULTS: AiSpendLeverDefinition[] = [
  {
    id: 'prompt-reuse',
    sequence: 1,
    title: 'Prompt and Instruction Reuse',
    shortLabel: 'Prompt Reuse',
    description: 'Reuse what already works so teams stop rebuilding prompts and rerunning avoidable retries.',
    icon: 'chat',
    color: '#22c55e'
  },
  {
    id: 'context-management',
    sequence: 2,
    title: 'Context Management',
    shortLabel: 'Context Management',
    description: 'Right-size inputs so the model receives only the context that actually improves relevance.',
    icon: 'description',
    color: '#06b6d4'
  },
  {
    id: 'model-routing',
    sequence: 3,
    title: 'Model Routing',
    shortLabel: 'Model Routing',
    description: 'Match task difficulty to the right model instead of defaulting every workload to the most expensive path.',
    icon: 'alt_route',
    color: '#8b5cf6'
  },
  {
    id: 'workflow-design',
    sequence: 4,
    title: 'Workflow Design',
    shortLabel: 'Workflow Design',
    description: 'Remove unnecessary AI calls by improving the workflow itself and pushing deterministic work out of the model.',
    icon: 'account_tree',
    color: '#f59e0b'
  },
  {
    id: 'caching-memory',
    sequence: 5,
    title: 'Caching and Memory Layers',
    shortLabel: 'Caching & Memory',
    description: 'Avoid paying repeatedly for the same summary, lookup, or reusable reference work.',
    icon: 'database',
    color: '#f97316'
  },
  {
    id: 'local-hybrid',
    sequence: 6,
    title: 'Local or Hybrid Execution',
    shortLabel: 'Local / Hybrid',
    description: 'Use the right environment for the right workload when privacy, repeatability, or economics justify it.',
    icon: 'cloud_sync',
    color: '#3b82f6'
  },
  {
    id: 'planning-budgeting',
    sequence: 7,
    title: 'Proper Planning and Budgeting',
    shortLabel: 'Planning & Budgeting',
    description: 'Forecast, set thresholds, and manage AI usage proactively instead of absorbing invoice surprise.',
    icon: 'event_note',
    color: '#ec4899'
  }
];

export const DEFAULT_DIFFICULTY_HIGH_TO_LOW = [
  'planning-budgeting',
  'local-hybrid',
  'caching-memory',
  'model-routing',
  'context-management',
  'workflow-design',
  'prompt-reuse'
] as const;

export const DEFAULT_BENEFIT_HIGH_TO_LOW = [
  'caching-memory',
  'context-management',
  'prompt-reuse',
  'model-routing',
  'workflow-design',
  'local-hybrid',
  'planning-budgeting'
] as const;
