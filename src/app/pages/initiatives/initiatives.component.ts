import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/content/content.service';
import { ContentCollectionViewModel, InitiativeItem } from '../../core/content/content.models';

const EMPTY_INITIATIVES_PAGE: ContentCollectionViewModel<InitiativeItem> = {
  meta: { version: 1, updatedOn: '2026-05-16', eyebrow: 'Initiatives', headline: 'Initiatives', intro: '' },
  items: []
};

@Component({
  selector: 'cw-initiatives',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './initiatives.component.html',
  styleUrl: './initiatives.component.scss'
})
export class InitiativesComponent {
  private readonly contentService = inject(ContentService);
  readonly page = toSignal(this.contentService.getInitiativesPage(), { initialValue: EMPTY_INITIATIVES_PAGE });

  getInitiativeRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }
}
