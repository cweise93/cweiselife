import { Injectable, computed, signal } from '@angular/core';
import {
  CAPABILITY_DEFINITIONS,
  CONTRACT_STRUCTURE_OPTIONS,
  CONTRACT_TERM_OPTIONS,
  CapabilityDefinition,
  CapabilityKey,
  ContractStructure,
  DeploymentMode,
  PROVIDER_DEFINITIONS,
  ProviderDefinition,
  ProviderKey,
  USAGE_PROFILE_OPTIONS,
  UsageProfile
} from './ai-consumption-leverage-calculator.data';

export interface CapabilitySelection {
  workspaceSeats: boolean;
  apiAccess: boolean;
  provisionedThroughput: boolean;
  contextCaching: boolean;
  connectors: boolean;
  adminSecurity: boolean;
  prioritySupport: boolean;
  dataResidency: boolean;
}

export interface ContractEstimatorState {
  provider: ProviderKey;
  model: string;
  contractStructure: ContractStructure;
  contractTermMonths: number;
  employeeCount: number;
  aiUsers: number;
  usageProfile: UsageProfile;
  deploymentMode: DeploymentMode;
  includedCapabilities: CapabilitySelection;
  promptsPerUserDay: number;
  inputTokensPerPrompt: number;
  outputTokensPerPrompt: number;
  includedSeats: number;
  seatPricePerMonth: number;
  includedPtu: number;
  ptuRateMonthly: number;
  cacheHitRate: number;
  connectorCount: number;
  connectorPackAnnual: number;
  securityUpliftPercent: number;
  supportUpliftPercent: number;
  residencyUpliftPercent: number;
  overageMultiplier: number;
}

export interface OutputMetric {
  label: string;
  value: string;
  tone?: 'default' | 'accent' | 'positive' | 'warning';
}

const DEFAULT_CAPABILITIES: CapabilitySelection = {
  workspaceSeats: false,
  apiAccess: false,
  provisionedThroughput: false,
  contextCaching: false,
  connectors: false,
  adminSecurity: false,
  prioritySupport: false,
  dataResidency: false
};

@Injectable({ providedIn: 'root' })
export class AiConsumptionLeverageCalculatorService {
  readonly providers = PROVIDER_DEFINITIONS;
  readonly contractStructureOptions = CONTRACT_STRUCTURE_OPTIONS;
  readonly contractTermOptions = CONTRACT_TERM_OPTIONS;
  readonly usageProfileOptions = USAGE_PROFILE_OPTIONS;
  readonly capabilities = CAPABILITY_DEFINITIONS;

  readonly executive = signal<ContractEstimatorState>(this.buildDefaultState(PROVIDER_DEFINITIONS[0]!));

  readonly providerDefinition = computed(
    () => this.providers.find((provider) => provider.id === this.executive().provider) ?? this.providers[0]!
  );

  readonly usageProfileDefinition = computed(
    () => this.usageProfileOptions.find((profile) => profile.value === this.executive().usageProfile) ?? this.usageProfileOptions[1]!
  );

  readonly selectedCapabilities = computed(() =>
    this.capabilities.filter((capability) => this.executive().includedCapabilities[capability.key])
  );

  readonly capabilityCount = computed(() => this.selectedCapabilities().length);

  readonly capabilityFields = computed(() => {
    const state = this.executive();
    const fields: Record<CapabilityKey, Array<{ key: keyof ContractEstimatorState; label: string; type: 'number' | 'select'; suffix?: string }>> = {
      workspaceSeats: [
        { key: 'includedSeats', label: 'Included seats', type: 'number' },
        { key: 'seatPricePerMonth', label: 'Seat price', type: 'number', suffix: 'USD / mo' }
      ],
      apiAccess: [
        { key: 'promptsPerUserDay', label: 'Prompts / user / day', type: 'number' },
        { key: 'inputTokensPerPrompt', label: 'Input tokens / prompt', type: 'number' },
        { key: 'outputTokensPerPrompt', label: 'Output tokens / prompt', type: 'number' }
      ],
      provisionedThroughput: [
        { key: 'includedPtu', label: 'Included PTUs', type: 'number' },
        { key: 'ptuRateMonthly', label: 'PTU rate', type: 'number', suffix: 'USD / mo' }
      ],
      contextCaching: [
        { key: 'cacheHitRate', label: 'Cache hit rate', type: 'number', suffix: '%' }
      ],
      connectors: [
        { key: 'connectorCount', label: 'Connector count', type: 'number' },
        { key: 'connectorPackAnnual', label: 'Connector pack', type: 'number', suffix: 'USD / yr' }
      ],
      adminSecurity: [
        { key: 'securityUpliftPercent', label: 'Security uplift', type: 'number', suffix: '%' }
      ],
      prioritySupport: [
        { key: 'supportUpliftPercent', label: 'Support uplift', type: 'number', suffix: '%' }
      ],
      dataResidency: [
        { key: 'residencyUpliftPercent', label: 'Residency uplift', type: 'number', suffix: '%' }
      ]
    };

    return this.selectedCapabilities().map((capability) => ({
      ...capability,
      fields: fields[capability.key],
      values: state
    }));
  });

  readonly costProfile = computed(() => {
    const state = this.executive();
    const provider = this.providerDefinition();
    const profile = this.usageProfileDefinition();
    const useExplicitUsage = state.includedCapabilities.apiAccess;

    const promptsPerUserDay = useExplicitUsage ? state.promptsPerUserDay : profile.promptsPerUserDay;
    const inputTokensPerPrompt = useExplicitUsage ? state.inputTokensPerPrompt : profile.inputTokensPerPrompt;
    const outputTokensPerPrompt = useExplicitUsage ? state.outputTokensPerPrompt : profile.outputTokensPerPrompt;

    const monthlyPrompts = state.aiUsers * promptsPerUserDay * 20;
    const annualPrompts = monthlyPrompts * 12;
    const monthlyInputTokens = monthlyPrompts * inputTokensPerPrompt;
    const monthlyOutputTokens = monthlyPrompts * outputTokensPerPrompt;
    const annualInputTokens = monthlyInputTokens * 12;
    const annualOutputTokens = monthlyOutputTokens * 12;

    const deploymentFactor =
      state.deploymentMode === 'local' ? 0.72 :
      state.deploymentMode === 'hybrid' ? 0.9 :
      1;

    const structureFactor =
      state.contractStructure === 'seat-based' ? 0.94 :
      state.contractStructure === 'hybrid-enterprise' ? 0.97 :
      1;

    const termDiscount =
      state.contractTermMonths >= 36 ? 0.89 :
      state.contractTermMonths >= 24 ? 0.94 :
      1;

    const inputUsageCostAnnual = (annualInputTokens / 1_000_000) * provider.inputRatePerMillion;
    const outputUsageCostAnnual = (annualOutputTokens / 1_000_000) * provider.outputRatePerMillion;
    let annualCost = (inputUsageCostAnnual + outputUsageCostAnnual) * deploymentFactor * structureFactor * termDiscount;

    if (state.includedCapabilities.workspaceSeats) {
      annualCost += state.includedSeats * state.seatPricePerMonth * 12 * termDiscount;
    }

    if (state.includedCapabilities.provisionedThroughput) {
      annualCost += state.includedPtu * state.ptuRateMonthly * 12 * termDiscount;
    }

    if (state.includedCapabilities.connectors) {
      annualCost += state.connectorCount * state.connectorPackAnnual;
    }

    if (state.includedCapabilities.adminSecurity) {
      annualCost += annualCost * (state.securityUpliftPercent / 100);
    }

    if (state.includedCapabilities.prioritySupport) {
      annualCost += annualCost * (state.supportUpliftPercent / 100);
    }

    if (state.includedCapabilities.dataResidency) {
      annualCost += annualCost * (state.residencyUpliftPercent / 100);
    }

    if (state.includedCapabilities.contextCaching) {
      const cacheSavingsAnnual =
        (annualInputTokens / 1_000_000) *
        Math.max(provider.inputRatePerMillion - provider.cachedInputRatePerMillion, 0) *
        (state.cacheHitRate / 100);
      annualCost -= cacheSavingsAnnual;
    }

    const monthlyCost = annualCost / 12;
    const costPerUserPerMonth = state.aiUsers > 0 ? monthlyCost / state.aiUsers : 0;

    let includedCapacityMonthly =
      state.contractStructure === 'usage-api'
        ? monthlyInputTokens * 0.45
        : Math.max(state.includedSeats, state.aiUsers) * profile.includedTokensPerSeatMonthly;

    if (state.contractStructure === 'hybrid-enterprise') {
      includedCapacityMonthly += state.includedPtu * 250_000;
    }

    if (state.includedCapabilities.provisionedThroughput) {
      includedCapacityMonthly += state.includedPtu * 250_000;
    }

    if (state.includedCapabilities.contextCaching) {
      includedCapacityMonthly *= 1 + state.cacheHitRate / 200;
    }

    const actualMonthlyTotalTokens = monthlyInputTokens + monthlyOutputTokens;
    const overageTokensMonthly = Math.max(actualMonthlyTotalTokens - includedCapacityMonthly, 0);
    const overageExposureAnnual =
      (overageTokensMonthly / 1_000_000) *
      (provider.inputRatePerMillion + provider.outputRatePerMillion) *
      12 *
      state.overageMultiplier;

    return {
      annualCost,
      monthlyCost,
      costPerUserPerMonth,
      annualPrompts,
      monthlyInputTokens,
      includedCapacityMonthly,
      overageExposureAnnual
    };
  });

  readonly outputMetrics = computed<OutputMetric[]>(() => {
    const profile = this.costProfile();
    return [
      { label: 'Annual estimate', value: this.currency(profile.annualCost), tone: 'accent' },
      { label: 'Cost per user / mo', value: this.currency(profile.costPerUserPerMonth), tone: 'positive' },
      { label: 'Included capacity', value: this.compactTokens(profile.includedCapacityMonthly) + ' input tokens / mo', tone: 'positive' },
      { label: 'Overage exposure', value: this.currency(profile.overageExposureAnnual), tone: 'warning' },
      { label: 'Monthly estimate', value: this.currency(profile.monthlyCost) }
    ];
  });

  updateNumber<K extends keyof ContractEstimatorState>(key: K, rawValue: number): void {
    const numericValue = Number.isFinite(rawValue) ? rawValue : 0;
    this.executive.update((current) => ({
      ...current,
      [key]: numericValue > 0 ? numericValue : current[key]
    }));
  }

  updateEnum<K extends keyof ContractEstimatorState>(key: K, value: ContractEstimatorState[K]): void {
    this.executive.update((current) => {
      const next = { ...current, [key]: value };

      if (key === 'provider') {
        const provider = this.providers.find((item) => item.id === value) ?? this.providers[0]!;
        next.model = provider.defaultModel;
        next.seatPricePerMonth = provider.defaultSeatPriceMonthly;
        next.ptuRateMonthly = provider.defaultPtuRateMonthly;
        next.connectorPackAnnual = provider.defaultConnectorPackAnnual;
        next.securityUpliftPercent = provider.defaultSecurityUpliftPercent;
        next.supportUpliftPercent = provider.defaultSupportUpliftPercent;
        next.residencyUpliftPercent = provider.defaultResidencyUpliftPercent;
      }

      if (key === 'usageProfile') {
        const profile = this.usageProfileOptions.find((item) => item.value === value) ?? this.usageProfileOptions[1]!;
        next.promptsPerUserDay = profile.promptsPerUserDay;
        next.inputTokensPerPrompt = profile.inputTokensPerPrompt;
        next.outputTokensPerPrompt = profile.outputTokensPerPrompt;
      }

      return next;
    });
  }

  toggleCapability(key: CapabilityKey, checked: boolean): void {
    this.executive.update((current) => {
      const next: ContractEstimatorState = {
        ...current,
        includedCapabilities: {
          ...current.includedCapabilities,
          [key]: checked
        }
      };

      if (key === 'workspaceSeats' && checked && !current.includedSeats) {
        next.includedSeats = current.aiUsers;
      }

      return next;
    });
  }

  reset(): void {
    this.executive.set(this.buildDefaultState(this.providers[0]!));
  }

  private buildDefaultState(provider: ProviderDefinition): ContractEstimatorState {
    const profile = USAGE_PROFILE_OPTIONS[1]!;
    return {
      provider: provider.id,
      model: provider.defaultModel,
      contractStructure: 'usage-api',
      contractTermMonths: 24,
      employeeCount: 250,
      aiUsers: 250,
      usageProfile: profile.value,
      deploymentMode: 'hosted',
      includedCapabilities: { ...DEFAULT_CAPABILITIES },
      promptsPerUserDay: profile.promptsPerUserDay,
      inputTokensPerPrompt: profile.inputTokensPerPrompt,
      outputTokensPerPrompt: profile.outputTokensPerPrompt,
      includedSeats: 250,
      seatPricePerMonth: provider.defaultSeatPriceMonthly,
      includedPtu: 50,
      ptuRateMonthly: provider.defaultPtuRateMonthly,
      cacheHitRate: 45,
      connectorCount: 3,
      connectorPackAnnual: provider.defaultConnectorPackAnnual,
      securityUpliftPercent: provider.defaultSecurityUpliftPercent,
      supportUpliftPercent: provider.defaultSupportUpliftPercent,
      residencyUpliftPercent: provider.defaultResidencyUpliftPercent,
      overageMultiplier: 1.15
    };
  }

  private currency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }

  private compactTokens(value: number): string {
    if (value >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(2)}B`;
    }
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(2)}M`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(0)}K`;
    }
    return `${Math.round(value)}`;
  }
}
