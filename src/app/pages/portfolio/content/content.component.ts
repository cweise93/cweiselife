import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, DestroyRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { VotingService } from '../../../services/voting.service';
import { ContentService } from '../../../services/content.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  buildResponsiveImageSet,
  DEFAULT_IMAGE_WIDTHS,
  HERO_IMAGE_WIDTHS
} from '../../../utils/image-utils';
import { SeoService } from '../../../services/seo.service';
import { map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface NavItem {
  title: string;
  nav: boolean;
  link: string;
}
@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgClass,
    MatButtonModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  content: any = null;
  voteCount = 0;
  voted = false;
  contentId = '';
  selectedTheme: 'light' | 'dark' | 'custom' = 'light';
  selectedNavLink = '';
  isMenuOpen = false;
  scrolled = false;
  readonly heroImageWidths = HERO_IMAGE_WIDTHS;
  readonly backgroundImageWidths = DEFAULT_IMAGE_WIDTHS;
  readonly heroImageSizes = '(max-width: 768px) 90vw, (max-width: 1199px) 70vw, 60vw';
  readonly heroBackgroundSizes = '100vw';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private votingService: VotingService,
    private contentService: ContentService,
    private sanitizer: DomSanitizer,
    private seo: SeoService,
    private destroyRef: DestroyRef
  ) {
  }
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('selectedTheme') as 'light' | 'dark' | 'custom';
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
    this.route.params
      .pipe(
        switchMap(params => {
          const { type, slug, year, month, day } = params as Record<string, string>;
          this.contentId = slug;
          this.selectedNavLink = this.getNavLinkFromType(type);
          return this.contentService
            .getDetails(type, slug, { year, month, day })
            .pipe(map(content => ({ content, type, slug })));
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(({ content, type, slug }) => {
        this.content = content || null;
        if (!content) {
          this.voteCount = 0;
          this.voted = false;
          return;
        }
        this.voteCount = content.votes || 0;
        this.voted = this.votingService.getVoteStatus(slug);
        this.updateContentSeo(type);
      });
  }

  toggleVote(): void {
    this.voted = !this.voted;
    this.voteCount += this.voted ? 1 : -1;
    this.votingService.setVoteStatus(this.contentId, this.voted);
  }
  
  download(url: string): void {
    window.open(url, '_blank');
  }

  share(): void {
    const shareUrl = window.location.href;
    const title = this.content?.title ?? 'Charles Weise';
    navigator.share
      ? navigator.share({ title, url: shareUrl })
      : alert('Copy and share this URL:\n' + shareUrl);
  }

  submitFeedback(): void {
    console.log('Feedback:', this.feedbackText);
    this.feedbackText = '';
  }

  feedbackText = '';


  selectNav(navItem: NavItem): void {
    this.selectedNavLink = navItem.link;
    this.isMenuOpen = false;
    this.router.navigate([`/${navItem.link}`]);
  }
  navItems: NavItem[] = [
    { title: 'Home', nav: false, link: 'home'},
    { title: 'Services', nav: true, link: 'services'},
    { title: 'Projects', nav: true, link: 'projects'},
    { title: 'Blog', nav: true, link: 'blog'},
    { title: 'Contact Me', nav: true, link: 'contact'},
  ];

  get themeIcon(): string {
    switch (this.selectedTheme) {
      case 'dark': return 'dark_mode';
      case 'light': return 'light_mode';
      case 'custom': return 'palette';
      default: return 'brightness_6';
    }
  }
  setTheme(theme: 'light' | 'dark' | 'custom'): void {
    this.selectedTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  }
  toggleTheme(): void {
    const themes: ('light' | 'dark' | 'custom')[] = ['light', 'dark', 'custom'];
    const nextIndex = (themes.indexOf(this.selectedTheme) + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  getImageSet(path: string, widths: readonly number[] = this.heroImageWidths) {
    return buildResponsiveImageSet(path, widths);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private getNavLinkFromType(type: string): string {
    switch (type) {
      case 'service':
        return 'services';
      case 'project':
        return 'projects';
      case 'blog':
        return 'blog';
      default:
        return '';
    }
  }

  private updateContentSeo(type: string): void {
    if (!this.content) return;
    const origin = this.getBaseUrl();
    const detailUrl = `${origin}/details/${type}/${this.contentId}`;
    const title = `${this.content.title} | ${this.getTypeLabel(type)}`;
    const description = this.content.description || 'Explore Charles Weise’s latest work across services, projects, and blog insights.';
    const image = this.buildImageUrl(this.content.bannerImageUrl || this.content.bannerImageUrlZoom);

    this.seo.updatePageMeta({
      title,
      description,
      keywords: [this.content.title, this.getTypeLabel(type), 'Charles Weise'],
      image,
      url: detailUrl,
      type: type === 'blog' ? 'article' : 'website'
    });

    this.seo.injectJsonLd('content-jsonld', {
      '@context': 'https://schema.org',
      '@type': this.getSchemaType(type),
      headline: this.content.title,
      description,
      datePublished: new Date(this.content.date).toISOString(),
      author: {
        '@type': 'Person',
        name: this.content.author
      },
      image: image ? [image] : undefined,
      url: detailUrl
    });
  }

  private getTypeLabel(type: string): string {
    switch (type) {
      case 'service':
        return 'Service';
      case 'project':
        return 'Project';
      case 'blog':
        return 'Blog';
      default:
        return 'Content';
    }
  }

  private getSchemaType(type: string): string {
    switch (type) {
      case 'service':
        return 'Service';
      case 'project':
        return 'CreativeWork';
      case 'blog':
        return 'Article';
      default:
        return 'CreativeWork';
    }
  }

  private buildImageUrl(path?: string): string | undefined {
    if (!path) return undefined;
    if (/^https?:\/\//i.test(path)) return path;
    return `${this.getBaseUrl()}/${path}`;
  }

  private getBaseUrl(): string {
    if (typeof window !== 'undefined' && window.location) {
      return window.location.origin;
    }
    return 'https://cweise.com';
  }
}
