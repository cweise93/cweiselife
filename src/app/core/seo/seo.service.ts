import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FrameworkItem, OperatingToolItem, WritingItem } from '../content/content.models';
import siteContentJson from '../../../assets/content/site.json';
import { mapSiteFile } from '../content/content.mappers';
import { IMAGE_DIMENSIONS_BY_PATH, ImageDimensions } from './image-dimensions';

export interface PageMetadata {
  title: string;
  description: string;
  urlPath: string;
  documentTitle?: string;
  imagePath?: string;
  imageAlt?: string;
  imageDimensions?: ImageDimensions;
  keywords?: string[];
  section?: string;
  type: 'article' | 'website';
  pageSchemaType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Array<Record<string, unknown>>;
}

type ContentMetadataSource = WritingItem | FrameworkItem | OperatingToolItem;
const siteContent = mapSiteFile(siteContentJson);

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly baseUrl = siteContent.meta.siteUrl.replace(/\/+$/, '');
  private readonly siteName = siteContent.meta.siteName;
  private readonly authorName = siteContent.meta.author;
  private readonly authorPath = '/about';
  private readonly authorSameAs = siteContent.navigation.social
    .map((link) => link.url)
    .filter((url) => /^https?:\/\//i.test(url));
  private readonly siteLogoPath = 'assets/images/cweise_logo_light_mode.svg';

  applyPageMetadata(metadata: PageMetadata): void {
    const absoluteUrl = this.toAbsoluteUrl(metadata.urlPath);
    const absoluteImageUrl = metadata.imagePath ? this.toAbsoluteUrl(metadata.imagePath) : undefined;
    const imageDimensions = metadata.imageDimensions ?? this.resolveImageDimensions(metadata.imagePath);
    const imageMimeType = this.resolveImageMimeType(metadata.imagePath);
    const graph = this.buildBaseStructuredData(metadata, absoluteUrl, absoluteImageUrl);

    this.title.setTitle(metadata.documentTitle ?? metadata.title);

    this.updateMetaTag('name', 'description', metadata.description);
    this.updateMetaTag('name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    this.updateMetaTag('name', 'author', this.authorName);
    this.updateMetaTag('property', 'og:type', metadata.type);
    this.updateMetaTag('property', 'og:site_name', this.siteName);
    this.updateMetaTag('property', 'og:locale', 'en_US');
    this.updateMetaTag('property', 'og:title', metadata.title);
    this.updateMetaTag('property', 'og:description', metadata.description);
    this.updateMetaTag('property', 'og:url', absoluteUrl);
    this.updateMetaTag('name', 'twitter:card', 'summary_large_image');
    this.updateMetaTag('name', 'twitter:title', metadata.title);
    this.updateMetaTag('name', 'twitter:description', metadata.description);

    if (absoluteImageUrl) {
      this.updateMetaTag('property', 'og:image', absoluteImageUrl);
      this.updateMetaTag('property', 'og:image:url', absoluteImageUrl);
      this.updateMetaTag('property', 'og:image:secure_url', absoluteImageUrl);
      this.updateMetaTag('property', 'og:image:alt', metadata.imageAlt ?? metadata.title);
      this.updateMetaTag('name', 'twitter:image', absoluteImageUrl);
      this.updateMetaTag('name', 'twitter:image:alt', metadata.imageAlt ?? metadata.title);

      if (imageMimeType) {
        this.updateMetaTag('property', 'og:image:type', imageMimeType);
      } else {
        this.removeMetaTag('property', 'og:image:type');
      }
    } else {
      this.removeMetaTag('property', 'og:image');
      this.removeMetaTag('property', 'og:image:url');
      this.removeMetaTag('property', 'og:image:secure_url');
      this.removeMetaTag('property', 'og:image:alt');
      this.removeMetaTag('property', 'og:image:type');
      this.removeMetaTag('name', 'twitter:image');
      this.removeMetaTag('name', 'twitter:image:alt');
    }

    if (imageDimensions) {
      this.updateMetaTag('property', 'og:image:width', `${imageDimensions.width}`);
      this.updateMetaTag('property', 'og:image:height', `${imageDimensions.height}`);
    } else {
      this.removeMetaTag('property', 'og:image:width');
      this.removeMetaTag('property', 'og:image:height');
    }

    this.setOptionalMetaTag('property', 'article:published_time', metadata.publishedTime);
    this.setOptionalMetaTag('property', 'article:modified_time', metadata.modifiedTime ?? metadata.publishedTime);
    this.setOptionalMetaTag('property', 'article:section', metadata.type === 'article' ? metadata.section : undefined);
    this.setOptionalMetaTag('name', 'keywords', metadata.keywords?.length ? metadata.keywords.join(', ') : undefined);
    this.updateArticleTags(metadata.type === 'article' ? metadata.keywords : undefined);
    this.updateCanonicalLink(absoluteUrl);
    this.updateStructuredData(graph);
  }

  applyContentMetadata(source: ContentMetadataSource): void {
    const imagePath =
      source.productionAssets?.socialImage?.href ??
      source.heroImage ??
      ('diagramImage' in source ? source.diagramImage : undefined);
    const section =
      source.slug.startsWith('writing/')
        ? 'Writing'
        : source.slug.startsWith('frameworks/')
          ? ('category' in source ? source.category || 'Frameworks' : 'Frameworks')
          : 'Operating Tools';

    this.applyPageMetadata({
      title: source.seo.title,
      documentTitle: source.slug.startsWith('operating-tools/')
        ? `${source.seo.title} | Operating Tools | ${this.siteName}`
        : `${source.seo.title} | ${this.siteName}`,
      description: source.seo.description,
      urlPath: source.slug,
      imagePath,
      imageAlt: source.title,
      imageDimensions: this.resolveImageDimensions(imagePath),
      keywords: source.tags,
      section,
      type: 'article',
      publishedTime: 'publishedOn' in source ? source.publishedOn : undefined,
      structuredData: [
        this.createContentStructuredData(source, imagePath),
        this.createBreadcrumbStructuredData(source.slug, source.title)
      ]
    });
  }

  createCollectionStructuredData(
    urlPath: string,
    title: string,
    description: string,
    items: Array<{ slug: string; title: string }>
  ): Array<Record<string, unknown>> {
    const absoluteUrl = this.toAbsoluteUrl(urlPath);
    const itemListId = `${absoluteUrl}#item-list`;

    return [
      {
        '@type': 'CollectionPage',
        '@id': `${absoluteUrl}#collection-page`,
        url: absoluteUrl,
        name: title,
        description,
        isPartOf: { '@id': `${this.baseUrl}/#website` },
        mainEntity: { '@id': itemListId },
        about: { '@id': `${this.toAbsoluteUrl(this.authorPath)}#person` },
        inLanguage: 'en-US'
      },
      {
        '@type': 'ItemList',
        '@id': itemListId,
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: this.toAbsoluteUrl(item.slug),
          name: item.title
        }))
      }
    ];
  }

  createProfilePageStructuredData(title: string, description: string): Array<Record<string, unknown>> {
    const absoluteUrl = this.toAbsoluteUrl(this.authorPath);

    return [
      {
        '@type': 'ProfilePage',
        '@id': `${absoluteUrl}#profile-page`,
        url: absoluteUrl,
        name: title,
        description,
        isPartOf: { '@id': `${this.baseUrl}/#website` },
        mainEntity: { '@id': `${absoluteUrl}#person` },
        inLanguage: 'en-US'
      }
    ];
  }

  toAbsoluteUrl(path: string): string {
    if (!path) {
      return `${this.baseUrl}/`;
    }

    if (/^https?:\/\//i.test(path)) {
      return path;
    }

    const [pathname, search = ''] = path.split(/([?#].*)/, 2);
    const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
    const hasExtension = /\.[a-z0-9]+$/i.test(normalizedPath);
    const canonicalPath =
      normalizedPath === '/' || hasExtension || normalizedPath.endsWith('/')
        ? normalizedPath
        : `${normalizedPath}/`;

    return new URL(`${canonicalPath}${search}`, `${this.baseUrl}/`).toString();
  }

  resolveImageDimensions(imagePath?: string): ImageDimensions | undefined {
    if (!imagePath) {
      return undefined;
    }

    return IMAGE_DIMENSIONS_BY_PATH[imagePath];
  }

  private resolveImageMimeType(imagePath?: string): string | undefined {
    if (!imagePath) {
      return undefined;
    }

    const extension = imagePath.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'png':
        return 'image/png';
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'webp':
        return 'image/webp';
      case 'svg':
        return 'image/svg+xml';
      default:
        return undefined;
    }
  }

  private updateMetaTag(attribute: 'name' | 'property', selector: string, content: string): void {
    this.meta.updateTag({ [attribute]: selector, content });
  }

  private setOptionalMetaTag(attribute: 'name' | 'property', selector: string, content?: string): void {
    if (content) {
      this.updateMetaTag(attribute, selector, content);
      return;
    }

    this.removeMetaTag(attribute, selector);
  }

  private removeMetaTag(attribute: 'name' | 'property', selector: string): void {
    this.meta.removeTag(`${attribute}="${selector}"`);
  }

  private updateArticleTags(tags?: string[]): void {
    for (const tag of this.meta.getTags('property="article:tag"')) {
      this.meta.removeTagElement(tag);
    }

    for (const tag of tags ?? []) {
      this.meta.addTag({ property: 'article:tag', content: tag });
    }
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

  private buildBaseStructuredData(
    metadata: PageMetadata,
    absoluteUrl: string,
    absoluteImageUrl?: string
  ): Array<Record<string, unknown>> {
    const websiteId = `${this.baseUrl}/#website`;
    const organizationId = `${this.baseUrl}/#organization`;
    const authorUrl = this.toAbsoluteUrl(this.authorPath);
    const imageObject = absoluteImageUrl
      ? {
          '@type': 'ImageObject',
          url: absoluteImageUrl,
          ...(metadata.imageDimensions
            ? {
                width: metadata.imageDimensions.width,
                height: metadata.imageDimensions.height
              }
            : {})
        }
      : undefined;

    return [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: this.siteName,
        url: `${this.baseUrl}/`,
        logo: {
          '@type': 'ImageObject',
          url: this.toAbsoluteUrl(this.siteLogoPath)
        }
      },
      {
        '@type': 'Person',
        '@id': `${authorUrl}#person`,
        name: this.authorName,
        url: authorUrl,
        sameAs: this.authorSameAs,
        email: `mailto:${siteContent.meta.contactEmail}`,
        description: siteContent.meta.description
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${this.baseUrl}/`,
        name: this.siteName,
        description: siteContent.meta.description,
        publisher: { '@id': organizationId },
        inLanguage: 'en-US'
      },
      {
        '@type': metadata.pageSchemaType ?? 'WebPage',
        '@id': `${absoluteUrl}#webpage`,
        url: absoluteUrl,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': `${authorUrl}#person` },
        primaryImageOfPage: imageObject,
        inLanguage: 'en-US'
      },
      ...(metadata.structuredData ?? [])
    ];
  }

  private createContentStructuredData(
    source: ContentMetadataSource,
    imagePath?: string
  ): Record<string, unknown> {
    const absoluteUrl = this.toAbsoluteUrl(source.slug);
    const authorUrl = this.toAbsoluteUrl(this.authorPath);
    const isWriting = source.slug.startsWith('writing/');
    const isFramework = source.slug.startsWith('frameworks/');
    const schemaType = isWriting ? 'BlogPosting' : 'Article';
    const section =
      isWriting
        ? 'Writing'
        : isFramework
          ? (source as FrameworkItem).category || 'Frameworks'
          : 'Operating Tools';
    const bodyText = this.extractBodyText(source);
    const imageDimensions = this.resolveImageDimensions(imagePath);
    const topicTerms =
      source.tags?.map((tag) => ({
        '@type': 'DefinedTerm',
        name: tag,
        inDefinedTermSet: `${this.baseUrl}/#content-topics`
      })) ?? [];
    const imageObject = imagePath
      ? {
          '@type': 'ImageObject',
          url: this.toAbsoluteUrl(imagePath),
          ...(imageDimensions
            ? {
                width: imageDimensions.width,
                height: imageDimensions.height
              }
            : {})
        }
      : undefined;

    return {
      '@type': schemaType,
      '@id': `${absoluteUrl}#article`,
      headline: source.title,
      description: source.seo.description,
      url: absoluteUrl,
      mainEntityOfPage: { '@id': `${absoluteUrl}#webpage` },
      author: { '@id': `${authorUrl}#person` },
      publisher: { '@id': `${this.baseUrl}/#organization` },
      image: imageObject ? [imageObject] : undefined,
      datePublished: 'publishedOn' in source ? source.publishedOn : undefined,
      dateModified: 'publishedOn' in source ? source.publishedOn : undefined,
      articleSection: section,
      keywords: source.tags?.join(', '),
      about: topicTerms.length ? topicTerms : undefined,
      wordCount: bodyText ? bodyText.split(/\s+/).length : undefined,
      timeRequired:
        'readTimeMinutes' in source && source.readTimeMinutes > 0
          ? `PT${source.readTimeMinutes}M`
          : undefined,
      inLanguage: 'en-US',
      isAccessibleForFree: true
    };
  }

  private createBreadcrumbStructuredData(slug: string, title: string): Record<string, unknown> {
    const items: Array<{ name: string; url: string }> = [
      { name: 'Home', url: this.toAbsoluteUrl('/') }
    ];

    if (slug.startsWith('writing/')) {
      items.push({ name: 'Writing', url: this.toAbsoluteUrl('/writing') });
    } else if (slug.startsWith('frameworks/')) {
      items.push({ name: 'Frameworks', url: this.toAbsoluteUrl('/frameworks') });
    } else if (slug.startsWith('operating-tools/')) {
      items.push({ name: 'Operating Tools', url: this.toAbsoluteUrl('/operating-tools') });
    }

    items.push({ name: title, url: this.toAbsoluteUrl(slug) });

    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  private extractBodyText(source: ContentMetadataSource): string {
    const sections = source.body?.sections ?? [];
    const rootText: string[] = [];

    if ('premise' in source.body && source.body.premise) {
      rootText.push(source.body.premise);
    }

    if ('application' in source.body && source.body.application) {
      rootText.push(source.body.application);
    }

    if ('intro' in source.body && source.body.intro) {
      rootText.push(source.body.intro);
    }

    for (const section of sections) {
      rootText.push(section.heading);

      if (section.intro) {
        rootText.push(section.intro);
      }

      if (section.callout) {
        rootText.push(section.callout);
      }

      if (section.image?.alt) {
        rootText.push(section.image.alt);
      }

      for (const paragraph of section.paragraphs ?? []) {
        rootText.push(paragraph);
      }

      for (const block of section.blocks ?? []) {
        switch (block.type) {
          case 'paragraph':
            rootText.push(block.text);
            break;
          case 'callout':
            rootText.push(block.title ?? '', block.text);
            break;
          case 'list':
            rootText.push(block.title ?? '', ...block.items);
            break;
          case 'table':
            rootText.push(block.title ?? '', block.columns.join(' '), ...block.rows.map((row) => row.join(' ')));
            break;
          case 'cards':
            rootText.push(...block.items.map((item) => `${item.title} ${item.description}`));
            break;
          case 'code':
            rootText.push(block.title ?? '', block.code);
            break;
          case 'component':
            rootText.push(block.title ?? '', block.description ?? '', block.fallback ?? '');
            break;
          case 'image':
            rootText.push(block.alt, block.caption ?? '');
            break;
          default:
            break;
        }
      }
    }

    return rootText.filter(Boolean).join(' ');
  }

  private updateStructuredData(graph: Array<Record<string, unknown>>): void {
    const selector = 'script[data-cw-structured-data="primary"]';
    let script = this.document.head.querySelector(selector);

    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-cw-structured-data', 'primary');
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    });
  }
}
