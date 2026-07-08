import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export interface OperatingToolsAssemblyTile {
  id: string;
  slug: string;
  title: string;
  icon: string;
  imageSrc?: string;
  summary: string;
  bodyIntro: string;
  primary: boolean;
  related: boolean;
  faded: boolean;
}

@Component({
  selector: 'cw-operating-tools-puzzle',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './operating-tools-puzzle.component.html',
  styleUrl: './operating-tools-puzzle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatingToolsAssemblyPlateComponent {
  readonly mode = input.required<'all' | 'focused'>();
  readonly hubTitle = input.required<string>();
  readonly hubSubtitle = input.required<string>();
  readonly hubIcon = input.required<string>();
  readonly tiles = input.required<OperatingToolsAssemblyTile[]>();
  readonly tileActivated = output<OperatingToolsAssemblyTile>();

  readonly surfacedCount = computed(() => this.tiles().filter((tile) => tile.related).length);
  readonly availableCount = computed(() => this.tiles().length);
  readonly primaryTile = computed(() => this.tiles().find((tile) => tile.primary));
  readonly visibleTiles = computed(() => {
    const tiles = [...this.tiles()];

    if (this.mode() === 'all') {
      return tiles;
    }

    return tiles.filter((tile) => tile.related).sort((left, right) => {
      const leftRank = this.rankTile(left);
      const rightRank = this.rankTile(right);

      if (leftRank !== rightRank) {
        return leftRank - rightRank;
      }

      return left.title.localeCompare(right.title);
    });
  });

  onTileClick(tile: OperatingToolsAssemblyTile): void {
    this.tileActivated.emit(tile);
  }

  onTileKeydown(event: KeyboardEvent, tile: OperatingToolsAssemblyTile): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.tileActivated.emit(tile);
    }
  }

  private rankTile(tile: OperatingToolsAssemblyTile): number {
    if (tile.primary) {
      return 0;
    }

    if (tile.related) {
      return 1;
    }

    return 2;
  }
}
