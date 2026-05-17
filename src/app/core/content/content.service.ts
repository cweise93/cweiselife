import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, Observable, of, shareReplay, catchError } from 'rxjs';
import {
  AboutContent,
  ConnectContent,
  ContentCollectionViewModel,
  FooterContent,
  FrameworkItem,
  HomeContentViewModel,
  InitiativeItem,
  SiteMeta,
  SiteNavigation,
  WritingItem
} from './content.models';
import {
  FALLBACK_ABOUT_CONTENT,
  FALLBACK_FRAMEWORK_CONTENT,
  FALLBACK_INITIATIVE_CONTENT,
  FALLBACK_SITE_CONTENT,
  FALLBACK_WRITING_CONTENT,
  isPublicContent,
  mapAboutFile,
  mapFrameworkFile,
  mapInitiativeFile,
  mapSiteFile,
  mapWritingFile,
  resolveFeaturedItems,
  sortNewestFirst
} from './content.mappers';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);

  private readonly siteFile$ = this.loadFile('assets/content/site.json', FALLBACK_SITE_CONTENT, mapSiteFile);
  private readonly writingFile$ = this.loadFile('assets/content/writing.json', FALLBACK_WRITING_CONTENT, mapWritingFile);
  private readonly frameworksFile$ = this.loadFile('assets/content/frameworks.json', FALLBACK_FRAMEWORK_CONTENT, mapFrameworkFile);
  private readonly initiativesFile$ = this.loadFile('assets/content/initiatives.json', FALLBACK_INITIATIVE_CONTENT, mapInitiativeFile);
  private readonly aboutFile$ = this.loadFile('assets/content/about.json', FALLBACK_ABOUT_CONTENT, mapAboutFile);

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
      featuredInitiatives: this.getFeaturedInitiatives(),
      about: this.getAboutContent()
    }).pipe(
      map(({ site, featuredWriting, featuredFrameworks, featuredInitiatives, about }) => ({
        meta: site.meta,
        navigation: site.navigation,
        footer: site.footer,
        connect: site.connect,
        home: site.home,
        featuredWriting,
        featuredFrameworks,
        featuredInitiatives,
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
    return combineLatest([this.siteFile$, this.getFrameworksIndex()]).pipe(
      map(([site, items]) => resolveFeaturedItems(site.home.featuredFrameworkSlugs, items, limit))
    );
  }

  getInitiativesPage(): Observable<ContentCollectionViewModel<InitiativeItem>> {
    return combineLatest({
      meta: this.initiativesFile$.pipe(map((file) => file.meta)),
      items: this.getInitiativesIndex()
    }).pipe(map(({ meta, items }) => ({ meta, items })));
  }

  getInitiativesIndex(): Observable<InitiativeItem[]> {
    return this.initiativesFile$.pipe(
      map((file) => file.items.filter((item) => isPublicContent(item.status)))
    );
  }

  getInitiativeBySlug(slug: string): Observable<InitiativeItem | null> {
    return this.getInitiativesIndex().pipe(
      map((items) => items.find((item) => item.slug === slug.trim()) ?? null)
    );
  }

  getFeaturedInitiatives(limit?: number): Observable<InitiativeItem[]> {
    return combineLatest([this.siteFile$, this.getInitiativesIndex()]).pipe(
      map(([site, items]) => resolveFeaturedItems(site.home.featuredInitiativeSlugs, items, limit))
    );
  }

  getAboutContent(): Observable<AboutContent> {
    return this.aboutFile$.pipe(map((file) => file.content));
  }

  private loadFile<TInput, TOutput>(
    path: string,
    fallback: TOutput,
    mapper: (value: TInput | TOutput) => TOutput
  ): Observable<TOutput> {
    return this.http.get<TInput>(path).pipe(
      map((value) => mapper(value)),
      catchError((error: unknown) => {
        console.error(`Content file failed to load: ${path}`, error);
        return of(fallback);
      }),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
