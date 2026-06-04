import { Injectable, computed, signal } from '@angular/core';
import {
  CALCULATOR_CONFIG_CARDS,
  CALCULATOR_DERIVED_NODE_KEYS,
  CALCULATOR_TOTAL_KEYS,
  EstimatorCardDefinition,
  EstimatorFieldDefinition,
  EstimatorLevel,
  EstimatorValue,
  FIELD_DEFINITION_MAP,
  MODEL_CATALOG,
  ModelCatalogEntry,
  STATIC_SELECT_OPTIONS,
  SelectOption,
  VENDOR_DEFINITIONS,
  VendorDefinition,
  WeightedMetricValue,
  RoutingSplit,
  getCardDefinition,
  getFieldDefinition,
  getModelCatalogEntry,
  getUsageProfileDefinition,
  getVendorDefinition,
  isRoutingSplitValue,
  isWeightedMetricValue
} from './ai-consumption-leverage-calculator.data';

type UserGroupKind = 'power' | 'standard' | 'light' | 'custom';

export interface UserGroupState {
  id: string;
  kind: UserGroupKind;
  values: Record<string, EstimatorValue | null>;
}

export interface ModelGroupState {
  id: string;
  values: Record<string, EstimatorValue | null>;
}

export interface EstimatorRecordState {
  values: Record<string, EstimatorValue | null>;
  userGroups: UserGroupState[];
  modelGroups: ModelGroupState[];
  cardSelection: Record<string, boolean>;
}

export interface ValidationIssue {
  id: string;
  level: EstimatorLevel;
  severity: 'error' | 'warning';
  message: string;
}

export interface EstimatorDerivedState {
  totals: Record<string, number>;
  derivedNodes: Record<string, number>;
  validationIssues: ValidationIssue[];
  usagePercentTotal: number;
  routingSplitTotal: number;
  activeUsers: number;
}

interface ContractEstimateRecord {
  id: string;
  state: EstimatorRecordState;
  derived: EstimatorDerivedState;
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

export interface SurfaceCardViewModel {
  id: string;
  cardKey: string;
  title: string;
  subtitle: string;
  description: string;
  helperLabel: string;
  currentValueLabel: string;
  impactLabel: string;
  icon: string;
  level: EstimatorLevel;
  selected: boolean;
  optional: boolean;
  detailAvailable: boolean;
  kind: 'card' | 'user-group' | 'model-group' | 'action';
  badge?: string;
  userGroupId?: string;
  modelGroupId?: string;
  removable?: boolean;
}

export interface EditorModelUsageValue {
  modelGroupId: string;
  label: string;
  usagePercent: number;
}

export interface CardEditorContext {
  cardKey: string;
  title: string;
  description: string;
  fields: EstimatorFieldDefinition[];
  kind: 'record' | 'user-group' | 'model-group' | 'model-allocation';
  values: Record<string, EstimatorValue | null>;
  userGroupId?: string;
  modelGroupId?: string;
  modelUsageValues?: EditorModelUsageValue[];
}

export interface CardEditorResult {
  values: Record<string, EstimatorValue | null>;
  modelUsageValues?: EditorModelUsageValue[];
}

export interface ModelSelectionWarning {
  modelLabel: string;
  currentVendorLabel: string;
  nextVendorLabel: string;
  message: string;
}

export interface VendorPricingDisclosure {
  vendorId: string;
  vendorLabel: string;
  confidenceLabel: string;
  statement: string;
  sourceUrls: string[];
  lastVerifiedDate: string;
  lastVerifiedLabel: string;
}

const USER_GROUP_CARD_BY_KIND: Record<UserGroupKind, string> = {
  power: 'power-users-group',
  standard: 'standard-users-group',
  light: 'light-users-group',
  custom: 'add-user-group'
};

const OPTIONAL_CARD_GATES: Record<string, (state: EstimatorRecordState) => boolean> = {
  'workspace-seats': (state) => state.cardSelection['workspace-seats'],
  'api-access': (state) => state.cardSelection['api-access'],
  'context-caching': (state) => state.cardSelection['context-caching'],
  'connectors-integrations': (state) => state.cardSelection['connectors-integrations'],
  'priority-support-sla': (state) => state.cardSelection['priority-support-sla'],
  'provisioned-throughput': (state) => state.cardSelection['provisioned-throughput'],
  'data-residency': (state) => state.cardSelection['data-residency'],
  'security-admin-overhead': (state) => state.cardSelection['security-admin-overhead'],
  'hybrid-network': (state) => state.cardSelection['hybrid-network']
};

const SUPPORTED_CAPABILITY_CARD_KEYS: Record<string, string> = {
  workspaceSeats: 'workspace-seats',
  apiAccess: 'api-access',
  provisionedThroughput: 'provisioned-throughput',
  contextCaching: 'context-caching',
  connectorsIntegrations: 'connectors-integrations',
  adminSecurityControls: 'security-admin-overhead',
  prioritySupportSla: 'priority-support-sla',
  dataResidency: 'data-residency'
};

const USER_GROUP_FIELDS = [
  'groupName',
  'rangeLabel',
  'userCount',
  'intensity',
  'promptsPerUserPerDay',
  'inputTokensPerPrompt',
  'outputTokensPerPrompt',
  'activeDaysPerYear',
  'activeUserPercent',
  'modelAssignment',
  'tokenAllowancePerUser',
  'toolUseRate',
  'usagePattern',
  'departmentLabel',
  'notes'
];

const METRIC_GROUP_FIELDS: Record<string, string[]> = {
  performance: [
    'taskPerformanceUsefulness',
    'generalizationTaskTransfer',
    'instructionAdherence',
    'transparencyExplainability'
  ],
  'cost-efficiency': [
    'modelComplexitySophistication',
    'inferenceCostEfficiency',
    'latencyResponsiveness',
    'workflowIntegrationEfficiency'
  ],
  reliability: ['robustnessReliability', 'stabilityConsistency', 'adaptabilityFineTunability'],
  'governance-risk': ['biasFairnessSafety', 'operationalMaintenanceBurden', 'trainingAdaptationBurden']
};

const TECHNICAL_METRIC_FIELDS = Array.from(new Set(Object.values(METRIC_GROUP_FIELDS).flat()));

const MODEL_GROUP_FIELDS = [
  'modelId',
  'modelLabel',
  'deploymentRangeLabel',
  'deploymentQuantity',
  'routingRole',
  'usagePercent',
  'primaryUseCases',
  'fallbackTarget',
  'costSource',
  'enabled',
  'inputTokenPrice',
  'outputTokenPrice',
  'cachedInputTokenPrice',
  ...TECHNICAL_METRIC_FIELDS
];

const MANUAL_PRICING_FIELDS = new Set([
  'seatPricePerUserPerMonth',
  'throughputUnitCost',
  'inputTokenPrice',
  'outputTokenPrice',
  'cachedInputTokenPrice'
]);

const SUPPORT_TIER_MULTIPLIER: Record<string, number> = {
  standard: 0,
  business: 0.04,
  enterprise: 0.08
};

const HOSTING_UPLIFT_BY_TYPE: Record<string, number> = {
  vendorHosted: 0,
  singleTenant: 0.05,
  privateHosted: 0.09,
  hybrid: 0.03
};

const MANAGED_SERVICE_UPLIFT: Record<string, number> = {
  standard: 0,
  premium: 0.03,
  whiteGlove: 0.07
};

const CONTRACT_STRUCTURE_ALWAYSON: Record<string, string[]> = {
  usageBasedApi: ['api-access'],
  workspaceSeats: ['workspace-seats'],
  provisionedThroughput: ['provisioned-throughput'],
  hybridEnterprise: ['api-access', 'workspace-seats', 'provisioned-throughput']
};

// The field registry does not currently provide an explicit cache-hit-rate control.
const DEFAULT_CONTEXT_CACHE_HIT_RATE = 0.2;
const THROUGHPUT_UNIT_CAPACITY_PER_YEAR = 12_000_000;

@Injectable({ providedIn: 'root' })
export class AiConsumptionLeverageCalculatorService {
  readonly providers = VENDOR_DEFINITIONS;
  readonly contractStructureOptions = STATIC_SELECT_OPTIONS['contractStructure'] ?? [];
  readonly usageProfileOptions = STATIC_SELECT_OPTIONS['usageProfile'] ?? [];
  readonly stepCards = CALCULATOR_CONFIG_CARDS;

  readonly records = signal<ContractEstimateRecord[]>([this.createRecord()]);
  readonly primaryRecord = computed(() => this.records()[0] ?? null);
  readonly additionalRecords = computed(() => this.records().slice(1));

  readonly estimateSummaries = computed<ContractEstimateSummary[]>(() =>
    this.records().map((record, index) => ({
      id: record.id,
      title: `${this.vendorLabel(record.state.values['vendorId'])} ${index + 1}`,
      annualEstimate: this.compactCurrency(this.getTotals(record.id)['annualEstimate'] ?? 0)
    }))
  );

  readonly outputMetrics = computed<OutputMetric[]>(() => {
    const aggregate = this.records().reduce(
      (sum, record) => {
        const totals = record.derived.totals;
        sum.annualEstimate += totals['annualEstimate'] ?? 0;
        sum.monthlyEstimate += totals['monthlyEstimate'] ?? 0;
        sum.includedCapacity += totals['includedCapacity'] ?? 0;
        sum.overageExposure += totals['overageExposure'] ?? 0;
        sum.totalUsers += record.state.userGroups.reduce((count, group) => count + this.numberValue(group.values['userCount']), 0);
        sum.modeledSuitabilityScore += totals['modeledSuitabilityScore'] ?? 0;
        sum.modeledCostRealismFactor += totals['modeledCostRealismFactor'] ?? 0;
        return sum;
      },
      {
        annualEstimate: 0,
        monthlyEstimate: 0,
        includedCapacity: 0,
        overageExposure: 0,
        totalUsers: 0,
        modeledSuitabilityScore: 0,
        modeledCostRealismFactor: 0
      }
    );

    const costPerUserPerMonth = aggregate.totalUsers > 0 ? aggregate.monthlyEstimate / aggregate.totalUsers : 0;
    const recordCount = Math.max(this.records().length, 1);

    return [
      { label: 'Annual estimate', value: this.compactCurrency(aggregate.annualEstimate), tone: 'accent' },
      { label: 'Cost per user / mo', value: this.compactCurrency(costPerUserPerMonth), tone: 'positive' },
      { label: 'Included capacity', value: `${this.compactQuantity(aggregate.includedCapacity)} tokens / yr`, tone: 'positive' },
      { label: 'Overage exposure', value: this.compactCurrency(aggregate.overageExposure), tone: 'warning' },
      { label: 'Monthly estimate', value: this.compactCurrency(aggregate.monthlyEstimate) },
      {
        label: 'Modeled suitability',
        value: `${Math.round(aggregate.modeledSuitabilityScore / recordCount)} / 100`
      },
      {
        label: 'Cost realism',
        value: `${Math.round(aggregate.modeledCostRealismFactor / recordCount)} / 100`
      }
    ];
  });

  readonly pricingDisclosure = computed<VendorPricingDisclosure | null>(() => {
    const record = this.primaryRecord();
    return record ? this.buildPricingDisclosure(record.state) : null;
  });

  getRecordState(recordId: string): EstimatorRecordState {
    return this.getRecord(recordId)?.state ?? this.records()[0]!.state;
  }

  getTotals(recordId: string): Record<string, number> {
    return this.getRecord(recordId)?.derived.totals ?? this.emptyNumericMap(CALCULATOR_TOTAL_KEYS);
  }

  getValidationIssues(recordId: string, level?: EstimatorLevel): ValidationIssue[] {
    const issues = this.getRecord(recordId)?.derived.validationIssues ?? [];
    return level ? issues.filter((issue) => issue.level === level) : issues;
  }

  getStepCards(recordId: string, level: EstimatorLevel): SurfaceCardViewModel[] {
    const record = this.getRecord(recordId);
    if (!record) {
      return [];
    }

    if (level === 'Users') {
      return this.userGroupCards(record);
    }

    if (level === 'Technical') {
      return this.technicalCards(record);
    }

    return this.stepCards
      .filter((card) => card.level === level && !card.detailOnly && !card.actionKind && !card.dynamicKind)
      .filter((card) => this.cardVisibleForRecord(card, record.state))
      .map((card) => this.surfaceCardFromDefinition(record, card));
  }

  buildEditor(recordId: string, card: SurfaceCardViewModel): CardEditorContext | null {
    const record = this.getRecord(recordId);
    if (!record) {
      return null;
    }

    if (card.kind === 'user-group' && card.userGroupId) {
      const group = record.state.userGroups.find((item) => item.id === card.userGroupId);
      if (!group) {
        return null;
      }

      return {
        cardKey: card.cardKey,
        title: card.title,
        description: card.description,
        kind: 'user-group',
        fields: USER_GROUP_FIELDS.map((fieldKey) => FIELD_DEFINITION_MAP.get(fieldKey)).filter(
          (field): field is EstimatorFieldDefinition => Boolean(field)
        ),
        values: this.cloneValues(group.values),
        userGroupId: group.id
      };
    }

    if (card.kind === 'model-group' && card.modelGroupId) {
      const group = record.state.modelGroups.find((item) => item.id === card.modelGroupId);
      if (!group) {
        return null;
      }

      return {
        cardKey: card.cardKey,
        title: card.title,
        description: card.description,
        kind: 'model-group',
        fields: MODEL_GROUP_FIELDS.map((fieldKey) => FIELD_DEFINITION_MAP.get(fieldKey)).filter(
          (field): field is EstimatorFieldDefinition => Boolean(field)
        ),
        values: this.cloneValues(group.values),
        modelGroupId: group.id
      };
    }

    if (card.cardKey === 'model-usage-allocation') {
      const definition = getCardDefinition(card.cardKey);
      if (!definition) {
        return null;
      }

      return {
        cardKey: card.cardKey,
        title: card.title,
        description: card.description,
        kind: 'model-allocation',
        fields: definition.fields.map((fieldKey) => FIELD_DEFINITION_MAP.get(fieldKey)).filter(
          (field): field is EstimatorFieldDefinition => Boolean(field)
        ),
        values: this.cloneValues(record.state.values),
        modelUsageValues: record.state.modelGroups.map((group) => ({
          modelGroupId: group.id,
          label: this.stringValue(group.values['modelLabel']) || this.stringValue(group.values['modelId']) || 'Model',
          usagePercent: this.percentValue(group.values['usagePercent'])
        }))
      };
    }

    const definition = getCardDefinition(card.cardKey);
    if (!definition) {
      return null;
    }

    const fieldKeys =
      card.cardKey in METRIC_GROUP_FIELDS ? METRIC_GROUP_FIELDS[card.cardKey] :
      definition.fields;

    return {
      cardKey: card.cardKey,
      title: card.title,
      description: card.description,
      kind: 'record',
      fields: fieldKeys.map((fieldKey) => FIELD_DEFINITION_MAP.get(fieldKey)).filter(
        (field): field is EstimatorFieldDefinition => Boolean(field)
      ),
      values: this.cloneValues(record.state.values)
    };
  }

  applyEditor(recordId: string, editor: CardEditorContext, result: CardEditorResult): void {
    this.updateRecord(recordId, (current) => {
      return this.computeEditorState(current.state, editor, result);
    });
  }

  previewEditor(recordId: string, editor: CardEditorContext, result: CardEditorResult): void {
    this.updateRecord(recordId, (current) => this.computeEditorState(current.state, editor, result));
  }

  snapshotRecordState(recordId: string): EstimatorRecordState | null {
    const record = this.getRecord(recordId);
    return record ? this.cloneState(record.state) : null;
  }

  restoreRecordState(recordId: string, snapshot: EstimatorRecordState): void {
    this.updateRecord(recordId, () => this.cloneState(snapshot));
  }

  toggleCard(recordId: string, cardKey: string, selected: boolean): void {
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      nextState.cardSelection[cardKey] = selected;

      const definition = getCardDefinition(cardKey);
      if (definition?.toggleKey && FIELD_DEFINITION_MAP.has(definition.toggleKey)) {
        nextState.values[definition.toggleKey] = selected;
      }

      if (cardKey === 'workspace-seats' && selected && this.numberValue(nextState.values['includedCapacity']) <= 0) {
        nextState.values['includedCapacity'] = this.totalUsers(nextState.userGroups) * 250_000;
      }

      return nextState;
    });
  }

  updateQuickEstimate(recordId: string, key: string, value: EstimatorValue | null): void {
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      nextState.values[key] = this.copyValue(value);
      if (key === 'vendorId') {
        const previousVendorId = this.stringValue(current.state.values['vendorId']) || 'openai';
        const nextVendorId = this.stringValue(value) || 'openai';
        if (nextVendorId !== previousVendorId) {
          this.rebaseVendorDefaults(nextState, nextVendorId);
        }
      }
      return this.syncVendorDrivenFields(nextState);
    });
  }

  addProviderRecord(sourceRecordId: string): string {
    const source = this.getRecord(sourceRecordId) ?? this.records()[0]!;
    const clonedState = this.cloneState(source.state);
    const nextId = this.createRecordId('estimate');
    const nextRecord = this.buildRecord(nextId, clonedState);

    this.records.update((current) => [...current, nextRecord]);
    return nextId;
  }

  removeProviderRecord(recordId: string): void {
    this.records.update((current) => current.filter((record) => record.id !== recordId));
  }

  addUserGroup(recordId: string): string {
    let newId = '';
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      const index = nextState.userGroups.filter((group) => group.kind === 'custom').length + 1;
      const group = this.buildUserGroup('custom', index + 3, nextState.values, nextState.modelGroups);
      newId = group.id;
      nextState.userGroups = [...nextState.userGroups, group];
      return nextState;
    });
    return newId;
  }

  removeUserGroup(recordId: string, userGroupId: string): void {
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      nextState.userGroups = nextState.userGroups.filter((group) => group.id !== userGroupId);
      return nextState;
    });
  }

  addModelGroup(recordId: string): string {
    let newId = '';
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      const modelGroup = this.buildModelGroup(nextState.values);
      newId = modelGroup.id;
      nextState.modelGroups = [...nextState.modelGroups, modelGroup];
      if (this.booleanValue(nextState.values['autoNormalize'])) {
        nextState.modelGroups = this.normalizeModelUsage(nextState.modelGroups);
      }
      return this.syncVendorDrivenFields(nextState);
    });
    return newId;
  }

  removeModelGroup(recordId: string, modelGroupId: string): void {
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      nextState.modelGroups = nextState.modelGroups.filter((group) => group.id !== modelGroupId);
      if (this.booleanValue(nextState.values['autoNormalize'])) {
        nextState.modelGroups = this.normalizeModelUsage(nextState.modelGroups);
      }
      return this.syncVendorDrivenFields(nextState);
    });
  }

  updateModelGroupValue(recordId: string, modelGroupId: string, fieldKey: string, value: EstimatorValue | null): void {
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      if (MANUAL_PRICING_FIELDS.has(fieldKey)) {
        nextState.values['customPricingOverrideEnabled'] = true;
      }

      nextState.modelGroups = nextState.modelGroups.map((group) =>
        group.id === modelGroupId
          ? { ...group, values: { ...group.values, [fieldKey]: this.copyValue(value) } }
          : group
      );

      if (fieldKey === 'modelId' || fieldKey === 'modelCatalogSelection') {
        const selectedModelId = this.stringValue(value);
        if (selectedModelId) {
          this.applyCatalogSelectionToModelGroup(nextState, modelGroupId, selectedModelId, true);
        }
      }

      return this.syncVendorDrivenFields(nextState);
    });
  }

  updateModelGroupMetric(
    recordId: string,
    modelGroupId: string,
    fieldKey: string,
    patch: Partial<WeightedMetricValue>
  ): void {
    this.updateRecord(recordId, (current) => {
      const nextState = this.cloneState(current.state);
      nextState.modelGroups = nextState.modelGroups.map((group) => {
        if (group.id !== modelGroupId) {
          return group;
        }

        const currentMetric = this.weightedMetricValue(
          group.values[fieldKey] ?? getFieldDefinition(fieldKey)?.defaultValue ?? null
        );

        return {
          ...group,
          values: {
            ...group.values,
            [fieldKey]: {
              value: this.clampFraction(patch.value ?? currentMetric.value),
              weight: this.clampFraction(patch.weight ?? currentMetric.weight)
            }
          }
        };
      });

      return this.syncVendorDrivenFields(nextState);
    });
  }

  getFieldOptions(fieldKey: string, recordId: string): SelectOption[] {
    const staticOptions = STATIC_SELECT_OPTIONS[fieldKey];
    if (staticOptions?.length) {
      return staticOptions;
    }

    const state = this.getRecordState(recordId);

    if (fieldKey === 'modelId' || fieldKey === 'modelCatalogSelection') {
      return MODEL_CATALOG.map((model) => ({
        value: model.id,
        label: model.optionLabel
      }));
    }

    if (fieldKey === 'modelAssignment' || fieldKey === 'fallbackTarget' || fieldKey === 'fallbackModelId') {
      return state.modelGroups.map((group) => ({
        value: this.stringValue(group.values['modelId']),
        label: this.stringValue(group.values['modelLabel']) || this.stringValue(group.values['modelId']) || 'Model'
      }));
    }

    if (fieldKey === 'allowedRegions') {
      return STATIC_SELECT_OPTIONS['primaryRegion'] ?? [];
    }

    return [];
  }

  getModelSelectionWarning(recordId: string, modelId: string): ModelSelectionWarning | null {
    const state = this.getRecordState(recordId);
    const model = getModelCatalogEntry(modelId);
    if (!model) {
      return null;
    }

    const currentVendorId = this.stringValue(state.values['vendorId']) || 'openai';
    if (model.commercialVendorId === currentVendorId) {
      return null;
    }

    const currentVendor = getVendorDefinition(currentVendorId);
    const nextVendor = getVendorDefinition(model.commercialVendorId);

    return {
      modelLabel: model.label,
      currentVendorLabel: currentVendor.label,
      nextVendorLabel: nextVendor.label,
      message: `Selecting ${model.optionLabel} will switch Vendor from ${currentVendor.label} to ${nextVendor.label} and refresh pricing defaults for this deployment group.`
    };
  }

  reset(): void {
    this.records.set([this.createRecord()]);
  }

  private createRecord(): ContractEstimateRecord {
    return this.buildRecord(this.createRecordId('estimate'), this.buildDefaultState());
  }

  private buildRecord(id: string, state: EstimatorRecordState): ContractEstimateRecord {
    const syncedState = this.syncVendorDrivenFields(state);
    return {
      id,
      state: syncedState,
      derived: this.recalculate(syncedState)
    };
  }

  private computeEditorState(
    currentState: EstimatorRecordState,
    editor: CardEditorContext,
    result: CardEditorResult
  ): EstimatorRecordState {
    const nextState = this.cloneState(currentState);

    if (editor.kind === 'user-group' && editor.userGroupId) {
      nextState.userGroups = nextState.userGroups.map((group) =>
        group.id === editor.userGroupId ? { ...group, values: this.mergeValues(group.values, result.values) } : group
      );
      return nextState;
    }

    if (editor.kind === 'model-group' && editor.modelGroupId) {
      if (this.containsManualPricingOverride(result.values)) {
        nextState.values['customPricingOverrideEnabled'] = true;
      }
      nextState.modelGroups = nextState.modelGroups.map((group) =>
        group.id === editor.modelGroupId ? { ...group, values: this.mergeValues(group.values, result.values) } : group
      );
      const selectedModelId = this.stringValue(result.values['modelId']) || this.stringValue(result.values['modelCatalogSelection']);
      if (selectedModelId) {
        this.applyCatalogSelectionToModelGroup(nextState, editor.modelGroupId, selectedModelId, true);
      }
      return this.syncVendorDrivenFields(nextState);
    }

    if (editor.kind === 'model-allocation') {
      nextState.values = this.mergeValues(nextState.values, result.values);
      if (result.modelUsageValues?.length) {
        nextState.modelGroups = nextState.modelGroups.map((group) => {
          const usage = result.modelUsageValues?.find((item) => item.modelGroupId === group.id);
          return usage
            ? { ...group, values: { ...group.values, usagePercent: this.clampFraction(usage.usagePercent) } }
            : group;
        });
      }

      if (this.booleanValue(nextState.values['autoNormalize'])) {
        nextState.modelGroups = this.normalizeModelUsage(nextState.modelGroups);
      }

      return nextState;
    }

    nextState.values = this.mergeValues(nextState.values, result.values);
    if (this.containsManualPricingOverride(result.values)) {
      nextState.values['customPricingOverrideEnabled'] = true;
    }
    const previousVendorId = this.stringValue(currentState.values['vendorId']) || 'openai';
    const nextVendorId = this.stringValue(nextState.values['vendorId']) || 'openai';
    if (nextVendorId !== previousVendorId) {
      this.rebaseVendorDefaults(nextState, nextVendorId);
    }
    return this.syncVendorDrivenFields(nextState);
  }

  private buildDefaultState(): EstimatorRecordState {
    const values = Object.fromEntries(
      Array.from(FIELD_DEFINITION_MAP.values()).map((field) => [field.key, this.copyValue(field.defaultValue)])
    ) as Record<string, EstimatorValue | null>;

    const vendor = getVendorDefinition(this.stringValue(values['vendorId']) || 'openai');
    values['vendorDisplayName'] = vendor.label;
    values['pricingSourceUrls'] = [...vendor.pricingSourceUrls];
    values['lastVerifiedDate'] = vendor.lastVerifiedDate;
    values['supportedContractStructures'] = [...vendor.supportedContractStructures];
    values['supportedCapabilities'] = [...vendor.supportedCapabilities];
    values['defaultRegion'] = vendor.defaultRegion;
    values['defaultCurrency'] = vendor.defaultCurrency;
    values['seatPricePerUserPerMonth'] = vendor.seatPricePerUserPerMonth;
    values['throughputUnitCost'] = vendor.throughputUnitCost;
    values['inputTokenPrice'] = vendor.models[0]?.inputTokenPrice ?? values['inputTokenPrice'];
    values['outputTokenPrice'] = vendor.models[0]?.outputTokenPrice ?? values['outputTokenPrice'];
    values['cachedInputTokenPrice'] = vendor.models[0]?.cachedInputTokenPrice ?? values['cachedInputTokenPrice'];
    values['modelId'] = vendor.models[0]?.id ?? values['modelId'];
    values['modelLabel'] = vendor.models[0]?.label ?? values['modelLabel'];
    values['modelCatalogSelection'] = vendor.models[0]?.id ?? values['modelCatalogSelection'];
    values['fallbackModelId'] = vendor.models[0]?.id ?? values['fallbackModelId'];
    values['usageProfile'] = 'standard';
    values['contractStructure'] = 'usageBasedApi';
    values['deploymentMode'] = 'hosted';
    values['autoNormalize'] = true;
    values['enforceHundredPercentTotal'] = true;
    values['routingSplit'] = { hosted: 1, hybrid: 0, local: 0 };
    this.applyUsageProfile(values, 'standard');

    return {
      values,
      userGroups: [
        this.buildUserGroup('power', 1, values, []),
        this.buildUserGroup('standard', 2, values, []),
        this.buildUserGroup('light', 3, values, [])
      ],
      modelGroups: [this.buildModelGroup(values)],
      cardSelection: this.buildCardSelection(values)
    };
  }

  private buildUserGroup(
    kind: UserGroupKind,
    position: number,
    rootValues: Record<string, EstimatorValue | null>,
    modelGroups: ModelGroupState[]
  ): UserGroupState {
    const base = Object.fromEntries(
      USER_GROUP_FIELDS.map((fieldKey) => [fieldKey, this.copyValue(getFieldDefinition(fieldKey)?.defaultValue ?? null)])
    ) as Record<string, EstimatorValue | null>;
    const label =
      kind === 'power' ? 'Power users' :
      kind === 'standard' ? 'Standard users' :
      kind === 'light' ? 'Light users' :
      `Additional group ${position - 3}`;

    base['groupName'] = label;
    base['rangeLabel'] = `${String((position - 1) * 50 + 1).padStart(3, '0')}-${String(position * 50).padStart(3, '0')}`;
    base['startIndex'] = (position - 1) * 50 + 1;
    base['endIndex'] = position * 50;
    base['departmentLabel'] =
      kind === 'power' ? 'Engineering / product' :
      kind === 'standard' ? 'Operations / finance' :
      kind === 'light' ? 'Occasional / executive' :
      'Custom cohort';
    base['activeUserPercent'] = kind === 'light' ? 0.55 : kind === 'power' ? 0.95 : 0.8;
    base['intensity'] = kind === 'light' ? 'light' : kind === 'power' ? 'heavy' : 'medium';
    base['usagePattern'] = kind === 'light' ? 'light' : kind === 'power' ? 'heavy' : 'standard';
    base['promptsPerUserPerDay'] =
      kind === 'light' ? 8 :
      kind === 'power' ? 36 :
      this.numberValue(rootValues['defaultPromptRate']);
    base['inputTokensPerPrompt'] =
      kind === 'light' ? 500 :
      kind === 'power' ? 1800 :
      this.numberValue(rootValues['defaultInputTokensPerPrompt']);
    base['outputTokensPerPrompt'] =
      kind === 'light' ? 250 :
      kind === 'power' ? 900 :
      this.numberValue(rootValues['defaultOutputTokensPerPrompt']);
    base['activeDaysPerYear'] =
      kind === 'light' ? 180 :
      kind === 'power' ? 245 :
      this.numberValue(rootValues['defaultWorkdaysPerYear']);
    base['modelAssignment'] = this.firstModelId(modelGroups) ?? this.stringValue(rootValues['modelId']) ?? 'gpt-4o';
    base['toolUseRate'] = kind === 'power' ? 0.65 : kind === 'standard' ? 0.35 : 0.12;

    return {
      id: this.createRecordId('group'),
      kind,
      values: base
    };
  }

  private buildModelGroup(rootValues: Record<string, EstimatorValue | null>): ModelGroupState {
    const base = Object.fromEntries(
      MODEL_GROUP_FIELDS.map((fieldKey) => [fieldKey, this.copyValue(getFieldDefinition(fieldKey)?.defaultValue ?? null)])
    ) as Record<string, EstimatorValue | null>;
    const vendor = getVendorDefinition(this.stringValue(rootValues['vendorId']) || 'openai');
    const model = vendor.models[0]!;

    base['modelId'] = model.id;
    base['modelLabel'] = model.label;
    base['usagePercent'] = 1;
    base['enabled'] = true;
    base['fallbackTarget'] = model.id;
    base['inputTokenPrice'] = model.inputTokenPrice;
    base['outputTokenPrice'] = model.outputTokenPrice;
    base['cachedInputTokenPrice'] = model.cachedInputTokenPrice;

    return {
      id: this.createRecordId('model'),
      values: base
    };
  }

  private buildCardSelection(values: Record<string, EstimatorValue | null>): Record<string, boolean> {
    const contractStructure = this.stringValue(values['contractStructure']);
    const alwaysOn = new Set(CONTRACT_STRUCTURE_ALWAYSON[contractStructure] ?? []);

    return {
      'workspace-seats': alwaysOn.has('workspace-seats'),
      'api-access': alwaysOn.has('api-access'),
      'context-caching': false,
      'connectors-integrations': false,
      'priority-support-sla': false,
      'provisioned-throughput': alwaysOn.has('provisioned-throughput'),
      'data-residency': this.booleanValue(values['residencyRequired']),
      'security-admin-overhead': this.booleanValue(values['securityPackageEnabled']),
      'hybrid-network': this.booleanValue(values['hybridEnabled'])
    };
  }

  private surfaceCardFromDefinition(record: ContractEstimateRecord, card: EstimatorCardDefinition): SurfaceCardViewModel {
    return {
      id: `${record.id}-${card.key}`,
      cardKey: card.key,
      title: card.title,
      subtitle: card.subtitle,
      description: card.description,
      helperLabel: this.cardHelperLabel(record.state, card),
      currentValueLabel: this.cardCurrentValueLabel(record.state, card),
      impactLabel: this.cardImpactLabel(record.state, card),
      icon: card.icon,
      level: card.level,
      selected: card.optional ? Boolean(record.state.cardSelection[card.key]) : true,
      optional: card.optional,
      detailAvailable: card.fields.length > 0,
      kind: card.actionKind ? 'action' : 'card'
    };
  }

  private userGroupCards(record: ContractEstimateRecord): SurfaceCardViewModel[] {
    const actionCard = getCardDefinition('add-user-group');
    const baseCards = record.state.userGroups.map((group) => ({
      id: `${record.id}-${group.id}`,
      cardKey: USER_GROUP_CARD_BY_KIND[group.kind],
      title: this.stringValue(group.values['groupName']) || 'User group',
      subtitle: group.kind === 'custom' ? 'Additional user group' : getCardDefinition(USER_GROUP_CARD_BY_KIND[group.kind])?.subtitle ?? 'User group',
      description:
        group.kind === 'custom'
          ? 'Custom cohort with its own demand and allocation assumptions.'
          : getCardDefinition(USER_GROUP_CARD_BY_KIND[group.kind])?.description ?? 'User-group demand assumptions.',
      helperLabel:
        group.kind === 'power' ? 'Defines high-intensity demand' :
        group.kind === 'standard' ? 'Defines steady usage demand' :
        group.kind === 'light' ? 'Defines lighter usage demand' :
        'Adds another cohort',
      currentValueLabel: `${this.numberValue(group.values['userCount'])} users`,
      impactLabel: 'Affects prompt volume, token use, and capacity needs.',
      icon:
        group.kind === 'power' ? 'person' :
        group.kind === 'standard' ? 'person_outline' :
        'groups',
      level: 'Users' as const,
      selected: true,
      optional: false,
      detailAvailable: true,
      kind: 'user-group' as const,
      userGroupId: group.id,
      removable: group.kind === 'custom'
    }));

    const staticCards = this.stepCards
      .filter((card) => card.level === 'Users' && !card.detailOnly && !card.dynamicKind && !card.actionKind)
      .map((card) => this.surfaceCardFromDefinition(record, card));

    return [
      ...baseCards,
      ...(actionCard
        ? [
            {
              ...this.surfaceCardFromDefinition(record, actionCard),
              kind: 'action' as const
            }
          ]
        : []),
      ...staticCards
    ];
  }

  private technicalCards(record: ContractEstimateRecord): SurfaceCardViewModel[] {
    const addModelCard = getCardDefinition('add-model');
    const modelCards = record.state.modelGroups.map((group, index) => ({
      id: `${record.id}-${group.id}`,
      cardKey: 'model-deployment-group',
      title: this.stringValue(group.values['modelLabel']) || `Model ${index + 1}`,
      subtitle: 'Model deployment group',
      description: 'Represents one model deployment in the current contract mix.',
      helperLabel: 'Sets model allocation',
      currentValueLabel: `${this.stringValue(group.values['modelLabel']) || `Model ${index + 1}`} • ${Math.round(this.percentValue(group.values['usagePercent']) * 100)}%`,
      impactLabel: 'Affects blended cost, routing, and technical weighting.',
      icon: 'smart_toy',
      level: 'Technical' as const,
      selected: this.booleanValue(group.values['enabled']),
      optional: false,
      detailAvailable: true,
      kind: 'model-group' as const,
      modelGroupId: group.id,
      removable: record.state.modelGroups.length > 1
    }));

    const staticCards = this.stepCards
      .filter(
        (card) =>
          card.level === 'Technical' &&
          !card.detailOnly &&
          card.key !== 'model-deployment-group' &&
          !card.actionKind
      )
      .map((card) => this.surfaceCardFromDefinition(record, card));

    return [
      ...modelCards,
      ...(addModelCard
        ? [
            {
              ...this.surfaceCardFromDefinition(record, addModelCard),
              kind: 'action' as const
            }
          ]
        : []),
      ...staticCards
    ];
  }

  private cardVisibleForRecord(card: EstimatorCardDefinition, state: EstimatorRecordState): boolean {
    if (!card.optional) {
      return true;
    }

    const supported = new Set((state.values['supportedCapabilities'] as string[] | null) ?? []);
    const supportedCardKeys = new Set([...supported].map((capability) => SUPPORTED_CAPABILITY_CARD_KEYS[capability] ?? capability));
    return supportedCardKeys.size === 0 || supportedCardKeys.has(card.key);
  }

  private cardHelperLabel(state: EstimatorRecordState, card: EstimatorCardDefinition): string {
    switch (card.key) {
      case 'vendor':
        return 'Sets provider defaults';
      case 'contract-structure':
        return 'Defines the commercial model';
      case 'usage-profile':
        return 'Seeds demand assumptions';
      case 'deployment-mode':
        return 'Sets the hosting path';
      case 'hosting':
        return 'Sets infrastructure baseline';
      case 'cloud-option':
        return 'Selects the cloud path';
      case 'provisioned-throughput':
        return 'Sets reserved capacity';
      case 'data-residency':
        return 'Sets region requirements';
      case 'security-admin-overhead':
        return 'Sets governance overhead';
      case 'hybrid-network':
        return 'Sets traffic routing';
      case 'workspace-seats':
        return 'Sets seat-based pricing';
      case 'api-access':
        return 'Sets token pricing';
      case 'context-caching':
        return 'Sets cache assumptions';
      case 'priority-support-sla':
        return 'Sets service coverage';
      case 'model-usage-allocation':
        return 'Balances model share';
      case 'fallback-escalation-path':
        return 'Sets fallback routing';
      case 'performance':
        return 'Weights output quality';
      case 'cost-efficiency':
        return 'Weights runtime efficiency';
      case 'reliability':
        return 'Weights production stability';
      case 'governance-risk':
        return 'Weights risk posture';
      case 'token-grant-policy':
        return 'Sets usage guardrails';
      case 'activity-assumptions':
        return 'Sets real usage cadence';
      case 'add-user-group':
        return 'Creates another cohort';
      case 'add-model':
        return 'Adds another model';
      default:
        return card.subtitle;
    }
  }

  private cardCurrentValueLabel(state: EstimatorRecordState, card: EstimatorCardDefinition): string {
    switch (card.key) {
      case 'vendor':
        return this.vendorLabel(state.values['vendorId']);
      case 'contract-structure':
        return this.optionLabel('contractStructure', state.values['contractStructure']);
      case 'usage-profile':
        return this.optionLabel('usageProfile', state.values['usageProfile']);
      case 'deployment-mode':
        return this.optionLabel('deploymentMode', state.values['deploymentMode']);
      case 'hosting':
        return this.optionLabel('hostingType', state.values['hostingType']);
      case 'cloud-option':
        return this.optionLabel('cloudProvider', state.values['cloudProvider']);
      case 'provisioned-throughput':
        return this.booleanValue(state.values['throughputEnabled'])
          ? `${this.numberValue(state.values['unitsPurchased'])} units reserved`
          : 'Not enabled';
      case 'data-residency':
        return this.booleanValue(state.values['residencyRequired'])
          ? this.optionLabel('primaryRegion', state.values['primaryRegion'])
          : 'Not required';
      case 'security-admin-overhead':
        if (!this.booleanValue(state.values['securityPackageEnabled'])) {
          return 'Not enabled';
        }

        return this.securityAdminSummary(state);
      case 'hybrid-network': {
        const split = this.routingSplitValue(state.values['routingSplit']);
        return `${Math.round(split.hosted * 100)}% hosted`;
      }
      case 'workspace-seats':
        return `${this.currency(this.numberValue(state.values['seatPricePerUserPerMonth']))} per seat / mo`;
      case 'api-access':
        return `${this.currency(this.numberValue(state.values['inputTokenPrice']))} in • ${this.currency(this.numberValue(state.values['outputTokenPrice']))} out / 1M`;
      case 'context-caching':
        return `${this.currency(this.numberValue(state.values['cachedInputTokenPrice']))} cached / 1M`;
      case 'priority-support-sla':
        return this.optionLabel('cloudSupportTier', state.values['cloudSupportTier']);
      case 'model-usage-allocation':
        return `${Math.round(this.modelUsageTotal(state.modelGroups) * 100)}% assigned`;
      case 'fallback-escalation-path':
        return this.booleanValue(state.values['escalationEnabled'])
          ? `${Math.round(this.percentValue(state.values['escalationPercent']) * 100)}% escalation`
          : 'Escalation off';
      case 'performance':
      case 'cost-efficiency':
      case 'reliability':
      case 'governance-risk':
        return `${Math.round(this.metricGroupScore(state.values, card.key) * 100)} / 100`;
      case 'token-grant-policy':
        return this.optionLabel('grantPolicy', state.values['grantPolicy']);
      case 'activity-assumptions':
        return `${Math.round(this.percentValue(state.values['activeUserPercent']) * 100)}% active users`;
      case 'add-user-group':
        return 'Ready to add';
      case 'add-model':
        return 'Ready to add';
      default:
        return card.title;
    }
  }

  private cardImpactLabel(state: EstimatorRecordState, card: EstimatorCardDefinition): string {
    switch (card.key) {
      case 'vendor':
        return 'Affects pricing source, supported contract types, and baseline assumptions.';
      case 'contract-structure':
        return 'Affects how seats, API usage, throughput, and overage are estimated.';
      case 'usage-profile':
        return 'Affects prompt volume, token assumptions, and estimated annual usage.';
      case 'deployment-mode':
        return 'Affects infrastructure assumptions and downstream cost layers.';
      case 'hosting':
        return 'Affects platform, networking, and capacity assumptions.';
      case 'cloud-option':
        return 'Affects platform fees, regional defaults, and support assumptions.';
      case 'provisioned-throughput':
        return 'Affects reserved capacity, throughput cost, and overage exposure.';
      case 'data-residency':
        return 'Affects regional pricing, replication assumptions, and compliance cost.';
      case 'security-admin-overhead':
        return 'Affects internal admin staffing, control overhead, and annual operating cost.';
      case 'hybrid-network':
        return 'Affects routing cost, network overhead, and blended deployment math.';
      case 'workspace-seats':
        return 'Affects seat cost, bundled capacity, and per-user economics.';
      case 'api-access':
        return 'Affects token pricing, annual usage cost, and overage exposure.';
      case 'context-caching':
        return 'Affects cached-input savings and blended API cost realism.';
      case 'priority-support-sla':
        return 'Affects support uplift, service expectations, and total contract cost.';
      case 'model-usage-allocation':
        return 'Affects blended cost, included capacity, and validation of model share.';
      case 'fallback-escalation-path':
        return 'Affects routing behavior, escalation cost, and operational realism.';
      case 'performance':
        return 'Affects modeled suitability and the quality weighting behind the estimate.';
      case 'cost-efficiency':
        return 'Affects modeled cost realism and efficiency assumptions across models.';
      case 'reliability':
        return 'Affects modeled suitability and operational confidence assumptions.';
      case 'governance-risk':
        return 'Affects risk weighting, maintenance assumptions, and suitability scoring.';
      case 'token-grant-policy':
        return 'Affects included capacity, overage behavior, and user allowance assumptions.';
      case 'activity-assumptions':
        return 'Affects active demand, annual token usage, and capacity planning.';
      case 'add-user-group':
        return 'Adds another demand cohort without changing the current layout.';
      case 'add-model':
        return 'Adds another model allocation without changing the current structure.';
      default:
        return card.description;
    }
  }

  private updateRecord(recordId: string, updater: (current: ContractEstimateRecord) => EstimatorRecordState): void {
    this.records.update((current) =>
      current.map((record) => {
        if (record.id !== recordId) {
          return record;
        }

        const nextState = updater(record);
        return {
          ...record,
          state: nextState,
          derived: this.recalculate(nextState)
        };
      })
    );
  }

  private recalculate(state: EstimatorRecordState): EstimatorDerivedState {
    const totals = this.emptyNumericMap(CALCULATOR_TOTAL_KEYS);
    const derivedNodes = this.emptyNumericMap(CALCULATOR_DERIVED_NODE_KEYS);
    const validationIssues: ValidationIssue[] = [];

    const totalUsers = this.totalUsers(state.userGroups);
    let activeUsers = 0;
    let totalPromptsPerYear = 0;
    let totalInputTokensPerYear = 0;
    let totalOutputTokensPerYear = 0;
    let includedCapacityFromGrants = 0;
    let modelRealismInput = 0;

    for (const group of state.userGroups) {
      const userCount = Math.max(this.numberValue(group.values['userCount']), 0);
      const groupActiveRate = this.percentValue(group.values['activeUserPercent']) || this.percentValue(state.values['defaultActiveUserRate']);
      const promptsPerDay = Math.max(this.numberValue(group.values['promptsPerUserPerDay']), 0);
      const inputTokensPerPrompt = Math.max(this.numberValue(group.values['inputTokensPerPrompt']), 0);
      const outputTokensPerPrompt = Math.max(this.numberValue(group.values['outputTokensPerPrompt']), 0);
      const activeDays = Math.max(this.numberValue(group.values['activeDaysPerYear']), 0);
      const seasonality = Math.max(this.numberValue(state.values['seasonalityFactor']), 0.1);
      const rampFactor = this.numberValue(state.values['adoptionRampMonths']) > 0 ? 1 - Math.min(this.numberValue(state.values['adoptionRampMonths']) / 24, 0.5) : 1;
      const activeUsersForGroup = userCount * groupActiveRate;
      const promptsForGroup = activeUsersForGroup * promptsPerDay * activeDays * seasonality * rampFactor;

      activeUsers += activeUsersForGroup;
      totalPromptsPerYear += promptsForGroup;
      totalInputTokensPerYear += promptsForGroup * inputTokensPerPrompt;
      totalOutputTokensPerYear += promptsForGroup * outputTokensPerPrompt;
      includedCapacityFromGrants += Math.max(this.numberValue(group.values['tokenAllowancePerUser']), 0) * userCount * 12;
      modelRealismInput += this.percentValue(group.values['toolUseRate']) * Math.max(this.numberValue(group.values['userCount']), 0);

      if (userCount < 0) {
        validationIssues.push({ id: `${group.id}-userCount`, level: 'Users', severity: 'error', message: 'User counts must be non-negative.' });
      }
    }

    const totalTokensPerYear = totalInputTokensPerYear + totalOutputTokensPerYear;
    totals['totalPromptsPerYear'] = totalPromptsPerYear;
    totals['totalInputTokensPerYear'] = totalInputTokensPerYear;
    totals['totalOutputTokensPerYear'] = totalOutputTokensPerYear;
    totals['totalTokensPerYear'] = totalTokensPerYear;

    const activeModels = state.modelGroups.filter((group) => this.booleanValue(group.values['enabled']));
    const usagePercentTotal = this.modelUsageTotal(activeModels);
    const normalizedModels =
      this.booleanValue(state.values['autoNormalize']) && activeModels.length
        ? this.normalizeModelUsage(activeModels)
        : activeModels;

    if (this.booleanValue(state.values['enforceHundredPercentTotal']) && activeModels.length && Math.abs(usagePercentTotal - 1) > 0.001) {
      validationIssues.push({
        id: 'model-usage-total',
        level: 'Technical',
        severity: 'error',
        message: `Model usage allocation must equal 100%. Current total is ${Math.round(usagePercentTotal * 100)}%.`
      });
    }

    const weightedInputPrice = normalizedModels.length
      ? normalizedModels.reduce(
          (sum, group) =>
            sum + this.numberValue(group.values['inputTokenPrice']) * this.percentValue(group.values['usagePercent']),
          0
        )
      : this.numberValue(state.values['inputTokenPrice']);
    const weightedOutputPrice = normalizedModels.length
      ? normalizedModels.reduce(
          (sum, group) =>
            sum + this.numberValue(group.values['outputTokenPrice']) * this.percentValue(group.values['usagePercent']),
          0
        )
      : this.numberValue(state.values['outputTokenPrice']);
    const weightedCachedInputPrice = normalizedModels.length
      ? normalizedModels.reduce(
          (sum, group) =>
            sum + this.numberValue(group.values['cachedInputTokenPrice']) * this.percentValue(group.values['usagePercent']),
          0
        )
      : this.numberValue(state.values['cachedInputTokenPrice']);

    const apiEnabled =
      OPTIONAL_CARD_GATES['api-access']?.(state) ??
      (
        this.stringValue(state.values['contractStructure']) === 'usageBasedApi' ||
        this.stringValue(state.values['contractStructure']) === 'hybridEnterprise'
      );
    const workspaceSeatsEnabled =
      OPTIONAL_CARD_GATES['workspace-seats']?.(state) ??
      (this.stringValue(state.values['contractStructure']) === 'workspaceSeats');
    const throughputEnabled =
      OPTIONAL_CARD_GATES['provisioned-throughput']?.(state) ??
      (this.stringValue(state.values['contractStructure']) === 'provisionedThroughput');

    const apiCostAnnual = apiEnabled
      ? (totalInputTokensPerYear / 1_000_000) * weightedInputPrice + (totalOutputTokensPerYear / 1_000_000) * weightedOutputPrice
      : 0;
    const seatCostAnnual = workspaceSeatsEnabled
      ? totalUsers * Math.max(this.numberValue(state.values['seatPricePerUserPerMonth']), 0) * 12
      : 0;

    const throughputCapacityAnnual = throughputEnabled
      ? Math.max(this.numberValue(state.values['unitsPurchased']), 0) *
        THROUGHPUT_UNIT_CAPACITY_PER_YEAR *
        (1 + this.percentValue(state.values['scalingBufferPercent']))
      : 0;
    const throughputCostAnnual = throughputEnabled
      ? Math.max(this.numberValue(state.values['unitsPurchased']), 0) *
        Math.max(this.numberValue(state.values['unitCost']) || this.numberValue(state.values['throughputUnitCost']), 0) *
        Math.max(this.numberValue(state.values['reservedHoursPerMonth']), 0) *
        12
      : 0;

    const routingSplit = this.routingSplitValue(state.values['routingSplit']);
    const routingSplitTotal = routingSplit.hosted + routingSplit.hybrid + routingSplit.local;
    if (OPTIONAL_CARD_GATES['hybrid-network']?.(state) && Math.abs(routingSplitTotal - 1) > 0.001) {
      validationIssues.push({
        id: 'routing-split-total',
        level: 'Environment',
        severity: 'error',
        message: `Routing split must equal 100%. Current total is ${Math.round(routingSplitTotal * 100)}%.`
      });
    }

    const baseUsageCost = apiCostAnnual + seatCostAnnual + throughputCostAnnual;
    const hybridNetworkCostAnnual = OPTIONAL_CARD_GATES['hybrid-network']?.(state)
      ? (Math.max(this.numberValue(state.values['networkEgressCost']), 0) +
          Math.max(this.numberValue(state.values['privateConnectivityCost']), 0) +
          Math.max(this.numberValue(state.values['hybridManagementOverhead']), 0)) *
        12
      : 0;

    const hostedUpliftPercent =
      HOSTING_UPLIFT_BY_TYPE[this.stringValue(state.values['hostingType'])] +
      MANAGED_SERVICE_UPLIFT[this.stringValue(state.values['managedServiceLevel'])] +
      (this.booleanValue(state.values['singleTenantRequired']) ? 0.03 : 0) +
      this.percentValue(state.values['hostedUpliftPercent']);

    const managedPlatformFee = Math.max(this.numberValue(state.values['managedPlatformFee']), 0) * 12;
    const cloudCommitmentCredit = Math.max(this.numberValue(state.values['cloudCommitmentCredit']), 0);
    const securityOverheadAnnual = OPTIONAL_CARD_GATES['security-admin-overhead']?.(state)
      ? baseUsageCost * this.percentValue(state.values['adminOverheadPercent']) +
        Math.max(this.numberValue(state.values['internalAdminResourceCost']), 0) +
        Math.max(this.numberValue(state.values['auditLoggingCost']), 0) +
        Math.max(this.numberValue(state.values['policyGovernanceCost']), 0) +
        Math.max(this.numberValue(state.values['identityIntegrationCost']), 0)
      : 0;
    const supportCostAnnual = OPTIONAL_CARD_GATES['priority-support-sla']?.(state)
      ? baseUsageCost * (SUPPORT_TIER_MULTIPLIER[this.stringValue(state.values['cloudSupportTier'])] ?? 0.04)
      : 0;
    const residencyUpliftAnnual = OPTIONAL_CARD_GATES['data-residency']?.(state)
      ? baseUsageCost * this.percentValue(state.values['residencyUpliftPercent']) +
        (this.booleanValue(state.values['crossRegionReplicationRequired']) ? 18_000 : 0)
      : 0;
    const connectorCostAnnual = OPTIONAL_CARD_GATES['connectors-integrations']?.(state) ? totalUsers * 18 : 0;
    const cachingSavingsAnnual = OPTIONAL_CARD_GATES['context-caching']?.(state)
      ? (totalInputTokensPerYear / 1_000_000) *
        Math.max(weightedInputPrice - weightedCachedInputPrice, 0) *
        DEFAULT_CONTEXT_CACHE_HIT_RATE
      : 0;

    const includedCapacityBase =
      Math.max(this.numberValue(state.values['includedCapacity']), 0) * 12 +
      includedCapacityFromGrants +
      throughputCapacityAnnual +
      (workspaceSeatsEnabled ? totalUsers * 250_000 * 12 : 0) +
      (this.booleanValue(state.values['poolingEnabled']) ? Math.max(this.numberValue(state.values['grantAmount']), 0) * 12 : 0);

    const averageRatePerMillion = Math.max(weightedInputPrice + weightedOutputPrice, 0);
    const overflowRateEquivalent =
      Math.max(this.numberValue(state.values['overflowRate']), 0) ||
      averageRatePerMillion * this.overageMultiplier(this.stringValue(state.values['overageModel']));
    const overageTokens = Math.max(totalTokensPerYear - includedCapacityBase, 0);
    const overageCostAnnual = (overageTokens / 1_000_000) * overflowRateEquivalent;

    let annualEstimate =
      baseUsageCost * (1 + hostedUpliftPercent) +
      hybridNetworkCostAnnual +
      managedPlatformFee +
      connectorCostAnnual +
      securityOverheadAnnual +
      supportCostAnnual +
      residencyUpliftAnnual +
      overageCostAnnual -
      cloudCommitmentCredit -
      cachingSavingsAnnual;

    annualEstimate = Math.max(
      annualEstimate,
      Math.max(this.numberValue(state.values['annualCommitment']), this.numberValue(state.values['minimumSpend']))
    );
    annualEstimate = Math.max(annualEstimate, 0);

    const monthlyEstimate = annualEstimate / 12;
    const costPerUserPerMonth = totalUsers > 0 ? monthlyEstimate / totalUsers : 0;

    const suitabilityMetricKeys = [
      'taskPerformanceUsefulness',
      'generalizationTaskTransfer',
      'instructionAdherence',
      'transparencyExplainability',
      'robustnessReliability',
      'biasFairnessSafety',
      'adaptabilityFineTunability'
    ];
    const realismMetricKeys = [
      'inferenceCostEfficiency',
      'latencyResponsiveness',
      'stabilityConsistency',
      'workflowIntegrationEfficiency',
      'operationalMaintenanceBurden'
    ];
    const suitabilityScore = normalizedModels.length
      ? this.weightedMetricFieldAverageForModels(normalizedModels, suitabilityMetricKeys)
      : this.weightedMetricFieldAverageForValues(state.values, suitabilityMetricKeys);
    const realismScore = normalizedModels.length
      ? this.weightedMetricFieldAverageForModels(normalizedModels, realismMetricKeys, ['operationalMaintenanceBurden'])
      : this.weightedMetricFieldAverageForValues(state.values, realismMetricKeys, ['operationalMaintenanceBurden']);

    totals['annualEstimate'] = annualEstimate;
    totals['monthlyEstimate'] = monthlyEstimate;
    totals['costPerUserPerMonth'] = costPerUserPerMonth;
    totals['includedCapacity'] = includedCapacityBase;
    totals['overageExposure'] = overageCostAnnual;
    totals['modeledSuitabilityScore'] = suitabilityScore * 100;
    totals['modeledCostRealismFactor'] = Math.max(
      Math.min((realismScore * 100 + (modelRealismInput / Math.max(totalUsers, 1)) * 15), 100),
      0
    );

    derivedNodes['apiCostAnnual'] = apiCostAnnual;
    derivedNodes['seatCostAnnual'] = seatCostAnnual;
    derivedNodes['throughputCostAnnual'] = throughputCostAnnual;
    derivedNodes['cachingSavingsAnnual'] = cachingSavingsAnnual;
    derivedNodes['connectorCostAnnual'] = connectorCostAnnual;
    derivedNodes['securityOverheadAnnual'] = securityOverheadAnnual;
    derivedNodes['supportCostAnnual'] = supportCostAnnual;
    derivedNodes['residencyUpliftAnnual'] = residencyUpliftAnnual;
    derivedNodes['hybridNetworkCostAnnual'] = hybridNetworkCostAnnual;
    derivedNodes['userTierDemandAnnual'] = totalTokensPerYear;
    derivedNodes['modelAllocationDemandAnnual'] = totalTokensPerYear;
    derivedNodes['overageCostAnnual'] = overageCostAnnual;

    return {
      totals,
      derivedNodes,
      validationIssues,
      usagePercentTotal,
      routingSplitTotal,
      activeUsers
    };
  }

  private syncVendorDrivenFields(state: EstimatorRecordState): EstimatorRecordState {
    const nextState = this.cloneState(state);
    const vendor = getVendorDefinition(this.stringValue(nextState.values['vendorId']) || 'openai');
    const usageProfile = this.stringValue(nextState.values['usageProfile']) || 'standard';

    nextState.values['vendorDisplayName'] = vendor.label;
    nextState.values['pricingSourceUrls'] = [...vendor.pricingSourceUrls];
    nextState.values['lastVerifiedDate'] = vendor.lastVerifiedDate;
    nextState.values['supportedContractStructures'] = [...vendor.supportedContractStructures];
    nextState.values['supportedCapabilities'] = [...vendor.supportedCapabilities];
    nextState.values['defaultRegion'] = vendor.defaultRegion;
    nextState.values['defaultCurrency'] = vendor.defaultCurrency;
    nextState.values['seatPricePerUserPerMonth'] = this.booleanValue(nextState.values['customPricingOverrideEnabled'])
      ? nextState.values['seatPricePerUserPerMonth']
      : vendor.seatPricePerUserPerMonth;
    nextState.values['throughputUnitCost'] = this.booleanValue(nextState.values['customPricingOverrideEnabled'])
      ? nextState.values['throughputUnitCost']
      : vendor.throughputUnitCost;

    this.applyUsageProfile(nextState.values, usageProfile);

    const activeStructureCards = CONTRACT_STRUCTURE_ALWAYSON[this.stringValue(nextState.values['contractStructure'])] ?? [];
    for (const cardKey of Object.keys(nextState.cardSelection)) {
      if (activeStructureCards.includes(cardKey)) {
        nextState.cardSelection[cardKey] = true;
      }
    }

    nextState.modelGroups = nextState.modelGroups.map((group, index) => {
      const currentModelId = this.stringValue(group.values['modelId']);
      const matchingModel =
        getModelCatalogEntry(currentModelId) ??
        getModelCatalogEntry(vendor.models[index]?.id ?? '') ??
        getModelCatalogEntry(vendor.models[0]?.id ?? '');

      if (!matchingModel) {
        return group;
      }

      return {
        ...group,
        values: {
          ...group.values,
          modelId: matchingModel.id,
          modelLabel: matchingModel.label,
          inputTokenPrice: this.booleanValue(nextState.values['customPricingOverrideEnabled'])
            ? group.values['inputTokenPrice']
            : matchingModel.inputTokenPrice,
          outputTokenPrice: this.booleanValue(nextState.values['customPricingOverrideEnabled'])
            ? group.values['outputTokenPrice']
            : matchingModel.outputTokenPrice,
          cachedInputTokenPrice: this.booleanValue(nextState.values['customPricingOverrideEnabled'])
            ? group.values['cachedInputTokenPrice']
            : matchingModel.cachedInputTokenPrice,
          fallbackTarget: this.stringValue(group.values['fallbackTarget']) || matchingModel.id
        }
      };
    });

    if (nextState.modelGroups.length) {
      const primaryModel = nextState.modelGroups[0]!;
      nextState.values['modelId'] = primaryModel.values['modelId'];
      nextState.values['modelLabel'] = primaryModel.values['modelLabel'];
      nextState.values['inputTokenPrice'] = primaryModel.values['inputTokenPrice'];
      nextState.values['outputTokenPrice'] = primaryModel.values['outputTokenPrice'];
      nextState.values['cachedInputTokenPrice'] = primaryModel.values['cachedInputTokenPrice'];
      nextState.values['modelCatalogSelection'] = primaryModel.values['modelId'];
      nextState.values['fallbackModelId'] = this.stringValue(nextState.values['fallbackModelId']) || primaryModel.values['modelId'];
    }

    const availableModelIds = new Set(
      nextState.modelGroups.map((group) => this.stringValue(group.values['modelId'])).filter(Boolean)
    );
    nextState.userGroups = nextState.userGroups.map((group) => ({
      ...group,
      values: {
        ...group.values,
        modelAssignment:
          availableModelIds.has(this.stringValue(group.values['modelAssignment']))
            ? this.stringValue(group.values['modelAssignment'])
            : this.firstModelId(nextState.modelGroups) || vendor.models[0]?.id || 'gpt-4o'
      }
    }));

    return nextState;
  }

  private rebaseVendorDefaults(state: EstimatorRecordState, vendorId: string): void {
    const vendor = getVendorDefinition(vendorId);
    const fallbackModel = vendor.models[0];
    state.values['cloudProvider'] = this.defaultCloudProviderForVendor(vendorId);

    if (!fallbackModel) {
      return;
    }

    state.modelGroups = state.modelGroups.map((group, index) => {
      const vendorModel = vendor.models[Math.min(index, vendor.models.length - 1)] ?? fallbackModel;

      return {
        ...group,
        values: {
          ...group.values,
          modelId: vendorModel.id,
          modelLabel: vendorModel.label,
          inputTokenPrice: this.booleanValue(state.values['customPricingOverrideEnabled'])
            ? group.values['inputTokenPrice']
            : vendorModel.inputTokenPrice,
          outputTokenPrice: this.booleanValue(state.values['customPricingOverrideEnabled'])
            ? group.values['outputTokenPrice']
            : vendorModel.outputTokenPrice,
          cachedInputTokenPrice: this.booleanValue(state.values['customPricingOverrideEnabled'])
            ? group.values['cachedInputTokenPrice']
            : vendorModel.cachedInputTokenPrice,
          fallbackTarget: vendorModel.id
        }
      };
    });

    state.values['modelCatalogSelection'] = fallbackModel.id;
    state.values['fallbackModelId'] = fallbackModel.id;
    state.userGroups = state.userGroups.map((group) => ({
      ...group,
      values: {
        ...group.values,
        modelAssignment: fallbackModel.id
      }
    }));
  }

  private applyCatalogSelectionToModelGroup(
    state: EstimatorRecordState,
    modelGroupId: string,
    modelId: string,
    autoSwitchVendor: boolean
  ): void {
    const entry = getModelCatalogEntry(modelId);
    if (!entry) {
      return;
    }

    state.modelGroups = state.modelGroups.map((group) =>
      group.id === modelGroupId
        ? {
            ...group,
            values: {
              ...group.values,
              modelId: entry.id,
              modelLabel: entry.label,
              inputTokenPrice: this.booleanValue(state.values['customPricingOverrideEnabled'])
                ? group.values['inputTokenPrice']
                : entry.inputTokenPrice,
              outputTokenPrice: this.booleanValue(state.values['customPricingOverrideEnabled'])
                ? group.values['outputTokenPrice']
                : entry.outputTokenPrice,
              cachedInputTokenPrice: this.booleanValue(state.values['customPricingOverrideEnabled'])
                ? group.values['cachedInputTokenPrice']
                : entry.cachedInputTokenPrice,
              fallbackTarget: this.stringValue(group.values['fallbackTarget']) || entry.id
            }
          }
        : group
    );

    state.values['modelCatalogSelection'] = entry.id;

    if (autoSwitchVendor && entry.commercialVendorId !== this.stringValue(state.values['vendorId'])) {
      state.values['vendorId'] = entry.commercialVendorId;
      state.values['cloudProvider'] = this.defaultCloudProviderForVendor(entry.commercialVendorId);
    }
  }

  private defaultCloudProviderForVendor(vendorId: string): string {
    switch (vendorId) {
      case 'azure-openai':
      case 'azure-foundry':
        return 'azure';
      default:
        return 'none';
    }
  }

  private buildPricingDisclosure(state: EstimatorRecordState): VendorPricingDisclosure {
    const vendorId = this.stringValue(state.values['vendorId']) || 'openai';
    const vendor = getVendorDefinition(vendorId);
    const lastVerifiedDate = this.stringValue(state.values['lastVerifiedDate']) || vendor.lastVerifiedDate;
    const sourceUrls = ((state.values['pricingSourceUrls'] as string[] | null) ?? vendor.pricingSourceUrls).filter(Boolean);

    let confidenceLabel = 'Planning-grade estimate';
    let statement =
      'This estimate uses current public vendor pricing and should stay within acceptable directional variation for early sourcing review, but final commercial terms can still move with commitments, support, regional scope, and negotiated discounts.';

    switch (vendorId) {
      case 'anthropic':
        statement =
          'This estimate uses current official Anthropic pricing and should stay within acceptable directional variation for early sourcing review. Final spend can still move with prompt caching behavior, batch discounts, long-context usage, priority capacity, and negotiated enterprise terms.';
        break;
      case 'azure-openai':
        statement =
          'This estimate uses current official Azure OpenAI pricing and should stay within acceptable directional variation for early sourcing review. Microsoft states Azure prices are estimates only, so final spend can still move with region, Global or Data Zone deployment, PTUs, support plans, Azure commitments, and negotiated terms.';
        break;
      case 'azure-foundry':
        confidenceLabel = 'Directional estimate';
        statement =
          'This estimate uses current official Microsoft Foundry catalog guidance and Azure-sold model references. It is suitable for directional planning, but final spend can move materially with model provider choice, region, deployment channel, support scope, and provider-specific negotiated terms.';
        break;
      default:
        statement =
          'This estimate uses current official OpenAI pricing and should stay within acceptable directional variation for early sourcing review. Final spend can still move with reserved capacity, priority or flex processing, data residency, volume commitments, and negotiated enterprise discounts.';
        break;
    }

    return {
      vendorId,
      vendorLabel: vendor.label,
      confidenceLabel,
      statement,
      sourceUrls,
      lastVerifiedDate,
      lastVerifiedLabel: this.formatDateLabel(lastVerifiedDate)
    };
  }

  private applyUsageProfile(values: Record<string, EstimatorValue | null>, usageProfile: string): void {
    const profile = getUsageProfileDefinition(usageProfile);
    if (this.booleanValue(values['customProfileEnabled']) && usageProfile === 'custom') {
      return;
    }

    values['defaultPromptRate'] = profile.defaultPromptRate;
    values['defaultInputTokensPerPrompt'] = profile.defaultInputTokensPerPrompt;
    values['defaultOutputTokensPerPrompt'] = profile.defaultOutputTokensPerPrompt;
    values['defaultWorkdaysPerYear'] = profile.defaultWorkdaysPerYear;
    values['defaultActiveUserRate'] = profile.defaultActiveUserRate;
  }

  private normalizeModelUsage(groups: ModelGroupState[]): ModelGroupState[] {
    const enabledGroups = groups.filter((group) => this.booleanValue(group.values['enabled']));
    const total = this.modelUsageTotal(enabledGroups);
    if (!enabledGroups.length) {
      return groups;
    }

    if (total <= 0) {
      const evenShare = 1 / enabledGroups.length;
      return groups.map((group) =>
        this.booleanValue(group.values['enabled'])
          ? { ...group, values: { ...group.values, usagePercent: evenShare } }
          : group
      );
    }

    return groups.map((group) =>
      this.booleanValue(group.values['enabled'])
        ? {
            ...group,
            values: {
              ...group.values,
              usagePercent: this.percentValue(group.values['usagePercent']) / total
            }
          }
        : group
    );
  }

  private getRecord(recordId: string): ContractEstimateRecord | undefined {
    return this.records().find((record) => record.id === recordId);
  }

  private currency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }

  private compactCurrency(value: number): string {
    const absolute = Math.abs(value);
    if (absolute < 25_000) {
      return this.currency(value);
    }

    return `$${this.compactNumber(value)}`;
  }

  private formatDateLabel(value: string): string {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime())
      ? value
      : new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(parsed);
  }

  private compactQuantity(value: number): string {
    return this.compactNumber(value);
  }

  private securityAdminSummary(state: EstimatorRecordState): string {
    const overheadPercent = Math.round(this.percentValue(state.values['adminOverheadPercent']) * 100);
    const internalAdminResourceCost = Math.max(this.numberValue(state.values['internalAdminResourceCost']), 0);

    if (internalAdminResourceCost > 0 && overheadPercent > 0) {
      return `${overheadPercent}% + ${this.compactCurrency(internalAdminResourceCost)} / yr`;
    }

    if (internalAdminResourceCost > 0) {
      return `${this.compactCurrency(internalAdminResourceCost)} / yr`;
    }

    return `${overheadPercent}% overhead`;
  }

  private compactNumber(value: number): string {
    const absolute = Math.abs(value);
    const sign = value < 0 ? '-' : '';

    if (absolute < 1_000) {
      return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0
      }).format(value);
    }

    const compactDisplay =
      absolute >= 1_000_000_000
        ? { scaled: absolute / 1_000_000_000, suffix: 'B' }
        : absolute >= 1_000_000
          ? { scaled: absolute / 1_000_000, suffix: 'M' }
          : absolute >= 1_000
            ? { scaled: absolute / 1_000, suffix: 'k' }
            : { scaled: absolute, suffix: '' };

    const roundedOneDecimal = Math.round(compactDisplay.scaled * 10) / 10;
    const minimumFractionDigits = Number.isInteger(roundedOneDecimal) ? 0 : 1;
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits,
      maximumFractionDigits: 1
    }).format(roundedOneDecimal);

    return `${sign}${formatted}${compactDisplay.suffix}`;
  }

  private totalUsers(groups: UserGroupState[]): number {
    return groups.reduce((sum, group) => sum + Math.max(this.numberValue(group.values['userCount']), 0), 0);
  }

  private optionLabel(fieldKey: string, value: EstimatorValue | null): string {
    const options = STATIC_SELECT_OPTIONS[fieldKey] ?? [];
    const match = options.find((option) => option.value === value);
    return match?.label ?? this.stringValue(value) ?? 'Not set';
  }

  private vendorLabel(value: EstimatorValue | null): string {
    return this.providers.find((provider) => provider.id === value)?.label ?? this.stringValue(value) ?? 'Vendor';
  }

  private modelUsageTotal(groups: ModelGroupState[]): number {
    return groups.reduce((sum, group) => sum + this.percentValue(group.values['usagePercent']), 0);
  }

  private metricGroupScore(values: Record<string, EstimatorValue | null>, cardKey: string): number {
    const metrics = METRIC_GROUP_FIELDS[cardKey] ?? [];
    return this.weightedMetricFieldAverageForValues(values, metrics);
  }

  private weightedModelMetricValue(groups: ModelGroupState[], fieldKey: string, invert = false): number {
    const totalShare = groups.reduce((sum, group) => sum + this.percentValue(group.values['usagePercent']), 0);
    if (totalShare <= 0) {
      return this.average(groups.map((group) => this.metricValue(group.values[fieldKey], invert)));
    }

    return groups.reduce(
      (sum, group) =>
        sum + this.metricValue(group.values[fieldKey], invert) * (this.percentValue(group.values['usagePercent']) / totalShare),
      0
    );
  }

  private weightedModelMetricWeight(groups: ModelGroupState[], fieldKey: string): number {
    const totalShare = groups.reduce((sum, group) => sum + this.percentValue(group.values['usagePercent']), 0);
    if (totalShare <= 0) {
      return this.average(groups.map((group) => this.metricWeight(group.values[fieldKey])));
    }

    return groups.reduce(
      (sum, group) =>
        sum + this.metricWeight(group.values[fieldKey]) * (this.percentValue(group.values['usagePercent']) / totalShare),
      0
    );
  }

  private weightedMetricFieldAverageForModels(
    groups: ModelGroupState[],
    fieldKeys: string[],
    invertedFieldKeys: string[] = []
  ): number {
    const inverted = new Set(invertedFieldKeys);
    const weightedEntries = fieldKeys.map((fieldKey) => ({
      value: this.weightedModelMetricValue(groups, fieldKey, inverted.has(fieldKey)),
      weight: this.weightedModelMetricWeight(groups, fieldKey)
    }));

    return this.weightedAverage(weightedEntries);
  }

  private weightedMetricFieldAverageForValues(
    values: Record<string, EstimatorValue | null>,
    fieldKeys: string[],
    invertedFieldKeys: string[] = []
  ): number {
    const inverted = new Set(invertedFieldKeys);
    const weightedEntries = fieldKeys.map((fieldKey) => ({
      value: this.metricValue(values[fieldKey], inverted.has(fieldKey)),
      weight: this.metricWeight(values[fieldKey])
    }));

    return this.weightedAverage(weightedEntries);
  }

  private metricValue(value: EstimatorValue | null, invert = false): number {
    const base = this.clampFraction(this.weightedMetricValue(value).value);
    return invert ? 1 - base : base;
  }

  private metricWeight(value: EstimatorValue | null): number {
    return this.clampFraction(this.weightedMetricValue(value).weight);
  }

  private weightedMetricValue(value: EstimatorValue | null): WeightedMetricValue {
    if (!isWeightedMetricValue(value)) {
      return { value: 0.5, weight: 0.5 };
    }

    return {
      value: this.clampFraction(value.value),
      weight: this.clampFraction(value.weight)
    };
  }

  private average(values: number[]): number {
    if (!values.length) {
      return 0;
    }
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  private weightedAverage(entries: Array<{ value: number; weight: number }>): number {
    if (!entries.length) {
      return 0;
    }

    const totalWeight = entries.reduce((sum, entry) => sum + Math.max(entry.weight, 0), 0);
    if (totalWeight <= 0) {
      return this.average(entries.map((entry) => entry.value));
    }

    return entries.reduce((sum, entry) => sum + entry.value * (Math.max(entry.weight, 0) / totalWeight), 0);
  }

  private overageMultiplier(overageModel: string): number {
    switch (overageModel) {
      case 'upliftedRate':
        return 1.15;
      case 'cappedRate':
        return 0.9;
      case 'pooled':
        return 0.75;
      default:
        return 1;
    }
  }

  private mergeValues(
    current: Record<string, EstimatorValue | null>,
    patch: Record<string, EstimatorValue | null>
  ): Record<string, EstimatorValue | null> {
    const next = this.cloneValues(current);
    for (const [key, value] of Object.entries(patch)) {
      next[key] = this.copyValue(value);
    }
    return next;
  }

  private containsManualPricingOverride(patch: Record<string, EstimatorValue | null>): boolean {
    return Object.keys(patch).some((key) => MANUAL_PRICING_FIELDS.has(key));
  }

  private cloneState(state: EstimatorRecordState): EstimatorRecordState {
    return {
      values: this.cloneValues(state.values),
      userGroups: state.userGroups.map((group) => ({ ...group, values: this.cloneValues(group.values) })),
      modelGroups: state.modelGroups.map((group) => ({ ...group, values: this.cloneValues(group.values) })),
      cardSelection: { ...state.cardSelection }
    };
  }

  private cloneValues(values: Record<string, EstimatorValue | null>): Record<string, EstimatorValue | null> {
    return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, this.copyValue(value)]));
  }

  private copyValue(value: EstimatorValue | null): EstimatorValue | null {
    if (Array.isArray(value)) {
      return [...value];
    }
    if (isRoutingSplitValue(value)) {
      return { ...value };
    }
    if (isWeightedMetricValue(value)) {
      return { ...value };
    }
    return value;
  }

  private emptyNumericMap(keys: string[]): Record<string, number> {
    return Object.fromEntries(keys.map((key) => [key, 0]));
  }

  private stringValue(value: EstimatorValue | null): string {
    return typeof value === 'string' ? value : '';
  }

  private numberValue(value: EstimatorValue | null): number {
    return typeof value === 'number' && Number.isFinite(value) ? value : 0;
  }

  private booleanValue(value: EstimatorValue | null): boolean {
    return value === true;
  }

  private percentValue(value: EstimatorValue | null): number {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return this.clampFraction(value);
    }
    return 0;
  }

  private routingSplitValue(value: EstimatorValue | null): RoutingSplit {
    return isRoutingSplitValue(value) ? value : { hosted: 1, hybrid: 0, local: 0 };
  }

  private firstModelId(groups: ModelGroupState[]): string | null {
    return this.stringValue(groups[0]?.values['modelId'] ?? null) || null;
  }

  private clampFraction(value: number): number {
    return Math.min(Math.max(value, 0), 1);
  }

  private createRecordId(prefix: string): string {
    return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
  }
}
