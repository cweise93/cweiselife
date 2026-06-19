import { DOCUMENT } from '@angular/common';
import { Component, effect, HostListener, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { combineLatest, map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { GuideItem } from '../../core/content/content.models';
import { SeoService } from '../../core/seo/seo.service';

interface GuideArtifact {
  src: string;
  alt: string;
  title: string;
  caption?: string;
}

@Component({
  selector: 'cw-guide-detail',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule],
  templateUrl: './guide-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './guide-detail.component.scss'
})
export class GuideDetailComponent {
  private readonly document = inject(DOCUMENT);
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);
  private readonly seoService = inject(SeoService);
  readonly activeArtifact = signal<GuideArtifact | null>(null);

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      switchMap((slug) => this.contentService.getGuideBySlug(slug))
    ),
    { initialValue: null as GuideItem | null }
  );

  readonly relatedGuides = toSignal(
    combineLatest([
      this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
      this.contentService.getGuidesIndex()
    ]).pipe(
      map(([slug, guides]) =>
        guides
          .filter((guide) => guide.slug !== slug && guide.slug !== `guides/${slug}`)
          .slice(0, 3)
      )
    ),
    { initialValue: [] as GuideItem[] }
  );

  constructor() {
    effect(() => {
      const item = this.item();

      if (item) {
        this.seoService.applyContentMetadata(item);
      }
    });
  }

  getGuideRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  openArtifact(guide: GuideItem): void {
    if (!guide.heroImage) {
      return;
    }

    this.activeArtifact.set({
      src: guide.heroImage,
      alt: guide.title,
      title: guide.title,
      caption: guide.body.intro
    });
  }

  closeArtifact(): void {
    this.activeArtifact.set(null);

    if (this.document.fullscreenElement) {
      void this.document.exitFullscreen().catch(() => undefined);
    }
  }

  printArtifact(): void {
    const artifact = this.activeArtifact();
    const popup = artifact ? window.open('', '_blank', 'noopener,noreferrer,width=1200,height=900') : null;

    if (!artifact || !popup) {
      return;
    }

    popup.document.write(`
      <html>
        <head>
          <title>${artifact.title}</title>
          <style>
            body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0b1420; color: #fff; }
            main { min-height: 100vh; display: grid; place-items: center; padding: 24px; box-sizing: border-box; }
            img { max-width: 100%; max-height: calc(100vh - 96px); height: auto; display: block; box-shadow: 0 24px 60px rgba(0,0,0,.35); }
            p { margin: 16px 0 0; color: rgba(255,255,255,.72); text-align: center; }
            @media print { body { background: #fff; color: #000; } main { padding: 0; } img { max-height: none; box-shadow: none; } p { color: #444; } }
          </style>
        </head>
        <body>
          <main>
            <div>
              <img src="${artifact.src}" alt="${artifact.alt}">
              ${artifact.caption ? `<p>${artifact.caption}</p>` : ''}
            </div>
          </main>
        </body>
      </html>
    `);
    popup.document.close();
    popup.focus();
    popup.print();
  }

  async openArtifactFullscreen(): Promise<void> {
    const stage = this.document.getElementById('guide-artifact-stage');

    if (!stage || !('requestFullscreen' in stage)) {
      return;
    }

    await (stage as HTMLElement).requestFullscreen();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.activeArtifact()) {
      this.closeArtifact();
    }
  }
}
