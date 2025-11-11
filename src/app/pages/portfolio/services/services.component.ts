import { Component, OnInit, DestroyRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { trigger, transition, style, animate } from '@angular/animations';
import { Content } from '../../../data/portfolio/content.model';
import { Router } from '@angular/router';
import { buildResponsiveImageSet, CARD_IMAGE_WIDTHS } from '../../../utils/image-utils';
import { ContentService } from '../../../services/content.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  readonly cardImageWidths = CARD_IMAGE_WIDTHS;
  readonly cardImageSizes = '(max-width: 599px) 90vw, (max-width: 959px) 45vw, 320px';

  ngOnInit() {
    this.contentService
      .getContent('service')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => (this.content = items));
  }
  content: Content[] = [];
  constructor(
    private router: Router,
    private contentService: ContentService,
    private destroyRef: DestroyRef
  ){}

  getCardImage(path?: string | null) {
    return buildResponsiveImageSet(path, this.cardImageWidths);
  }
  openServiceDetails(serviceDetailsId: number): void {
    const service = this.content.find(b => b.id === serviceDetailsId);
    if (!service) return;

    const { title, date, slug } = service;
    const serviceDate = new Date(date);
    const year = serviceDate.getFullYear();
    const month = String(serviceDate.getMonth() + 1).padStart(2, '0');
    const day = String(serviceDate.getDate()).padStart(2, '0');

    const slugOrTitle = slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    this.router.navigate([
      '/details/service',
      year,
      month,
      day,
      slugOrTitle
    ]);
  }
}
