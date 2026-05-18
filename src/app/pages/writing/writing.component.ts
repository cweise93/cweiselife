import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/content/content.service';
import { ContentCollectionViewModel, WritingItem } from '../../core/content/content.models';

const EMPTY_WRITING_PAGE: ContentCollectionViewModel<WritingItem> = {
  meta: { version: 1, updatedOn: '2026-05-16', eyebrow: 'Writing', headline: 'Writing', intro: '' },
  items: []
};

@Component({
  selector: 'cw-writing',
  standalone: true,
  imports: [RouterLink, DatePipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  private readonly contentService = inject(ContentService);
  readonly page = toSignal(this.contentService.getWritingPage(), { initialValue: EMPTY_WRITING_PAGE });

  getWritingRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }
}
