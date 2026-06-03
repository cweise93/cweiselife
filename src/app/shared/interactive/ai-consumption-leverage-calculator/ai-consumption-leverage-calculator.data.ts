export type DeploymentMode = 'hosted' | 'local' | 'hybrid';
export type ProviderKey = 'openai' | 'anthropic' | 'azure-openai';
export type ContractStructure = 'usage-api' | 'seat-based' | 'hybrid-enterprise';
export type UsageProfile = 'light' | 'standard' | 'heavy';
export type CapabilityKey =
  | 'workspaceSeats'
  | 'apiAccess'
  | 'provisionedThroughput'
  | 'contextCaching'
  | 'connectors'
  | 'adminSecurity'
  | 'prioritySupport'
  | 'dataResidency';

export interface ProviderDefinition {
  id: ProviderKey;
  label: string;
  pricingSource: string;
  defaultModel: string;
  inputRatePerMillion: number;
  outputRatePerMillion: number;
  cachedInputRatePerMillion: number;
  defaultSeatPriceMonthly: number;
  defaultIncludedTokensPerSeatMonthly: number;
  defaultPtuRateMonthly: number;
  defaultConnectorPackAnnual: number;
  defaultSecurityUpliftPercent: number;
  defaultSupportUpliftPercent: number;
  defaultResidencyUpliftPercent: number;
}

export interface SelectOption<T extends string | number> {
  value: T;
  label: string;
  hint?: string;
}

export interface UsageProfileDefinition {
  value: UsageProfile;
  label: string;
  promptsPerUserDay: number;
  inputTokensPerPrompt: number;
  outputTokensPerPrompt: number;
  includedTokensPerSeatMonthly: number;
}

export interface CapabilityDefinition {
  key: CapabilityKey;
  label: string;
  description: string;
  icon: string;
  accent: 'blue' | 'teal' | 'violet' | 'amber' | 'green';
}

export const CONTRACT_STRUCTURE_OPTIONS: Array<SelectOption<ContractStructure>> = [
  { value: 'usage-api', label: 'Usage-based API', hint: 'Metered by prompts and tokens.' },
  { value: 'seat-based', label: 'Seat-based workspace', hint: 'Capacity is packaged by user seats.' },
  { value: 'hybrid-enterprise', label: 'Hybrid enterprise', hint: 'Blend seat, usage, and throughput terms.' }
];

export const CONTRACT_TERM_OPTIONS: Array<SelectOption<number>> = [
  { value: 12, label: '12 months' },
  { value: 24, label: '24 months' },
  { value: 36, label: '36 months' }
];

export const USAGE_PROFILE_OPTIONS: UsageProfileDefinition[] = [
  {
    value: 'light',
    label: 'Light',
    promptsPerUserDay: 8,
    inputTokensPerPrompt: 600,
    outputTokensPerPrompt: 250,
    includedTokensPerSeatMonthly: 120000
  },
  {
    value: 'standard',
    label: 'Standard',
    promptsPerUserDay: 20,
    inputTokensPerPrompt: 1200,
    outputTokensPerPrompt: 600,
    includedTokensPerSeatMonthly: 240000
  },
  {
    value: 'heavy',
    label: 'Heavy',
    promptsPerUserDay: 45,
    inputTokensPerPrompt: 2200,
    outputTokensPerPrompt: 1100,
    includedTokensPerSeatMonthly: 460000
  }
];

export const CAPABILITY_DEFINITIONS: CapabilityDefinition[] = [
  {
    key: 'workspaceSeats',
    label: 'Workspace seats',
    description: 'Include named seats with bundled capacity and seat pricing.',
    icon: 'groups',
    accent: 'blue'
  },
  {
    key: 'apiAccess',
    label: 'API access',
    description: 'Model direct token usage rather than only relying on profile defaults.',
    icon: 'api',
    accent: 'teal'
  },
  {
    key: 'provisionedThroughput',
    label: 'Provisioned throughput',
    description: 'Reserve throughput capacity for predictable performance.',
    icon: 'speed',
    accent: 'violet'
  },
  {
    key: 'contextCaching',
    label: 'Context caching',
    description: 'Apply cached-input economics for repeated context.',
    icon: 'database',
    accent: 'green'
  },
  {
    key: 'connectors',
    label: 'Connectors / integrations',
    description: 'Add enterprise connectors and integration packages.',
    icon: 'hub',
    accent: 'amber'
  },
  {
    key: 'adminSecurity',
    label: 'Admin / security controls',
    description: 'Price in policy, governance, and admin-control overhead.',
    icon: 'admin_panel_settings',
    accent: 'blue'
  },
  {
    key: 'prioritySupport',
    label: 'Priority support / SLA',
    description: 'Add support and service-level uplift.',
    icon: 'support_agent',
    accent: 'violet'
  },
  {
    key: 'dataResidency',
    label: 'Data residency',
    description: 'Apply regional deployment and residency uplifts.',
    icon: 'public',
    accent: 'amber'
  }
];

export const PROVIDER_DEFINITIONS: ProviderDefinition[] = [
  {
    id: 'openai',
    label: 'OpenAI',
    pricingSource: 'Public API (pay-as-you-go)',
    defaultModel: 'GPT-4o',
    inputRatePerMillion: 5,
    outputRatePerMillion: 15,
    cachedInputRatePerMillion: 0.75,
    defaultSeatPriceMonthly: 9,
    defaultIncludedTokensPerSeatMonthly: 240000,
    defaultPtuRateMonthly: 2200,
    defaultConnectorPackAnnual: 1800,
    defaultSecurityUpliftPercent: 8,
    defaultSupportUpliftPercent: 10,
    defaultResidencyUpliftPercent: 5
  },
  {
    id: 'anthropic',
    label: 'Anthropic',
    pricingSource: 'Anthropic API pricing',
    defaultModel: 'Claude Sonnet',
    inputRatePerMillion: 3,
    outputRatePerMillion: 15,
    cachedInputRatePerMillion: 0.45,
    defaultSeatPriceMonthly: 8,
    defaultIncludedTokensPerSeatMonthly: 220000,
    defaultPtuRateMonthly: 2100,
    defaultConnectorPackAnnual: 1600,
    defaultSecurityUpliftPercent: 7,
    defaultSupportUpliftPercent: 9,
    defaultResidencyUpliftPercent: 4
  },
  {
    id: 'azure-openai',
    label: 'Azure OpenAI',
    pricingSource: 'Azure-metered deployment',
    defaultModel: 'GPT-4o via Azure',
    inputRatePerMillion: 5.5,
    outputRatePerMillion: 16,
    cachedInputRatePerMillion: 0.85,
    defaultSeatPriceMonthly: 10,
    defaultIncludedTokensPerSeatMonthly: 260000,
    defaultPtuRateMonthly: 2400,
    defaultConnectorPackAnnual: 2200,
    defaultSecurityUpliftPercent: 9,
    defaultSupportUpliftPercent: 11,
    defaultResidencyUpliftPercent: 6
  }
];
