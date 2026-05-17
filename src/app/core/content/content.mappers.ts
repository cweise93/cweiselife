import {
  AboutContent,
  AboutContentFile,
  BodySection,
  CollectionMeta,
  ConnectContent,
  ContentCollectionViewModel,
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

function normalizeSections(value: any): BodySection[] {
  if (!Array.isArray(value)) {
    return [];
  }

  const sections: BodySection[] = [];

  for (const section of value) {
    const heading = asString(section?.heading);
    const paragraphs = asStringArray(section?.paragraphs);
    const callout = asString(section?.callout) || undefined;

    if (!heading && paragraphs.length === 0 && !callout) {
      continue;
    }

    sections.push({
      heading: heading || 'Section',
      paragraphs,
      callout
    });
  }

  return sections;
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
    footerBlurb: asString(value?.meta?.footerBlurb),
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
    }
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
    body
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
    featured: asBoolean(value?.featured),
    domain: asString(value?.domain),
    icon: asString(value?.icon) || undefined,
    tags: normalizeTags(value?.tags),
    thumbnail: asString(value?.thumbnail) || undefined,
    seo: normalizeSeo(value?.seo, title, summary),
    body
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
    footerBlurb: 'Operational workflows, systems translation, and technology-enabled execution.',
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
