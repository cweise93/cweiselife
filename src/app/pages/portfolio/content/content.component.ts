import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
    private sanitizer: DomSanitizer
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
    this.route.params.subscribe(params => {
      const { type, slug } = params;
      this.contentId = slug;
      this.content = this.contentService.getDetails(type, slug);
      this.voteCount = this.content?.votes || 0;
      this.voted = this.votingService.getVoteStatus(slug);
      this.selectedNavLink = this.getNavLinkFromType(type);
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
    navigator.share
      ? navigator.share({ title: this.content.title, url: shareUrl })
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
  
}
