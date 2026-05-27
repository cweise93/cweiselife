import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { CompanionSnapshotItem, CompanionTocItem } from '../../../../core/content/content.models';

@Component({
  selector: 'app-framework-sticky-context-bar',
  imports: [MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatProgressBarModule, MatSelectModule],
  templateUrl: './framework-sticky-context-bar.component.html',
  styleUrl: './framework-sticky-context-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworkStickyContextBarComponent {
  readonly snapshot = input<CompanionSnapshotItem[]>([]);
  readonly toc = input<CompanionTocItem[]>([]);
  readonly activeAnchor = input<string | null>(null);
  readonly sectionSelected = output<string>();
  readonly contextExpanded = signal(false);

  readonly category = computed(() => this.snapshotValue('Category'));
  readonly bestFor = computed(() => this.snapshotValue('Best for'));
  readonly primaryArtifact = computed(() => this.snapshotValue('Primary artifact'));
  readonly method = computed(() => this.snapshotValue('Method'));
  readonly currentSectionIndex = computed(() => {
    const active = this.activeAnchor();
    const sections = this.toc();
    const index = sections.findIndex((item) => item.anchor === active);
    return index >= 0 ? index + 1 : sections.length ? 1 : 0;
  });
  readonly progressLabel = computed(() => `${this.currentSectionIndex()}/${this.toc().length || 0} sections`);
  readonly progressValue = computed(() => {
    const total = this.toc().length;
    return total ? (this.currentSectionIndex() / total) * 100 : 0;
  });

  snapshotValue(label: string): string {
    return this.snapshot().find((item) => item.label === label)?.value ?? '—';
  }

  toggleExpanded(): void {
    this.contextExpanded.update((expanded) => !expanded);
  }

  selectSection(anchor: string | null): void {
    if (!anchor) {
      return;
    }

    this.sectionSelected.emit(anchor);
  }
}
