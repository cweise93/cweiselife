import componentJson from './config/component.json';
import fieldValueAndMappingJson from './config/field_value_and_mapping.json';

export type EstimatorLevel = 'Core' | 'Environment' | 'Users' | 'Technical';
export type EstimatorControlType =
  | 'array<string>'
  | 'boolean'
  | 'currency'
  | 'currencyPerMillion'
  | 'date'
  | 'multiplier'
  | 'number'
  | 'object'
  | 'percent'
  | 'select'
  | 'text'
  | 'textarea'
  | 'weightedMetric';

export type PrimitiveValue = boolean | number | string;
export type RoutingSplit = Record<'hosted' | 'hybrid' | 'local', number>;
export type WeightedMetricValue = { value: number; weight: number };
export type EstimatorValue = PrimitiveValue | PrimitiveValue[] | RoutingSplit | WeightedMetricValue;
export type SelectOptionValue = number | string;

export interface SelectOption<T extends SelectOptionValue = SelectOptionValue> {
  value: T;
  label: string;
  hint?: string;
}

export interface EstimatorFieldDefinition {
  key: string;
  level: EstimatorLevel;
  label: string;
  defaultValue: EstimatorValue | null;
  controlType: EstimatorControlType;
  mathematicalImpact: string;
  dependsOn: string[];
  feeds: string[];
  affectsTotals: string[];
  signalrPublish: boolean;
}

export interface EstimatorCardDefinition {
  key: string;
  level: EstimatorLevel;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  fields: string[];
  optional: boolean;
  detailOnly: boolean;
  actionKind?: 'add-model' | 'add-user-group';
  dynamicKind?: 'model-group' | 'user-group';
  toggleKey?: string;
}

export interface VendorModelDefinition {
  id: string;
  label: string;
  inputTokenPrice: number;
  outputTokenPrice: number;
  cachedInputTokenPrice: number;
}

export interface VendorDefinition {
  id: string;
  label: string;
  pricingSourceUrls: string[];
  lastVerifiedDate: string;
  supportedContractStructures: string[];
  supportedCapabilities: string[];
  defaultRegion: string;
  defaultCurrency: string;
  seatPricePerUserPerMonth: number;
  throughputUnitCost: number;
  models: VendorModelDefinition[];
}

export interface ModelCatalogEntry {
  id: string;
  label: string;
  optionLabel: string;
  commercialVendorId: string;
  modelProviderLabel: string;
  catalogSource: 'direct' | 'azure-foundry';
  inputTokenPrice: number;
  outputTokenPrice: number;
  cachedInputTokenPrice: number;
}

export interface UsageProfileDefinition {
  value: string;
  label: string;
  defaultPromptRate: number;
  defaultInputTokensPerPrompt: number;
  defaultOutputTokensPerPrompt: number;
  defaultWorkdaysPerYear: number;
  defaultActiveUserRate: number;
}

interface RawCardDefinition {
  level: EstimatorLevel;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  fields: string[];
}

interface RawFieldDefinition {
  key: string;
  level: EstimatorLevel;
  defaultValue: EstimatorValue | null;
  controlType: EstimatorControlType;
  mathematicalImpact: string;
  dependsOn?: string[];
  feeds?: string[];
  affectsTotals?: string[];
  signalrPublish?: boolean;
}

const rawCards = (componentJson as { calculatorConfigCards: RawCardDefinition[] }).calculatorConfigCards;
const rawFieldMapping = fieldValueAndMappingJson as {
  calculatorStateModel: { totals: string[]; derivedNodes: string[] };
  fields: RawFieldDefinition[];
};

const FIELD_LABEL_OVERRIDES: Record<string, string> = {
  vendorId: 'Vendor',
  vendorDisplayName: 'Vendor display name',
  pricingSourceUrls: 'Pricing source URLs',
  lastVerifiedDate: 'Last verified date',
  supportedContractStructures: 'Supported contract structures',
  supportedCapabilities: 'Supported capabilities',
  defaultRegion: 'Default region',
  defaultCurrency: 'Default currency',
  customPricingOverrideEnabled: 'Custom pricing override',
  contractStructure: 'Contract structure',
  billingModel: 'Billing model',
  termMonths: 'Contract term',
  annualCommitment: 'Annual commitment',
  minimumSpend: 'Minimum spend',
  includedCapacity: 'Included capacity',
  overageModel: 'Overage model',
  renewalAssumption: 'Renewal assumption',
  usageProfile: 'Usage profile',
  defaultPromptRate: 'Prompts per user per day',
  defaultInputTokensPerPrompt: 'Input tokens per prompt',
  defaultOutputTokensPerPrompt: 'Output tokens per prompt',
  defaultWorkdaysPerYear: 'Workdays per year',
  defaultActiveUserRate: 'Default active user rate',
  customProfileEnabled: 'Custom profile',
  deploymentMode: 'Deployment mode',
  hostedPercent: 'Hosted traffic share',
  hybridPercent: 'Hybrid traffic share',
  localPercent: 'Local traffic share',
  fallbackMode: 'Fallback mode',
  regionStrategy: 'Region strategy',
  singleTenantRequired: 'Single tenant required',
  multiTenantAllowed: 'Multi-tenant allowed',
  managedServiceLevel: 'Managed service level',
  vendorHostedIncluded: 'Vendor hosted included',
  hostedUpliftPercent: 'Hosting uplift',
  cloudProvider: 'Cloud provider',
  cloudSku: 'Cloud SKU',
  managedPlatformFee: 'Managed platform fee',
  cloudCommitmentCredit: 'Cloud commitment credit',
  cloudSupportTier: 'Cloud support tier',
  throughputEnabled: 'Provisioned throughput enabled',
  throughputUnitType: 'Throughput unit type',
  unitsPurchased: 'Units purchased',
  unitCost: 'Unit cost',
  reservedHoursPerMonth: 'Reserved hours per month',
  overflowRate: 'Overflow rate',
  scalingBufferPercent: 'Scaling buffer',
  residencyRequired: 'Residency required',
  allowedRegions: 'Allowed regions',
  primaryRegion: 'Primary region',
  secondaryRegion: 'Secondary region',
  residencyUpliftPercent: 'Residency uplift',
  crossRegionReplicationRequired: 'Cross-region replication',
  securityPackageEnabled: 'Security package enabled',
  adminOverheadPercent: 'Admin overhead',
  auditLoggingCost: 'Audit logging cost',
  policyGovernanceCost: 'Policy and governance cost',
  identityIntegrationCost: 'Identity integration cost',
  securityReviewFrequency: 'Security review frequency',
  hybridEnabled: 'Hybrid routing enabled',
  networkEgressCost: 'Network egress cost',
  privateConnectivityCost: 'Private connectivity cost',
  routingSplit: 'Routing split',
  latencySensitiveTrafficPercent: 'Latency-sensitive traffic share',
  hybridManagementOverhead: 'Hybrid management overhead',
  groupName: 'Group name',
  rangeLabel: 'Range label',
  userCount: 'User count',
  promptsPerUserPerDay: 'Prompts per user per day',
  inputTokensPerPrompt: 'Input tokens per prompt',
  outputTokensPerPrompt: 'Output tokens per prompt',
  activeDaysPerYear: 'Active days per year',
  modelAssignment: 'Model assignment',
  tokenAllowancePerUser: 'Token allowance per user',
  toolUseRate: 'Tool use rate',
  startIndex: 'Start index',
  endIndex: 'End index',
  usagePattern: 'Usage pattern',
  departmentLabel: 'Department label',
  tokenAllowanceStrategy: 'Token allowance strategy',
  grantPolicy: 'Grant policy',
  grantUnit: 'Grant unit',
  grantAmount: 'Grant amount',
  resetCycle: 'Reset cycle',
  poolingEnabled: 'Pooling enabled',
  overageBehavior: 'Overage behavior',
  unusedCarryoverPolicy: 'Unused carryover policy',
  activeUserPercent: 'Active user rate',
  activeDaysPerMonth: 'Active days per month',
  seasonalityFactor: 'Seasonality factor',
  peakPeriodMultiplier: 'Peak period multiplier',
  idlePeriodMultiplier: 'Idle period multiplier',
  adoptionRampMonths: 'Adoption ramp months',
  modelId: 'Model',
  modelLabel: 'Model label',
  deploymentRangeLabel: 'Deployment range',
  deploymentQuantity: 'Deployment quantity',
  routingRole: 'Routing role',
  usagePercent: 'Usage allocation',
  primaryUseCases: 'Primary use cases',
  fallbackTarget: 'Fallback target',
  costSource: 'Cost source',
  enabled: 'Enabled',
  modelCatalogSelection: 'Model catalog selection',
  roleTag: 'Role tag',
  fallbackOrder: 'Fallback order',
  enforceHundredPercentTotal: 'Enforce 100% total',
  autoNormalize: 'Auto-normalize allocations',
  overflowAssignment: 'Overflow assignment',
  manualPriorityOrder: 'Manual priority order',
  escalationEnabled: 'Escalation enabled',
  fallbackModelId: 'Fallback model',
  escalationThreshold: 'Escalation threshold',
  retryOnFailure: 'Retry on failure',
  escalationPercent: 'Escalation share',
  humanReviewTrigger: 'Human review trigger',
  taskPerformanceUsefulness: 'Task performance / usefulness',
  generalizationTaskTransfer: 'Generalization / task transfer',
  instructionAdherence: 'Instruction adherence',
  transparencyExplainability: 'Transparency / explainability',
  modelComplexitySophistication: 'Model complexity / sophistication',
  trainingAdaptationBurden: 'Training / adaptation burden',
  inferenceCostEfficiency: 'Inference cost efficiency',
  scalabilityThroughputFit: 'Scalability / throughput fit',
  robustnessReliability: 'Robustness / reliability',
  biasFairnessSafety: 'Bias / fairness / safety',
  adaptabilityFineTunability: 'Adaptability / fine-tunability',
  latencyResponsiveness: 'Latency / responsiveness',
  stabilityConsistency: 'Stability / consistency',
  operationalMaintenanceBurden: 'Operational maintenance burden',
  workflowIntegrationEfficiency: 'Workflow integration efficiency',
  inputTokenPrice: 'Input token price',
  outputTokenPrice: 'Output token price',
  cachedInputTokenPrice: 'Cached input token price',
  seatPricePerUserPerMonth: 'Seat price per user per month',
  throughputUnitCost: 'Throughput unit cost'
};

const DETAIL_ONLY_TITLES = new Set([
  'Task performance / usefulness',
  'Generalization / task transfer',
  'Instruction adherence',
  'Transparency / explainability',
  'Model complexity / sophistication',
  'Training / adaptation burden',
  'Inference cost efficiency',
  'Scalability / throughput fit',
  'Robustness / reliability',
  'Bias / fairness / safety',
  'Adaptability / fine-tunability',
  'Latency / responsiveness',
  'Stability / consistency',
  'Operational maintenance burden',
  'Workflow integration efficiency'
]);

const OPTIONAL_CARD_TOGGLES: Record<string, string> = {
  'context-caching': 'contextCachingEnabled',
  'connectors-integrations': 'connectorsIntegrationsEnabled',
  'priority-support-sla': 'prioritySupportSlaEnabled',
  'provisioned-throughput': 'throughputEnabled',
  'data-residency': 'residencyRequired',
  'security-admin-overhead': 'securityPackageEnabled',
  'hybrid-network': 'hybridEnabled',
  'workspace-seats': 'workspaceSeatsEnabled',
  'api-access': 'apiAccessEnabled'
};

const CARD_TITLE_FIELD_OVERRIDES: Record<string, string[]> = {
  vendor: ['vendorId'],
  'workspace-seats': ['seatPricePerUserPerMonth', 'includedCapacity'],
  'api-access': ['inputTokenPrice', 'outputTokenPrice', 'cachedInputTokenPrice'],
  'context-caching': ['cachedInputTokenPrice'],
  'connectors-integrations': [],
  'priority-support-sla': ['cloudSupportTier'],
  'model-deployment-group': ['modelId', 'deploymentQuantity', 'routingRole', 'usagePercent', 'fallbackTarget', 'costSource', 'enabled'],
  'model-usage-allocation': ['enforceHundredPercentTotal', 'autoNormalize', 'overflowAssignment', 'manualPriorityOrder'],
  'fallback-escalation-path': ['escalationEnabled', 'fallbackModelId', 'escalationThreshold', 'retryOnFailure', 'escalationPercent', 'humanReviewTrigger']
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function normalizeSemanticCardKey(title: string): string {
  const base = slugify(title);
  if (base.includes('security') && base.includes('admin')) {
    return 'admin-security';
  }
  return base;
}

function humanizeKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (value) => value.toUpperCase());
}

function buildCardDefinition(card: RawCardDefinition): EstimatorCardDefinition {
  const key = slugify(card.title);
  const actionKind =
    key === 'add-user-group' ? 'add-user-group' :
    key === 'add-model' ? 'add-model' :
    undefined;
  const dynamicKind =
    key.endsWith('users-group') || key === 'add-user-group' ? 'user-group' :
    key === 'model-deployment-group' || key === 'add-model' ? 'model-group' :
    undefined;

  return {
    ...card,
    key,
    fields: CARD_TITLE_FIELD_OVERRIDES[key] ?? card.fields,
    optional: Boolean(OPTIONAL_CARD_TOGGLES[key]),
    detailOnly: DETAIL_ONLY_TITLES.has(card.title),
    actionKind,
    dynamicKind,
    toggleKey: OPTIONAL_CARD_TOGGLES[key]
  };
}

const nonCoreSemanticKeys = new Set(
  rawCards
    .filter((card) => card.level !== 'Core')
    .map((card) => normalizeSemanticCardKey(card.title))
);

const syntheticCoreCards: RawCardDefinition[] = [
  {
    level: 'Core',
    title: 'Workspace seats',
    subtitle: 'Include named seats with bundled capacity',
    icon: 'groups',
    description: 'Represents packaged seat pricing and any bundled capacity included with the workspace contract.',
    fields: CARD_TITLE_FIELD_OVERRIDES['workspace-seats']
  },
  {
    level: 'Core',
    title: 'API access',
    subtitle: 'Direct token consumption path',
    icon: 'api',
    description: 'Uses direct token pricing when API usage is part of the deal structure.',
    fields: CARD_TITLE_FIELD_OVERRIDES['api-access']
  },
  {
    level: 'Core',
    title: 'Provisioned throughput',
    subtitle: 'Reserved throughput capacity',
    icon: 'speed',
    description: 'Reserved capacity for predictable performance rather than pure pay-as-you-go usage.',
    fields: []
  },
  {
    level: 'Core',
    title: 'Context caching',
    subtitle: 'Reused context at a lower cost shape',
    icon: 'database',
    description: 'Applies cached input economics when repeated prompt context can be reused.',
    fields: CARD_TITLE_FIELD_OVERRIDES['context-caching']
  },
  {
    level: 'Core',
    title: 'Connectors / integrations',
    subtitle: 'Connected workflow footprint',
    icon: 'hub',
    description: 'Turns on connector-related pricing and workflow realism assumptions when integrations are part of the deal.',
    fields: CARD_TITLE_FIELD_OVERRIDES['connectors-integrations']
  },
  {
    level: 'Core',
    title: 'Admin / security controls',
    subtitle: 'Governance and control surface',
    icon: 'shield',
    description: 'Adds governance, policy, and operational control assumptions to the estimate.',
    fields: []
  },
  {
    level: 'Core',
    title: 'Priority support / SLA',
    subtitle: 'Commercial support posture',
    icon: 'support_agent',
    description: 'Models support posture when premium response commitments or named support are expected.',
    fields: CARD_TITLE_FIELD_OVERRIDES['priority-support-sla']
  },
  {
    level: 'Core',
    title: 'Data residency',
    subtitle: 'Region and sovereignty requirements',
    icon: 'public',
    description: 'Adds residency-driven pricing and deployment requirements when regional constraints matter.',
    fields: []
  }
];

const mergedCoreCards = [
  ...rawCards.filter((card) => card.level === 'Core'),
  ...syntheticCoreCards.filter((card) => !nonCoreSemanticKeys.has(normalizeSemanticCardKey(card.title)))
];

const mergedRawCards = [
  ...mergedCoreCards,
  ...rawCards.filter((card) => card.level !== 'Core')
];

export const CALCULATOR_CONFIG_CARDS = mergedRawCards.map(buildCardDefinition);
export const CARD_DEFINITION_MAP = new Map(CALCULATOR_CONFIG_CARDS.map((card) => [card.key, card]));

export const FIELD_DEFINITIONS = rawFieldMapping.fields.map<EstimatorFieldDefinition>((field) => ({
  key: field.key,
  level: field.level,
  label: FIELD_LABEL_OVERRIDES[field.key] ?? humanizeKey(field.key),
  defaultValue: field.defaultValue ?? null,
  controlType: field.controlType,
  mathematicalImpact: field.mathematicalImpact,
  dependsOn: field.dependsOn ?? [],
  feeds: field.feeds ?? [],
  affectsTotals: field.affectsTotals ?? [],
  signalrPublish: field.signalrPublish ?? false
}));
export const FIELD_DEFINITION_MAP = new Map(FIELD_DEFINITIONS.map((field) => [field.key, field]));
export const CALCULATOR_TOTAL_KEYS = [...rawFieldMapping.calculatorStateModel.totals];
export const CALCULATOR_DERIVED_NODE_KEYS = [...rawFieldMapping.calculatorStateModel.derivedNodes];

export const VENDOR_DEFINITIONS: VendorDefinition[] = [
  {
    id: 'openai',
    label: 'OpenAI',
    pricingSourceUrls: ['https://openai.com/api/pricing/'],
    lastVerifiedDate: '2026-06-03',
    supportedContractStructures: ['workspaceSeats', 'usageBasedApi', 'provisionedThroughput', 'hybridEnterprise'],
    supportedCapabilities: [
      'workspaceSeats',
      'apiAccess',
      'provisionedThroughput',
      'contextCaching',
      'connectorsIntegrations',
      'prioritySupportSla'
    ],
    defaultRegion: 'us',
    defaultCurrency: 'USD',
    seatPricePerUserPerMonth: 25,
    throughputUnitCost: 2,
    models: [
      { id: 'gpt-4o', label: 'GPT-4o', inputTokenPrice: 5, outputTokenPrice: 15, cachedInputTokenPrice: 0.5 },
      { id: 'gpt-4o-mini', label: 'GPT-4o mini', inputTokenPrice: 0.6, outputTokenPrice: 2.4, cachedInputTokenPrice: 0.06 },
      { id: 'gpt-4.1-mini', label: 'GPT-4.1 mini', inputTokenPrice: 1.5, outputTokenPrice: 6, cachedInputTokenPrice: 0.15 },
      { id: 'o4-mini', label: 'o4-mini', inputTokenPrice: 3, outputTokenPrice: 12, cachedInputTokenPrice: 0.3 }
    ]
  },
  {
    id: 'anthropic',
    label: 'Anthropic',
    pricingSourceUrls: [
      'https://docs.anthropic.com/en/docs/about-claude/pricing',
      'https://www.anthropic.com/pricing'
    ],
    lastVerifiedDate: '2026-06-03',
    supportedContractStructures: ['workspaceSeats', 'usageBasedApi', 'hybridEnterprise'],
    supportedCapabilities: ['workspaceSeats', 'apiAccess', 'contextCaching', 'connectorsIntegrations', 'prioritySupportSla'],
    defaultRegion: 'us',
    defaultCurrency: 'USD',
    seatPricePerUserPerMonth: 22,
    throughputUnitCost: 2.25,
    models: [
      { id: 'claude-sonnet-4', label: 'Claude Sonnet 4', inputTokenPrice: 3, outputTokenPrice: 15, cachedInputTokenPrice: 0.4 },
      { id: 'claude-3.7-sonnet', label: 'Claude 3.7 Sonnet', inputTokenPrice: 3, outputTokenPrice: 15, cachedInputTokenPrice: 0.4 },
      { id: 'claude-3.5-haiku', label: 'Claude 3.5 Haiku', inputTokenPrice: 1, outputTokenPrice: 5, cachedInputTokenPrice: 0.1 }
    ]
  },
  {
    id: 'azure-openai',
    label: 'Azure OpenAI',
    pricingSourceUrls: ['https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/'],
    lastVerifiedDate: '2026-06-03',
    supportedContractStructures: ['workspaceSeats', 'usageBasedApi', 'provisionedThroughput', 'hybridEnterprise'],
    supportedCapabilities: [
      'workspaceSeats',
      'apiAccess',
      'provisionedThroughput',
      'contextCaching',
      'connectorsIntegrations',
      'adminSecurityControls',
      'dataResidency',
      'prioritySupportSla'
    ],
    defaultRegion: 'us-east',
    defaultCurrency: 'USD',
    seatPricePerUserPerMonth: 28,
    throughputUnitCost: 2.5,
    models: [
      {
        id: 'gpt-4o-azure',
        label: 'GPT-4o via Azure',
        inputTokenPrice: 5.5,
        outputTokenPrice: 16,
        cachedInputTokenPrice: 0.6
      },
      { id: 'gpt-4.1-mini-azure', label: 'GPT-4.1 mini via Azure', inputTokenPrice: 1.75, outputTokenPrice: 6.5, cachedInputTokenPrice: 0.18 }
    ]
  },
  {
    id: 'azure-foundry',
    label: 'Azure AI Foundry',
    pricingSourceUrls: [
      'https://learn.microsoft.com/azure/foundry/concepts/foundry-models-overview',
      'https://learn.microsoft.com/azure/machine-learning/foundry-models-overview?view=azureml-api-2',
      'https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure'
    ],
    lastVerifiedDate: '2026-06-03',
    supportedContractStructures: ['workspaceSeats', 'usageBasedApi', 'provisionedThroughput', 'hybridEnterprise'],
    supportedCapabilities: [
      'workspaceSeats',
      'apiAccess',
      'provisionedThroughput',
      'contextCaching',
      'connectorsIntegrations',
      'adminSecurityControls',
      'dataResidency',
      'prioritySupportSla'
    ],
    defaultRegion: 'us-east',
    defaultCurrency: 'USD',
    seatPricePerUserPerMonth: 30,
    throughputUnitCost: 2.7,
    models: [
      { id: 'phi-4-azure', label: 'Phi-4 (Azure AI Foundry)', inputTokenPrice: 1.2, outputTokenPrice: 4.5, cachedInputTokenPrice: 0.12 },
      {
        id: 'claude-sonnet-4-azure',
        label: 'Claude Sonnet 4 (Azure AI Foundry)',
        inputTokenPrice: 3.5,
        outputTokenPrice: 16,
        cachedInputTokenPrice: 0.35
      },
      {
        id: 'llama-3.3-70b-instruct-azure',
        label: 'Llama 3.3 70B Instruct (Azure AI Foundry)',
        inputTokenPrice: 0.9,
        outputTokenPrice: 3.6,
        cachedInputTokenPrice: 0.09
      }
    ]
  }
];

function catalogModel(entry: ModelCatalogEntry): ModelCatalogEntry {
  return entry;
}

export const MODEL_CATALOG: ModelCatalogEntry[] = [
  catalogModel({
    id: 'gpt-4o',
    label: 'GPT-4o',
    optionLabel: 'GPT-4o',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 5,
    outputTokenPrice: 15,
    cachedInputTokenPrice: 0.5
  }),
  catalogModel({
    id: 'gpt-4o-mini',
    label: 'GPT-4o mini',
    optionLabel: 'GPT-4o mini',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 0.6,
    outputTokenPrice: 2.4,
    cachedInputTokenPrice: 0.06
  }),
  catalogModel({
    id: 'gpt-4.1',
    label: 'GPT-4.1',
    optionLabel: 'GPT-4.1',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 2,
    outputTokenPrice: 8,
    cachedInputTokenPrice: 0.2
  }),
  catalogModel({
    id: 'gpt-4.1-mini',
    label: 'GPT-4.1 mini',
    optionLabel: 'GPT-4.1 mini',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 1.5,
    outputTokenPrice: 6,
    cachedInputTokenPrice: 0.15
  }),
  catalogModel({
    id: 'gpt-4.1-nano',
    label: 'GPT-4.1 nano',
    optionLabel: 'GPT-4.1 nano',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 0.4,
    outputTokenPrice: 1.6,
    cachedInputTokenPrice: 0.04
  }),
  catalogModel({
    id: 'o3',
    label: 'o3',
    optionLabel: 'o3',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 10,
    outputTokenPrice: 40,
    cachedInputTokenPrice: 1
  }),
  catalogModel({
    id: 'o3-pro',
    label: 'o3-pro',
    optionLabel: 'o3-pro',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 20,
    outputTokenPrice: 80,
    cachedInputTokenPrice: 2
  }),
  catalogModel({
    id: 'o4-mini',
    label: 'o4-mini',
    optionLabel: 'o4-mini',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 3,
    outputTokenPrice: 12,
    cachedInputTokenPrice: 0.3
  }),
  catalogModel({
    id: 'gpt-5',
    label: 'GPT-5',
    optionLabel: 'GPT-5',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 12,
    outputTokenPrice: 48,
    cachedInputTokenPrice: 1.2
  }),
  catalogModel({
    id: 'gpt-5-mini',
    label: 'GPT-5 mini',
    optionLabel: 'GPT-5 mini',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 4,
    outputTokenPrice: 16,
    cachedInputTokenPrice: 0.4
  }),
  catalogModel({
    id: 'gpt-5-nano',
    label: 'GPT-5 nano',
    optionLabel: 'GPT-5 nano',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 1,
    outputTokenPrice: 4,
    cachedInputTokenPrice: 0.1
  }),
  catalogModel({
    id: 'gpt-image-1',
    label: 'GPT-image-1',
    optionLabel: 'GPT-image-1',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 8,
    outputTokenPrice: 24,
    cachedInputTokenPrice: 0.8
  }),
  catalogModel({
    id: 'text-embedding-3-large',
    label: 'text-embedding-3-large',
    optionLabel: 'text-embedding-3-large',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 0.13,
    outputTokenPrice: 0.13,
    cachedInputTokenPrice: 0.01
  }),
  catalogModel({
    id: 'text-embedding-3-small',
    label: 'text-embedding-3-small',
    optionLabel: 'text-embedding-3-small',
    commercialVendorId: 'openai',
    modelProviderLabel: 'OpenAI',
    catalogSource: 'direct',
    inputTokenPrice: 0.02,
    outputTokenPrice: 0.02,
    cachedInputTokenPrice: 0.002
  }),
  catalogModel({
    id: 'claude-opus-4',
    label: 'Claude Opus 4',
    optionLabel: 'Claude Opus 4',
    commercialVendorId: 'anthropic',
    modelProviderLabel: 'Anthropic',
    catalogSource: 'direct',
    inputTokenPrice: 15,
    outputTokenPrice: 75,
    cachedInputTokenPrice: 1.5
  }),
  catalogModel({
    id: 'claude-sonnet-4',
    label: 'Claude Sonnet 4',
    optionLabel: 'Claude Sonnet 4',
    commercialVendorId: 'anthropic',
    modelProviderLabel: 'Anthropic',
    catalogSource: 'direct',
    inputTokenPrice: 3,
    outputTokenPrice: 15,
    cachedInputTokenPrice: 0.4
  }),
  catalogModel({
    id: 'claude-3.7-sonnet',
    label: 'Claude 3.7 Sonnet',
    optionLabel: 'Claude 3.7 Sonnet',
    commercialVendorId: 'anthropic',
    modelProviderLabel: 'Anthropic',
    catalogSource: 'direct',
    inputTokenPrice: 3,
    outputTokenPrice: 15,
    cachedInputTokenPrice: 0.4
  }),
  catalogModel({
    id: 'claude-3.5-haiku',
    label: 'Claude 3.5 Haiku',
    optionLabel: 'Claude 3.5 Haiku',
    commercialVendorId: 'anthropic',
    modelProviderLabel: 'Anthropic',
    catalogSource: 'direct',
    inputTokenPrice: 1,
    outputTokenPrice: 5,
    cachedInputTokenPrice: 0.1
  }),
  catalogModel({
    id: 'gpt-4o-azure',
    label: 'GPT-4o',
    optionLabel: 'GPT-4o (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 5.5,
    outputTokenPrice: 16,
    cachedInputTokenPrice: 0.6
  }),
  catalogModel({
    id: 'gpt-4o-mini-azure',
    label: 'GPT-4o mini',
    optionLabel: 'GPT-4o mini (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 0.75,
    outputTokenPrice: 2.6,
    cachedInputTokenPrice: 0.07
  }),
  catalogModel({
    id: 'gpt-4.1-azure',
    label: 'GPT-4.1',
    optionLabel: 'GPT-4.1 (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 2.2,
    outputTokenPrice: 8.5,
    cachedInputTokenPrice: 0.22
  }),
  catalogModel({
    id: 'gpt-4.1-mini-azure',
    label: 'GPT-4.1 mini',
    optionLabel: 'GPT-4.1 mini (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.75,
    outputTokenPrice: 6.5,
    cachedInputTokenPrice: 0.18
  }),
  catalogModel({
    id: 'o3-azure',
    label: 'o3',
    optionLabel: 'o3 (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 10.5,
    outputTokenPrice: 41,
    cachedInputTokenPrice: 1.05
  }),
  catalogModel({
    id: 'o4-mini-azure',
    label: 'o4-mini',
    optionLabel: 'o4-mini (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 3.2,
    outputTokenPrice: 12.5,
    cachedInputTokenPrice: 0.32
  }),
  catalogModel({
    id: 'gpt-5-azure',
    label: 'GPT-5',
    optionLabel: 'GPT-5 (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 12.5,
    outputTokenPrice: 49,
    cachedInputTokenPrice: 1.25
  }),
  catalogModel({
    id: 'gpt-5-mini-azure',
    label: 'GPT-5 mini',
    optionLabel: 'GPT-5 mini (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 4.2,
    outputTokenPrice: 16.5,
    cachedInputTokenPrice: 0.42
  }),
  catalogModel({
    id: 'gpt-image-1-azure',
    label: 'GPT-image-1',
    optionLabel: 'GPT-image-1 (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 8.2,
    outputTokenPrice: 24.5,
    cachedInputTokenPrice: 0.82
  }),
  catalogModel({
    id: 'model-router-azure',
    label: 'model-router',
    optionLabel: 'model-router (Azure OpenAI)',
    commercialVendorId: 'azure-openai',
    modelProviderLabel: 'Azure OpenAI',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 6,
    outputTokenPrice: 18,
    cachedInputTokenPrice: 0.6
  }),
  catalogModel({
    id: 'claude-opus-4-azure',
    label: 'Claude Opus 4',
    optionLabel: 'Claude Opus 4 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Anthropic via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 15.5,
    outputTokenPrice: 76,
    cachedInputTokenPrice: 1.55
  }),
  catalogModel({
    id: 'claude-sonnet-4-azure',
    label: 'Claude Sonnet 4',
    optionLabel: 'Claude Sonnet 4 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Anthropic via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 3.5,
    outputTokenPrice: 16,
    cachedInputTokenPrice: 0.35
  }),
  catalogModel({
    id: 'llama-4-maverick-17b-128e-instruct-fp8-azure',
    label: 'Llama 4 Maverick 17B 128E Instruct FP8',
    optionLabel: 'Llama 4 Maverick 17B 128E Instruct FP8 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Meta via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.3,
    outputTokenPrice: 5.2,
    cachedInputTokenPrice: 0.13
  }),
  catalogModel({
    id: 'llama-4-scout-17b-16e-instruct-azure',
    label: 'Llama 4 Scout 17B 16E Instruct',
    optionLabel: 'Llama 4 Scout 17B 16E Instruct (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Meta via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.1,
    outputTokenPrice: 4.4,
    cachedInputTokenPrice: 0.11
  }),
  catalogModel({
    id: 'llama-3.3-70b-instruct-azure',
    label: 'Llama 3.3 70B Instruct',
    optionLabel: 'Llama 3.3 70B Instruct (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Meta via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 0.9,
    outputTokenPrice: 3.6,
    cachedInputTokenPrice: 0.09
  }),
  catalogModel({
    id: 'llama-3.1-405b-instruct-azure',
    label: 'Llama 3.1 405B Instruct',
    optionLabel: 'Llama 3.1 405B Instruct (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Meta via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 2.1,
    outputTokenPrice: 8.4,
    cachedInputTokenPrice: 0.21
  }),
  catalogModel({
    id: 'llama-3.1-70b-instruct-azure',
    label: 'Llama 3.1 70B Instruct',
    optionLabel: 'Llama 3.1 70B Instruct (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Meta via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 0.8,
    outputTokenPrice: 3.2,
    cachedInputTokenPrice: 0.08
  }),
  catalogModel({
    id: 'phi-4-azure',
    label: 'Phi-4',
    optionLabel: 'Phi-4 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Microsoft via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.2,
    outputTokenPrice: 4.5,
    cachedInputTokenPrice: 0.12
  }),
  catalogModel({
    id: 'phi-4-reasoning-azure',
    label: 'Phi-4 reasoning',
    optionLabel: 'Phi-4 reasoning (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Microsoft via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.6,
    outputTokenPrice: 6.4,
    cachedInputTokenPrice: 0.16
  }),
  catalogModel({
    id: 'phi-4-mini-reasoning-azure',
    label: 'Phi-4 mini reasoning',
    optionLabel: 'Phi-4 mini reasoning (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Microsoft via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 0.8,
    outputTokenPrice: 3.2,
    cachedInputTokenPrice: 0.08
  }),
  catalogModel({
    id: 'mai-ds-r1-azure',
    label: 'MAI-DS-R1',
    optionLabel: 'MAI-DS-R1 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Microsoft via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 2.4,
    outputTokenPrice: 9.6,
    cachedInputTokenPrice: 0.24
  }),
  catalogModel({
    id: 'deepseek-v3.1-azure',
    label: 'DeepSeek-V3.1',
    optionLabel: 'DeepSeek-V3.1 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'DeepSeek via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.7,
    outputTokenPrice: 6.8,
    cachedInputTokenPrice: 0.17
  }),
  catalogModel({
    id: 'deepseek-r1-0528-azure',
    label: 'DeepSeek-R1-0528',
    optionLabel: 'DeepSeek-R1-0528 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'DeepSeek via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.9,
    outputTokenPrice: 7.6,
    cachedInputTokenPrice: 0.19
  }),
  catalogModel({
    id: 'mistral-large-3-azure',
    label: 'Mistral Large 3',
    optionLabel: 'Mistral Large 3 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Mistral via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 2.8,
    outputTokenPrice: 11.2,
    cachedInputTokenPrice: 0.28
  }),
  catalogModel({
    id: 'mistral-small-3-azure',
    label: 'Mistral Small 3',
    optionLabel: 'Mistral Small 3 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Mistral via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1,
    outputTokenPrice: 4,
    cachedInputTokenPrice: 0.1
  }),
  catalogModel({
    id: 'mistral-document-ai-2505-azure',
    label: 'mistral-document-ai-2505',
    optionLabel: 'mistral-document-ai-2505 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Mistral via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.8,
    outputTokenPrice: 7.2,
    cachedInputTokenPrice: 0.18
  }),
  catalogModel({
    id: 'command-r-plus-08-2024-azure',
    label: 'Command R+ 08-2024',
    optionLabel: 'Command R+ 08-2024 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Cohere via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 2.2,
    outputTokenPrice: 8.8,
    cachedInputTokenPrice: 0.22
  }),
  catalogModel({
    id: 'command-a-azure',
    label: 'Command A',
    optionLabel: 'Command A (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Cohere via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.7,
    outputTokenPrice: 6.8,
    cachedInputTokenPrice: 0.17
  }),
  catalogModel({
    id: 'grok-4-azure',
    label: 'Grok 4',
    optionLabel: 'Grok 4 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'xAI via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 6,
    outputTokenPrice: 24,
    cachedInputTokenPrice: 0.6
  }),
  catalogModel({
    id: 'grok-4-fast-reasoning-azure',
    label: 'Grok 4 fast reasoning',
    optionLabel: 'Grok 4 fast reasoning (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'xAI via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 4.5,
    outputTokenPrice: 18,
    cachedInputTokenPrice: 0.45
  }),
  catalogModel({
    id: 'grok-code-fast-1-azure',
    label: 'grok-code-fast-1',
    optionLabel: 'grok-code-fast-1 (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'xAI via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 3.5,
    outputTokenPrice: 14,
    cachedInputTokenPrice: 0.35
  }),
  catalogModel({
    id: 'flux-1-kontext-pro-azure',
    label: 'FLUX.1-Kontext-pro',
    optionLabel: 'FLUX.1-Kontext-pro (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Black Forest Labs via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 4,
    outputTokenPrice: 16,
    cachedInputTokenPrice: 0.4
  }),
  catalogModel({
    id: 'flux-1.1-pro-azure',
    label: 'FLUX-1.1-pro',
    optionLabel: 'FLUX-1.1-pro (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Black Forest Labs via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 4.2,
    outputTokenPrice: 16.8,
    cachedInputTokenPrice: 0.42
  }),
  catalogModel({
    id: 'nvidia-nemotron-4-340b-instruct-azure',
    label: 'Nemotron 4 340B Instruct',
    optionLabel: 'Nemotron 4 340B Instruct (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'NVIDIA via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 2.6,
    outputTokenPrice: 10.4,
    cachedInputTokenPrice: 0.26
  }),
  catalogModel({
    id: 'gemma-3-27b-it-azure',
    label: 'Gemma 3 27B IT',
    optionLabel: 'Gemma 3 27B IT (Azure AI Foundry)',
    commercialVendorId: 'azure-foundry',
    modelProviderLabel: 'Google via Azure AI Foundry',
    catalogSource: 'azure-foundry',
    inputTokenPrice: 1.4,
    outputTokenPrice: 5.6,
    cachedInputTokenPrice: 0.14
  })
].sort((left, right) => left.optionLabel.localeCompare(right.optionLabel));

export const MODEL_CATALOG_MAP = new Map(MODEL_CATALOG.map((entry) => [entry.id, entry]));

export const USAGE_PROFILE_DEFINITIONS: UsageProfileDefinition[] = [
  {
    value: 'light',
    label: 'Light',
    defaultPromptRate: 8,
    defaultInputTokensPerPrompt: 600,
    defaultOutputTokensPerPrompt: 250,
    defaultWorkdaysPerYear: 210,
    defaultActiveUserRate: 0.65
  },
  {
    value: 'standard',
    label: 'Standard',
    defaultPromptRate: 20,
    defaultInputTokensPerPrompt: 1200,
    defaultOutputTokensPerPrompt: 600,
    defaultWorkdaysPerYear: 240,
    defaultActiveUserRate: 0.8
  },
  {
    value: 'heavy',
    label: 'Heavy',
    defaultPromptRate: 45,
    defaultInputTokensPerPrompt: 2200,
    defaultOutputTokensPerPrompt: 1100,
    defaultWorkdaysPerYear: 250,
    defaultActiveUserRate: 0.92
  },
  {
    value: 'custom',
    label: 'Custom',
    defaultPromptRate: 20,
    defaultInputTokensPerPrompt: 1200,
    defaultOutputTokensPerPrompt: 600,
    defaultWorkdaysPerYear: 240,
    defaultActiveUserRate: 0.8
  }
];

export const STATIC_SELECT_OPTIONS: Record<string, SelectOption[]> = {
  vendorId: VENDOR_DEFINITIONS.map((vendor) => ({ value: vendor.id, label: vendor.label })),
  contractStructure: [
    { value: 'usageBasedApi', label: 'Usage-based API' },
    { value: 'workspaceSeats', label: 'Workspace seats' },
    { value: 'provisionedThroughput', label: 'Provisioned throughput' },
    { value: 'hybridEnterprise', label: 'Hybrid enterprise' }
  ],
  billingModel: [
    { value: 'payg', label: 'Pay as you go' },
    { value: 'committed', label: 'Committed spend' },
    { value: 'annualized', label: 'Annualized contract' },
    { value: 'blended', label: 'Blended model' }
  ],
  overageModel: [
    { value: 'sameUnitRate', label: 'Same unit rate' },
    { value: 'upliftedRate', label: 'Uplifted rate' },
    { value: 'cappedRate', label: 'Capped rate' },
    { value: 'pooled', label: 'Pooled' }
  ],
  renewalAssumption: [
    { value: 'flat', label: 'Flat renewal' },
    { value: 'uplift', label: 'Renewal uplift' },
    { value: 'rebid', label: 'Rebid / reprice' }
  ],
  usageProfile: USAGE_PROFILE_DEFINITIONS.map((profile) => ({ value: profile.value, label: profile.label })),
  deploymentMode: [
    { value: 'hosted', label: 'Hosted' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'local', label: 'Local' }
  ],
  fallbackMode: [
    { value: 'hosted', label: 'Hosted fallback' },
    { value: 'hybrid', label: 'Hybrid fallback' },
    { value: 'local', label: 'Local fallback' }
  ],
  regionStrategy: [
    { value: 'singleRegion', label: 'Single region' },
    { value: 'followVendor', label: 'Follow vendor default' },
    { value: 'multiRegion', label: 'Multi-region' },
    { value: 'sovereign', label: 'Sovereign / isolated' }
  ],
  hostingType: [
    { value: 'vendorHosted', label: 'Vendor hosted' },
    { value: 'singleTenant', label: 'Single tenant' },
    { value: 'privateHosted', label: 'Private hosted' },
    { value: 'hybrid', label: 'Hybrid' }
  ],
  managedServiceLevel: [
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
    { value: 'whiteGlove', label: 'White glove' }
  ],
  cloudProvider: [
    { value: 'none', label: 'None' },
    { value: 'azure', label: 'Azure' },
    { value: 'aws', label: 'AWS' },
    { value: 'gcp', label: 'GCP' },
    { value: 'vendorNative', label: 'Vendor native' }
  ],
  cloudSku: [
    { value: 'standard', label: 'Standard' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'isolated', label: 'Isolated' }
  ],
  defaultRegion: [
    { value: 'us', label: 'US' },
    { value: 'us-east', label: 'US East' },
    { value: 'us-west', label: 'US West' },
    { value: 'eu', label: 'EU' },
    { value: 'uk', label: 'UK' }
  ],
  region: [
    { value: 'us-east', label: 'US East' },
    { value: 'us-west', label: 'US West' },
    { value: 'uk-south', label: 'UK South' },
    { value: 'eu-west', label: 'EU West' },
    { value: 'ap-southeast', label: 'AP Southeast' }
  ],
  primaryRegion: [
    { value: 'us-east', label: 'US East' },
    { value: 'us-west', label: 'US West' },
    { value: 'uk-south', label: 'UK South' },
    { value: 'eu-west', label: 'EU West' }
  ],
  secondaryRegion: [
    { value: 'none', label: 'None' },
    { value: 'us-west', label: 'US West' },
    { value: 'uk-south', label: 'UK South' },
    { value: 'eu-west', label: 'EU West' }
  ],
  cloudSupportTier: [
    { value: 'standard', label: 'Standard' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' }
  ],
  throughputUnitType: [
    { value: 'ptu', label: 'PTU' },
    { value: 'tpm', label: 'Tokens per minute' },
    { value: 'rpm', label: 'Requests per minute' },
    { value: 'reservedCluster', label: 'Reserved cluster' }
  ],
  securityReviewFrequency: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'semiannual', label: 'Semi-annual' },
    { value: 'annual', label: 'Annual' }
  ],
  intensity: [
    { value: 'light', label: 'Light' },
    { value: 'medium', label: 'Standard' },
    { value: 'heavy', label: 'Heavy' }
  ],
  usagePattern: [
    { value: 'light', label: 'Light' },
    { value: 'standard', label: 'Standard' },
    { value: 'heavy', label: 'Heavy' },
    { value: 'seasonal', label: 'Seasonal' }
  ],
  grantPolicy: [
    { value: 'unlimited', label: 'Unlimited' },
    { value: 'softCap', label: 'Soft cap' },
    { value: 'hardCap', label: 'Hard cap' },
    { value: 'pooled', label: 'Pooled' },
    { value: 'roleBased', label: 'Role based' }
  ],
  grantUnit: [
    { value: 'tokensPerMonth', label: 'Tokens per month' },
    { value: 'tokensPerYear', label: 'Tokens per year' },
    { value: 'promptsPerMonth', label: 'Prompts per month' }
  ],
  resetCycle: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'annual', label: 'Annual' }
  ],
  overageBehavior: [
    { value: 'billOverage', label: 'Bill overage' },
    { value: 'stopUsage', label: 'Stop usage' },
    { value: 'downgradeModel', label: 'Downgrade model' },
    { value: 'requireApproval', label: 'Require approval' }
  ],
  unusedCarryoverPolicy: [
    { value: 'expire', label: 'Expire' },
    { value: 'carryForward', label: 'Carry forward' },
    { value: 'pooled', label: 'Roll into pool' }
  ],
  tokenAllowanceStrategy: [
    { value: 'perUser', label: 'Per user' },
    { value: 'pooled', label: 'Pooled' },
    { value: 'roleBased', label: 'Role based' }
  ],
  routingRole: [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'fallback', label: 'Fallback' },
    { value: 'specialty', label: 'Specialty' }
  ],
  costSource: [
    { value: 'defaultCatalog', label: 'Vendor defaults' },
    { value: 'customOverride', label: 'Custom override' },
    { value: 'contractedRate', label: 'Contracted rate' }
  ],
  roleTag: [
    { value: 'primary', label: 'Primary' },
    { value: 'fallback', label: 'Fallback' },
    { value: 'specialty', label: 'Specialty' }
  ],
  overflowAssignment: [
    { value: 'primary', label: 'Keep on primary' },
    { value: 'fallback', label: 'Send to fallback' },
    { value: 'cheapestAvailable', label: 'Cheapest available' },
    { value: 'proportional', label: 'Proportional split' }
  ],
  humanReviewTrigger: [
    { value: 'never', label: 'Never' },
    { value: 'highRiskOnly', label: 'High risk only' },
    { value: 'alwaysOnEscalation', label: 'Always on escalation' },
    { value: 'manual', label: 'Manual review' }
  ],
  defaultCurrency: [{ value: 'USD', label: 'USD' }]
};

export function getFieldDefinition(fieldKey: string): EstimatorFieldDefinition | null {
  return FIELD_DEFINITION_MAP.get(fieldKey) ?? null;
}

export function getCardDefinition(cardKey: string): EstimatorCardDefinition | null {
  return CARD_DEFINITION_MAP.get(cardKey) ?? null;
}

export function getSelectOptions(fieldKey: string): SelectOption[] {
  return STATIC_SELECT_OPTIONS[fieldKey] ?? [];
}

export function getVendorDefinition(vendorId: string): VendorDefinition {
  return VENDOR_DEFINITIONS.find((vendor) => vendor.id === vendorId) ?? VENDOR_DEFINITIONS[0]!;
}

export function getModelCatalogEntry(modelId: string): ModelCatalogEntry | null {
  return MODEL_CATALOG_MAP.get(modelId) ?? null;
}

export function getUsageProfileDefinition(profileValue: string): UsageProfileDefinition {
  return USAGE_PROFILE_DEFINITIONS.find((profile) => profile.value === profileValue) ?? USAGE_PROFILE_DEFINITIONS[1]!;
}

export function isPercentLikeControl(controlType: EstimatorControlType): boolean {
  return controlType === 'percent';
}

export function isRoutingSplitValue(value: EstimatorValue | null): value is RoutingSplit {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && 'hosted' in value;
}

export function isWeightedMetricValue(value: EstimatorValue | null): value is WeightedMetricValue {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && 'value' in value && 'weight' in value;
}
