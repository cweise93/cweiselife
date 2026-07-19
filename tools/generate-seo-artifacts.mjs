import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const contentDir = path.join(repoRoot, 'src', 'assets', 'content');
const publicDir = path.join(repoRoot, 'public');
const site = await loadJson('site.json');
const about = await loadJson('about.json');
const writing = await loadJson('writing.json');
const frameworks = await loadJson('frameworks.json');
const guides = await loadJson('guides.json');

const baseUrl = site.meta.siteUrl.replace(/\/+$/, '');
const publishedWriting = writing.items.filter((item) => item.status === 'published');
const publishedFrameworks = frameworks.items.filter((item) => item.status === 'published');
const publishedGuides = guides.items.filter((item) => item.status === 'published');

await mkdir(publicDir, { recursive: true });

await Promise.all([
  writeFile(path.join(publicDir, 'llms.txt'), buildLlmsTxt(), 'utf8'),
  writeFile(path.join(publicDir, 'llms-full.txt'), buildLlmsFullTxt(), 'utf8'),
  writeFile(path.join(publicDir, 'robots.txt'), buildRobotsTxt(), 'utf8'),
  writeFile(path.join(publicDir, 'sitemap.xml'), buildSitemapXml(), 'utf8')
]);

console.log('Generated SEO artifacts: llms.txt, llms-full.txt, robots.txt, sitemap.xml');

async function loadJson(filename) {
  const filePath = path.join(contentDir, filename);
  return JSON.parse(await import('node:fs/promises').then(({ readFile }) => readFile(filePath, 'utf8')));
}

function canonicalPageUrl(route = '/') {
  const normalized = normalizePagePath(route);
  return normalized === '/' ? `${baseUrl}/` : `${baseUrl}${normalized}`;
}

function normalizePagePath(route = '/') {
  if (!route || route === '/') {
    return '/';
  }

  if (/^https?:\/\//i.test(route)) {
    return route;
  }

  const [pathname, suffix = ''] = `${route}`.split(/([?#].*)/, 2);
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const hasExtension = /\.[a-z0-9]+$/i.test(normalized);

  if (hasExtension || normalized.endsWith('/')) {
    return `${normalized}${suffix}`;
  }

  return `${normalized}/${suffix}`;
}

function canonicalAssetUrl(assetPath) {
  if (!assetPath) {
    return '';
  }

  if (/^https?:\/\//i.test(assetPath)) {
    return assetPath;
  }

  return `${baseUrl}/${assetPath.replace(/^\/+/, '').replace(/\.(png|jpe?g)$/i, '.webp')}`;
}

function markdownLink(label, url) {
  return `- [${label}](${url})`;
}

function formatTags(tags) {
  return Array.isArray(tags) && tags.length ? tags.join(', ') : 'None';
}

function buildLlmsTxt() {
  const featuredWriting = site.home.featuredWritingSlugs
    .map((slug) => publishedWriting.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 4);
  const featuredFrameworks = site.home.featuredFrameworkSlugs
    .map((slug) => publishedFrameworks.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 3);
  const featuredGuides = site.home.featuredGuideSlugs
    .map((slug) => publishedGuides.find((item) => item.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  return [
    '# cweise.com',
    '',
    `> ${site.meta.description}`,
    '',
    'This site publishes prerendered essays, frameworks, and short-form operating guides by Charles Weise focused on operational clarity, organizational sensemaking, and execution systems. Core pages are available as static HTML, and this file provides a concise machine-readable index for AI systems and other crawlers.',
    '',
    '## Primary Pages',
    markdownLink('Home', canonicalPageUrl('/')) + ': Site overview, themes, and featured content.',
    markdownLink('About', canonicalPageUrl('/about')) + ': Author profile, principles, and focus areas.',
    markdownLink('Writing', canonicalPageUrl('/writing')) + ': Essay index focused on operational clarity, organizational sensemaking, and execution design.',
    markdownLink('Frameworks', canonicalPageUrl('/frameworks')) + ': Interactive frameworks and implementation-oriented models.',
    markdownLink('Guides', canonicalPageUrl('/guides')) + ': Practical guides for action, reflection, and decision support.',
    markdownLink('Connect', canonicalPageUrl('/connect')) + ': Subscription and contact options.',
    '',
    '## Featured Writing',
    ...featuredWriting.map((item) =>
      `${markdownLink(item.title, canonicalPageUrl(item.slug))}: ${item.summary}`
    ),
    '',
    '## Featured Frameworks',
    ...featuredFrameworks.map((item) =>
      `${markdownLink(item.title, canonicalPageUrl(item.slug))}: ${item.summary}`
    ),
    '',
    '## Featured Guides',
    ...featuredGuides.map((item) =>
      `${markdownLink(item.title, canonicalPageUrl(item.slug))}: ${item.summary}`
    ),
    '',
    '## Optional',
    markdownLink('llms-full.txt', `${baseUrl}/llms-full.txt`) + ': Expanded machine-readable digest of all public content on the site.',
    markdownLink('sitemap.xml', `${baseUrl}/sitemap.xml`) + ': Canonical URL inventory for the published site.',
    markdownLink('robots.txt', `${baseUrl}/robots.txt`) + ': Crawl directives for the published site.',
    ''
  ].join('\n');
}

function buildLlmsFullTxt() {
  const sections = [
    '# cweise.com Full Content Guide',
    '',
    `> ${site.meta.description}`,
    '',
    'This file expands the concise `llms.txt` index into a richer text digest of every public page in the current site corpus.',
    '',
    '## Site Metadata',
    `- Canonical site URL: ${canonicalPageUrl('/')}`,
    `- Author: ${site.meta.author}`,
    `- Updated on: ${site.meta.updatedOn}`,
    `- Core themes: ${site.home.themes.map((theme) => theme.title).join(', ')}`,
    `- Crawl inventory: ${baseUrl}/sitemap.xml`,
    '',
    '## Home',
    `- URL: ${canonicalPageUrl('/')}`,
    `- Headline: ${site.home.headline}`,
    `- Subheadline: ${site.home.subheadline}`,
    ...site.home.intro.map((paragraph) => `- ${paragraph}`),
    '',
    '## About',
    `- URL: ${canonicalPageUrl('/about')}`,
    `- Headline: ${about.content.headline}`,
    ...about.content.narrative.map((paragraph) => `- ${paragraph}`),
    `- Principles: ${about.content.principles.join(' | ')}`,
    `- Focus areas: ${about.content.focusAreas.join(' | ')}`,
    `- Closing: ${about.content.closing}`,
    '',
    '## Writing Index',
    `- URL: ${canonicalPageUrl('/writing')}`,
    `- Summary: ${writing.meta.intro}`,
    ''
  ];

  for (const item of publishedWriting) {
    sections.push(...renderContentEntry(item, 'Essay'));
  }

  sections.push(
    '## Frameworks Index',
    `- URL: ${canonicalPageUrl('/frameworks')}`,
    `- Summary: ${frameworks.meta.intro}`,
    ''
  );

  for (const item of publishedFrameworks) {
    sections.push(...renderContentEntry(item, 'Framework'));
  }

  sections.push(
    '## Guides Index',
    `- URL: ${canonicalPageUrl('/guides')}`,
    `- Summary: ${guides.meta.intro}`,
    ''
  );

  for (const item of publishedGuides) {
    sections.push(...renderContentEntry(item, 'Guide'));
  }

  sections.push(
    '## Connect',
    `- URL: ${canonicalPageUrl('/connect')}`,
    `- Headline: ${site.connect.headline}`,
    `- Intro: ${site.connect.intro}`,
    `- Note: ${site.connect.note}`,
    `- Primary CTA: ${site.connect.ctaLabel} (${site.connect.ctaUrl})`,
    ''
  );

  return sections.join('\n');
}

function renderContentEntry(item, kind) {
  const intro = item.body?.intro ?? item.body?.premise ?? '';
  const application = item.body?.application ? [`- Application: ${item.body.application}`] : [];
  const components =
    Array.isArray(item.body?.components) && item.body.components.length
      ? [`- Components: ${item.body.components.map((component) => `${component.title}: ${component.description}`).join(' | ')}`]
      : [];

  return [
    `### ${kind}: ${item.title}`,
    `- URL: ${canonicalPageUrl(item.slug)}`,
    `- Summary: ${item.summary}`,
    `- Published: ${item.publishedOn ?? 'Not specified'}`,
    `- Tags: ${formatTags(item.tags)}`,
    `- SEO description: ${item.seo?.description ?? item.summary}`,
    ...(intro ? [`- Intro: ${intro}`] : []),
    ...application,
    ...components,
    ...renderSections(item.body?.sections ?? []),
    ''
  ];
}

function renderSections(sections) {
  const lines = [];

  for (const section of sections) {
    if (!section?.heading) {
      continue;
    }

    lines.push(`- Section: ${section.heading}`);

    if (section.intro) {
      lines.push(`  Intro: ${section.intro}`);
    }

    if (Array.isArray(section.paragraphs)) {
      for (const paragraph of section.paragraphs) {
        lines.push(`  ${paragraph}`);
      }
    }

    if (section.callout) {
      lines.push(`  Callout: ${section.callout}`);
    }

    if (section.image?.alt) {
      lines.push(`  Image: ${section.image.alt}`);
    }

    for (const block of section.blocks ?? []) {
      switch (block.type) {
        case 'paragraph':
          lines.push(`  ${block.text}`);
          break;
        case 'callout':
          lines.push(`  Callout${block.title ? ` (${block.title})` : ''}: ${block.text}`);
          break;
        case 'list':
          lines.push(`  List${block.title ? ` (${block.title})` : ''}: ${block.items.join(' | ')}`);
          break;
        case 'cards':
          lines.push(
            `  Cards: ${block.items.map((item) => `${item.title}: ${item.description}`).join(' | ')}`
          );
          break;
        case 'table':
          lines.push(
            `  Table${block.title ? ` (${block.title})` : ''}: ${block.rows
              .map((row) => row.join(' / '))
              .join(' | ')}`
          );
          break;
        case 'image':
          lines.push(`  Image: ${block.alt}`);
          break;
        case 'code':
          lines.push(`  Code${block.title ? ` (${block.title})` : ''}: ${block.language ?? 'plain text'} snippet available on page.`);
          break;
        case 'component':
          lines.push(
            `  Interactive component${block.title ? ` (${block.title})` : ''}: ${block.description ?? block.fallback ?? block.component}`
          );
          break;
        default:
          break;
      }
    }
  }

  return lines;
}

function buildRobotsTxt() {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${baseUrl}/sitemap.xml`,
    ''
  ].join('\n');
}

function buildSitemapXml() {
  const entries = [
    {
      url: canonicalPageUrl('/'),
      lastmod: site.meta.updatedOn,
      image: {
        loc: canonicalAssetUrl(site.home.heroImage),
        title: site.home.headline,
        caption: site.home.subheadline
      }
    },
    { url: canonicalPageUrl('/about'), lastmod: about.meta.updatedOn },
    { url: canonicalPageUrl('/connect'), lastmod: site.meta.updatedOn },
    { url: canonicalPageUrl('/writing'), lastmod: writing.meta.updatedOn },
    { url: canonicalPageUrl('/frameworks'), lastmod: frameworks.meta.updatedOn },
    { url: canonicalPageUrl('/guides'), lastmod: guides.meta.updatedOn },
    ...publishedWriting.map((item) => ({
      url: canonicalPageUrl(item.slug),
      lastmod: item.publishedOn || writing.meta.updatedOn,
      image: item.heroImage
        ? {
            loc: canonicalAssetUrl(item.productionAssets?.socialImage?.href ?? item.heroImage),
            title: item.title,
            caption: item.summary
          }
        : undefined
    })),
    ...publishedFrameworks.map((item) => ({
      url: canonicalPageUrl(item.slug),
      lastmod: item.publishedOn || frameworks.meta.updatedOn,
      image: item.heroImage || item.diagramImage
        ? {
            loc: canonicalAssetUrl(item.productionAssets?.socialImage?.href ?? item.heroImage ?? item.diagramImage),
            title: item.title,
            caption: item.summary
          }
        : undefined
    })),
    ...publishedGuides.map((item) => ({
      url: canonicalPageUrl(item.slug),
      lastmod: guides.meta.updatedOn,
      image: item.heroImage
        ? {
            loc: canonicalAssetUrl(item.productionAssets?.socialImage?.href ?? item.heroImage),
            title: item.title,
            caption: item.summary
          }
        : undefined
    }))
  ];

  const urlNodes = entries
    .map((entry) => {
      const imageNode = entry.image?.loc
        ? [
            '    <image:image>',
            `      <image:loc>${escapeXml(entry.image.loc)}</image:loc>`,
            `      <image:title>${escapeXml(entry.image.title)}</image:title>`,
            `      <image:caption>${escapeXml(entry.image.caption)}</image:caption>`,
            '    </image:image>'
          ].join('\n')
        : '';

      return [
        '  <url>',
        `    <loc>${escapeXml(entry.url)}</loc>`,
        `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`,
        imageNode,
        '  </url>'
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    urlNodes,
    '</urlset>',
    ''
  ].join('\n');
}

function escapeXml(value) {
  return `${value}`
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
