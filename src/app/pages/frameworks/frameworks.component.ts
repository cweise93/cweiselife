import { DatePipe } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/content/content.service';
import { ContentCollectionViewModel, FrameworkItem } from '../../core/content/content.models';

const EMPTY_FRAMEWORKS_PAGE: ContentCollectionViewModel<FrameworkItem> = {
  meta: { version: 1, updatedOn: '2026-05-16', eyebrow: 'Frameworks', headline: 'Frameworks', intro: '' },
  items: []
};

@Component({
  selector: 'cw-frameworks',
  standalone: true,
  imports: [RouterLink, DatePipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './frameworks.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './frameworks.component.scss'
})
export class FrameworksComponent {
  private readonly contentService = inject(ContentService);
  readonly page = toSignal(this.contentService.getFrameworksPage(), { initialValue: EMPTY_FRAMEWORKS_PAGE });

  getFrameworkRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }
}
