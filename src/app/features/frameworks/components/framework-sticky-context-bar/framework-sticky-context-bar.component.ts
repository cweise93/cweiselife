import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CompanionSnapshotItem, CompanionTocItem } from '../../../../core/content/content.models';

@Component({
  selector: 'app-framework-sticky-context-bar',
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './framework-sticky-context-bar.component.html',
  styleUrl: './framework-sticky-context-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworkStickyContextBarComponent {
  readonly snapshot = input<CompanionSnapshotItem[]>([]);
  readonly toc = input<CompanionTocItem[]>([]);
  readonly activeAnchor = input<string | null>(null);
  readonly activeLabel = input<string | null>(null);
  readonly sectionSelected = output<CompanionTocItem>();

  readonly category = computed(() => this.snapshotValue('Category'));
  readonly bestFor = computed(() => this.snapshotValue('Best for'));
  readonly primaryArtifact = computed(() => this.snapshotValue('Primary artifact'));
  readonly method = computed(() => this.snapshotValue('Method'));
  readonly currentSectionLabel = computed(() => this.activeLabel() || this.toc()[0]?.label || 'Overview');

  snapshotValue(label: string): string {
    return this.snapshot().find((item) => item.label === label)?.value ?? '—';
  }

  selectSection(item: CompanionTocItem): void {
    this.sectionSelected.emit(item);
  }
}
