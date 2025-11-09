import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '::1']);

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private initialized = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  init(measurementId: string | undefined): void {
    if (!measurementId || this.initialized) {
      return;
    }

    const win = this.document.defaultView;
    const hostname = win?.location?.hostname?.toLowerCase();

    if (!win || !hostname || LOCAL_HOSTNAMES.has(hostname)) {
      return;
    }

    this.injectRemoteScript(measurementId);
    this.injectInlineConfig(measurementId);
    this.initialized = true;
  }

  private injectRemoteScript(measurementId: string): void {
    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    this.document.head.appendChild(script);
  }

  private injectInlineConfig(measurementId: string): void {
    const inline = this.document.createElement('script');
    inline.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    this.document.head.appendChild(inline);
  }
}
