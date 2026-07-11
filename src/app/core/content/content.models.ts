export type ContentStatus = 'draft' | 'published' | 'archived';

export interface FileMeta {
  version: number;
  updatedOn: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface ProductionAssetReference {
  label?: string;
  href: string;
  description?: string;
}

export interface ProductionAssets {
  socialImage?: ProductionAssetReference;
  articleImages?: ProductionAssetReference[];
}

export type CitationStyle = 'apa-author-date';

export interface WritingReferenceAuthor {
  family: string;
  given: string;
}

export type WritingReferenceType = 'journal-article' | 'report' | 'web';

export interface WritingReference {
  id: string;
  type: WritingReferenceType;
  authors: WritingReferenceAuthor[];
  year: number | null;
  title: string;
  publication?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url: string;
  note?: string;
}

export interface LegacyReference {
  title: string;
  publisher?: string;
  url: string;
  note?: string;
}

export interface ContentParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface ContentImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface ContentCalloutBlock {
  type: 'callout';
  title?: string;
  text: string;
  tone?: 'neutral' | 'executive' | 'technical' | 'warning';
}

export interface ContentListBlock {
  type: 'list';
  title?: string;
  items: string[];
}

export interface ContentTableBlock {
  type: 'table';
  title?: string;
  columns: string[];
  rows: string[][];
}

export interface ContentCardItem {
  title: string;
  description: string;
}

export interface ContentCardsBlock {
  type: 'cards';
  items: ContentCardItem[];
}

export interface ContentCodeBlock {
  type: 'code';
  title?: string;
  language?: string;
  code: string;
}

export type InteractiveComponentKey =
  | 'relationship-value-explorer'
  | 'agent-grading-calculator'
  | 'ai-spend-levers-prioritization-map'
  | 'ai-consumption-leverage-calculator';

export interface ContentComponentBlock {
  type: 'component';
  component: InteractiveComponentKey | string;
  fallback?: string;
  title?: string;
  description?: string;
  config?: Record<string, unknown>;
}

export type ContentSectionBlock =
  | ContentParagraphBlock
  | ContentImageBlock
  | ContentCalloutBlock
  | ContentListBlock
  | ContentTableBlock
  | ContentCardsBlock
  | ContentCodeBlock
  | ContentComponentBlock;

export interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ContentSection {
  heading: string;
  eyebrow?: string;
  intro?: string;
  layout?: 'default' | 'split-image-right' | 'split-image-left';
  blocks?: ContentSectionBlock[];
  paragraphs?: string[];
  image?: ContentImage;
  component?: InteractiveComponentKey | string;
  componentTitle?: string;
  componentDescription?: string;
  componentConfig?: Record<string, unknown>;
  fallback?: string;
  callout?: string;
}

export interface CompanionSnapshotItem {
  label: string;
  value: string;
}

export interface CompanionTocItem {
  label: string;
  anchor: string;
}

export interface CompanionAsset {
  label: string;
  href: string;
  description?: string;
  type?: 'image' | 'pdf' | 'data' | 'schema' | 'checklist' | 'link' | 'component' | 'template';
  number?: string;
}

export interface CompanionRelatedItem {
  title: string;
  slug: string;
  description?: string;
}

export interface CompanionCallToAction {
  title: string;
  description: string;
  href?: string;
  anchor?: string;
  buttonLabel?: string;
  action?: 'open-templates';
}

export interface ContentCompanion {
  snapshot?: CompanionSnapshotItem[];
  toc?: CompanionTocItem[];
  assets?: CompanionAsset[];
  references?: LegacyReference[];
  related?: CompanionRelatedItem[];
  callsToAction?: CompanionCallToAction[];
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
  featuredOperatingToolSlugs: string[];
  themes: HomeTheme[];
  themesSection: HomeSectionContent;
  writingSection: HomeSectionContent;
  frameworkSection: HomeSectionContent;
  operatingToolsSection: HomeSectionContent;
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
  sections: ContentSection[];
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
  productionAssets?: ProductionAssets;
  seo: SeoContent;
  body: WritingBody;
  citationStyle?: CitationStyle;
  references?: WritingReference[];
  companion?: ContentCompanion;
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
  sections: ContentSection[];
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
  heroImage?: string;
  productionAssets?: ProductionAssets;
  seo: SeoContent;
  body: FrameworkBody;
  companion?: ContentCompanion;
}

export interface FrameworkContentFile {
  meta: CollectionMeta;
  items: FrameworkItem[];
}

export interface OperatingToolBody {
  intro: string;
  sections: ContentSection[];
}

export interface OperatingToolItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  featured: boolean;
  icon: string;
  tags: string[];
  heroImage?: string;
  productionAssets?: ProductionAssets;
  seo: SeoContent;
  body: OperatingToolBody;
  companion?: ContentCompanion;
}

export interface OperatingToolContentFile {
  meta: CollectionMeta;
  items: OperatingToolItem[];
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
  featuredOperatingTools: OperatingToolItem[];
  about: AboutContent;
}
