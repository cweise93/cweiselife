import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile' | string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  updatePageMeta(config: SeoConfig): void {
    if (config.title) {
      this.title.setTitle(config.title);
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
    }

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
    }

    if (config.keywords?.length) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords.join(', ') });
    }

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    this.meta.updateTag({
      property: 'og:type',
      content: config.type || 'website'
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    if (config.url) {
      this.setCanonicalUrl(config.url);
    }
  }

  setCanonicalUrl(url: string): void {
    if (!url) return;
    let linkElement = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!linkElement) {
      linkElement = this.document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      this.document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', url);
  }

  injectJsonLd(id: string, data: Record<string, unknown>): void {
    if (!id || !data) return;
    const existing = this.document.getElementById(id);
    if (existing?.parentNode) {
      existing.parentNode.removeChild(existing);
    }
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
