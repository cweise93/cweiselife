import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { InitiativeItem } from '../../core/content/content.models';

@Component({
  selector: 'cw-initiative-detail',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './initiative-detail.component.html',
  styleUrl: './initiative-detail.component.scss'
})
export class InitiativeDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      switchMap((slug) => this.contentService.getInitiativeBySlug(slug))
    ),
    { initialValue: null as InitiativeItem | null }
  );
}
