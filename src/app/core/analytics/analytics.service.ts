import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private initialized = false;
  private lastTrackedPath = '';

  initialize(): void {
    if (this.initialized || !environment.analytics.enabled || !this.isBrowser()) {
      return;
    }

    this.initialized = true;
    this.installGtag();
    this.trackRouteChanges();
  }

  private installGtag(): void {
    const measurementId = environment.analytics.measurementId;
    const inlineScript = this.document.createElement('script');
    inlineScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = window.gtag || gtag;
      gtag('js', new Date());
      gtag('config', '${measurementId}', { send_page_view: false });
    `;
    this.document.head.appendChild(inlineScript);

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    this.document.head.appendChild(script);
  }

  private trackRouteChanges(): void {
    const subscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.sendPageView());

    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    queueMicrotask(() => this.sendPageView());
  }

  private sendPageView(): void {
    const measurementId = environment.analytics.measurementId;
    const location = this.document.location?.href ?? '';
    const path = `${this.document.location?.pathname ?? ''}${this.document.location?.search ?? ''}`;
    const title = this.document.title;

    if (!path || this.lastTrackedPath === path) {
      return;
    }

    this.lastTrackedPath = path;

    window.gtag?.('event', 'page_view', {
      send_to: measurementId,
      page_title: title,
      page_location: location,
      page_path: path
    });
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!this.document.defaultView;
  }
}
