import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { FrameworkItem } from '../../core/content/content.models';

@Component({
  selector: 'cw-framework-detail',
  standalone: true,
  imports: [RouterLink, DatePipe, MatButtonModule, MatIconModule],
  templateUrl: './framework-detail.component.html',
  styleUrl: './framework-detail.component.scss'
})
export class FrameworkDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);

  readonly item = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      switchMap((slug) => this.contentService.getFrameworkBySlug(slug))
    ),
    { initialValue: null as FrameworkItem | null }
  );
}
