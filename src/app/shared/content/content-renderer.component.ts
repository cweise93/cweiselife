import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentSection, ContentSectionBlock } from '../../core/content/content.models';

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'cw-content-renderer',
  imports: [MatButtonModule, MatIconModule],
  template: `
    @for (section of sections(); track trackSection(section, $index)) {
      <section class="content-section" [id]="sectionId(section)">
        @if (section.eyebrow) {
          <p class="content-section-eyebrow">{{ section.eyebrow }}</p>
        }
        <h2>{{ section.heading }}</h2>

        @if (section.intro) {
          <p class="section-intro">{{ section.intro }}</p>
        }

        @if (section.paragraphs?.length) {
          @for (paragraph of section.paragraphs; track paragraph) {
            <p>{{ paragraph }}</p>
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
              <img [src]="image.src" [alt]="image.alt" />
            </button>
            @if (image.caption) {
              <figcaption>{{ image.caption }}</figcaption>
            }
          </figure>
        }

        @if (section.component) {
          <div class="component-fallback">
            @if (section.fallback) {
              <p>{{ section.fallback }}</p>
            } @else {
              <p>{{ componentFallbackText(section.component) }}</p>
            }
          </div>
        }

        @if (section.blocks?.length) {
          @for (block of section.blocks; track trackBlock(block, $index)) {
            @switch (block.type) {
              @case ('paragraph') {
                <p>{{ block.text }}</p>
              }
              @case ('image') {
                <figure class="content-image">
                  <button
                    type="button"
                    class="content-image-button"
                    [attr.aria-label]="'Open image: ' + block.alt"
                    (click)="openImage(block)"
                  >
                    <img [src]="block.src" [alt]="block.alt" />
                  </button>
                  @if (block.caption) {
                    <figcaption>{{ block.caption }}</figcaption>
                  }
                </figure>
              }
              @case ('callout') {
                <aside class="content-callout" [attr.data-tone]="block.tone ?? 'neutral'">
                  @if (block.title) {
                    <h3>{{ block.title }}</h3>
                  }
                  <p>{{ block.text }}</p>
                </aside>
              }
              @case ('list') {
                <div class="content-list">
                  @if (block.title) {
                    <h3>{{ block.title }}</h3>
                  }
                  <ul>
                    @for (item of block.items; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </div>
              }
              @case ('component') {
                <div class="component-fallback">
                  @if (block.fallback) {
                    <p>{{ block.fallback }}</p>
                  } @else {
                    <p>{{ componentFallbackText(block.component) }}</p>
                  }
                </div>
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
    }

    .content-section {
      display: grid;
      gap: 16px;
      scroll-margin-top: calc(var(--cw-toolbar-height) + 24px);
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

    .section-intro {
      color: var(--cw-ink);
      font-weight: 500;
    }

    .content-image {
      margin: 4px 0 0;
      display: grid;
      gap: 10px;
    }

    .content-image-button {
      appearance: none;
      border: 0;
      padding: 0;
      margin: 0;
      background: none;
      display: block;
      cursor: zoom-in;
      border-radius: 16px;
      overflow: hidden;
    }

    .content-image img {
      display: block;
      width: 100%;
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

  readonly normalizedSections = computed(() => this.sections());
  readonly activeImage = signal<LightboxImage | null>(null);

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
      case 'component':
        return `component-${index}-${block.component}`;
    }
  }

  sectionId(section: ContentSection): string {
    return section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  componentFallbackText(componentName: string): string {
    if (componentName === 'relationship-value-explorer') {
      return 'Interactive relationship-value explorer will render here.';
    }

    return `Component placeholder: ${componentName}`;
  }

  openImage(image: LightboxImage): void {
    this.activeImage.set(image);
  }

  closeImage(): void {
    this.activeImage.set(null);
  }
}
