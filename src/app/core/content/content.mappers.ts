import {
  AboutContent,
  AboutContentFile,
  CollectionMeta,
  CompanionAsset,
  CompanionCallToAction,
  CompanionRelatedItem,
  CompanionSnapshotItem,
  CompanionTocItem,
  ConnectContent,
  ContentCompanion,
  ContentCollectionViewModel,
  ContentImage,
  ContentSection,
  ContentSectionBlock,
  ContentStatus,
  FileMeta,
  FooterContent,
  FrameworkBody,
  FrameworkComponent,
  FrameworkContentFile,
  FrameworkItem,
  HomeContentConfig,
  HomeTheme,
  InitiativeBody,
  InitiativeContentFile,
  InitiativeItem,
  SeoContent,
  SiteContentFile,
  SiteMeta,
  SiteNavigation,
  WritingBody,
  WritingContentFile,
  WritingItem
} from './content.models';

const DEFAULT_STATUS: ContentStatus = 'draft';

function asString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value.trim() : fallback;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.map((item) => asString(item)).filter(Boolean)
    : [];
}

function asBoolean(value: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function normalizeStatus(value: unknown): ContentStatus {
  return value === 'published' || value === 'archived' || value === 'draft'
    ? value
    : DEFAULT_STATUS;
}

function normalizeDate(value: unknown): string {
  const raw = asString(value);
  return Number.isNaN(Date.parse(raw)) ? '' : raw;
}

function normalizeTags(value: unknown): string[] {
  return asStringArray(value).map((tag) => tag.toLowerCase());
}

function normalizeContentImage(value: any): ContentImage | undefined {
  const src = asString(value?.src);
  const alt = asString(value?.alt);

  if (!src || !alt) {
    return undefined;
  }

  return {
    src,
    alt,
    caption: asString(value?.caption) || undefined
  };
}

function normalizeSectionBlocks(value: any): ContentSectionBlock[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const blocks: ContentSectionBlock[] = [];

  for (const block of value) {
    const type = asString(block?.type);

    switch (type) {
      case 'paragraph': {
        const text = asString(block?.text);
        if (text) {
          blocks.push({ type: 'paragraph', text });
        }
        break;
      }
      case 'image': {
        const image = normalizeContentImage(block);
        if (image) {
          blocks.push({ type: 'image', ...image });
        }
        break;
      }
      case 'callout': {
        const text = asString(block?.text);
        if (text) {
          const tone = asString(block?.tone);
          blocks.push({
            type: 'callout',
            title: asString(block?.title) || undefined,
            text,
            tone:
              tone === 'neutral' || tone === 'executive' || tone === 'technical' || tone === 'warning'
                ? tone
                : undefined
          });
        }
        break;
      }
      case 'list': {
        const items = asStringArray(block?.items);
        if (items.length) {
          blocks.push({
            type: 'list',
            title: asString(block?.title) || undefined,
            items
          });
        }
        break;
      }
      case 'component': {
        const component = asString(block?.component);
        if (component) {
          blocks.push({
            type: 'component',
            component,
            fallback: asString(block?.fallback) || undefined
          });
        }
        break;
      }
      default:
        break;
    }
  }

  return blocks;
}

function normalizeSections(value: any): ContentSection[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const sections: ContentSection[] = [];

  for (const section of value) {
    const heading = asString(section?.heading);
    const paragraphs = asStringArray(section?.paragraphs);
    const intro = asString(section?.intro) || undefined;
    const eyebrow = asString(section?.eyebrow) || undefined;
    const blocks = normalizeSectionBlocks(section?.blocks);
    const image = normalizeContentImage(section?.image);
    const component = asString(section?.component) || undefined;
    const fallback = asString(section?.fallback) || undefined;
    const callout = asString(section?.callout) || undefined;

    if (!heading && paragraphs.length === 0 && !intro && !image && !component && !callout && blocks.length === 0) {
      continue;
    }

    sections.push({
      heading: heading || 'Section',
      eyebrow,
      intro,
      blocks,
      paragraphs,
      image,
      component,
      fallback,
      callout
    });
  }

  return sections;
}

function normalizeCompanionSnapshot(value: any): CompanionSnapshotItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      const label = asString(item?.label);
      const result = asString(item?.value);
      return label && result ? { label, value: result } : null;
    })
    .filter((item): item is CompanionSnapshotItem => item !== null);
}

function normalizeCompanionToc(value: any): CompanionTocItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      const label = asString(item?.label);
      const anchor = asString(item?.anchor);
      return label && anchor ? { label, anchor } : null;
    })
    .filter((item): item is CompanionTocItem => item !== null);
}

function normalizeCompanionAssets(value: any): CompanionAsset[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item): CompanionAsset | null => {
      const label = asString(item?.label);
      const href = asString(item?.href);
      const type = asString(item?.type);

      if (!label || !href) {
        return null;
      }

      return {
        label,
        href,
        description: asString(item?.description) || undefined,
        type:
          type === 'image' ||
          type === 'pdf' ||
          type === 'data' ||
          type === 'schema' ||
          type === 'checklist' ||
          type === 'link'
            ? type
            : undefined
      };
    })
    .filter((item): item is CompanionAsset => item !== null);
}

function normalizeCompanionRelated(value: any): CompanionRelatedItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item): CompanionRelatedItem | null => {
      const title = asString(item?.title);
      const slug = asString(item?.slug);
      return title && slug
        ? {
            title,
            slug,
            description: asString(item?.description) || undefined
          }
        : null;
    })
    .filter((item): item is CompanionRelatedItem => item !== null);
}

function normalizeCompanionCallsToAction(value: any): CompanionCallToAction[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item): CompanionCallToAction | null => {
      const title = asString(item?.title);
      const description = asString(item?.description);
      const href = asString(item?.href) || undefined;
      const anchor = asString(item?.anchor) || undefined;
      const buttonLabel = asString(item?.buttonLabel) || undefined;

      return title && description ? { title, description, href, anchor, buttonLabel } : null;
    })
    .filter((item): item is CompanionCallToAction => item !== null);
}

function normalizeCompanion(value: any): ContentCompanion | undefined {
  if (!value || typeof value !== 'object') {
    return undefined;
  }

  const snapshot = normalizeCompanionSnapshot(value?.snapshot);
  const toc = normalizeCompanionToc(value?.toc);
  const assets = normalizeCompanionAssets(value?.assets);
  const related = normalizeCompanionRelated(value?.related);
  const callsToAction = normalizeCompanionCallsToAction(value?.callsToAction);

  if (!snapshot.length && !toc.length && !assets.length && !related.length && !callsToAction.length) {
    return undefined;
  }

  return {
    snapshot: snapshot.length ? snapshot : undefined,
    toc: toc.length ? toc : undefined,
    assets: assets.length ? assets : undefined,
    related: related.length ? related : undefined,
    callsToAction: callsToAction.length ? callsToAction : undefined
  };
}

function normalizeSeo(value: any, fallbackTitle: string, fallbackDescription: string): SeoContent {
  return {
    title: asString(value?.title, fallbackTitle),
    description: asString(value?.description, fallbackDescription)
  };
}

function normalizeMeta(value: any): FileMeta {
  return {
    version: asNumber(value?.version, 1),
    updatedOn: normalizeDate(value?.updatedOn) || new Date().toISOString()
  };
}

function normalizeCollectionMeta(value: any, fallbackHeadline: string): CollectionMeta {
  const meta = normalizeMeta(value);

  return {
    ...meta,
    eyebrow: asString(value?.eyebrow, 'cweise.com'),
    headline: asString(value?.headline, fallbackHeadline),
    intro: asString(value?.intro)
  };
}

export function isPublicContent(status: ContentStatus): boolean {
  return status === 'published';
}

export function sortNewestFirst<T extends { publishedOn?: string }>(items: T[]): T[] {
  return [...items].sort((left, right) => {
    const rightTime = Date.parse(right.publishedOn ?? '') || 0;
    const leftTime = Date.parse(left.publishedOn ?? '') || 0;
    return rightTime - leftTime;
  });
}

export function resolveFeaturedItems<T extends { slug: string; featured?: boolean }>(
  slugs: string[],
  items: T[],
  limit?: number
): T[] {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const ordered = slugs
    .map((slug) => bySlug.get(slug))
    .filter((item): item is T => Boolean(item));

  const fallback = items.filter((item) => item.featured && !ordered.some((candidate) => candidate.slug === item.slug));
  const merged = [...ordered, ...fallback];
  return typeof limit === 'number' ? merged.slice(0, limit) : merged;
}

function normalizeTheme(value: any): HomeTheme | null {
  const id = asString(value?.id);
  const title = asString(value?.title);
  const description = asString(value?.description);

  if (!id || !title || !description) {
    return null;
  }

  return {
    id,
    icon: asString(value?.icon, 'insights'),
    title,
    description
  };
}

function normalizeHome(value: any): HomeContentConfig {
  return {
    eyebrow: asString(value?.eyebrow, 'Engineering & Infrastructure'),
    headline: asString(value?.headline, 'Operational Intelligence for Complex Organizations'),
    subheadline: asString(value?.subheadline, 'Reducing Rework, Risk, and Delivery Gaps'),
    intro: asStringArray(value?.intro),
    heroImage: asString(value?.heroImage, 'assets/images/hero-architecture.png'),
    featuredWritingSlugs: asStringArray(value?.featuredWritingSlugs),
    featuredFrameworkSlugs: asStringArray(value?.featuredFrameworkSlugs),
    featuredInitiativeSlugs: asStringArray(value?.featuredInitiativeSlugs),
    themes: Array.isArray(value?.themes)
      ? value.themes
          .map((theme: any) => normalizeTheme(theme))
          .filter((theme: HomeTheme | null): theme is HomeTheme => theme !== null)
      : [],
    themesSection: {
      eyebrow: asString(value?.themesSection?.eyebrow, 'Core Themes'),
      headline: asString(value?.themesSection?.headline, 'Where I Focus'),
      support: asString(value?.themesSection?.support)
    },
    writingSection: {
      eyebrow: asString(value?.writingSection?.eyebrow, 'Featured Writing'),
      headline: asString(value?.writingSection?.headline, 'Recent Essays'),
      support: asString(value?.writingSection?.support)
    },
    frameworkSection: {
      eyebrow: asString(value?.frameworkSection?.eyebrow, 'Featured Framework'),
      headline: asString(value?.frameworkSection?.headline, 'Featured Framework'),
      support: asString(value?.frameworkSection?.support)
    },
    initiativesSection: {
      eyebrow: asString(value?.initiativesSection?.eyebrow, 'Selected Initiatives'),
      headline: asString(value?.initiativesSection?.headline, 'Proof of Execution'),
      support: asString(value?.initiativesSection?.support)
    },
    aboutSection: {
      eyebrow: asString(value?.aboutSection?.eyebrow, 'About'),
      headline: asString(value?.aboutSection?.headline, 'How I Think. What I Do.'),
      support: asString(value?.aboutSection?.support)
    }
  };
}

function normalizeNavigation(value: any): SiteNavigation {
  return {
    primary: Array.isArray(value?.primary)
      ? value.primary
          .map((item: any) => ({
            label: asString(item?.label),
            path: asString(item?.path)
          }))
          .filter((item: { label: string; path: string }) => item.label && item.path)
      : [],
    social: Array.isArray(value?.social)
      ? value.social
          .map((item: any) => ({
            label: asString(item?.label),
            url: asString(item?.url),
            icon: asString(item?.icon, 'link')
          }))
          .filter((item: { label: string; url: string }) => item.label && item.url)
      : []
  };
}

function normalizeFooter(value: any): FooterContent {
  return {
    featuredLinks: Array.isArray(value?.featuredLinks)
      ? value.featuredLinks
          .map((item: any) => ({
            label: asString(item?.label),
            path: asString(item?.path)
          }))
          .filter((item: { label: string; path: string }) => item.label && item.path)
      : []
  };
}

function normalizeConnect(value: any): ConnectContent {
  return {
    eyebrow: asString(value?.eyebrow, 'Stay Connected'),
    headline: asString(value?.headline, 'Thoughts on operations, systems, and execution.'),
    intro: asString(value?.intro),
    note: asString(value?.note),
    ctaLabel: asString(value?.ctaLabel, 'Connect'),
    ctaUrl: asString(value?.ctaUrl, '/connect')
  };
}

export function mapSiteFile(value: any): SiteContentFile {
  const metaBase = normalizeMeta(value?.meta);
  const meta: SiteMeta = {
    ...metaBase,
    siteName: asString(value?.meta?.siteName, 'cweise.com'),
    siteUrl: asString(value?.meta?.siteUrl, 'https://cweise.com'),
    title: asString(value?.meta?.title, 'Operational Intelligence for Complex Organizations'),
    description: asString(value?.meta?.description),
    author: asString(value?.meta?.author, 'Charles Weise'),
    footerTagline: asString(value?.meta?.footerTagline, 'Operational intelligence for complex organizations.'),
    contactEmail: asString(value?.meta?.contactEmail, 'iweise@me.com')
  };

  return {
    meta,
    home: normalizeHome(value?.home),
    navigation: normalizeNavigation(value?.navigation),
    footer: normalizeFooter(value?.footer),
    connect: normalizeConnect(value?.connect)
  };
}

export function mapWritingItem(value: any): WritingItem | null {
  const id = asString(value?.id);
  const slug = asString(value?.slug);
  const title = asString(value?.title);

  if (!id || !slug || !title) {
    return null;
  }

  const summary = asString(value?.summary);

  return {
    id,
    slug,
    title,
    summary,
    status: normalizeStatus(value?.status),
    publishedOn: normalizeDate(value?.publishedOn),
    readTimeMinutes: asNumber(value?.readTimeMinutes, 5),
    featured: asBoolean(value?.featured),
    tags: normalizeTags(value?.tags),
    heroImage: asString(value?.heroImage) || undefined,
    seo: normalizeSeo(value?.seo, title, summary),
    body: {
      intro: asString(value?.body?.intro),
      sections: normalizeSections(value?.body?.sections)
    },
    companion: normalizeCompanion(value?.companion)
  };
}

export function mapWritingFile(value: any): WritingContentFile {
  return {
    meta: normalizeCollectionMeta(value?.meta, 'Writing'),
    items: Array.isArray(value?.items)
      ? value.items
          .map((item: any) => mapWritingItem(item))
          .filter((item: WritingItem | null): item is WritingItem => item !== null)
      : []
  };
}

function normalizeFrameworkComponents(value: any): FrameworkComponent[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((component) => {
      const title = asString(component?.title);
      const description = asString(component?.description);

      if (!title || !description) {
        return null;
      }

      return { title, description };
    })
    .filter((component): component is FrameworkComponent => Boolean(component));
}

export function mapFrameworkItem(value: any): FrameworkItem | null {
  const id = asString(value?.id);
  const slug = asString(value?.slug);
  const title = asString(value?.title);

  if (!id || !slug || !title) {
    return null;
  }

  const summary = asString(value?.summary);
  const body: FrameworkBody = {
    premise: asString(value?.body?.premise),
    components: normalizeFrameworkComponents(value?.body?.components),
    application: asString(value?.body?.application),
    sections: normalizeSections(value?.body?.sections)
  };

  return {
    id,
    slug,
    title,
    summary,
    status: normalizeStatus(value?.status),
    publishedOn: normalizeDate(value?.publishedOn),
    featured: asBoolean(value?.featured),
    category: asString(value?.category),
    tags: normalizeTags(value?.tags),
    diagramImage: asString(value?.diagramImage) || undefined,
    seo: normalizeSeo(value?.seo, title, summary),
    body,
    companion: normalizeCompanion(value?.companion)
  };
}

export function mapFrameworkFile(value: any): FrameworkContentFile {
  return {
    meta: normalizeCollectionMeta(value?.meta, 'Frameworks'),
    items: Array.isArray(value?.items)
      ? value.items
          .map((item: any) => mapFrameworkItem(item))
          .filter((item: FrameworkItem | null): item is FrameworkItem => item !== null)
      : []
  };
}

export function mapInitiativeItem(value: any): InitiativeItem | null {
  const id = asString(value?.id);
  const slug = asString(value?.slug);
  const title = asString(value?.title);

  if (!id || !slug || !title) {
    return null;
  }

  const summary = asString(value?.summary);
  const body: InitiativeBody = {
    context: asString(value?.body?.context),
    challenge: asString(value?.body?.challenge),
    approach: asString(value?.body?.approach),
    outcome: asString(value?.body?.outcome),
    notes: asStringArray(value?.body?.notes)
  };

  return {
    id,
    slug,
    title,
    summary,
    status: normalizeStatus(value?.status),
    publishedOn: normalizeDate(value?.publishedOn),
    featured: asBoolean(value?.featured),
    domain: asString(value?.domain),
    icon: asString(value?.icon) || undefined,
    tags: normalizeTags(value?.tags),
    thumbnail: asString(value?.thumbnail) || undefined,
    seo: normalizeSeo(value?.seo, title, summary),
    body,
    companion: normalizeCompanion(value?.companion)
  };
}

export function mapInitiativeFile(value: any): InitiativeContentFile {
  return {
    meta: normalizeCollectionMeta(value?.meta, 'Initiatives'),
    items: Array.isArray(value?.items)
      ? value.items
          .map((item: any) => mapInitiativeItem(item))
          .filter((item: InitiativeItem | null): item is InitiativeItem => item !== null)
      : []
  };
}

export function mapAboutFile(value: any): AboutContentFile {
  const content: AboutContent = {
    headline: asString(value?.content?.headline, 'How I Think. What I Do.'),
    narrative: asStringArray(value?.content?.narrative),
    principles: asStringArray(value?.content?.principles),
    focusAreas: asStringArray(value?.content?.focusAreas),
    closing: asString(value?.content?.closing)
  };

  return {
    meta: normalizeMeta(value?.meta),
    content
  };
}

export const FALLBACK_SITE_CONTENT: SiteContentFile = mapSiteFile({
  meta: {
    version: 1,
    updatedOn: '2026-05-16',
    siteName: 'cweise.com',
    siteUrl: 'https://cweise.com',
    title: 'Operational Intelligence for Complex Organizations',
    description: 'Operational intelligence for engineering and infrastructure organizations.',
    author: 'Charles Weise',
    footerTagline: 'Operational intelligence for complex organizations.',
    contactEmail: 'iweise@me.com'
  },
  home: {
    eyebrow: 'Engineering & Infrastructure',
    headline: 'Operational Intelligence for Complex Organizations',
    subheadline: 'Reducing Rework, Risk, and Delivery Gaps',
    intro: [],
    heroImage: 'assets/images/hero-architecture.png',
    featuredWritingSlugs: [],
    featuredFrameworkSlugs: [],
    featuredInitiativeSlugs: [],
    themes: [],
    themesSection: { eyebrow: 'Core Themes', headline: 'Where I Focus', support: '' },
    writingSection: { eyebrow: 'Featured Writing', headline: 'Recent Essays', support: '' },
    frameworkSection: { eyebrow: 'Featured Framework', headline: 'Featured Framework', support: '' },
    initiativesSection: { eyebrow: 'Selected Initiatives', headline: 'Proof of Execution', support: '' },
    aboutSection: { eyebrow: 'About', headline: 'How I Think. What I Do.', support: '' }
  },
  navigation: { primary: [], social: [] },
  footer: { featuredLinks: [] },
  connect: {
    eyebrow: 'Stay Connected',
    headline: 'Thoughts on operations, systems, and execution.',
    intro: '',
    note: '',
    ctaLabel: 'Connect',
    ctaUrl: '/connect'
  }
});

export const FALLBACK_WRITING_CONTENT: WritingContentFile = {
  meta: { version: 1, updatedOn: '2026-05-16', eyebrow: 'Writing', headline: 'Writing', intro: '' },
  items: []
};

export const FALLBACK_FRAMEWORK_CONTENT: FrameworkContentFile = {
  meta: { version: 1, updatedOn: '2026-05-16', eyebrow: 'Frameworks', headline: 'Frameworks', intro: '' },
  items: []
};

export const FALLBACK_INITIATIVE_CONTENT: InitiativeContentFile = {
  meta: { version: 1, updatedOn: '2026-05-16', eyebrow: 'Initiatives', headline: 'Initiatives', intro: '' },
  items: []
};

export const FALLBACK_ABOUT_CONTENT: AboutContentFile = {
  meta: { version: 1, updatedOn: '2026-05-16' },
  content: {
    headline: 'How I Think. What I Do.',
    narrative: [],
    principles: [],
    focusAreas: [],
    closing: ''
  }
};
