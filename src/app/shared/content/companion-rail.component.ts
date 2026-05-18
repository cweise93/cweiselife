import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentCompanion } from '../../core/content/content.models';

@Component({
  selector: 'cw-companion-rail',
  imports: [RouterLink, DatePipe, MatButtonModule, MatIconModule],
  template: `
    <aside class="companion-rail">
      @if (companion().snapshot?.length) {
        <section class="rail-card">
          <p class="rail-eyebrow">Framework Snapshot</p>
          <dl class="snapshot-list">
            @for (item of companion().snapshot; track item.label) {
              <div>
                <dt>{{ item.label }}</dt>
                <dd>{{ item.value }}</dd>
              </div>
            }
          </dl>
        </section>
      }

      @if (companion().toc?.length) {
        <section class="rail-card">
          <p class="rail-eyebrow">In This Framework</p>
          <nav class="rail-link-list" aria-label="Framework section navigation">
            @for (item of companion().toc; track item.anchor) {
              <a [routerLink]="[]" [fragment]="item.anchor">{{ item.label }}</a>
            }
          </nav>
        </section>
      }

      @if (companion().callsToAction?.length) {
        <section class="rail-card">
          <p class="rail-eyebrow">Live Artifact</p>
          <div class="rail-stack">
            @for (item of companion().callsToAction; track item.title) {
              <section class="rail-cta">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                @if (item.href || item.anchor) {
                  @if (item.anchor && !item.href) {
                    <a
                      mat-stroked-button
                      [routerLink]="[]"
                      [fragment]="item.anchor"
                    >
                      {{ item.buttonLabel || 'Open' }}
                    </a>
                  } @else {
                    <a
                      mat-stroked-button
                      [href]="item.href"
                    >
                      {{ item.buttonLabel || 'Open' }}
                    </a>
                  }
                }
              </section>
            }
          </div>
        </section>
      }

      @if (companion().assets?.length) {
        <section class="rail-card">
          <p class="rail-eyebrow">Framework Assets</p>
          <div class="rail-stack">
            @for (item of companion().assets; track item.label) {
              @if (isLocalAnchor(item.href)) {
                <a class="rail-asset" [routerLink]="[]" [fragment]="anchorFromHref(item.href)">
                  <span class="asset-label">{{ item.label }}</span>
                  @if (item.description) {
                    <span class="asset-description">{{ item.description }}</span>
                  }
                </a>
              } @else {
                <a class="rail-asset" [href]="item.href">
                  <span class="asset-label">{{ item.label }}</span>
                  @if (item.description) {
                    <span class="asset-description">{{ item.description }}</span>
                  }
                </a>
              }
            }
          </div>
        </section>
      }

      @if (companion().related?.length) {
        <section class="rail-card">
          <p class="rail-eyebrow">Related Frameworks</p>
          <div class="rail-stack">
            @for (item of companion().related; track item.slug) {
              <a class="rail-related" [routerLink]="slugToRoute(item.slug)">
                <span class="asset-label">{{ item.title }}</span>
                @if (item.description) {
                  <span class="asset-description">{{ item.description }}</span>
                }
              </a>
            }
          </div>
        </section>
      }

      @if (showFallbackMeta()) {
        <section class="rail-card">
          <p class="rail-eyebrow">Details</p>
          <dl class="snapshot-list">
            @if (category()) {
              <div>
                <dt>Category</dt>
                <dd>{{ category() }}</dd>
              </div>
            }
            @if (publishedOn()) {
              <div>
                <dt>Published</dt>
                <dd>{{ publishedOn() | date:'MMMM d, y' }}</dd>
              </div>
            }
            @if (tags().length) {
              <div>
                <dt>Tags</dt>
                <dd>{{ tags().join(' · ') }}</dd>
              </div>
            }
          </dl>
        </section>
      }
    </aside>
  `,
  styles: `
    :host {
      display: block;
    }

    .companion-rail {
      display: grid;
      gap: 16px;
      position: sticky;
      top: calc(var(--cw-toolbar-height) + 24px);
    }

    .rail-card {
      border: 1px solid var(--cw-line);
      border-radius: 18px;
      background: var(--cw-panel);
      padding: 18px;
      display: grid;
      gap: 14px;
    }

    .rail-eyebrow {
      margin: 0;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--cw-muted);
    }

    .snapshot-list,
    .rail-stack {
      display: grid;
      gap: 12px;
    }

    .snapshot-list div {
      display: grid;
      gap: 4px;
    }

    dt {
      color: var(--cw-muted);
      font-size: 0.85rem;
      font-weight: 600;
    }

    dd,
    p {
      margin: 0;
      color: var(--cw-ink);
      line-height: 1.65;
    }

    .rail-link-list {
      display: grid;
      gap: 8px;
    }

    .rail-link-list a,
    .rail-asset,
    .rail-related {
      color: var(--cw-ink);
      text-decoration: none;
      display: grid;
      gap: 4px;
    }

    .rail-link-list a:hover,
    .rail-asset:hover,
    .rail-related:hover {
      color: var(--cw-accent);
    }

    h3,
    .asset-label {
      margin: 0;
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--cw-ink);
    }

    .asset-description {
      color: var(--cw-muted);
      font-size: 0.92rem;
      line-height: 1.55;
    }

    .rail-cta {
      display: grid;
      gap: 10px;
    }

    @media (max-width: 980px) {
      .companion-rail {
        position: static;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanionRailComponent {
  readonly companion = input<ContentCompanion>({});
  readonly category = input<string>('');
  readonly publishedOn = input<string>('');
  readonly tags = input<string[]>([]);

  readonly showFallbackMeta = computed(() => {
    const current = this.companion();
    const hasStructuredContent =
      !!current.snapshot?.length ||
      !!current.toc?.length ||
      !!current.assets?.length ||
      !!current.related?.length ||
      !!current.callsToAction?.length;

    return !hasStructuredContent && (!!this.category() || !!this.publishedOn() || this.tags().length > 0);
  });

  slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  isLocalAnchor(href: string): boolean {
    return href.startsWith('#') && href.length > 1;
  }

  anchorFromHref(href: string): string {
    return href.replace(/^#/, '');
  }
}
