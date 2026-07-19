import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {
  ContentCardsBlock,
  ContentCodeBlock,
  ContentImage,
  ContentImageBlock,
  ContentReference,
  ContentSection,
  ContentSectionBlock,
  ContentTableBlock
} from '../../core/content/content.models';
import { InteractiveContentBlockComponent } from './interactive-content-block/interactive-content-block.component';

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface RichTextSegment {
  type: 'text' | 'reference';
  value: string;
}

@Component({
  selector: 'cw-content-renderer',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatTableModule, InteractiveContentBlockComponent],
  template: `
    @for (section of sections(); track trackSection(section, $index)) {
      <section
        class="content-section"
        [class.content-section--split]="isSplitSection(section)"
        [class.content-section--split-left]="section.layout === 'split-image-left'"
        [id]="sectionId(section)"
      >
        @if (section.eyebrow) {
          <p class="content-section-eyebrow">{{ section.eyebrow }}</p>
        }
        <h2>{{ section.heading }}</h2>

        @if (section.intro) {
          <p class="section-intro" [innerHTML]="formatRichText(section.intro)"></p>
        }

        @if (isSplitSection(section)) {
          <div class="content-section__split">
            <div class="content-section__prose">
              @if (section.paragraphs?.length) {
                @for (paragraph of section.paragraphs; track paragraph) {
                  <p [innerHTML]="formatRichText(paragraph)"></p>
                }
              }

              @if (section.component) {
                <app-interactive-content-block
                  [componentKey]="section.component"
                  [fallback]="section.fallback"
                  [title]="section.componentTitle"
                  [description]="section.componentDescription"
                  [config]="section.componentConfig"
                />
              }

              @if (sectionTextBlocks(section).length) {
                @for (block of sectionTextBlocks(section); track trackBlock(block, $index)) {
                  @switch (block.type) {
                    @case ('paragraph') {
                      <p [innerHTML]="formatRichText(block.text, block.referenceIds)"></p>
                    }
                    @case ('callout') {
                      <aside class="content-callout" [attr.data-tone]="block.tone ?? 'neutral'">
                        @if (block.title) {
                          <h3>{{ block.title }}</h3>
                        }
                        <p [innerHTML]="formatRichText(block.text, block.referenceIds)"></p>
                      </aside>
                    }
                    @case ('list') {
                      <div class="content-list">
                        @if (block.title) {
                          <h3>{{ block.title }}</h3>
                        }
                        <ul>
                          @for (item of block.items; track item) {
                            <li [innerHTML]="formatRichText(item)"></li>
                          }
                        </ul>
                        @if (hasReferenceIds(block.referenceIds)) {
                          <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                        }
                      </div>
                    }
                    @case ('component') {
                      <app-interactive-content-block
                        [componentKey]="block.component"
                        [fallback]="block.fallback"
                        [title]="block.title"
                        [description]="block.description"
                        [config]="block.config"
                      />
                      @if (hasReferenceIds(block.referenceIds)) {
                        <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                      }
                    }
                    @case ('table') {
                      <mat-card appearance="outlined" class="content-table">
                        @if (block.title) {
                          <h3>{{ block.title }}</h3>
                        }
                        <div class="content-table__scroll">
                          <table mat-table [dataSource]="block.rows" class="content-material-table">
                            @for (column of block.columns; track column; let index = $index) {
                              <ng-container [matColumnDef]="tableColumnId(index)">
                                <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
                                <td mat-cell *matCellDef="let row">{{ tableCellAt(row, index) }}</td>
                              </ng-container>
                            }

                            <tr mat-header-row *matHeaderRowDef="tableColumnIds(block)"></tr>
                            <tr mat-row *matRowDef="let row; columns: tableColumnIds(block)"></tr>
                          </table>
                        </div>
                        @if (hasReferenceIds(block.referenceIds)) {
                          <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                        }
                      </mat-card>
                    }
                    @case ('cards') {
                      <div class="content-card-grid">
                        @for (item of block.items; track item.title) {
                          <mat-card appearance="outlined" class="content-card">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.description }}</p>
                          </mat-card>
                        }
                      </div>
                      @if (hasReferenceIds(block.referenceIds)) {
                        <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                      }
                    }
                    @case ('code') {
                      <mat-card appearance="outlined" class="content-code-block">
                        @if (block.title) {
                          <h3>{{ block.title }}</h3>
                        }
                        @if (block.language) {
                          <mat-chip-set>
                            <mat-chip>{{ block.language }}</mat-chip>
                          </mat-chip-set>
                        }
                        @if (hasReferenceIds(block.referenceIds)) {
                          <p
                            class="content-block-references content-block-references--code"
                            [innerHTML]="formatStandaloneReferences(block.referenceIds)"
                          ></p>
                        }
                        <div class="content-code-block__actions">
                          <button
                            mat-stroked-button
                            type="button"
                            class="content-code-block__button"
                            (click)="toggleCodeBlock(codeBlockKey(section, block, $index))"
                          >
                            <mat-icon>{{ isCodeBlockExpanded(codeBlockKey(section, block, $index)) ? 'unfold_less' : 'unfold_more' }}</mat-icon>
                            {{ isCodeBlockExpanded(codeBlockKey(section, block, $index)) ? 'Collapse schema' : 'View full schema' }}
                          </button>
                          <button
                            mat-stroked-button
                            type="button"
                            class="content-code-block__button"
                            (click)="copyCodeBlock(codeBlockKey(section, block, $index), block.code)"
                          >
                            <mat-icon>{{ copiedCodeBlockKey() === codeBlockKey(section, block, $index) ? 'check' : 'content_copy' }}</mat-icon>
                            {{ copiedCodeBlockKey() === codeBlockKey(section, block, $index) ? 'Copied' : 'Copy schema' }}
                          </button>
                        </div>
                        <pre [class.content-code-block__pre--collapsed]="!isCodeBlockExpanded(codeBlockKey(section, block, $index))">
                          <code>{{ block.code }}</code>
                        </pre>
                      </mat-card>
                    }
                  }
                }
              }
            </div>

            @if (sectionImage(section); as image) {
              <figure class="content-image content-image--split">
                <button
                  type="button"
                  class="content-image-button"
                  [attr.aria-label]="'Open image: ' + image.alt"
                  (click)="openImage(image)"
                >
                  <img [src]="image.src" [alt]="image.alt" loading="lazy" decoding="async" />
                </button>
                @if (image.caption || hasReferenceIds(image.referenceIds)) {
                  <figcaption [innerHTML]="formatRichText(image.caption, image.referenceIds)"></figcaption>
                }
              </figure>
            }
          </div>
        } @else {
          @if (section.paragraphs?.length) {
            @for (paragraph of section.paragraphs; track paragraph) {
              <p [innerHTML]="formatRichText(paragraph)"></p>
            }
          }

          @if (section.image; as image) {
            <figure class="content-image">
              <button
                type="button"
                class="content-image-button"
                [attr.aria-label]="'Open image: ' + image.alt"
                (click)="openImage(image)"
              >
                <img [src]="image.src" [alt]="image.alt" loading="lazy" decoding="async" />
              </button>
              @if (image.caption || hasReferenceIds(image.referenceIds)) {
                <figcaption [innerHTML]="formatRichText(image.caption, image.referenceIds)"></figcaption>
              }
            </figure>
          }

          @if (section.component) {
            <app-interactive-content-block
              [componentKey]="section.component"
              [fallback]="section.fallback"
              [title]="section.componentTitle"
              [description]="section.componentDescription"
              [config]="section.componentConfig"
            />
          }

          @if (section.blocks?.length) {
            @for (block of section.blocks; track trackBlock(block, $index)) {
              @switch (block.type) {
                @case ('paragraph') {
                  <p [innerHTML]="formatRichText(block.text, block.referenceIds)"></p>
                }
                @case ('image') {
                  <figure class="content-image">
                    <button
                      type="button"
                      class="content-image-button"
                      [attr.aria-label]="'Open image: ' + block.alt"
                      (click)="openImage(block)"
                    >
                      <img [src]="block.src" [alt]="block.alt" loading="lazy" decoding="async" />
                    </button>
                    @if (block.caption || hasReferenceIds(block.referenceIds)) {
                      <figcaption [innerHTML]="formatRichText(block.caption, block.referenceIds)"></figcaption>
                    }
                  </figure>
                }
                @case ('callout') {
                  <aside class="content-callout" [attr.data-tone]="block.tone ?? 'neutral'">
                    @if (block.title) {
                      <h3>{{ block.title }}</h3>
                    }
                    <p [innerHTML]="formatRichText(block.text, block.referenceIds)"></p>
                  </aside>
                }
                @case ('list') {
                  <div class="content-list">
                    @if (block.title) {
                      <h3>{{ block.title }}</h3>
                    }
                    <ul>
                      @for (item of block.items; track item) {
                        <li [innerHTML]="formatRichText(item)"></li>
                      }
                    </ul>
                    @if (hasReferenceIds(block.referenceIds)) {
                      <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                    }
                  </div>
                }
                @case ('component') {
                  <app-interactive-content-block
                    [componentKey]="block.component"
                    [fallback]="block.fallback"
                    [title]="block.title"
                    [description]="block.description"
                    [config]="block.config"
                  />
                  @if (hasReferenceIds(block.referenceIds)) {
                    <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                  }
                }
                @case ('table') {
                  <mat-card appearance="outlined" class="content-table">
                    @if (block.title) {
                      <h3>{{ block.title }}</h3>
                    }
                    <div class="content-table__scroll">
                      <table mat-table [dataSource]="block.rows" class="content-material-table">
                        @for (column of block.columns; track column; let index = $index) {
                          <ng-container [matColumnDef]="tableColumnId(index)">
                            <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
                            <td mat-cell *matCellDef="let row">{{ tableCellAt(row, index) }}</td>
                          </ng-container>
                        }

                        <tr mat-header-row *matHeaderRowDef="tableColumnIds(block)"></tr>
                        <tr mat-row *matRowDef="let row; columns: tableColumnIds(block)"></tr>
                      </table>
                    </div>
                    @if (hasReferenceIds(block.referenceIds)) {
                      <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                    }
                  </mat-card>
                }
                @case ('cards') {
                  <div class="content-card-grid">
                    @for (item of block.items; track item.title) {
                      <mat-card appearance="outlined" class="content-card">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                      </mat-card>
                    }
                  </div>
                  @if (hasReferenceIds(block.referenceIds)) {
                    <p class="content-block-references" [innerHTML]="formatStandaloneReferences(block.referenceIds)"></p>
                  }
                }
                @case ('code') {
                  <mat-card appearance="outlined" class="content-code-block">
                    @if (block.title) {
                      <h3>{{ block.title }}</h3>
                    }
                    @if (block.language) {
                      <mat-chip-set>
                        <mat-chip>{{ block.language }}</mat-chip>
                      </mat-chip-set>
                    }
                    @if (hasReferenceIds(block.referenceIds)) {
                      <p
                        class="content-block-references content-block-references--code"
                        [innerHTML]="formatStandaloneReferences(block.referenceIds)"
                      ></p>
                    }
                    <div class="content-code-block__actions">
                      <button
                        mat-stroked-button
                        type="button"
                        class="content-code-block__button"
                        (click)="toggleCodeBlock(codeBlockKey(section, block, $index))"
                      >
                        <mat-icon>{{ isCodeBlockExpanded(codeBlockKey(section, block, $index)) ? 'unfold_less' : 'unfold_more' }}</mat-icon>
                        {{ isCodeBlockExpanded(codeBlockKey(section, block, $index)) ? 'Collapse schema' : 'View full schema' }}
                      </button>
                      <button
                        mat-stroked-button
                        type="button"
                        class="content-code-block__button"
                        (click)="copyCodeBlock(codeBlockKey(section, block, $index), block.code)"
                      >
                        <mat-icon>{{ copiedCodeBlockKey() === codeBlockKey(section, block, $index) ? 'check' : 'content_copy' }}</mat-icon>
                        {{ copiedCodeBlockKey() === codeBlockKey(section, block, $index) ? 'Copied' : 'Copy schema' }}
                      </button>
                    </div>
                    <pre [class.content-code-block__pre--collapsed]="!isCodeBlockExpanded(codeBlockKey(section, block, $index))">
                      <code>{{ block.code }}</code>
                    </pre>
                  </mat-card>
                }
              }
            }
          }
        }

        @if (section.callout) {
          <blockquote>{{ section.callout }}</blockquote>
        }
      </section>
    }

    @if (activeImage(); as image) {
      <div class="lightbox-backdrop" (click)="closeImage()">
        <div class="lightbox-dialog" (click)="$event.stopPropagation()">
          <button
            mat-icon-button
            type="button"
            class="lightbox-close"
            aria-label="Close image viewer"
            (click)="closeImage()"
          >
            <mat-icon>close</mat-icon>
          </button>

          <div class="lightbox-stage">
            <img class="lightbox-watermark" src="assets/images/cweise_logo_dark_mode.svg" alt="" aria-hidden="true" />
            <img class="lightbox-image" [src]="image.src" [alt]="image.alt" />
          </div>

          <div class="lightbox-meta">
            <p class="lightbox-title">{{ image.alt }}</p>
            @if (image.caption) {
              <p class="lightbox-caption">{{ image.caption }}</p>
            }
          </div>
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 40px;
      min-width: 0;
      width: 100%;
      max-width: 100%;
      overflow-x: clip;
    }

    .content-section {
      display: grid;
      gap: 16px;
      min-width: 0;
      width: 100%;
      max-width: 100%;
      overflow-x: clip;
      scroll-margin-top: calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 24px);
    }

    .content-section__split {
      display: grid;
      grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.95fr);
      gap: 28px;
      align-items: start;
      min-width: 0;
      width: 100%;
      max-width: 100%;
    }

    .content-section--split-left .content-section__prose {
      order: 2;
    }

    .content-section--split-left .content-image--split {
      order: 1;
    }

    .content-section__prose {
      display: grid;
      gap: 16px;
      min-width: 0;
      width: 100%;
      max-width: 100%;
    }

    .content-section-eyebrow {
      margin: 0;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--cw-accent);
    }

    h2 {
      margin: 0;
      font-size: 1.6rem;
      letter-spacing: -0.03em;
    }

    h3 {
      margin: 0;
      font-size: 1.05rem;
      color: var(--cw-ink);
    }

    p,
    li {
      margin: 0;
      color: var(--cw-muted);
      line-height: 1.8;
    }

    :host ::ng-deep .content-reference {
      margin-left: 0.04em;
      font-size: 0.68em;
      line-height: 0;
      vertical-align: super;
      white-space: nowrap;
    }

    :host ::ng-deep .content-reference + .content-reference {
      margin-left: 0.18em;
    }

    :host ::ng-deep .content-reference a {
      color: var(--cw-accent);
      font-weight: 700;
      text-decoration: none;
    }

    :host ::ng-deep .content-reference a:hover {
      text-decoration: underline;
    }

    .section-intro {
      color: var(--cw-ink);
      font-weight: 500;
    }

    .content-image {
      margin: 4px 0 0;
      display: grid;
      gap: 10px;
      width: min(100%, 1120px);
      min-width: 0;
      max-width: 100%;
    }

    .content-image--split {
      width: 100%;
      margin-top: 0;
      position: sticky;
      top: calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 28px);
    }

    .content-image-button {
      appearance: none;
      border: 0;
      padding: 0;
      margin: 0;
      background: none;
      display: block;
      width: 100%;
      max-width: 100%;
      cursor: zoom-in;
      border-radius: 16px;
      overflow: hidden;
    }

    .content-image img {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 16px;
      border: 1px solid var(--cw-line);
      background: var(--cw-panel);
    }

    .content-image figcaption {
      color: var(--cw-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .content-callout,
    .component-fallback,
    .content-list {
      border: 1px solid var(--cw-line);
      border-radius: 16px;
      background: var(--cw-panel);
      padding: 20px 22px;
      display: grid;
      gap: 10px;
      max-width: 980px;
    }

    app-interactive-content-block {
      display: block;
      width: min(100%, 1120px);
      min-width: 0;
      max-width: 100%;
    }

    .content-section > p,
    .content-section > .section-intro,
    .content-section > blockquote {
      max-width: 980px;
    }

    .content-section__prose > p,
    .content-section__prose > .section-intro,
    .content-section__prose > blockquote,
    .content-section__prose > .content-callout,
    .content-section__prose > .content-list,
    .content-section__prose > .content-table,
    .content-section__prose > .content-card-grid,
    .content-section__prose > .content-code-block {
      max-width: none;
    }

    .content-callout[data-tone='executive'] {
      background: color-mix(in srgb, var(--cw-accent) 5%, var(--cw-panel));
    }

    .content-callout[data-tone='technical'] {
      background: color-mix(in srgb, var(--cw-hero-mid) 22%, var(--cw-panel));
    }

    .content-callout[data-tone='warning'] {
      background: color-mix(in srgb, #f59e0b 10%, var(--cw-panel));
    }

    .content-list ul {
      margin: 0;
      padding-left: 1.15rem;
      display: grid;
      gap: 8px;
    }

    .content-block-references {
      margin-top: 2px;
      color: var(--cw-muted);
      line-height: 1.2;
    }

    .content-table__scroll {
      overflow-x: auto;
    }

    .content-table {
      padding: 0;
      overflow: hidden;
      background: var(--cw-panel) !important;
      border-color: var(--cw-line) !important;
    }

    .content-table h3,
    .content-code-block h3 {
      padding: 20px 22px 0;
    }

    .content-material-table {
      width: 100%;
      min-width: 640px;
      background: transparent;
    }

    .content-material-table .mat-mdc-header-cell,
    .content-material-table .mat-mdc-cell {
      padding: 12px 14px;
      vertical-align: top;
      color: var(--cw-muted) !important;
      line-height: 1.6;
      border-bottom-color: var(--cw-line);
      background: transparent;
    }

    .content-material-table .mat-mdc-header-cell {
      font-size: 0.82rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--cw-ink) !important;
    }

    .content-card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      width: min(100%, 1120px);
      min-width: 0;
      max-width: 100%;
    }

    .content-card {
      display: grid;
      gap: 8px;
      min-width: 0;
      max-width: 100%;
      padding: 18px 20px;
      border: 1px solid var(--cw-line);
      border-radius: 16px;
      background: var(--cw-panel) !important;
    }

    .content-card h3,
    .content-card p,
    .content-section h2,
    .content-section h3,
    .content-section p,
    .content-section li,
    .content-image figcaption {
      overflow-wrap: anywhere;
    }

    .content-code-block {
      position: relative;
      width: min(100%, 1120px);
      min-width: 0;
      max-width: 100%;
      padding: 0 0 20px;
      background: linear-gradient(180deg, #13263a 0%, #0d1d2e 100%);
      border-color: color-mix(in srgb, var(--cw-line) 40%, #18324a);
    }

    .content-code-block h3 {
      color: rgba(248, 250, 252, 0.96);
    }

    .content-code-block mat-chip-set {
      padding: 0 22px;
    }

    .content-code-block mat-chip {
      background: rgba(255, 255, 255, 0.14);
      color: rgba(241, 245, 249, 0.92);
    }

    .content-code-block__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 12px 22px 0;
    }

    .content-code-block__button {
      border-color: rgba(255, 255, 255, 0.16) !important;
      color: rgba(241, 245, 249, 0.94) !important;
    }

    .content-code-block__button mat-icon {
      color: inherit;
    }

    .content-code-block__pre--collapsed {
      max-height: 480px;
      overflow: auto;
    }

    .content-code-block pre {
      margin: 0 22px;
      padding: 18px;
      border-radius: 14px;
      background: rgba(8, 17, 29, 0.72);
      color: rgba(241, 245, 249, 0.96);
      overflow: auto;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .content-code-block code {
      font-family: 'SFMono-Regular', 'SF Mono', Consolas, monospace;
      font-size: 0.9rem;
      color: rgba(241, 245, 249, 0.96);
      white-space: pre;
    }

    blockquote {
      margin: 0;
      padding: 18px 20px;
      border-left: 4px solid var(--cw-accent);
      background: color-mix(in srgb, var(--cw-accent) 6%, var(--cw-panel));
      color: var(--cw-ink);
      border-radius: 12px;
      line-height: 1.75;
    }

    .lightbox-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1200;
      background: rgba(8, 15, 26, 0.9);
      backdrop-filter: blur(8px);
      display: grid;
      place-items: center;
      padding: 24px;
    }

    .lightbox-dialog {
      position: relative;
      width: min(96vw, 1440px);
      max-height: calc(100vh - 48px);
      display: grid;
      gap: 16px;
    }

    .lightbox-close {
      justify-self: end;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.08);
    }

    .lightbox-stage {
      position: relative;
      min-height: 0;
      display: grid;
      place-items: center;
      padding: 20px;
      border-radius: 24px;
      background: linear-gradient(180deg, rgba(13, 25, 42, 0.96), rgba(8, 17, 30, 0.96));
      overflow: hidden;
    }

    .lightbox-watermark {
      position: absolute;
      inset: 0;
      width: min(44vw, 520px);
      max-width: 70%;
      height: auto;
      margin: auto;
      opacity: 0.08;
      pointer-events: none;
      filter: brightness(1.2);
    }

    .lightbox-image {
      position: relative;
      z-index: 1;
      display: block;
      width: auto;
      max-width: 100%;
      max-height: calc(100vh - 180px);
      height: auto;
      object-fit: contain;
      border-radius: 18px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    }

    .lightbox-meta {
      position: relative;
      z-index: 1;
      display: grid;
      gap: 6px;
      justify-items: center;
      text-align: center;
    }

    .lightbox-title,
    .lightbox-caption {
      color: rgba(255, 255, 255, 0.92);
    }

    .lightbox-title {
      font-weight: 700;
    }

    .lightbox-caption {
      max-width: min(80ch, 100%);
      color: rgba(255, 255, 255, 0.72);
    }

    :host-context(body.cw-theme-dusk) .content-table,
    :host-context(body.cw-theme-dusk) .content-card,
    :host-context(body.cw-theme-dusk) .content-code-block,
    :host-context(body.cw-theme-dusk) .content-callout,
    :host-context(body.cw-theme-dusk) .content-list {
      background: var(--cw-panel) !important;
      border-color: var(--cw-line) !important;
    }

    :host-context(body.cw-theme-dusk) .content-material-table .mat-mdc-header-cell {
      color: var(--cw-ink) !important;
    }

    :host-context(body.cw-theme-dusk) .content-material-table .mat-mdc-cell,
    :host-context(body.cw-theme-dusk) .content-card p,
    :host-context(body.cw-theme-dusk) .content-code-block p,
    :host-context(body.cw-theme-dusk) .content-callout p,
    :host-context(body.cw-theme-dusk) .content-list li {
      color: var(--cw-muted) !important;
    }

    @media (max-width: 860px) {
      .content-section__split {
        grid-template-columns: 1fr;
      }

      .content-card-grid {
        grid-template-columns: 1fr;
      }

      .content-section--split-left .content-section__prose,
      .content-section--split-left .content-image--split {
        order: initial;
      }

      .content-image--split {
        position: static;
      }
    }

    @media (max-width: 720px) {
      .content-image,
      .content-card-grid,
      app-interactive-content-block,
      .content-code-block {
        width: 100%;
      }
    }

    @media (max-width: 720px) {
      .lightbox-backdrop {
        padding: 12px;
      }

      .lightbox-dialog {
        width: 100%;
        max-height: calc(100vh - 24px);
      }

      .lightbox-stage {
        padding: 12px;
        border-radius: 18px;
      }

      .lightbox-image {
        max-height: calc(100vh - 150px);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentRendererComponent {
  readonly sections = input.required<ContentSection[]>();
  readonly references = input<ContentReference[]>([]);
  readonly activeImage = signal<LightboxImage | null>(null);
  readonly expandedCodeBlockKeys = signal<Record<string, boolean>>({});
  readonly copiedCodeBlockKey = signal<string | null>(null);
  readonly referenceNumberById = computed(() => {
    const numbers = new Map<string, string>();

    this.references().forEach((reference, index) => {
      const number = String(reference.number ?? index + 1);
      if (reference.id) {
        numbers.set(reference.id, number);
      }
    });

    return numbers;
  });

  trackSection(section: ContentSection, index: number): string {
    return `${this.sectionId(section)}-${index}`;
  }

  trackBlock(block: ContentSectionBlock, index: number): string {
    switch (block.type) {
      case 'paragraph':
        return `paragraph-${index}-${block.text}`;
      case 'image':
        return `image-${index}-${block.src}`;
      case 'callout':
        return `callout-${index}-${block.title ?? block.text}`;
      case 'list':
        return `list-${index}-${block.title ?? 'items'}`;
      case 'table':
        return `table-${index}-${block.title ?? block.columns.join('-')}`;
      case 'cards':
        return `cards-${index}-${block.items.map((item) => item.title).join('-')}`;
      case 'code':
        return `code-${index}-${block.title ?? block.language ?? 'block'}`;
      case 'component':
        return `component-${index}-${block.component}`;
    }
  }

  tableColumnIds(block: ContentTableBlock): string[] {
    return block.columns.map((_, index) => this.tableColumnId(index));
  }

  tableColumnId(index: number): string {
    return `column-${index}`;
  }

  tableCellAt(row: string[], index: number): string {
    return row[index] ?? '';
  }

  codeBlockKey(section: ContentSection, block: ContentCodeBlock, index: number): string {
    return `${this.sectionId(section)}-code-${index}-${block.title ?? block.language ?? 'block'}`;
  }

  isCodeBlockExpanded(key: string): boolean {
    return !!this.expandedCodeBlockKeys()[key];
  }

  toggleCodeBlock(key: string): void {
    this.expandedCodeBlockKeys.update((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  copyCodeBlock(key: string, code: string): void {
    if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
      return;
    }

    void navigator.clipboard.writeText(code).then(() => {
      this.copiedCodeBlockKey.set(key);
      setTimeout(() => {
        if (this.copiedCodeBlockKey() === key) {
          this.copiedCodeBlockKey.set(null);
        }
      }, 2000);
    });
  }

  sectionId(section: ContentSection): string {
    return section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  openImage(image: LightboxImage): void {
    this.activeImage.set(image);
  }

  closeImage(): void {
    this.activeImage.set(null);
  }

  isSplitSection(section: ContentSection): boolean {
    return (
      (section.layout === 'split-image-right' || section.layout === 'split-image-left') &&
      !!this.sectionImage(section)
    );
  }

  sectionImage(section: ContentSection): ContentImage | ContentImageBlock | null {
    if (section.image) {
      return section.image;
    }

    const imageBlock = section.blocks?.find((block): block is ContentImageBlock => block.type === 'image');
    return imageBlock ?? null;
  }

  sectionTextBlocks(section: ContentSection): ContentSectionBlock[] {
    if (!section.blocks?.length) {
      return [];
    }

    let imageConsumed = false;

    return section.blocks.filter((block) => {
      if (!imageConsumed && block.type === 'image') {
        imageConsumed = true;
        return false;
      }

      return true;
    });
  }

  hasReferenceIds(referenceIds: string[] | undefined): boolean {
    return this.resolveReferenceNumbers(referenceIds).length > 0;
  }

  formatRichText(text: string | undefined, referenceIds?: string[]): string {
    const source = text ?? '';
    const inlineNumbers = this.inlineReferenceNumbers(source);
    const content = this.textSegments(source)
      .map((segment) =>
        segment.type === 'text'
          ? this.escapeHtml(segment.value)
          : `<sup class="content-reference"><a href="${this.referenceHref(segment.value)}" aria-label="Jump to reference ${segment.value}">${segment.value}</a></sup>`
      )
      .join('');

    const trailingReferences = this.resolveReferenceNumbers(referenceIds).filter((number) => !inlineNumbers.includes(number));
    return `${content}${this.referenceMarkup(trailingReferences)}`;
  }

  formatStandaloneReferences(referenceIds?: string[], contextText?: string): string {
    const excluded = this.inlineReferenceNumbers(contextText ?? '');
    const numbers = this.resolveReferenceNumbers(referenceIds).filter((number) => !excluded.includes(number));
    return this.referenceMarkup(numbers);
  }

  private textSegments(text: string): RichTextSegment[] {
    const segments: RichTextSegment[] = [];
    const pattern = /\[(\d+)\]/g;
    let cursor = 0;

    for (const match of text.matchAll(pattern)) {
      const index = match.index ?? 0;

      if (index > cursor) {
        segments.push({ type: 'text', value: text.slice(cursor, index) });
      }

      segments.push({ type: 'reference', value: match[1] });
      cursor = index + match[0].length;
    }

    if (cursor < text.length) {
      segments.push({ type: 'text', value: text.slice(cursor) });
    }

    return segments.length ? segments : [{ type: 'text', value: text }];
  }

  private inlineReferenceNumbers(text: string): string[] {
    const numbers: string[] = [];
    const seen = new Set<string>();

    for (const match of text.matchAll(/\[(\d+)\]/g)) {
      const value = match[1];
      if (!seen.has(value)) {
        seen.add(value);
        numbers.push(value);
      }
    }

    return numbers;
  }

  private resolveReferenceNumbers(referenceIds?: string[]): string[] {
    if (!referenceIds?.length) {
      return [];
    }

    const numberById = this.referenceNumberById();
    const numbers: string[] = [];
    const seen = new Set<string>();

    for (const referenceId of referenceIds) {
      const candidate = referenceId.trim();
      if (!candidate) {
        continue;
      }

      const number = numberById.get(candidate) ?? (/^\d+$/.test(candidate) ? candidate : '');
      if (!number || seen.has(number)) {
        continue;
      }

      seen.add(number);
      numbers.push(number);
    }

    return numbers;
  }

  private referenceMarkup(referenceNumbers: string[]): string {
    return referenceNumbers
      .map(
        (referenceNumber) =>
          `<sup class="content-reference"><a href="${this.referenceHref(referenceNumber)}" aria-label="Jump to reference ${referenceNumber}">${referenceNumber}</a></sup>`
      )
      .join('');
  }

  private referenceHref(referenceNumber: string): string {
    return `#reference-${referenceNumber}`;
  }

  private escapeHtml(value: string): string {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
}
