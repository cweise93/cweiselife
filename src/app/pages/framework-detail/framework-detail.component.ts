import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { CompanionAsset, CompanionCallToAction, CompanionRelatedItem, CompanionSnapshotItem, CompanionTocItem, FrameworkItem } from '../../core/content/content.models';
import { ContentRendererComponent } from '../../shared/content/content-renderer.component';
import { FrameworkStickyContextBarComponent } from '../../features/frameworks/components/framework-sticky-context-bar/framework-sticky-context-bar.component';
import { FrameworkResourceDialogComponent } from './framework-resource-dialog.component';
import { AgentGradingWorkspaceService } from '../../shared/interactive/agent-grading-calculator/agent-grading-workspace.service';
import { AiConsumptionLeverageCalculatorService } from '../../shared/interactive/ai-consumption-leverage-calculator/ai-consumption-leverage-calculator.service';
import { SeoService } from '../../core/seo/seo.service';

type WorkspaceFlagKind = 'override' | 'blocker';

interface WorkspaceFlag {
  label: string;
  kind: WorkspaceFlagKind;
}

@Component({
  selector: 'cw-framework-detail',
  imports: [
    RouterLink,
    DatePipe,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    ContentRendererComponent,
    FrameworkStickyContextBarComponent
  ],
  templateUrl: './framework-detail.component.html',
  styleUrl: './framework-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworkDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private readonly gradingWorkspace = inject(AgentGradingWorkspaceService);
  private readonly aiCostCalculator = inject(AiConsumptionLeverageCalculatorService);
  private readonly seoService = inject(SeoService);
  private observedSections: Array<{ anchor: string; element: HTMLElement }> = [];
  private readonly viewportListener = () => this.updateActiveSectionFromScroll();

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const year = params.get('year');
        const month = params.get('month');
        const day = params.get('day');
        const slug = params.get('slug');

        return year && month && day && slug ? `frameworks/${year}/${month}/${day}/${slug}` : '';
      }),
      switchMap((slug) => this.contentService.getFrameworkBySlug(slug))
    ),
    { initialValue: null as FrameworkItem | null }
  );

  readonly frameworkComponents = computed(() => this.item()?.body.components ?? []);
  readonly tocItems = computed<CompanionTocItem[]>(() => {
    const base = this.item()?.companion?.toc ?? [];
    if (!this.templateItems().length || base.some((item) => item.anchor === 'download-templates')) {
      return base;
    }

    return [...base, { label: 'Download Templates', anchor: 'download-templates' }];
  });
  readonly snapshotItems = computed<CompanionSnapshotItem[]>(() => this.item()?.companion?.snapshot ?? []);
  readonly assetItems = computed<CompanionAsset[]>(() => this.item()?.companion?.assets ?? []);
  readonly frameworkAssetItems = computed<CompanionAsset[]>(() => this.assetItems().filter((item) => item.type === 'image'));
  readonly templateItems = computed<CompanionAsset[]>(() => this.assetItems().filter((item) => item.type === 'template'));
  readonly relatedItems = computed<CompanionRelatedItem[]>(() => this.item()?.companion?.related ?? []);
  readonly callToActionItems = computed<CompanionCallToAction[]>(() => this.item()?.companion?.callsToAction ?? []);
  readonly templateActionItem = computed(
    () => this.callToActionItems().find((item) => item.action === 'open-templates') ?? null
  );
  readonly worksheetTemplate = computed(
    () => this.templateItems().find((item) => item.label.toLowerCase().includes('worksheet')) ?? null
  );
  readonly coreQuestion = computed(() => this.snapshotValue('Core question'));
  readonly workspaceScore = this.gradingWorkspace.snapshot;
  readonly hasLiveCalculator = computed(() => this.workspaceScore().totalDimensions > 0);
  readonly calculatorRailOffset = signal(0);
  readonly calculatorRailBoundaryHeight = signal(0);
  readonly calculatorOutcomesRailOffset = signal(0);
  readonly calculatorOutcomesRailBoundaryHeight = signal(0);
  readonly activeWorkspaceFlags = computed<WorkspaceFlag[]>(() => [
    ...this.workspaceScore().blockerLabels.map((label) => ({ label, kind: 'blocker' as const })),
    ...this.workspaceScore().overrideLabels.map((label) => ({ label, kind: 'override' as const }))
  ]);
  readonly hasAiCostCalculator = computed(
    () =>
      !!this.item()?.body.sections.some((section) =>
        section.blocks?.some((block) => block.type === 'component' && block.component === 'ai-consumption-leverage-calculator')
      )
  );
  readonly calculatorGutterMetrics = computed(() => {
    const metrics = this.aiCostCalculator.outputMetrics();
    return {
      primary: [metrics[0], metrics[1]].filter(Boolean),
      supporting: [metrics[4], metrics[2], metrics[3]].filter(Boolean)
    };
  });
  readonly calculatorPricingDisclosure = this.aiCostCalculator.pricingDisclosure;
  readonly fallbackSnapshotItems = computed<CompanionSnapshotItem[]>(() => {
    const framework = this.item();
    if (!framework || this.snapshotItems().length) {
      return [];
    }

    return [
      { label: 'Category', value: framework.category },
      { label: 'Published', value: framework.publishedOn },
      { label: 'Tags', value: framework.tags.join(' · ') }
    ].filter((item) => !!item.value);
  });
  readonly activeSectionAnchor = signal<string | null>(null);

  constructor() {
    effect(() => {
      const framework = this.item();
      const tocItems = this.tocItems();

      if (framework) {
        this.seoService.applyContentMetadata(framework);
      }

      if (!framework || !tocItems.length) {
        this.observedSections = [];
        this.activeSectionAnchor.set(null);
        this.calculatorRailOffset.set(0);
        this.calculatorRailBoundaryHeight.set(0);
        this.calculatorOutcomesRailOffset.set(0);
        this.calculatorOutcomesRailBoundaryHeight.set(0);
        return;
      }

      this.activeSectionAnchor.set(tocItems[0]?.anchor ?? null);
      queueMicrotask(() => this.setupObservedSections(tocItems));
    });

    this.document.defaultView?.addEventListener('scroll', this.viewportListener, { passive: true });
    this.document.defaultView?.addEventListener('resize', this.viewportListener, { passive: true });

    this.destroyRef.onDestroy(() => {
      this.document.defaultView?.removeEventListener('scroll', this.viewportListener);
      this.document.defaultView?.removeEventListener('resize', this.viewportListener);
    });
  }

  snapshotValue(label: string): string {
    const structured = this.snapshotItems().find((item) => item.label === label)?.value;
    if (structured) {
      return structured;
    }

    if (label === 'Category') {
      return this.item()?.category ?? '';
    }

    return '';
  }

  slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  scrollToSection(item: CompanionTocItem): void {
    const target = this.document.getElementById(item.anchor);
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    this.activeSectionAnchor.set(item.anchor);
  }

  selectSectionByAnchor(anchor: string): void {
    const item = this.tocItems().find((tocItem) => tocItem.anchor === anchor);
    if (item) {
      this.scrollToSection(item);
    }
  }

  openTemplateLibrary(): void {
    if (!this.templateItems().length) {
      return;
    }

    this.dialog.open(FrameworkResourceDialogComponent, {
      data: {
        mode: 'template-library',
        title: 'Download templates',
        description: 'Choose the implementation artifact you want to take with you. Downloads stay direct and the framework stays in view.',
        assets: this.templateItems()
      },
      autoFocus: false,
      maxWidth: '96vw',
      panelClass: 'cw-framework-dialog'
    });
  }

  openAsset(item: CompanionAsset): void {
    this.dialog.open(FrameworkResourceDialogComponent, {
      data: {
        mode: 'asset-preview',
        title: item.label,
        asset: item
      },
      autoFocus: false,
      maxWidth: '96vw',
      panelClass: 'cw-framework-dialog'
    });
  }

  downloadAsset(item: CompanionAsset, event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();

    const link = this.document.createElement('a');
    link.href = item.href;
    link.download = item.href.split('/').pop() ?? item.label;
    link.rel = 'noopener';
    this.document.body.appendChild(link);
    link.click();
    this.document.body.removeChild(link);
  }

  templateIcon(item: CompanionAsset): string {
    const label = item.label.toLowerCase();
    if (label.includes('worksheet')) {
      return 'table_chart';
    }
    if (label.includes('charter')) {
      return 'assignment';
    }
    if (label.includes('accounting')) {
      return 'account_balance';
    }
    if (label.includes('control')) {
      return 'fact_check';
    }
    if (label.includes('cost')) {
      return 'receipt_long';
    }

    return 'description';
  }

  exportWorkspaceJson(): void {
    this.gradingWorkspace.exportJson();
  }

  exportWorkspaceCsv(): void {
    this.gradingWorkspace.exportCsv();
  }

  workspaceFlagIcon(flag: WorkspaceFlag): string {
    const label = flag.label.toLowerCase();

    if (flag.kind === 'blocker') {
      if (label.includes('owner')) {
        return 'person_off';
      }
      if (label.includes('cost')) {
        return 'receipt_long';
      }
      if (label.includes('logging') || label.includes('evidence')) {
        return 'fact_check';
      }
      if (label.includes('security')) {
        return 'gpp_bad';
      }

      return 'report_problem';
    }

    if (label.includes('financial') || label.includes('margin') || label.includes('revenue')) {
      return 'account_balance';
    }
    if (label.includes('sox') || label.includes('regulated')) {
      return 'gavel';
    }
    if (label.includes('cybersecurity') || label.includes('restricted')) {
      return 'shield';
    }
    if (label.includes('client')) {
      return 'handshake';
    }
    if (label.includes('autonomous')) {
      return 'smart_toy';
    }

    return 'verified_user';
  }

  workspaceFlagTone(flag: WorkspaceFlag): string {
    const label = flag.label.toLowerCase();

    if (flag.kind === 'blocker') {
      return 'warning';
    }
    if (label.includes('financial') || label.includes('margin') || label.includes('revenue')) {
      return 'finance';
    }
    if (label.includes('sox') || label.includes('regulated')) {
      return 'audit';
    }
    if (label.includes('cybersecurity') || label.includes('restricted')) {
      return 'security';
    }
    if (label.includes('client')) {
      return 'client';
    }

    return 'governance';
  }

  private setupObservedSections(tocItems: CompanionTocItem[]): void {
    if (!this.document.defaultView) {
      return;
    }

    this.observedSections = tocItems
      .map((item) => {
        const element = this.document.getElementById(item.anchor);
        return element ? { anchor: item.anchor, element } : null;
      })
      .filter((item): item is { anchor: string; element: HTMLElement } => !!item);

    this.updateActiveSectionFromScroll();
  }

  private updateActiveSectionFromScroll(): void {
    if (!this.observedSections.length || !this.document.defaultView || typeof getComputedStyle !== 'function') {
      this.calculatorRailOffset.set(0);
      this.calculatorRailBoundaryHeight.set(0);
      this.calculatorOutcomesRailOffset.set(0);
      this.calculatorOutcomesRailBoundaryHeight.set(0);
      return;
    }

    const rootStyle = getComputedStyle(this.document.documentElement);
    const toolbarHeight = this.readCssPx(rootStyle.getPropertyValue('--cw-toolbar-current-height')) || 58;
    const contextHeight = this.readCssPx(rootStyle.getPropertyValue('--framework-context-bar-height')) || 98;
    const probeLine = toolbarHeight + contextHeight + 32;

    let currentAnchor = this.observedSections[0]?.anchor ?? null;

    for (const section of this.observedSections) {
      if (section.element.getBoundingClientRect().top <= probeLine) {
        currentAnchor = section.anchor;
      } else {
        break;
      }
    }

    if (currentAnchor) {
      this.activeSectionAnchor.set(currentAnchor);
    }

    const calculatorSection = this.document.getElementById('the-inline-agent-grading-calculator');
    const workspaceGrid = this.document.querySelector('.framework-workspace-grid') as HTMLElement | null;

    if (calculatorSection && workspaceGrid) {
      const calculatorRect = calculatorSection.getBoundingClientRect();
      const gridRect = workspaceGrid.getBoundingClientRect();
      this.calculatorRailOffset.set(Math.max(0, calculatorRect.top - gridRect.top));
      this.calculatorRailBoundaryHeight.set(Math.max(calculatorRect.height, 1));
    } else {
      this.calculatorRailOffset.set(0);
      this.calculatorRailBoundaryHeight.set(0);
    }

    const aiCostSection = this.document.getElementById('start-with-the-calculator-not-the-guesswork');
    if (aiCostSection && workspaceGrid) {
      const calculatorRect = aiCostSection.getBoundingClientRect();
      const gridRect = workspaceGrid.getBoundingClientRect();
      this.calculatorOutcomesRailOffset.set(Math.max(0, calculatorRect.top - gridRect.top));
      this.calculatorOutcomesRailBoundaryHeight.set(Math.max(calculatorRect.height, 1));
    } else {
      this.calculatorOutcomesRailOffset.set(0);
      this.calculatorOutcomesRailBoundaryHeight.set(0);
    }
  }

  private readCssPx(value: string): number {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
}
