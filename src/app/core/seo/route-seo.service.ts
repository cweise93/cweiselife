import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { SeoService } from './seo.service';

@Injectable({ providedIn: 'root' })
export class RouteSeoService {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly defaultDescription = 'Operational clarity for complex organizations.';
  private readonly staticImageByPath: Record<string, string> = {
    '/': 'assets/images/home/og_home.png',
    '/writing': 'assets/images/writing/og_writing.png',
    '/frameworks': 'assets/images/frameworks/og_frameworks.png',
    '/operating-tools': 'assets/images/operating-tools/og_operating_tools.png',
    '/guides': 'assets/images/operating-tools/og_guides.png',
    '/about': 'assets/images/about/og_about.png',
    '/connect': 'assets/images/connect/og_connect.png'
  };

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(null)
      )
      .subscribe(() => {
        const leafRoute = this.getLeafRoute(this.router.routerState.snapshot.root);
        const currentPath = this.normalizePath(this.router.url || '/');

        if (this.isContentDetailPath(currentPath)) {
          return;
        }

        const title = leafRoute.title?.toString() ?? 'Operational Clarity for Complex Organizations';
        const description =
          (typeof leafRoute.data['seoDescription'] === 'string' && leafRoute.data['seoDescription']) ||
          this.defaultDescription;
        const pageMetadata = this.createStaticPageMetadata(currentPath, title, description);
        const imagePath = this.staticImageByPath[currentPath] ?? this.staticImageByPath['/'];

        this.seoService.applyPageMetadata({
          title,
          description,
          urlPath: currentPath,
          imagePath,
          imageDimensions: this.seoService.resolveImageDimensions(imagePath),
          imageAlt: title,
          type: 'website',
          pageSchemaType: pageMetadata.pageSchemaType,
          structuredData: pageMetadata.structuredData
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

  private createStaticPageMetadata(
    currentPath: string,
    title: string,
    description: string
  ): { pageSchemaType: string; structuredData?: Array<Record<string, unknown>> } {
    switch (currentPath) {
      case '/about':
        return {
          pageSchemaType: 'AboutPage',
          structuredData: this.seoService.createProfilePageStructuredData(
            title,
            description
          )
        };
      case '/connect':
        return {
          pageSchemaType: 'ContactPage'
        };
      case '/writing':
        return {
          pageSchemaType: 'CollectionPage',
          structuredData: this.seoService.createCollectionStructuredData(
            currentPath,
            title,
            description,
            []
          )
        };
      case '/frameworks':
        return {
          pageSchemaType: 'CollectionPage',
          structuredData: this.seoService.createCollectionStructuredData(
            currentPath,
            title,
            description,
            []
          )
        };
      case '/operating-tools':
        return {
          pageSchemaType: 'CollectionPage',
          structuredData: this.seoService.createCollectionStructuredData(
            currentPath,
            title,
            description,
            []
          )
        };
      default:
        return {
          pageSchemaType: 'WebPage'
        };
    }
  }

  private normalizePath(path: string): string {
    const normalized = (path || '/').split(/[?#]/, 1)[0] || '/';
    if (normalized === '/') {
      return '/';
    }

    return normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;
  }

  private isContentDetailPath(path: string): boolean {
    return (
      /^\/writing\/\d{4}\/\d{2}\/\d{2}\/[^/]+$/.test(path) ||
      /^\/frameworks\/\d{4}\/\d{2}\/\d{2}\/[^/]+$/.test(path) ||
      /^\/operating-tools\/[^/]+$/.test(path) ||
      /^\/guides\/[^/]+$/.test(path)
    );
  }
}
