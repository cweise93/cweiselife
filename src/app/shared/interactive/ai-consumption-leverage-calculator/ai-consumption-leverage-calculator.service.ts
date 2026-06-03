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

export interface ContractEstimateRecord {
  id: string;
  state: ContractEstimatorState;
}

export interface ContractEstimateSummary {
  id: string;
  title: string;
  annualEstimate: string;
}

export interface OutputMetric {
  label: string;
  value: string;
  tone?: 'default' | 'accent' | 'positive' | 'warning';
}

export interface CapabilityFieldDefinition {
  key: keyof ContractEstimatorState;
  label: string;
  type: 'number' | 'select';
  suffix?: string;
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

const CAPABILITY_FIELD_MAP: Record<CapabilityKey, CapabilityFieldDefinition[]> = {
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
  contextCaching: [{ key: 'cacheHitRate', label: 'Cache hit rate', type: 'number', suffix: '%' }],
  connectors: [
    { key: 'connectorCount', label: 'Connector count', type: 'number' },
    { key: 'connectorPackAnnual', label: 'Connector pack', type: 'number', suffix: 'USD / yr' }
  ],
  adminSecurity: [{ key: 'securityUpliftPercent', label: 'Security uplift', type: 'number', suffix: '%' }],
  prioritySupport: [{ key: 'supportUpliftPercent', label: 'Support uplift', type: 'number', suffix: '%' }],
  dataResidency: [{ key: 'residencyUpliftPercent', label: 'Residency uplift', type: 'number', suffix: '%' }]
};

@Injectable({ providedIn: 'root' })
export class AiConsumptionLeverageCalculatorService {
  readonly providers = PROVIDER_DEFINITIONS;
  readonly contractStructureOptions = CONTRACT_STRUCTURE_OPTIONS;
  readonly contractTermOptions = CONTRACT_TERM_OPTIONS;
  readonly usageProfileOptions = USAGE_PROFILE_OPTIONS;
  readonly capabilities = CAPABILITY_DEFINITIONS;

  readonly records = signal<ContractEstimateRecord[]>([
    {
      id: this.createRecordId(),
      state: this.buildDefaultState(PROVIDER_DEFINITIONS[0]!)
    }
  ]);

  readonly primaryRecord = computed(() => this.records()[0] ?? null);
  readonly additionalRecords = computed(() => this.records().slice(1));

  readonly executive = computed<ContractEstimatorState>(() => this.primaryRecord()?.state ?? this.buildDefaultState(PROVIDER_DEFINITIONS[0]!));

  readonly providerDefinition = computed(() => this.getProviderDefinitionForState(this.executive()));

  readonly usageProfileDefinition = computed(() => this.getUsageProfileDefinitionForState(this.executive()));

  readonly selectedCapabilities = computed(() => this.getSelectedCapabilities(this.primaryRecord()?.id ?? ''));

  readonly costProfile = computed(() => this.profileForState(this.executive()));

  readonly aggregateCostProfile = computed(() => {
    const profiles = this.records().map((record) => this.profileForState(record.state));
    const annualCost = profiles.reduce((sum, profile) => sum + profile.annualCost, 0);
    const monthlyCost = profiles.reduce((sum, profile) => sum + profile.monthlyCost, 0);
    const totalUsers = this.records().reduce((sum, record) => sum + record.state.aiUsers, 0);
    const costPerUserPerMonth = totalUsers > 0 ? monthlyCost / totalUsers : 0;
    const annualPrompts = profiles.reduce((sum, profile) => sum + profile.annualPrompts, 0);
    const monthlyInputTokens = profiles.reduce((sum, profile) => sum + profile.monthlyInputTokens, 0);
    const includedCapacityMonthly = profiles.reduce((sum, profile) => sum + profile.includedCapacityMonthly, 0);
    const overageExposureAnnual = profiles.reduce((sum, profile) => sum + profile.overageExposureAnnual, 0);

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

  readonly estimateSummaries = computed<ContractEstimateSummary[]>(() =>
    this.records().map((record, index) => ({
      id: record.id,
      title: `${this.getProviderDefinitionForState(record.state).label} ${index + 1}`,
      annualEstimate: this.currency(this.profileForState(record.state).annualCost)
    }))
  );

  readonly outputMetrics = computed<OutputMetric[]>(() => {
    const profile = this.aggregateCostProfile();
    return [
      { label: 'Annual estimate', value: this.currency(profile.annualCost), tone: 'accent' },
      { label: 'Cost per user / mo', value: this.currency(profile.costPerUserPerMonth), tone: 'positive' },
      { label: 'Included capacity', value: this.compactTokens(profile.includedCapacityMonthly) + ' input tokens / mo', tone: 'positive' },
      { label: 'Overage exposure', value: this.currency(profile.overageExposureAnnual), tone: 'warning' },
      { label: 'Monthly estimate', value: this.currency(profile.monthlyCost) }
    ];
  });

  getRecordState(recordId: string): ContractEstimatorState {
    return this.findRecord(recordId)?.state ?? this.executive();
  }

  getSelectedCapabilities(recordId: string): CapabilityDefinition[] {
    const state = this.getRecordState(recordId);
    return this.capabilities.filter((capability) => state.includedCapabilities[capability.key]);
  }

  getEstimateSummary(recordId: string): ContractEstimateSummary | null {
    return this.estimateSummaries().find((summary) => summary.id === recordId) ?? null;
  }

  addProviderRecord(sourceRecordId: string): string {
    const source = this.findRecord(sourceRecordId);
    const nextId = this.createRecordId();
    const baseState = source?.state ?? this.executive();

    this.records.update((current) => [
      ...current,
      {
        id: nextId,
        state: {
          ...baseState,
          includedCapabilities: { ...baseState.includedCapabilities }
        }
      }
    ]);

    return nextId;
  }

  removeProviderRecord(recordId: string): void {
    this.records.update((current) => current.filter((record) => record.id !== recordId));
  }

  updateNumber<K extends keyof ContractEstimatorState>(recordId: string, key: K, rawValue: number): void {
    const numericValue = Number.isFinite(rawValue) ? rawValue : 0;
    this.updateRecord(recordId, (current) => ({
      ...current,
      [key]: numericValue > 0 ? numericValue : current[key]
    }));
  }

  updateEnum(
    recordId: string,
    key: keyof ContractEstimatorState,
    value: ContractEstimatorState[keyof ContractEstimatorState]
  ): void {
    this.updateRecord(recordId, (current) => {
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

  getCapabilityFields(key: CapabilityKey): CapabilityFieldDefinition[] {
    return CAPABILITY_FIELD_MAP[key];
  }

  snapshotState(recordId: string): ContractEstimatorState {
    const current = this.getRecordState(recordId);
    return {
      ...current,
      includedCapabilities: { ...current.includedCapabilities }
    };
  }

  restoreState(recordId: string, state: ContractEstimatorState): void {
    this.updateRecord(recordId, () => ({
      ...state,
      includedCapabilities: { ...state.includedCapabilities }
    }));
  }

  setCapabilityEnabled(recordId: string, key: CapabilityKey, enabled: boolean): void {
    this.updateRecord(recordId, (current) => ({
      ...current,
      includedCapabilities: {
        ...current.includedCapabilities,
        [key]: enabled
      }
    }));
  }

  toggleCapability(recordId: string, key: CapabilityKey, checked: boolean): void {
    this.updateRecord(recordId, (current) => {
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

  applyCapabilityConfig(recordId: string, key: CapabilityKey, values: Partial<ContractEstimatorState>): void {
    this.updateRecord(recordId, (current) => ({
      ...current,
      ...values,
      includedCapabilities: {
        ...current.includedCapabilities,
        [key]: true
      }
    }));
  }

  previewCapabilityConfig(recordId: string, key: CapabilityKey, values: Partial<ContractEstimatorState>): void {
    this.updateRecord(recordId, (current) => ({
      ...current,
      ...values,
      includedCapabilities: {
        ...current.includedCapabilities,
        [key]: true
      }
    }));
  }

  reset(): void {
    this.records.set([
      {
        id: this.createRecordId(),
        state: this.buildDefaultState(this.providers[0]!)
      }
    ]);
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

  private findRecord(recordId: string): ContractEstimateRecord | undefined {
    return this.records().find((record) => record.id === recordId);
  }

  private updateRecord(recordId: string, updater: (current: ContractEstimatorState) => ContractEstimatorState): void {
    this.records.update((current) =>
      current.map((record) =>
        record.id === recordId
          ? {
              ...record,
              state: updater(record.state)
            }
          : record
      )
    );
  }

  private getProviderDefinitionForState(state: ContractEstimatorState): ProviderDefinition {
    return this.providers.find((provider) => provider.id === state.provider) ?? this.providers[0]!;
  }

  private getUsageProfileDefinitionForState(state: ContractEstimatorState) {
    return this.usageProfileOptions.find((profile) => profile.value === state.usageProfile) ?? this.usageProfileOptions[1]!;
  }

  private profileForState(state: ContractEstimatorState) {
    const provider = this.getProviderDefinitionForState(state);
    const profile = this.getUsageProfileDefinitionForState(state);
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
  }

  private createRecordId(): string {
    return `estimate-${Math.random().toString(36).slice(2, 10)}`;
  }
}
