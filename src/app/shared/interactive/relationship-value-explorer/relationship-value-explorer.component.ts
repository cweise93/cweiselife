import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import * as d3 from 'd3';
import {
  RELATIONSHIP_VALUE_DEMO_DATA,
  RelationshipGraphData,
  RelationshipLink,
  RelationshipNode,
  RelationshipNodeType
} from './relationship-value-explorer.data';

type FilterKey = 'all' | 'clients' | 'services' | 'people' | 'opportunities';

interface TooltipState {
  x: number;
  y: number;
  label: string;
  detail: string;
}

interface InsightViewModel {
  title: string;
  typeLabel: string;
  summary: string;
  currentServices?: string[];
  whiteSpaceOpportunities?: string[];
  relationshipOwner?: string;
  recommendedNextConnection?: string;
  proofPoint?: string;
  estimatedPotentialValue?: string;
}

@Component({
  selector: 'app-relationship-value-explorer',
  imports: [MatButtonModule],
  templateUrl: './relationship-value-explorer.component.html',
  styleUrl: './relationship-value-explorer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelationshipValueExplorerComponent {
  readonly title = input('Relationship-Value Explorer');
  readonly description = input(
    'Explore how client relationships, delivered services, employee expertise, and white-space opportunities connect into an actionable revenue intelligence graph.'
  );

  private readonly destroyRef = inject(DestroyRef);
  private readonly svgRef = viewChild.required<ElementRef<SVGSVGElement>>('svgHost');
  private readonly graphSurfaceRef = viewChild.required<ElementRef<HTMLDivElement>>('graphSurface');
  private readonly data = this.cloneGraphData(RELATIONSHIP_VALUE_DEMO_DATA);
  private readonly nodeMap = new Map(this.data.nodes.map((node) => [node.id, node]));
  private resizeObserver?: ResizeObserver;

  private svg?: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  private linksLayer?: d3.Selection<SVGGElement, unknown, null, undefined>;
  private nodesLayer?: d3.Selection<SVGGElement, unknown, null, undefined>;
  private labelsLayer?: d3.Selection<SVGGElement, unknown, null, undefined>;
  private simulation?: d3.Simulation<RelationshipNode, RelationshipLink>;
  private linkSelection?: d3.Selection<SVGLineElement, RelationshipLink, SVGGElement, unknown>;
  private nodeSelection?: d3.Selection<SVGCircleElement, RelationshipNode, SVGGElement, unknown>;
  private labelSelection?: d3.Selection<SVGTextElement, RelationshipNode, SVGGElement, unknown>;
  private dimensions = signal({ width: 920, height: 560 });

  readonly activeFilter = signal<FilterKey>('all');
  readonly selectedNodeId = signal<string | null>(null);
  readonly tooltip = signal<TooltipState | null>(null);

  readonly legendItems = [
    { label: 'Client', className: 'client' },
    { label: 'Service', className: 'service' },
    { label: 'Employee', className: 'employee' },
    { label: 'Relationship owner', className: 'relationship-owner' },
    { label: 'Opportunity', className: 'opportunity' },
    { label: 'Solid line = current relationship/service', className: 'current-link' },
    { label: 'Dotted line = white-space opportunity', className: 'opportunity-link' },
    { label: 'Thick line = higher value', className: 'value-link' }
  ];

  readonly filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'clients', label: 'Clients' },
    { key: 'services', label: 'Services' },
    { key: 'people', label: 'People' },
    { key: 'opportunities', label: 'Opportunities' }
  ];

  readonly selectedInsight = computed(() => this.buildInsight());

  constructor() {
    afterNextRender(() => {
      this.initializeGraph();
      this.observeGraphSurface();
    });

    effect(() => {
      this.activeFilter();
      this.selectedNodeId();
      this.applySelectionState();
    });

    this.destroyRef.onDestroy(() => {
      this.simulation?.stop();
      this.resizeObserver?.disconnect();
    });
  }

  resetSelection(): void {
    this.selectedNodeId.set(null);
    this.activeFilter.set('all');
  }

  private cloneGraphData(data: RelationshipGraphData): RelationshipGraphData {
    return {
      nodes: data.nodes.map((node) => ({ ...node })),
      links: data.links.map((link) => ({ ...link }))
    };
  }

  private initializeGraph(): void {
    const svgElement = this.svgRef().nativeElement;
    this.svg = d3.select(svgElement);
    this.svg.selectAll('*').remove();
    this.svg.on('click', () => this.selectedNodeId.set(null));

    this.linksLayer = this.svg.append('g').attr('class', 'links-layer');
    this.nodesLayer = this.svg.append('g').attr('class', 'nodes-layer');
    this.labelsLayer = this.svg.append('g').attr('class', 'labels-layer');

    this.linkSelection = this.linksLayer
      .selectAll<SVGLineElement, RelationshipLink>('line')
      .data(this.data.links)
      .join('line')
      .attr('stroke-linecap', 'round')
      .attr('stroke', (link) => this.linkColor(link))
      .attr('stroke-width', (link) => this.linkWidth(link))
      .attr('stroke-dasharray', (link) => this.linkDashArray(link))
      .attr('opacity', 0.7);

    this.nodeSelection = this.nodesLayer
      .selectAll<SVGCircleElement, RelationshipNode>('circle')
      .data(this.data.nodes)
      .join('circle')
      .attr('r', (node) => this.nodeRadius(node))
      .attr('fill', (node) => this.nodeColor(node))
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .call(
        d3
          .drag<SVGCircleElement, RelationshipNode>()
          .on('start', (event, node) => this.onDragStart(event, node))
          .on('drag', (event, node) => this.onDrag(event, node))
          .on('end', (event, node) => this.onDragEnd(event, node))
      )
      .on('click', (event, node) => {
        event.stopPropagation();
        this.selectedNodeId.set(node.id);
      })
      .on('mouseenter', (event, node) => this.onNodeEnter(event, node))
      .on('mousemove', (event, node) => this.onNodeMove(event, node))
      .on('mouseleave', () => this.tooltip.set(null));

    this.labelSelection = this.labelsLayer
      .selectAll<SVGTextElement, RelationshipNode>('text')
      .data(this.data.nodes)
      .join('text')
      .text((node) => this.shortLabel(node.label))
      .attr('font-size', 12)
      .attr('font-weight', 600)
      .attr('fill', 'var(--cw-ink)')
      .attr('paint-order', 'stroke')
      .attr('stroke', 'rgba(255, 255, 255, 0.9)')
      .attr('stroke-width', 4)
      .attr('stroke-linejoin', 'round')
      .attr('pointer-events', 'none');

    this.simulation = d3
      .forceSimulation(this.data.nodes)
      .force(
        'link',
        d3
          .forceLink<RelationshipNode, RelationshipLink>(this.data.links)
          .id((node) => node.id)
          .distance((link) => this.linkDistance(link))
          .strength((link) => link.strength ?? 0.55)
      )
      .force('charge', d3.forceManyBody<RelationshipNode>().strength(-380))
      .force('center', d3.forceCenter(this.dimensions().width / 2, this.dimensions().height / 2))
      .force('collision', d3.forceCollide<RelationshipNode>().radius((node) => this.nodeRadius(node) + 22))
      .on('tick', () => this.onTick());

    this.updateDimensions();
    this.applySelectionState();
  }

  private observeGraphSurface(): void {
    const element = this.graphSurfaceRef().nativeElement;
    const observer = new ResizeObserver(() => this.updateDimensions());
    observer.observe(element);
    this.resizeObserver = observer;
  }

  private updateDimensions(): void {
    const element = this.graphSurfaceRef().nativeElement;
    const width = Math.max(320, element.clientWidth || 920);
    const height = Math.max(360, Math.min(620, Math.round(width * 0.62)));

    this.dimensions.set({ width, height });
    this.svg?.attr('viewBox', `0 0 ${width} ${height}`).attr('width', width).attr('height', height);
    this.simulation
      ?.force('center', d3.forceCenter(width / 2, height / 2))
      .alpha(0.55)
      .restart();
  }

  private onTick(): void {
    this.linkSelection
      ?.attr('x1', (link) => (link.source as RelationshipNode).x ?? 0)
      .attr('y1', (link) => (link.source as RelationshipNode).y ?? 0)
      .attr('x2', (link) => (link.target as RelationshipNode).x ?? 0)
      .attr('y2', (link) => (link.target as RelationshipNode).y ?? 0);

    this.nodeSelection
      ?.attr('cx', (node) => node.x ?? 0)
      .attr('cy', (node) => node.y ?? 0);

    this.labelSelection
      ?.attr('x', (node) => (node.x ?? 0) + this.nodeRadius(node) + 8)
      .attr('y', (node) => (node.y ?? 0) + 4);
  }

  private onDragStart(event: d3.D3DragEvent<SVGCircleElement, RelationshipNode, RelationshipNode>, node: RelationshipNode): void {
    if (!event.active) {
      this.simulation?.alphaTarget(0.3).restart();
    }

    node.fx = node.x;
    node.fy = node.y;
  }

  private onDrag(event: d3.D3DragEvent<SVGCircleElement, RelationshipNode, RelationshipNode>, node: RelationshipNode): void {
    node.fx = event.x;
    node.fy = event.y;
  }

  private onDragEnd(event: d3.D3DragEvent<SVGCircleElement, RelationshipNode, RelationshipNode>, node: RelationshipNode): void {
    if (!event.active) {
      this.simulation?.alphaTarget(0);
    }

    node.fx = null;
    node.fy = null;
  }

  private onNodeEnter(
    event: MouseEvent,
    node: RelationshipNode
  ): void {
    this.updateTooltip(event, node);
  }

  private onNodeMove(
    event: MouseEvent,
    node: RelationshipNode
  ): void {
    this.updateTooltip(event, node);
  }

  private updateTooltip(event: MouseEvent, node: RelationshipNode): void {
    const container = this.graphSurfaceRef().nativeElement;
    const rect = container.getBoundingClientRect();
    this.tooltip.set({
      x: event.clientX - rect.left + 14,
      y: event.clientY - rect.top + 14,
      label: node.label,
      detail: this.typeLabel(node.type)
    });
  }

  private applySelectionState(): void {
    const selectedId = this.selectedNodeId();
    const connectedIds = selectedId ? this.connectedNodeIds(selectedId) : new Set<string>();

    this.nodeSelection
      ?.attr('opacity', (node) => this.nodeOpacity(node, selectedId, connectedIds))
      .attr('stroke-width', (node) => (selectedId === node.id ? 4 : 2))
      .attr('stroke', (node) => (selectedId === node.id ? 'var(--cw-accent)' : '#ffffff'));

    this.labelSelection?.attr('opacity', (node) => this.nodeOpacity(node, selectedId, connectedIds));

    this.linkSelection
      ?.attr('opacity', (link) => this.linkOpacity(link, selectedId))
      .attr('stroke-width', (link) => this.selectedLinkWidth(link, selectedId));
  }

  private nodeOpacity(node: RelationshipNode, selectedId: string | null, connectedIds: Set<string>): number {
    const filterMatch = this.matchesFilter(node);
    if (!filterMatch) {
      return 0.1;
    }

    if (!selectedId) {
      return 1;
    }

    return selectedId === node.id || connectedIds.has(node.id) ? 1 : 0.2;
  }

  private linkOpacity(link: RelationshipLink, selectedId: string | null): number {
    const sourceId = this.linkNodeId(link.source);
    const targetId = this.linkNodeId(link.target);

    const sourceNode = this.nodeMap.get(sourceId);
    const targetNode = this.nodeMap.get(targetId);

    if (!sourceNode || !targetNode || !this.matchesFilter(sourceNode) || !this.matchesFilter(targetNode)) {
      return 0.08;
    }

    if (!selectedId) {
      return 0.72;
    }

    return sourceId === selectedId || targetId === selectedId ? 0.95 : 0.12;
  }

  private selectedLinkWidth(link: RelationshipLink, selectedId: string | null): number {
    const base = this.linkWidth(link);
    if (!selectedId) {
      return base;
    }

    const sourceId = this.linkNodeId(link.source);
    const targetId = this.linkNodeId(link.target);
    return sourceId === selectedId || targetId === selectedId ? base + 1.4 : base;
  }

  private connectedNodeIds(selectedId: string): Set<string> {
    const ids = new Set<string>();

    for (const link of this.data.links) {
      const sourceId = this.linkNodeId(link.source);
      const targetId = this.linkNodeId(link.target);

      if (sourceId === selectedId) {
        ids.add(targetId);
      }

      if (targetId === selectedId) {
        ids.add(sourceId);
      }
    }

    return ids;
  }

  private linkNodeId(node: string | RelationshipNode): string {
    return typeof node === 'string' ? node : node.id;
  }

  private matchesFilter(node: RelationshipNode): boolean {
    switch (this.activeFilter()) {
      case 'clients':
        return node.type === 'client';
      case 'services':
        return node.type === 'service';
      case 'people':
        return node.type === 'employee' || node.type === 'relationshipOwner';
      case 'opportunities':
        return node.type === 'opportunity';
      default:
        return true;
    }
  }

  private nodeRadius(node: RelationshipNode): number {
    switch (node.type) {
      case 'client':
        return 20;
      case 'service':
        return 16;
      case 'relationshipOwner':
        return 18;
      case 'opportunity':
        return 18;
      case 'employee':
      default:
        return 14;
    }
  }

  private nodeColor(node: RelationshipNode): string {
    switch (node.type) {
      case 'client':
        return '#173b66';
      case 'service':
        return '#1f7c72';
      case 'employee':
        return '#6d5fd1';
      case 'relationshipOwner':
        return '#b88c21';
      case 'opportunity':
        return '#2c8d5a';
    }
  }

  private linkColor(link: RelationshipLink): string {
    switch (link.type) {
      case 'white-space-opportunity':
        return '#2c8d5a';
      case 'next-best-connection':
        return '#1f7c72';
      case 'owns-relationship':
        return '#b88c21';
      case 'delivers-service':
        return '#856fd6';
      case 'current-service':
      default:
        return '#7d93b4';
    }
  }

  private linkDashArray(link: RelationshipLink): string | null {
    switch (link.type) {
      case 'white-space-opportunity':
        return '7 7';
      case 'next-best-connection':
        return '3 6';
      default:
        return null;
    }
  }

  private linkWidth(link: RelationshipLink): number {
    const maxValue = 1800000;
    const scale = d3.scaleLinear().domain([0, maxValue]).range([1.5, 6]).clamp(true);
    return scale(link.value ?? 220000);
  }

  private linkDistance(link: RelationshipLink): number {
    switch (link.type) {
      case 'owns-relationship':
        return 120;
      case 'delivers-service':
        return 96;
      case 'next-best-connection':
        return 90;
      case 'white-space-opportunity':
        return 112;
      case 'current-service':
      default:
        return 108;
    }
  }

  private shortLabel(label: string): string {
    return label.length > 28 ? `${label.slice(0, 26)}…` : label;
  }

  private typeLabel(type: RelationshipNodeType): string {
    switch (type) {
      case 'client':
        return 'Client';
      case 'service':
        return 'Service';
      case 'employee':
        return 'Employee';
      case 'relationshipOwner':
        return 'Relationship owner';
      case 'opportunity':
        return 'Opportunity';
    }
  }

  private buildInsight(): InsightViewModel | null {
    const selectedId = this.selectedNodeId();
    if (!selectedId) {
      return null;
    }

    const selectedNode = this.nodeMap.get(selectedId);
    if (!selectedNode) {
      return null;
    }

    if (selectedNode.type === 'client') {
      const currentServices = this.connectedNodesByType(selectedId, 'service', 'current-service').map((node) => node.label);
      const opportunities = this.connectedNodesByType(selectedId, 'opportunity', 'white-space-opportunity');
      const relationshipOwner = this.connectedNodesByType(selectedId, 'relationshipOwner', 'owns-relationship')[0];
      const firstOpportunity = opportunities[0];

      return {
        title: selectedNode.label,
        typeLabel: 'Selected client',
        summary: selectedNode.description ?? 'Client selected.',
        currentServices,
        whiteSpaceOpportunities: opportunities.map((node) => node.label),
        relationshipOwner: relationshipOwner?.label,
        recommendedNextConnection: firstOpportunity?.recommendedConnection,
        proofPoint: firstOpportunity?.proofPoint,
        estimatedPotentialValue: opportunities.length
          ? this.formatCurrency(opportunities.reduce((total, item) => total + (item.value ?? 0), 0))
          : undefined
      };
    }

    if (selectedNode.type === 'opportunity') {
      const client = selectedNode.clientId ? this.nodeMap.get(selectedNode.clientId) : undefined;
      const service = selectedNode.targetServiceId ? this.nodeMap.get(selectedNode.targetServiceId) : undefined;

      return {
        title: selectedNode.label,
        typeLabel: 'Selected opportunity',
        summary: selectedNode.description ?? 'Opportunity selected.',
        currentServices: service ? [service.label] : undefined,
        relationshipOwner: client
          ? this.connectedNodesByType(client.id, 'relationshipOwner', 'owns-relationship')[0]?.label
          : undefined,
        whiteSpaceOpportunities: client ? [client.label] : undefined,
        recommendedNextConnection: selectedNode.recommendedConnection,
        proofPoint: selectedNode.proofPoint,
        estimatedPotentialValue: selectedNode.value ? this.formatCurrency(selectedNode.value) : undefined
      };
    }

    const connectedClients = this.connectedNodesByType(selectedId, 'client').map((node) => node.label);
    const connectedServices = this.connectedNodesByType(selectedId, 'service').map((node) => node.label);

    return {
      title: selectedNode.label,
      typeLabel: `Selected ${this.typeLabel(selectedNode.type).toLowerCase()}`,
      summary: selectedNode.description ?? `${this.typeLabel(selectedNode.type)} selected.`,
      currentServices: connectedServices.length ? connectedServices : undefined,
      whiteSpaceOpportunities: connectedClients.length ? connectedClients : undefined
    };
  }

  private connectedNodesByType(
    nodeId: string,
    type: RelationshipNodeType,
    linkType?: RelationshipLink['type']
  ): RelationshipNode[] {
    const nodes: RelationshipNode[] = [];

    for (const link of this.data.links) {
      if (linkType && link.type !== linkType) {
        continue;
      }

      const sourceId = this.linkNodeId(link.source);
      const targetId = this.linkNodeId(link.target);
      const otherId = sourceId === nodeId ? targetId : targetId === nodeId ? sourceId : null;

      if (!otherId) {
        continue;
      }

      const node = this.nodeMap.get(otherId);
      if (node?.type === type) {
        nodes.push(node);
      }
    }

    return nodes;
  }

  private formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  }
}
