import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { WritingItem } from '../../core/content/content.models';

@Component({
  selector: 'cw-writing-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, MatButtonModule, MatIconModule],
  templateUrl: './writing-detail.component.html',
  styleUrl: './writing-detail.component.scss'
})
export class WritingDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      switchMap((slug) => this.contentService.getWritingBySlug(slug))
    ),
    { initialValue: null as WritingItem | null }
  );
}
