import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { map, switchMap } from 'rxjs';
import { ContentService } from '../../core/content/content.service';
import { FrameworkItem } from '../../core/content/content.models';
import { CompanionRailComponent } from '../../shared/content/companion-rail.component';
import { ContentRendererComponent } from '../../shared/content/content-renderer.component';

@Component({
  selector: 'cw-framework-detail',
  imports: [RouterLink, DatePipe, MatButtonModule, ContentRendererComponent, CompanionRailComponent],
  templateUrl: './framework-detail.component.html',
  styleUrl: './framework-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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

  readonly frameworkComponents = computed(() => this.item()?.body.components ?? []);
}
