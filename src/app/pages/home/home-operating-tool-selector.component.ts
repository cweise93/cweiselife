import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ContentSection } from '../../core/content/content.models';
import {
  HomeOperatingToolSelectorBenefit,
  HomeOperatingToolSelectorMoment
} from './home-operating-tool-selector.models';
import { HomeOperatingToolArtifactDialogComponent } from './home-operating-tool-artifact-dialog.component';

interface HomeOperatingToolDetailCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'cw-home-operating-tool-selector',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule],
  templateUrl: './home-operating-tool-selector.component.html',
  styleUrl: './home-operating-tool-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeOperatingToolSelectorComponent {
  private readonly dialog = inject(MatDialog);
  readonly moments = input.required<HomeOperatingToolSelectorMoment[]>();
  readonly benefits = input<HomeOperatingToolSelectorBenefit[]>([]);
  readonly selectedIndex = input(0);
  readonly momentSelected = output<number>();

  readonly selectedMoment = computed<HomeOperatingToolSelectorMoment | null>(() => {
    const moments = this.moments();
    if (!moments.length) {
      return null;
    }

    return moments[Math.min(this.selectedIndex(), moments.length - 1)] ?? moments[0]!;
  });

  readonly selectedOperatingToolDetailCards = computed<HomeOperatingToolDetailCard[]>(() => {
    const selectedMoment = this.selectedMoment();
    if (!selectedMoment) {
      return [];
    }

    const sectionCards = selectedMoment.operatingTool.body.sections
      .slice(0, 4)
      .map((section, index) => ({
        icon: this.iconForSection(section, index),
        title: section.heading,
        description: this.descriptionForSection(section, selectedMoment.operatingTool.body.intro)
      }))
      .filter((card) => Boolean(card.description));

    if (sectionCards.length) {
      return sectionCards;
    }

    return this.benefits()
      .slice(0, 4)
      .map((benefit) => ({
        icon: benefit.icon,
        title: benefit.title,
        description: benefit.description
      }));
  });

  selectMoment(index: number): void {
    if (index < 0 || index >= this.moments().length) {
      return;
    }

    this.momentSelected.emit(index);
  }

  openArtifactDialog(): void {
    const selectedMoment = this.selectedMoment();
    const imageSrc =
      selectedMoment?.operatingTool.heroImage ??
      selectedMoment?.operatingTool.productionAssets?.socialImage?.href;

    if (!selectedMoment || !imageSrc) {
      return;
    }

    this.dialog.open(HomeOperatingToolArtifactDialogComponent, {
      data: {
        title: selectedMoment.operatingTool.title,
        description: selectedMoment.operatingTool.summary,
        imageSrc
      },
      width: '92vw',
      maxWidth: '1120px',
      panelClass: 'cw-operating-tool-artifact-dialog-panel'
    });
  }

  private iconForSection(section: ContentSection, index: number): string {
    const source = `${section.heading} ${section.intro ?? ''} ${section.callout ?? ''}`.toLowerCase();
    const iconMap: Array<{ icon: string; keywords: string[] }> = [
      { icon: 'visibility', keywords: ['see', 'notice', 'pattern', 'review', 'clarify', 'signal'] },
      { icon: 'alt_route', keywords: ['path', 'route', 'direction', 'choose', 'decision'] },
      { icon: 'bolt', keywords: ['move', 'act', 'start', 'momentum', 'motion'] },
      { icon: 'tune', keywords: ['structure', 'system', 'container', 'frame', 'reset'] },
      { icon: 'rule', keywords: ['rule', 'repeat', 'repeatable', 'habit', 'loop'] },
      { icon: 'task_alt', keywords: ['close', 'commit', 'complete', 'finish', 'follow'] }
    ];

    const matched = iconMap.find((entry) => entry.keywords.some((keyword) => source.includes(keyword)));
    return matched?.icon ?? ['visibility', 'alt_route', 'bolt', 'task_alt'][index % 4]!;
  }

  private descriptionForSection(section: ContentSection, fallback: string): string {
    return section.paragraphs?.[0] ?? section.intro ?? section.callout ?? fallback;
  }
}
