import { LegacyReference, WritingItem, WritingReference, WritingReferenceAuthor } from './content.models';

export type CitationSegment =
  | { type: 'text'; text: string }
  | { type: 'citation'; text: string; referenceId: string; occurrence: number };

export interface CitationParseState {
  counts: Record<string, number>;
  citedReferenceIds: Set<string>;
}

const CITATION_TOKEN_REGEX = /\[\[cite:([a-z0-9-]+)\|([^\]]+)\]\]/g;

export function createCitationParseState(initialCounts: Record<string, number> = {}): CitationParseState {
  return {
    counts: { ...initialCounts },
    citedReferenceIds: new Set<string>()
  };
}

export function citationOccurrenceId(referenceId: string, occurrence: number): string {
  return `cite-${referenceId}-${occurrence}`;
}

export function referenceAnchorId(referenceId: string): string {
  return `ref-${referenceId}`;
}

export function buildReferenceLookup(references: WritingReference[]): Map<string, WritingReference> {
  return new Map(references.map((reference) => [reference.id, reference] as const));
}

export function cloneCitationCounts(state: CitationParseState): Record<string, number> {
  return { ...state.counts };
}

export function parseCitationSegments(
  text: string,
  referencesById: Map<string, WritingReference>,
  state: CitationParseState,
  articleSlug?: string
): CitationSegment[] {
  if (!text) {
    return [];
  }

  const segments: CitationSegment[] = [];
  let cursor = 0;

  for (const match of text.matchAll(CITATION_TOKEN_REGEX)) {
    const matchText = match[0];
    const referenceId = match[1] ?? '';
    const visibleText = match[2] ?? '';
    const index = match.index ?? -1;

    if (index < 0) {
      continue;
    }

    if (index > cursor) {
      segments.push({ type: 'text', text: text.slice(cursor, index) });
    }

    const reference = referencesById.get(referenceId);

    if (!reference) {
      console.warn(
        `[content] Missing citation reference "${referenceId}"${articleSlug ? ` in ${articleSlug}` : ''}. Rendering visible label as plain text.`
      );
      segments.push({ type: 'text', text: visibleText || matchText });
    } else {
      const occurrence = (state.counts[referenceId] ?? 0) + 1;
      state.counts[referenceId] = occurrence;
      state.citedReferenceIds.add(referenceId);
      segments.push({
        type: 'citation',
        text: visibleText,
        referenceId,
        occurrence
      });
    }

    cursor = index + matchText.length;
  }

  if (cursor < text.length) {
    segments.push({ type: 'text', text: text.slice(cursor) });
  }

  return segments.length ? segments : [{ type: 'text', text }];
}

export function adaptLegacyReferences(references: LegacyReference[]): WritingReference[] {
  const seen = new Map<string, number>();

  return references.flatMap((reference) => {
    const title = reference.title?.trim();
    const url = reference.url?.trim();

    if (!title || !url) {
      return [];
    }

    const baseId = slugify(`${reference.publisher ?? ''}-${title}`) || 'source';
    const duplicateCount = (seen.get(baseId) ?? 0) + 1;
    seen.set(baseId, duplicateCount);
    const id = duplicateCount === 1 ? baseId : `${baseId}-${duplicateCount}`;

    return [
      {
        id,
        type: 'web',
        authors: [
          {
            family: reference.publisher?.trim() || title,
            given: ''
          }
        ],
        year: null,
        title,
        publication: reference.publisher?.trim() || undefined,
        url,
        note: reference.note?.trim() || undefined
      }
    ];
  });
}

export function resolveWritingReferences(article: WritingItem | null | undefined): WritingReference[] {
  if (!article) {
    return [];
  }

  if (article.references?.length) {
    return article.references;
  }

  return adaptLegacyReferences(article.companion?.references ?? []);
}

export function canonicalReferenceUrl(reference: WritingReference): string {
  if (reference.doi) {
    return canonicalDoiUrl(reference.doi);
  }

  return reference.url;
}

export function canonicalDoiUrl(doi: string): string {
  const trimmed = doi.trim();

  if (!trimmed) {
    return '';
  }

  if (/^https?:\/\/doi\.org\//i.test(trimmed)) {
    return trimmed.replace(/^http:\/\//i, 'https://');
  }

  return `https://doi.org/${trimmed.replace(/^doi:\s*/i, '')}`;
}

export function formatReferenceAuthors(authors: WritingReferenceAuthor[]): string {
  if (!authors.length) {
    return 'Unknown source';
  }

  const formatted = authors.map((author) => formatReferenceAuthor(author));

  if (formatted.length === 1) {
    return formatted[0]!;
  }

  if (formatted.length === 2) {
    return `${formatted[0]}, & ${formatted[1]}`;
  }

  return `${formatted.slice(0, -1).join(', ')}, & ${formatted.at(-1)}`;
}

export function formatReferenceYear(reference: WritingReference): string {
  return reference.year === null ? 'n.d.' : `${reference.year}`;
}

export function referenceLinkLabel(reference: WritingReference): string {
  if (reference.doi) {
    return `DOI: ${reference.doi}`;
  }

  return reference.url.replace(/^https?:\/\//i, '');
}

export function validateWritingItemReferences(article: WritingItem): string[] {
  const warnings: string[] = [];
  const referenceSource = article.references?.length ? article.references : adaptLegacyReferences(article.companion?.references ?? []);
  const seenIds = new Set<string>();

  for (const reference of referenceSource) {
    if (seenIds.has(reference.id)) {
      warnings.push(`Duplicate reference id "${reference.id}" in ${article.slug}.`);
    }
    seenIds.add(reference.id);

    if (!reference.title || !reference.url || !reference.type || !reference.authors?.length) {
      warnings.push(`Incomplete reference "${reference.id}" in ${article.slug}.`);
    }

    if (reference.doi && canonicalReferenceUrl(reference) !== reference.url && article.references?.length) {
      warnings.push(`Reference "${reference.id}" in ${article.slug} should use canonical https://doi.org/ URL.`);
    }
  }

  if (article.citationStyle === 'apa-author-date') {
    const state = createCitationParseState();
    const lookup = buildReferenceLookup(referenceSource);
    const paragraphs = [
      article.body.intro,
      ...article.body.sections.flatMap((section) => [section.intro ?? '', ...(section.paragraphs ?? [])]),
      ...article.body.sections.flatMap((section) =>
        (section.blocks ?? []).flatMap((block) => (block.type === 'paragraph' ? [block.text] : []))
      )
    ].filter(Boolean);

    for (const paragraph of paragraphs) {
      parseCitationSegments(paragraph, lookup, state, article.slug);
    }

    for (const reference of referenceSource) {
      if (!state.citedReferenceIds.has(reference.id)) {
        warnings.push(`Reference "${reference.id}" in ${article.slug} is never cited.`);
      }
    }
  }

  return warnings;
}

function formatReferenceAuthor(author: WritingReferenceAuthor): string {
  const family = author.family.trim();
  const initials = author.given
    .split(/[\s.-]+/g)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `${part[0]!.toUpperCase()}.`)
    .join(' ');

  return initials ? `${family}, ${initials}` : family;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
