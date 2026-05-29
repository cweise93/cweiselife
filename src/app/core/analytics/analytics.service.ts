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
    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    this.document.head.appendChild(script);

    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });
  }

  private trackRouteChanges(): void {
    const subscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.sendPageView());

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  private sendPageView(): void {
    const measurementId = environment.analytics.measurementId;
    const location = this.document.location?.href ?? '';
    const path = `${this.document.location?.pathname ?? ''}${this.document.location?.search ?? ''}`;
    const title = this.document.title;

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
