import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import {
  AboutContent,
  ConnectContent,
  ContentCollectionViewModel,
  FooterContent,
  FrameworkItem,
  GuideItem,
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
  guidesContent,
  siteContent,
  writingContent
} from './content.catalog';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly siteFile$ = of(siteContent);
  private readonly writingFile$ = of(writingContent);
  private readonly frameworksFile$ = of(frameworksContent);
  private readonly guidesFile$ = of(guidesContent);
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
      featuredGuides: this.getFeaturedGuides(),
      about: this.getAboutContent()
    }).pipe(
      map(({ site, featuredWriting, featuredFrameworks, featuredGuides, about }) => ({
        meta: site.meta,
        navigation: site.navigation,
        footer: site.footer,
        connect: site.connect,
        home: site.home,
        featuredWriting,
        featuredFrameworks,
        featuredGuides,
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

  getGuidesPage(): Observable<ContentCollectionViewModel<GuideItem>> {
    return combineLatest({
      meta: this.guidesFile$.pipe(map((file) => file.meta)),
      items: this.getGuidesIndex()
    }).pipe(map(({ meta, items }) => ({ meta, items })));
  }

  getGuidesIndex(): Observable<GuideItem[]> {
    return this.guidesFile$.pipe(
      map((file) => file.items.filter((item) => isPublicContent(item.status)))
    );
  }

  getGuideBySlug(slug: string): Observable<GuideItem | null> {
    const normalized = slug.trim();

    return this.getGuidesIndex().pipe(
      map(
        (items) =>
          items.find((item) => item.slug === normalized || item.slug === `guides/${normalized}`) ?? null
      )
    );
  }

  getFeaturedGuides(limit?: number): Observable<GuideItem[]> {
    return combineLatest([this.siteFile$, this.getGuidesIndex()]).pipe(
      map(([site, items]) => resolveFeaturedItems(site.home.featuredGuideSlugs, items, limit))
    );
  }

  getAboutContent(): Observable<AboutContent> {
    return this.aboutFile$.pipe(map((file) => file.content));
  }
}
