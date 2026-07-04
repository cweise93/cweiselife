import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import {
  AboutContent,
  ConnectContent,
  ContentCollectionViewModel,
  FooterContent,
  FrameworkItem,
  OperatingToolItem,
  HomeContentViewModel,
  SiteMeta,
  SiteNavigation,
  WritingItem
} from './content.models';
import {
  sortNewestFirst,
  isPublicContent,
  resolveFeaturedItems
} from './content.mappers';
import {
  aboutContent,
  frameworksContent,
  operatingToolsContent,
  siteContent,
  writingContent
} from './content.catalog';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly siteFile$ = of(siteContent);
  private readonly writingFile$ = of(writingContent);
  private readonly frameworksFile$ = of(frameworksContent);
  private readonly operatingToolsFile$ = of(operatingToolsContent);
  private readonly aboutFile$ = of(aboutContent);

  getSiteMeta(): Observable<SiteMeta> {
    return this.siteFile$.pipe(map((file) => file.meta));
  }

  getNavigation(): Observable<SiteNavigation> {
    return this.siteFile$.pipe(map((file) => file.navigation));
  }

  getFooterContent(): Observable<FooterContent> {
    return this.siteFile$.pipe(map((file) => file.footer));
  }

  getConnectContent(): Observable<ConnectContent> {
    return this.siteFile$.pipe(map((file) => file.connect));
  }

  getHomeContent(): Observable<HomeContentViewModel> {
    return combineLatest({
      site: this.siteFile$,
      featuredWriting: this.getFeaturedWriting(),
      featuredFrameworks: this.getFeaturedFrameworks(),
      featuredOperatingTools: this.getFeaturedOperatingTools(),
      about: this.getAboutContent()
    }).pipe(
      map(({ site, featuredWriting, featuredFrameworks, featuredOperatingTools, about }) => ({
        meta: site.meta,
        navigation: site.navigation,
        footer: site.footer,
        connect: site.connect,
        home: site.home,
        featuredWriting,
        featuredFrameworks,
        featuredOperatingTools,
        about
      }))
    );
  }

  getWritingPage(): Observable<ContentCollectionViewModel<WritingItem>> {
    return combineLatest({
      meta: this.writingFile$.pipe(map((file) => file.meta)),
      items: this.getWritingIndex()
    }).pipe(map(({ meta, items }) => ({ meta, items })));
  }

  getWritingIndex(): Observable<WritingItem[]> {
    return this.writingFile$.pipe(
      map((file) => file.items.filter((item) => isPublicContent(item.status))),
      map((items) => sortNewestFirst(items))
    );
  }

  getWritingBySlug(slug: string): Observable<WritingItem | null> {
    return this.getWritingIndex().pipe(
      map((items) => items.find((item) => item.slug === slug.trim()) ?? null)
    );
  }

  getFeaturedWriting(limit?: number): Observable<WritingItem[]> {
    return combineLatest([this.siteFile$, this.getWritingIndex()]).pipe(
      map(([site, items]) => resolveFeaturedItems(site.home.featuredWritingSlugs, items, limit))
    );
  }

  getFrameworksPage(): Observable<ContentCollectionViewModel<FrameworkItem>> {
    return combineLatest({
      meta: this.frameworksFile$.pipe(map((file) => file.meta)),
      items: this.getFrameworksIndex()
    }).pipe(map(({ meta, items }) => ({ meta, items })));
  }

  getFrameworksIndex(): Observable<FrameworkItem[]> {
    return this.frameworksFile$.pipe(
      map((file) => file.items.filter((item) => isPublicContent(item.status))),
      map((items) => sortNewestFirst(items))
    );
  }

  getFrameworkBySlug(slug: string): Observable<FrameworkItem | null> {
    return this.getFrameworksIndex().pipe(
      map((items) => items.find((item) => item.slug === slug.trim()) ?? null)
    );
  }

  getFeaturedFrameworks(limit?: number): Observable<FrameworkItem[]> {
    return this.getFrameworksIndex().pipe(
      map((items) => {
        const maxItems = limit ?? 1;
        return items.slice(0, maxItems);
      })
    );
  }

  getOperatingToolsPage(): Observable<ContentCollectionViewModel<OperatingToolItem>> {
    return combineLatest({
      meta: this.operatingToolsFile$.pipe(map((file) => file.meta)),
      items: this.getOperatingToolsIndex()
    }).pipe(map(({ meta, items }) => ({ meta, items })));
  }

  getOperatingToolsIndex(): Observable<OperatingToolItem[]> {
    return this.operatingToolsFile$.pipe(
      map((file) => file.items.filter((item) => isPublicContent(item.status)))
    );
  }

  getOperatingToolBySlug(slug: string): Observable<OperatingToolItem | null> {
    const normalized = slug.trim();

    return this.getOperatingToolsIndex().pipe(
      map(
        (items) =>
          items.find((item) => item.slug === normalized || item.slug === `operating-tools/${normalized}`) ?? null
      )
    );
  }

  getFeaturedOperatingTools(limit?: number): Observable<OperatingToolItem[]> {
    return combineLatest([this.siteFile$, this.getOperatingToolsIndex()]).pipe(
      map(([site, items]) => resolveFeaturedItems(site.home.featuredOperatingToolSlugs, items, limit))
    );
  }

  getAboutContent(): Observable<AboutContent> {
    return this.aboutFile$.pipe(map((file) => file.content));
  }
}
