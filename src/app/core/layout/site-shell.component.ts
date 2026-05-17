import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContentService } from '../content/content.service';
import { FooterContent, SiteMeta, SiteNavigation } from '../content/content.models';
type ThemeMode = 'light' | 'dusk';

const EMPTY_META: SiteMeta = {
  version: 1,
  updatedOn: '2026-05-16',
  siteName: 'cweise.com',
  siteUrl: 'https://cweise.com',
  title: 'Operational Intelligence for Complex Organizations',
  description: '',
  author: 'Charles Weise',
  footerTagline: 'Operational intelligence for complex organizations.',
  footerBlurb: '',
  contactEmail: 'iweise@me.com'
};

const EMPTY_NAVIGATION: SiteNavigation = { primary: [], social: [] };
const EMPTY_FOOTER: FooterContent = { featuredLinks: [] };

@Component({
  selector: 'cw-site-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatDividerModule, MatToolbarModule],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss'
})
export class SiteShellComponent {
  private readonly document = inject(DOCUMENT);
  private readonly contentService = inject(ContentService);
  readonly currentYear = new Date().getFullYear();
  readonly isCompact = signal(false);
  readonly themeMode = signal<ThemeMode>(this.readStoredTheme());
  readonly siteMeta = toSignal(this.contentService.getSiteMeta(), { initialValue: EMPTY_META });
  readonly navigation = toSignal(this.contentService.getNavigation(), { initialValue: EMPTY_NAVIGATION });
  readonly footer = toSignal(this.contentService.getFooterContent(), { initialValue: EMPTY_FOOTER });

  constructor() {
    this.applyTheme(this.themeMode());
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.themeMode() === 'light' ? 'dusk' : 'light';
    this.themeMode.set(nextTheme);
    this.applyTheme(nextTheme);
    window.localStorage.setItem('cw-theme-mode', nextTheme);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isCompact.set(window.scrollY > 24);
  }

  private applyTheme(theme: ThemeMode): void {
    const body = this.document.body;
    body.classList.remove('cw-theme-light', 'cw-theme-dusk');
    body.classList.add(theme === 'dusk' ? 'cw-theme-dusk' : 'cw-theme-light');
  }

  private readStoredTheme(): ThemeMode {
    const stored = window.localStorage.getItem('cw-theme-mode');
    return stored === 'dusk' ? 'dusk' : 'light';
  }
}
