import * as d3 from 'd3';

export type RelationshipNodeType =
  | 'client'
  | 'service'
  | 'employee'
  | 'relationshipOwner'
  | 'opportunity';

export interface RelationshipNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  type: RelationshipNodeType;
  strategicValue?: 'high' | 'medium' | 'low';
  value?: number;
  description?: string;
  proofPoint?: string;
  recommendedConnection?: string;
  targetServiceId?: string;
  clientId?: string;
}

export type RelationshipLinkType =
  | 'current-service'
  | 'owns-relationship'
  | 'delivers-service'
  | 'white-space-opportunity'
  | 'next-best-connection';

export interface RelationshipLink extends d3.SimulationLinkDatum<RelationshipNode> {
  source: string | RelationshipNode;
  target: string | RelationshipNode;
  type: RelationshipLinkType;
  value?: number;
  strength?: number;
  opportunityScore?: 'high' | 'medium' | 'low';
}

export interface RelationshipGraphData {
  nodes: RelationshipNode[];
  links: RelationshipLink[];
}

export const RELATIONSHIP_VALUE_DEMO_DATA: RelationshipGraphData = {
  nodes: [
    {
      id: 'client-pacific-transit-authority',
      label: 'Pacific Transit Authority',
      type: 'client',
      strategicValue: 'high',
      value: 1800000,
      description: 'High-trust transit client with strong adjacent analytics opportunity.'
    },
    {
      id: 'client-metro-water-district',
      label: 'Metro Water District',
      type: 'client',
      strategicValue: 'high',
      value: 1500000,
      description: 'Multi-service public utility client with modernization demand.'
    },
    {
      id: 'client-coastal-energy-corp',
      label: 'Coastal Energy Corp.',
      type: 'client',
      strategicValue: 'medium',
      value: 950000,
      description: 'Existing advisory client with strong compliance footprint.'
    },
    {
      id: 'client-city-of-riverside',
      label: 'City of Riverside',
      type: 'client',
      strategicValue: 'medium',
      value: 720000,
      description: 'Municipal client with public-facing delivery and engagement needs.'
    },
    {
      id: 'client-north-county-schools',
      label: 'North County Schools',
      type: 'client',
      strategicValue: 'low',
      value: 420000,
      description: 'Emerging district relationship with selective service usage.'
    },
    {
      id: 'service-environmental-consulting',
      label: 'Environmental Consulting',
      type: 'service',
      description: 'Environmental analysis, planning, and remediation support.'
    },
    {
      id: 'service-survey-mapping',
      label: 'Survey & Mapping',
      type: 'service',
      description: 'Spatial survey and mapping delivery capability.'
    },
    {
      id: 'service-permitting-compliance',
      label: 'Permitting & Compliance',
      type: 'service',
      description: 'Regulatory navigation and compliance execution.'
    },
    {
      id: 'service-gis-migration',
      label: 'GIS Migration',
      type: 'service',
      description: 'GIS platform modernization and migration delivery.'
    },
    {
      id: 'service-asset-lifecycle-analytics',
      label: 'Asset Lifecycle Analytics',
      type: 'service',
      description: 'Asset intelligence, condition modeling, and capital planning analytics.'
    },
    {
      id: 'service-public-engagement-support',
      label: 'Public Engagement Support',
      type: 'service',
      description: 'Stakeholder and public engagement delivery support.'
    },
    {
      id: 'owner-sarah-chen',
      label: 'Sarah Chen',
      type: 'relationshipOwner',
      description: 'Primary relationship owner across key infrastructure accounts.'
    },
    {
      id: 'employee-marcus-lee',
      label: 'Marcus Lee',
      type: 'employee',
      description: 'GIS practice lead and modernization specialist.'
    },
    {
      id: 'employee-priya-nair',
      label: 'Priya Nair',
      type: 'employee',
      description: 'Asset analytics lead focused on capital planning and lifecycle intelligence.'
    },
    {
      id: 'employee-david-brooks',
      label: 'David Brooks',
      type: 'employee',
      description: 'Public engagement lead with municipal delivery experience.'
    },
    {
      id: 'employee-elena-torres',
      label: 'Elena Torres',
      type: 'employee',
      description: 'Environmental consultant with strong public sector proof points.'
    },
    {
      id: 'opportunity-pacific-asset-analytics',
      label: 'Asset lifecycle analytics for Pacific Transit Authority',
      type: 'opportunity',
      value: 650000,
      strategicValue: 'high',
      description: 'Convert existing trust into a transit asset analytics expansion path.',
      proofPoint: 'Priya Nair led a similar lifecycle analytics rollout for a regional transit operator last year.',
      recommendedConnection: 'Sarah Chen should introduce Priya Nair during the next quarterly operating review.',
      targetServiceId: 'service-asset-lifecycle-analytics',
      clientId: 'client-pacific-transit-authority'
    },
    {
      id: 'opportunity-metro-gis-modernization',
      label: 'GIS modernization for Metro Water District',
      type: 'opportunity',
      value: 540000,
      strategicValue: 'high',
      description: 'Modernize fragmented GIS assets and workflows for Metro Water District.',
      proofPoint: 'Marcus Lee recently completed a comparable GIS migration for a neighboring utility district.',
      recommendedConnection: 'Sarah Chen should route Marcus Lee into a discovery session with Metro Water District operations.',
      targetServiceId: 'service-gis-migration',
      clientId: 'client-metro-water-district'
    },
    {
      id: 'opportunity-riverside-public-engagement',
      label: 'Public engagement support for City of Riverside',
      type: 'opportunity',
      value: 280000,
      strategicValue: 'medium',
      description: 'Add public engagement support to Riverside delivery programs.',
      proofPoint: 'David Brooks supported a similar municipal outreach program tied to capital works planning.',
      recommendedConnection: 'Sarah Chen should position David Brooks as the next-best connector for the city program team.',
      targetServiceId: 'service-public-engagement-support',
      clientId: 'client-city-of-riverside'
    }
  ],
  links: [
    {
      source: 'client-pacific-transit-authority',
      target: 'service-environmental-consulting',
      type: 'current-service',
      value: 950000
    },
    {
      source: 'client-pacific-transit-authority',
      target: 'service-survey-mapping',
      type: 'current-service',
      value: 850000
    },
    {
      source: 'client-metro-water-district',
      target: 'service-survey-mapping',
      type: 'current-service',
      value: 780000
    },
    {
      source: 'client-metro-water-district',
      target: 'service-permitting-compliance',
      type: 'current-service',
      value: 720000
    },
    {
      source: 'client-city-of-riverside',
      target: 'service-environmental-consulting',
      type: 'current-service',
      value: 520000
    },
    {
      source: 'client-coastal-energy-corp',
      target: 'service-permitting-compliance',
      type: 'current-service',
      value: 610000
    },
    {
      source: 'client-north-county-schools',
      target: 'service-public-engagement-support',
      type: 'current-service',
      value: 220000
    },
    {
      source: 'owner-sarah-chen',
      target: 'client-pacific-transit-authority',
      type: 'owns-relationship',
      strength: 0.9
    },
    {
      source: 'owner-sarah-chen',
      target: 'client-metro-water-district',
      type: 'owns-relationship',
      strength: 0.85
    },
    {
      source: 'owner-sarah-chen',
      target: 'client-city-of-riverside',
      type: 'owns-relationship',
      strength: 0.7
    },
    {
      source: 'employee-elena-torres',
      target: 'service-environmental-consulting',
      type: 'delivers-service',
      strength: 0.8
    },
    {
      source: 'employee-marcus-lee',
      target: 'service-gis-migration',
      type: 'delivers-service',
      strength: 0.85
    },
    {
      source: 'employee-priya-nair',
      target: 'service-asset-lifecycle-analytics',
      type: 'delivers-service',
      strength: 0.88
    },
    {
      source: 'employee-david-brooks',
      target: 'service-public-engagement-support',
      type: 'delivers-service',
      strength: 0.8
    },
    {
      source: 'opportunity-pacific-asset-analytics',
      target: 'client-pacific-transit-authority',
      type: 'white-space-opportunity',
      value: 650000,
      opportunityScore: 'high'
    },
    {
      source: 'opportunity-pacific-asset-analytics',
      target: 'service-asset-lifecycle-analytics',
      type: 'white-space-opportunity',
      value: 650000,
      opportunityScore: 'high'
    },
    {
      source: 'employee-priya-nair',
      target: 'opportunity-pacific-asset-analytics',
      type: 'next-best-connection',
      value: 650000
    },
    {
      source: 'opportunity-metro-gis-modernization',
      target: 'client-metro-water-district',
      type: 'white-space-opportunity',
      value: 540000,
      opportunityScore: 'high'
    },
    {
      source: 'opportunity-metro-gis-modernization',
      target: 'service-gis-migration',
      type: 'white-space-opportunity',
      value: 540000,
      opportunityScore: 'high'
    },
    {
      source: 'employee-marcus-lee',
      target: 'opportunity-metro-gis-modernization',
      type: 'next-best-connection',
      value: 540000
    },
    {
      source: 'opportunity-riverside-public-engagement',
      target: 'client-city-of-riverside',
      type: 'white-space-opportunity',
      value: 280000,
      opportunityScore: 'medium'
    },
    {
      source: 'opportunity-riverside-public-engagement',
      target: 'service-public-engagement-support',
      type: 'white-space-opportunity',
      value: 280000,
      opportunityScore: 'medium'
    },
    {
      source: 'employee-david-brooks',
      target: 'opportunity-riverside-public-engagement',
      type: 'next-best-connection',
      value: 280000
    }
  ]
};
