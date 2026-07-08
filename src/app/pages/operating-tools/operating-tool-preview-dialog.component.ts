import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OperatingToolsAssemblyTile } from './operating-tools-puzzle.component';

export interface OperatingToolPreviewDialogData {
  tools: OperatingToolsAssemblyTile[];
  initialIndex: number;
}

@Component({
  selector: 'cw-operating-tool-preview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule, MatIconModule],
  templateUrl: './operating-tool-preview-dialog.component.html',
  styleUrl: './operating-tool-preview-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatingToolPreviewDialogComponent {
  private readonly data = inject<OperatingToolPreviewDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<OperatingToolPreviewDialogComponent>);
  private readonly router = inject(Router);

  readonly currentIndex = signal(this.normalizeIndex(this.data.initialIndex));
  readonly currentTool = computed(() => this.data.tools[this.currentIndex()]!);
  readonly hasMultipleTools = computed(() => this.data.tools.length > 1);
  readonly imageExpanded = signal(false);

  previewPrevious(): void {
    this.imageExpanded.set(false);
    this.currentIndex.update((index) => this.normalizeIndex(index - 1));
  }

  previewNext(): void {
    this.imageExpanded.set(false);
    this.currentIndex.update((index) => this.normalizeIndex(index + 1));
  }

  close(): void {
    this.dialogRef.close();
  }

  openExpandedImage(): void {
    if (!this.currentTool().imageSrc) {
      return;
    }

    this.imageExpanded.set(true);
  }

  closeExpandedImage(): void {
    this.imageExpanded.set(false);
  }

  openFullTool(): void {
    const slug = this.currentTool().slug;
    this.dialogRef.close();
    void this.router.navigate(['/', ...slug.split('/').filter(Boolean)]);
  }

  private normalizeIndex(index: number): number {
    const length = this.data.tools.length;

    if (!length) {
      return 0;
    }

    return ((index % length) + length) % length;
  }
}
