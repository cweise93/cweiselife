import { Component, HostListener, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ContentService } from '../../core/content/content.service';
import { ContentCollectionViewModel, GuideItem } from '../../core/content/content.models';

const EMPTY_GUIDES_PAGE: ContentCollectionViewModel<GuideItem> = {
  meta: {
    version: 1,
    updatedOn: '2026-05-27',
    eyebrow: 'Guides',
    headline: 'Operating Tools',
    intro: ''
  },
  items: []
};

interface GuideTileSpan {
  cols: number;
  rows: number;
}

interface GuideTileLayout {
  guide: GuideItem;
  index: number;
  colspan: number;
  rowspan: number;
  hero: boolean;
  visualClass: string;
}

@Component({
  selector: 'cw-guides',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatGridListModule, MatIconModule],
  templateUrl: './guides.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './guides.component.scss'
})
export class GuidesComponent {
  private readonly contentService = inject(ContentService);
  readonly page = toSignal(this.contentService.getGuidesPage(), { initialValue: EMPTY_GUIDES_PAGE });
  readonly viewportWidth = signal(typeof window === 'undefined' ? 1440 : window.innerWidth);
  readonly guideGridCols = computed(() => {
    const width = this.viewportWidth();

    if (width < 760) {
      return 1;
    }

    if (width < 1160) {
      return 2;
    }

    if (width < 1580) {
      return 3;
    }

    return 4;
  });
  readonly guideGridRowHeight = computed(() => {
    const width = this.viewportWidth();

    if (width < 760) {
      return '292px';
    }

    if (width < 1160) {
      return '320px';
    }

    if (width < 1580) {
      return '272px';
    }

    return '248px';
  });
  readonly guideTileLayouts = computed(() => this.buildGuideTileLayouts(this.page().items, this.guideGridCols()));

  getGuideRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }

  @HostListener('window:resize')
  onResize(): void {
    this.viewportWidth.set(typeof window === 'undefined' ? 1440 : window.innerWidth);
  }

  getGuideTags(guide: GuideItem): string[] {
    return guide.tags.slice(0, 3);
  }

  private buildGuideTileLayouts(guides: GuideItem[], cols: number): GuideTileLayout[] {
    if (!guides.length) {
      return [];
    }

    if (cols === 1) {
      return guides.map((guide, index) => ({
        guide,
        index,
        colspan: 1,
        rowspan: 1,
        hero: guide.featured && index === 0,
        visualClass: this.getGuideVisualClass(index)
      }));
    }

    const occupied: boolean[][] = [];

    return guides.map((guide, index) => {
      const placement = this.placeGuideTile(occupied, cols, this.getGuideSpanCandidates(guide, index, cols));

      return {
        guide,
        index,
        colspan: placement.cols,
        rowspan: placement.rows,
        hero: guide.featured && index === 0,
        visualClass: this.getGuideVisualClass(index)
      };
    });
  }

  private placeGuideTile(occupied: boolean[][], gridCols: number, candidates: GuideTileSpan[]): GuideTileSpan {
    let row = 0;

    while (true) {
      for (let col = 0; col < gridCols; col += 1) {
        if (this.isOccupied(occupied, row, col)) {
          continue;
        }

        for (const candidate of candidates) {
          if (col + candidate.cols > gridCols) {
            continue;
          }

          if (!this.canPlaceTile(occupied, row, col, candidate)) {
            continue;
          }

          this.markTile(occupied, row, col, candidate);
          return candidate;
        }
      }

      row += 1;
    }
  }

  private getGuideSpanCandidates(guide: GuideItem, index: number, cols: number): GuideTileSpan[] {
    if (guide.featured && index === 0) {
      return this.filterGuideSpanCandidates(
        cols,
        cols >= 3
          ? [
              { cols: 2, rows: 2 },
              { cols: 2, rows: 1 },
              { cols: 1, rows: 2 },
              { cols: 1, rows: 1 }
            ]
          : [
              { cols: 2, rows: 2 },
              { cols: 2, rows: 1 },
              { cols: 1, rows: 1 }
            ]
      );
    }

    const seed = this.hashGuideSeed(guide, index);
    const widthBias = guide.title.length > 28 || guide.summary.length > 118 ? 'wide' : 'balanced';
    const band = seed % 4;
    const candidatePool =
      widthBias === 'wide'
        ? [
            [
              { cols: 2, rows: 1 },
              { cols: 1, rows: 1 },
              { cols: 1, rows: 2 }
            ],
            [
              { cols: 1, rows: 2 },
              { cols: 2, rows: 1 },
              { cols: 1, rows: 1 }
            ],
            [
              { cols: 2, rows: 1 },
              { cols: 1, rows: 2 },
              { cols: 1, rows: 1 }
            ],
            [
              { cols: 1, rows: 1 },
              { cols: 2, rows: 1 },
              { cols: 1, rows: 2 }
            ]
          ]
        : [
            [
              { cols: 1, rows: 1 },
              { cols: 2, rows: 1 },
              { cols: 1, rows: 2 }
            ],
            [
              { cols: 2, rows: 1 },
              { cols: 1, rows: 1 },
              { cols: 1, rows: 2 }
            ],
            [
              { cols: 1, rows: 2 },
              { cols: 1, rows: 1 },
              { cols: 2, rows: 1 }
            ],
            [
              { cols: 1, rows: 1 },
              { cols: 1, rows: 2 },
              { cols: 2, rows: 1 }
            ]
          ];

    const candidates = [...candidatePool[band]!];

    if (guide.featured) {
      candidates.unshift({ cols: 2, rows: 1 });
    }

    return this.filterGuideSpanCandidates(cols, candidates);
  }

  private filterGuideSpanCandidates(cols: number, candidates: GuideTileSpan[]): GuideTileSpan[] {
    const filtered = candidates.filter((candidate, index, all) => {
      if (candidate.cols > cols) {
        return false;
      }

      return all.findIndex((entry) => entry.cols === candidate.cols && entry.rows === candidate.rows) === index;
    });

    return filtered.length ? filtered : [{ cols: 1, rows: 1 }];
  }

  private canPlaceTile(occupied: boolean[][], row: number, col: number, span: GuideTileSpan): boolean {
    for (let rowOffset = 0; rowOffset < span.rows; rowOffset += 1) {
      for (let colOffset = 0; colOffset < span.cols; colOffset += 1) {
        if (this.isOccupied(occupied, row + rowOffset, col + colOffset)) {
          return false;
        }
      }
    }

    return true;
  }

  private markTile(occupied: boolean[][], row: number, col: number, span: GuideTileSpan): void {
    for (let rowOffset = 0; rowOffset < span.rows; rowOffset += 1) {
      occupied[row + rowOffset] ??= [];

      for (let colOffset = 0; colOffset < span.cols; colOffset += 1) {
        occupied[row + rowOffset]![col + colOffset] = true;
      }
    }
  }

  private isOccupied(occupied: boolean[][], row: number, col: number): boolean {
    return occupied[row]?.[col] ?? false;
  }

  private getGuideVisualClass(index: number): string {
    const variants = ['guide-visual--aurora', 'guide-visual--ember', 'guide-visual--tide', 'guide-visual--dawn'];
    return variants[index % variants.length] ?? variants[0];
  }

  private hashGuideSeed(guide: GuideItem, index: number): number {
    const value = `${guide.id}:${guide.slug}:${guide.title}:${index}`;
    let hash = 0;

    for (const character of value) {
      hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
    }

    return hash;
  }
}
