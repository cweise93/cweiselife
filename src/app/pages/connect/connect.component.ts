import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentService } from '../../core/content/content.service';
import { ConnectContent, SiteNavigation } from '../../core/content/content.models';

const EMPTY_CONNECT: ConnectContent = {
  eyebrow: '',
  headline: '',
  intro: '',
  note: '',
  ctaLabel: '',
  ctaUrl: ''
};

const EMPTY_NAVIGATION: SiteNavigation = { primary: [], social: [] };

@Component({
  selector: 'cw-connect',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {
  private readonly contentService = inject(ContentService);
  readonly connect = toSignal(this.contentService.getConnectContent(), { initialValue: EMPTY_CONNECT });
  readonly navigation = toSignal(this.contentService.getNavigation(), { initialValue: EMPTY_NAVIGATION });
}
