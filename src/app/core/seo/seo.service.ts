import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FrameworkItem, GuideItem, WritingItem } from '../content/content.models';
import { IMAGE_DIMENSIONS_BY_PATH, ImageDimensions } from './image-dimensions';

export interface PageMetadata {
  title: string;
  description: string;
  urlPath: string;
  imagePath?: string;
  imageDimensions?: ImageDimensions;
  type: 'article' | 'website';
}

type ContentMetadataSource = Pick<WritingItem, 'slug' | 'seo' | 'heroImage' | 'productionAssets'> &
  Partial<Pick<FrameworkItem, 'diagramImage'>>;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly baseUrl = 'https://cweise.com';

  applyPageMetadata(metadata: PageMetadata): void {
    const absoluteUrl = this.toAbsoluteUrl(metadata.urlPath);
    const absoluteImageUrl = metadata.imagePath ? this.toAbsoluteUrl(metadata.imagePath) : undefined;
    const imageDimensions = metadata.imageDimensions ?? this.resolveImageDimensions(metadata.imagePath);

    this.title.setTitle(metadata.title);

    this.updateMetaTag('name', 'description', metadata.description);
    this.updateMetaTag('property', 'og:type', metadata.type);
    this.updateMetaTag('property', 'og:title', metadata.title);
    this.updateMetaTag('property', 'og:description', metadata.description);
    this.updateMetaTag('property', 'og:url', absoluteUrl);
    this.updateMetaTag('name', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('name', 'twitter:title', metadata.title);
    this.updateMetaTag('name', 'twitter:description', metadata.description);

    if (absoluteImageUrl) {
      this.updateMetaTag('property', 'og:image', absoluteImageUrl);
      this.updateMetaTag('name', 'twitter:image', absoluteImageUrl);
    }

    if (imageDimensions) {
      this.updateMetaTag('property', 'og:image:width', `${imageDimensions.width}`);
      this.updateMetaTag('property', 'og:image:height', `${imageDimensions.height}`);
    }

    this.updateCanonicalLink(absoluteUrl);
  }

  applyContentMetadata(source: ContentMetadataSource): void {
    const imagePath = source.productionAssets?.socialImage?.href ?? source.heroImage ?? source.diagramImage;

    this.applyPageMetadata({
      title: source.seo.title,
      description: source.seo.description,
      urlPath: source.slug,
      imagePath,
      imageDimensions: this.resolveImageDimensions(imagePath),
      type: 'article'
    });
  }

  toAbsoluteUrl(path: string): string {
    if (!path) {
      return this.baseUrl;
    }

    if (/^https?:\/\//i.test(path)) {
      return path;
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return new URL(normalizedPath, `${this.baseUrl}/`).toString();
  }

  resolveImageDimensions(imagePath?: string): ImageDimensions | undefined {
    if (!imagePath) {
      return undefined;
    }

    return IMAGE_DIMENSIONS_BY_PATH[imagePath];
  }

  private updateMetaTag(attribute: 'name' | 'property', selector: string, content: string): void {
    this.meta.updateTag({ [attribute]: selector, content });
  }

  private updateCanonicalLink(href: string): void {
    let link = this.document.head.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', href);
  }
}
