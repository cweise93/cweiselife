import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { siteContent } from '../../core/content/content.catalog';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'cw-legacy-guides-redirect',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="cw-section">
      <div class="cw-container">
        <p class="cw-eyebrow">Operating Tools</p>
        <h1>Redirecting to Operating Tools</h1>
        <p class="cw-muted">
          This path has moved. Continue to
          <a [routerLink]="redirectPath()">{{ redirectPath() }}</a>.
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegacyGuidesRedirectComponent {
  private readonly document = inject(DOCUMENT);
  private readonly route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly seoService = inject(SeoService);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: ''
  });

  readonly redirectPath = computed(() =>
    this.slug() ? `/operating-tools/${this.slug()}` : '/operating-tools'
  );

  constructor() {
    effect(() => {
      const redirectPath = this.redirectPath();
      this.updateMetaRefresh(redirectPath);
      this.seoService.applyPageMetadata({
        title: this.slug() ? 'Operating Tool | cweise.com' : 'Operating Tools | cweise.com',
        description: siteContent.meta.description,
        urlPath: redirectPath,
        imagePath: siteContent.home.heroImage,
        imageDimensions: this.seoService.resolveImageDimensions(siteContent.home.heroImage),
        imageAlt: this.slug() ? 'Operating Tool | cweise.com' : 'Operating Tools | cweise.com',
        type: 'website'
      });

      if (isPlatformBrowser(this.platformId)) {
        queueMicrotask(() => this.document.defaultView?.location.replace(redirectPath));
      }
    });
  }

  private updateMetaRefresh(path: string): void {
    let meta = this.document.head.querySelector('meta[http-equiv="refresh"]');

    if (!meta) {
      meta = this.document.createElement('meta');
      meta.setAttribute('http-equiv', 'refresh');
      this.document.head.appendChild(meta);
    }

    meta.setAttribute('content', `0; url=${path}`);
  }
}
