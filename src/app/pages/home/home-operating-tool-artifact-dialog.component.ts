import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface HomeOperatingToolArtifactDialogData {
  title: string;
  description: string;
  imageSrc: string;
}

@Component({
  selector: 'cw-home-operating-tool-artifact-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './home-operating-tool-artifact-dialog.component.html',
  styleUrl: './home-operating-tool-artifact-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeOperatingToolArtifactDialogComponent {
  readonly data = inject<HomeOperatingToolArtifactDialogData>(MAT_DIALOG_DATA);
  private readonly document = inject(DOCUMENT);

  @ViewChild('artifactFrame') private readonly artifactFrame?: ElementRef<HTMLElement>;

  printArtifact(): void {
    const printWindow = this.document.defaultView?.open('', '_blank', 'noopener,noreferrer');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>${this.data.title}</title>
          <style>
            body { margin: 0; padding: 24px; background: #ffffff; }
            img { display: block; width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <img src="${this.data.imageSrc}" alt="${this.data.title}" />
          <script>
            window.onload = function () { window.print(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }

  async enterFullscreen(): Promise<void> {
    const element = this.artifactFrame?.nativeElement;
    if (element?.requestFullscreen) {
      await element.requestFullscreen();
      return;
    }

    this.document.defaultView?.open(this.data.imageSrc, '_blank', 'noopener,noreferrer');
  }
}
