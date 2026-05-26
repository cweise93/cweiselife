import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CompanionAsset } from '../../core/content/content.models';

export interface FrameworkResourceDialogData {
  mode: 'asset-preview' | 'template-library';
  title: string;
  description?: string;
  asset?: CompanionAsset;
  assets?: CompanionAsset[];
}

@Component({
  selector: 'cw-framework-resource-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './framework-resource-dialog.component.html',
  styleUrl: './framework-resource-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworkResourceDialogComponent {
  readonly data = inject<FrameworkResourceDialogData>(MAT_DIALOG_DATA);
  private readonly document = inject(DOCUMENT);

  isImageAsset(asset: CompanionAsset): boolean {
    return asset.type === 'image' || /\.(png|jpe?g|webp|gif|svg)$/i.test(asset.href);
  }

  fileName(href: string): string {
    return href.split('/').pop() ?? href;
  }

  fileTypeLabel(asset: CompanionAsset): string {
    if (asset.type === 'template') {
      return this.fileExtension(asset.href).toUpperCase() + ' template';
    }

    if (asset.type === 'image') {
      return this.fileExtension(asset.href).toUpperCase() + ' image';
    }

    if (asset.type) {
      return asset.type.toUpperCase();
    }

    return this.fileExtension(asset.href).toUpperCase();
  }

  downloadAsset(asset: CompanionAsset): void {
    const link = this.document.createElement('a');
    link.href = asset.href;
    link.download = this.fileName(asset.href);
    link.rel = 'noopener';
    this.document.body.appendChild(link);
    link.click();
    this.document.body.removeChild(link);
  }

  private fileExtension(href: string): string {
    const match = href.match(/\.([a-z0-9]+)(?:$|\?)/i);
    return match?.[1]?.toLowerCase() ?? 'file';
  }
}
