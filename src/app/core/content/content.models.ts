export type ContentStatus = 'draft' | 'published' | 'archived';

export interface FileMeta {
  version: number;
  updatedOn: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface BodySection {
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface SiteMeta extends FileMeta {
  siteName: string;
  siteUrl: string;
  title: string;
  description: string;
  author: string;
  footerTagline: string;
  contactEmail: string;
}

export interface SiteNavigationItem {
  label: string;
  path: string;
}

export interface SiteSocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface FooterContent {
  featuredLinks: FooterLink[];
}

export interface HomeTheme {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomeSectionContent {
  eyebrow: string;
  headline: string;
  support?: string;
}

export interface ConnectContent {
  eyebrow: string;
  headline: string;
  intro: string;
  note: string;
  ctaLabel: string;
  ctaUrl: string;
}

export interface HomeContentConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string[];
  heroImage: string;
  featuredWritingSlugs: string[];
  featuredFrameworkSlugs: string[];
  featuredInitiativeSlugs: string[];
  themes: HomeTheme[];
  themesSection: HomeSectionContent;
  writingSection: HomeSectionContent;
  frameworkSection: HomeSectionContent;
  initiativesSection: HomeSectionContent;
  aboutSection: HomeSectionContent;
}

export interface SiteNavigation {
  primary: SiteNavigationItem[];
  social: SiteSocialLink[];
}

export interface SiteContentFile {
  meta: SiteMeta;
  home: HomeContentConfig;
  navigation: SiteNavigation;
  footer: FooterContent;
  connect: ConnectContent;
}

export interface CollectionMeta extends FileMeta {
  eyebrow: string;
  headline: string;
  intro: string;
}

export interface WritingBody {
  intro: string;
  sections: BodySection[];
}

export interface WritingItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  publishedOn: string;
  readTimeMinutes: number;
  featured: boolean;
  tags: string[];
  heroImage?: string;
  seo: SeoContent;
  body: WritingBody;
}

export interface WritingContentFile {
  meta: CollectionMeta;
  items: WritingItem[];
}

export interface FrameworkComponent {
  title: string;
  description: string;
}

export interface FrameworkBody {
  premise: string;
  components: FrameworkComponent[];
  application: string;
  sections: BodySection[];
}

export interface FrameworkItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  publishedOn: string;
  featured: boolean;
  category: string;
  tags: string[];
  diagramImage?: string;
  seo: SeoContent;
  body: FrameworkBody;
}

export interface FrameworkContentFile {
  meta: CollectionMeta;
  items: FrameworkItem[];
}

export interface InitiativeBody {
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  notes: string[];
}

export interface InitiativeItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  featured: boolean;
  domain: string;
  icon?: string;
  tags: string[];
  thumbnail?: string;
  seo: SeoContent;
  body: InitiativeBody;
}

export interface InitiativeContentFile {
  meta: CollectionMeta;
  items: InitiativeItem[];
}

export interface AboutContent {
  headline: string;
  narrative: string[];
  principles: string[];
  focusAreas: string[];
  closing: string;
}

export interface AboutContentFile {
  meta: FileMeta;
  content: AboutContent;
}

export interface ContentCollectionViewModel<TItem> {
  meta: CollectionMeta;
  items: TItem[];
}

export interface HomeContentViewModel {
  meta: SiteMeta;
  navigation: SiteNavigation;
  footer: FooterContent;
  connect: ConnectContent;
  home: HomeContentConfig;
  featuredWriting: WritingItem[];
  featuredFrameworks: FrameworkItem[];
  featuredInitiatives: InitiativeItem[];
  about: AboutContent;
}
