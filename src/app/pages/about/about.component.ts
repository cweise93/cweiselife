import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../core/content/content.service';
import { AboutContent } from '../../core/content/content.models';

const EMPTY_ABOUT: AboutContent = {
  headline: '',
  narrative: [],
  principles: [],
  focusAreas: [],
  closing: ''
};

@Component({
  selector: 'cw-about',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly contentService = inject(ContentService);
  readonly about = toSignal(this.contentService.getAboutContent(), { initialValue: EMPTY_ABOUT });
}
