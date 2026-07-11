import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CitationSegment, citationOccurrenceId, referenceAnchorId } from '../../core/content/writing-citations';

@Component({
  selector: 'cw-inline-citation-text',
  standalone: true,
  imports: [RouterLink],
  template: `
    @for (segment of segments(); track $index) {
      @if (segment.type === 'text') {
        <ng-container>{{ segment.text }}</ng-container>
      } @else {
        <a
          class="article-citation"
          [id]="citationId(segment.referenceId, segment.occurrence)"
          [routerLink]="[]"
          [fragment]="referenceId(segment.referenceId)"
          [attr.aria-label]="'Citation: ' + segment.text + '. View full reference.'"
        >
          {{ segment.text }}
        </a>
      }
    }
  `,
  styles: `
    :host {
      display: inline;
    }

    .article-citation {
      color: var(--mat-sys-primary, var(--cw-accent));
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.14em;
      text-decoration-color: color-mix(in srgb, currentColor 60%, transparent);
      scroll-margin-top: calc(var(--cw-toolbar-current-height, var(--cw-toolbar-height)) + var(--framework-context-bar-height, 0px) + 24px);
    }

    .article-citation:hover {
      text-decoration-thickness: 2px;
    }

    .article-citation:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-radius: 2px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineCitationTextComponent {
  readonly segments = input.required<CitationSegment[]>();

  citationId(referenceId: string, occurrence: number): string {
    return citationOccurrenceId(referenceId, occurrence);
  }

  referenceId(referenceId: string): string {
    return referenceAnchorId(referenceId);
  }
}
