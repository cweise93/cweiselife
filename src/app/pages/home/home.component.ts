import { DatePipe } from '@angular/common';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContentService } from '../../core/content/content.service';
import { HomeContentViewModel, InitiativeItem, WritingItem } from '../../core/content/content.models';

const EMPTY_HOME: HomeContentViewModel = {
  meta: {
    version: 1,
    updatedOn: '2026-05-16',
    siteName: 'cweise.com',
    siteUrl: 'https://cweise.com',
    title: 'Operational Intelligence for Complex Organizations',
    description: '',
    author: 'Charles Weise',
    footerTagline: '',
    contactEmail: 'iweise@me.com'
  },
  navigation: { primary: [], social: [] },
  footer: { featuredLinks: [] },
  connect: {
    eyebrow: 'Stay Connected',
    headline: '',
    intro: '',
    note: '',
    ctaLabel: '',
    ctaUrl: ''
  },
  home: {
    eyebrow: '',
    headline: '',
    subheadline: '',
    intro: [],
    heroImage: '',
    featuredWritingSlugs: [],
    featuredFrameworkSlugs: [],
    featuredInitiativeSlugs: [],
    themes: [],
    themesSection: { eyebrow: '', headline: '', support: '' },
    writingSection: { eyebrow: '', headline: '', support: '' },
    frameworkSection: { eyebrow: '', headline: '', support: '' },
    initiativesSection: { eyebrow: '', headline: '', support: '' },
    aboutSection: { eyebrow: '', headline: '', support: '' }
  },
  featuredWriting: [],
  featuredFrameworks: [],
  featuredInitiatives: [],
  about: {
    headline: '',
    narrative: [],
    principles: [],
    focusAreas: [],
    closing: ''
  }
};

@Component({
  selector: 'cw-home',
  standalone: true,
  imports: [RouterLink, DatePipe, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly contentService = inject(ContentService);

  readonly homeContent = toSignal(this.contentService.getHomeContent(), { initialValue: EMPTY_HOME });
  readonly writingItems = toSignal(this.contentService.getWritingIndex(), { initialValue: [] as WritingItem[] });
  readonly cardsPerSlide = signal(this.getWritingCardsPerSlide());
  readonly currentWritingSlide = signal(0);
  readonly writingSlides = computed(() => this.chunkWritingItems(this.writingItems(), this.cardsPerSlide()));
  readonly hasWritingCarousel = computed(() => this.writingSlides().length > 1);
  readonly initiativeCardsPerSlide = signal(this.getInitiativeCardsPerSlide());
  readonly currentInitiativeSlide = signal(0);
  readonly initiativeSlides = computed(() =>
    this.chunkInitiativeItems(this.homeContent().featuredInitiatives, this.initiativeCardsPerSlide())
  );
  readonly hasInitiativeCarousel = computed(() => this.initiativeSlides().length > 1);

  @HostListener('window:resize')
  onResize(): void {
    const nextCardsPerSlide = this.getWritingCardsPerSlide();
    if (nextCardsPerSlide === this.cardsPerSlide()) {
    } else {
      this.cardsPerSlide.set(nextCardsPerSlide);
      this.currentWritingSlide.set(
        Math.min(this.currentWritingSlide(), Math.max(this.writingSlides().length - 1, 0))
      );
    }

    const nextInitiativeCardsPerSlide = this.getInitiativeCardsPerSlide();
    if (nextInitiativeCardsPerSlide !== this.initiativeCardsPerSlide()) {
      this.initiativeCardsPerSlide.set(nextInitiativeCardsPerSlide);
      this.currentInitiativeSlide.set(
        Math.min(this.currentInitiativeSlide(), Math.max(this.initiativeSlides().length - 1, 0))
      );
    }
  }

  previousWritingSlide(): void {
    const totalSlides = this.writingSlides().length;
    if (totalSlides < 2) {
      return;
    }

    this.currentWritingSlide.set((this.currentWritingSlide() - 1 + totalSlides) % totalSlides);
  }

  nextWritingSlide(): void {
    const totalSlides = this.writingSlides().length;
    if (totalSlides < 2) {
      return;
    }

    this.currentWritingSlide.set((this.currentWritingSlide() + 1) % totalSlides);
  }

  goToWritingSlide(index: number): void {
    if (index < 0 || index >= this.writingSlides().length) {
      return;
    }

    this.currentWritingSlide.set(index);
  }

  getWritingRoute(article: WritingItem): string[] {
    return this.slugToRoute(article.slug);
  }

  previousInitiativeSlide(): void {
    const totalSlides = this.initiativeSlides().length;
    if (totalSlides < 2) {
      return;
    }

    this.currentInitiativeSlide.set(
      (this.currentInitiativeSlide() - 1 + totalSlides) % totalSlides
    );
  }

  nextInitiativeSlide(): void {
    const totalSlides = this.initiativeSlides().length;
    if (totalSlides < 2) {
      return;
    }

    this.currentInitiativeSlide.set((this.currentInitiativeSlide() + 1) % totalSlides);
  }

  goToInitiativeSlide(index: number): void {
    if (index < 0 || index >= this.initiativeSlides().length) {
      return;
    }

    this.currentInitiativeSlide.set(index);
  }

  getInitiativeRoute(item: InitiativeItem): string[] {
    return this.slugToRoute(item.slug);
  }

  getFrameworkRoute(slug: string): string[] {
    return this.slugToRoute(slug);
  }

  private getWritingCardsPerSlide(): number {
    if (typeof window === 'undefined') {
      return 3;
    }

    if (window.innerWidth < 720) {
      return 1;
    }

    if (window.innerWidth < 1120) {
      return 2;
    }

    return 3;
  }

  private getInitiativeCardsPerSlide(): number {
    if (typeof window === 'undefined') {
      return 4;
    }

    if (window.innerWidth < 720) {
      return 1;
    }

    if (window.innerWidth < 960) {
      return 2;
    }

    if (window.innerWidth < 1200) {
      return 3;
    }

    return 4;
  }

  private chunkWritingItems(items: WritingItem[], size: number): WritingItem[][] {
    if (!items.length || size < 1) {
      return [];
    }

    const slides: WritingItem[][] = [];
    for (let index = 0; index < items.length; index += size) {
      slides.push(items.slice(index, index + size));
    }

    return slides;
  }

  private chunkInitiativeItems(items: InitiativeItem[], size: number): InitiativeItem[][] {
    if (!items.length || size < 1) {
      return [];
    }

    const slides: InitiativeItem[][] = [];
    for (let index = 0; index < items.length; index += size) {
      slides.push(items.slice(index, index + size));
    }

    return slides;
  }

  private slugToRoute(slug: string): string[] {
    return ['/', ...slug.split('/').filter(Boolean)];
  }
}
