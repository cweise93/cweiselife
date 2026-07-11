import { WritingItem, WritingReference } from './content.models';
import {
  adaptLegacyReferences,
  buildReferenceLookup,
  canonicalReferenceUrl,
  createCitationParseState,
  formatReferenceAuthors,
  parseCitationSegments,
  validateWritingItemReferences
} from './writing-citations';

describe('writing-citations', () => {
  const reference: WritingReference = {
    id: 'rousseau-1989',
    type: 'journal-article',
    authors: [{ family: 'Rousseau', given: 'Denise M.' }],
    year: 1989,
    title: 'Psychological and Implied Contracts in Organizations',
    publication: 'Employee Responsibilities and Rights Journal',
    volume: '2',
    issue: '2',
    pages: '121-139',
    doi: '10.1007/BF01384942',
    url: 'https://doi.org/10.1007/BF01384942'
  };

  it('parses text before, between, and after citations', () => {
    const lookup = buildReferenceLookup([reference]);
    const state = createCitationParseState();

    const segments = parseCitationSegments(
      'Before [[cite:rousseau-1989|Denise Rousseau (1989)]] after.',
      lookup,
      state,
      'writing/test'
    );

    expect(segments).toEqual([
      { type: 'text', text: 'Before ' },
      { type: 'citation', text: 'Denise Rousseau (1989)', referenceId: 'rousseau-1989', occurrence: 1 },
      { type: 'text', text: ' after.' }
    ]);
  });

  it('parses multiple citations in one paragraph with stable occurrences', () => {
    const lookup = buildReferenceLookup([reference]);
    const state = createCitationParseState();

    const segments = parseCitationSegments(
      '[[cite:rousseau-1989|Rousseau (1989)]] and [[cite:rousseau-1989|(Rousseau, 1989)]].',
      lookup,
      state
    );

    expect(segments[0]).toEqual({ type: 'citation', text: 'Rousseau (1989)', referenceId: 'rousseau-1989', occurrence: 1 });
    expect(segments[2]).toEqual({ type: 'citation', text: '(Rousseau, 1989)', referenceId: 'rousseau-1989', occurrence: 2 });
  });

  it('falls back to plain text when a citation id is missing', () => {
    const warnSpy = spyOn(console, 'warn');
    const segments = parseCitationSegments(
      'Text [[cite:missing-id|(Missing, 2020)]].',
      buildReferenceLookup([reference]),
      createCitationParseState(),
      'writing/test'
    );

    expect(segments).toEqual([
      { type: 'text', text: 'Text ' },
      { type: 'text', text: '(Missing, 2020)' },
      { type: 'text', text: '.' }
    ]);
    expect(warnSpy).toHaveBeenCalled();
  });

  it('formats apa-style author names', () => {
    expect(
      formatReferenceAuthors([
        { family: 'Zhao', given: 'Hao' },
        { family: 'Wayne', given: 'Sandy J.' },
        { family: 'Bravo', given: 'Jesus' }
      ])
    ).toBe('Zhao, H., Wayne, S. J., & Bravo, J.');
  });

  it('adapts legacy references into web references', () => {
    const adapted = adaptLegacyReferences([
      {
        title: 'How to count tokens with tiktoken',
        publisher: 'OpenAI Cookbook',
        url: 'https://developers.openai.com/cookbook/examples/how_to_count_tokens_with_tiktoken'
      }
    ]);

    expect(adapted[0]?.type).toBe('web');
    expect(adapted[0]?.authors[0]?.family).toBe('OpenAI Cookbook');
    expect(adapted[0]?.year).toBeNull();
  });

  it('normalizes doi urls and warns on uncited references for apa articles', () => {
    const article: WritingItem = {
      id: 'writing-test',
      slug: 'writing/test/article',
      title: 'Test Article',
      summary: 'Summary',
      status: 'published',
      publishedOn: '2026-07-11',
      readTimeMinutes: 5,
      featured: false,
      tags: [],
      seo: { title: 'Test Article', description: 'Summary' },
      body: {
        intro: 'Intro with [[cite:rousseau-1989|Denise Rousseau (1989)]].',
        sections: []
      },
      citationStyle: 'apa-author-date',
      references: [
        reference,
        {
          ...reference,
          id: 'unused-2001',
          title: 'Unused reference',
          doi: '10.1000/example',
          url: 'http://doi.org/10.1000/example'
        }
      ],
      companion: undefined
    };

    expect(canonicalReferenceUrl(article.references![1]!)).toBe('https://doi.org/10.1000/example');
    expect(validateWritingItemReferences(article)).toContain('Reference "unused-2001" in writing/test/article is never cited.');
  });
});
