import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { guidesContent, frameworksContent, siteContent, writingContent } from '../content/content.catalog';
import { SeoService } from './seo.service';

@Injectable({ providedIn: 'root' })
export class RouteSeoService {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly defaultImagePath = siteContent.home.heroImage;
  private readonly defaultDescription = siteContent.meta.description;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(null)
      )
      .subscribe(() => {
        const leafRoute = this.getLeafRoute(this.router.routerState.snapshot.root);
        const title = leafRoute.title?.toString() ?? siteContent.meta.title;
        const description =
          (typeof leafRoute.data['seoDescription'] === 'string' && leafRoute.data['seoDescription']) ||
          this.defaultDescription;

        this.seoService.applyPageMetadata({
          title,
          description,
          urlPath: this.router.url || '/',
          imagePath: this.defaultImagePath,
          imageDimensions: this.seoService.resolveImageDimensions(this.defaultImagePath),
          type: 'website'
        });
      });
  }

  private getLeafRoute(snapshot: import('@angular/router').ActivatedRouteSnapshot) {
    let current = snapshot;

    while (current.firstChild) {
      current = current.firstChild;
    }

    return current;
  }
}
