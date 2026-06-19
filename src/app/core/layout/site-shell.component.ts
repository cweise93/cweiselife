import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, HostListener, computed, effect, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { filter, map, startWith } from 'rxjs';
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
  contactEmail: 'iweise@me.com'
};

const EMPTY_NAVIGATION: SiteNavigation = { primary: [], social: [] };
const EMPTY_FOOTER: FooterContent = { featuredLinks: [] };

@Component({
  selector: 'cw-site-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatDividerModule, MatToolbarModule],
  templateUrl: './site-shell.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './site-shell.component.scss'
})
export class SiteShellComponent {
  private readonly document = inject(DOCUMENT);
  private readonly contentService = inject(ContentService);
  private readonly router = inject(Router);
  private readonly window = this.document.defaultView;
  readonly currentYear = new Date().getFullYear();
  readonly isCompact = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly viewportWidth = signal(this.window?.innerWidth ?? 1440);
  readonly themeMode = signal<ThemeMode>(this.readStoredTheme());
  readonly siteMeta = toSignal(this.contentService.getSiteMeta(), { initialValue: EMPTY_META });
  readonly navigation = toSignal(this.contentService.getNavigation(), { initialValue: EMPTY_NAVIGATION });
  readonly footer = toSignal(this.contentService.getFooterContent(), { initialValue: EMPTY_FOOTER });
  readonly activeLayout = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.deepestLayout())
    ),
    { initialValue: this.deepestLayout() }
  );
  readonly isFrameworkWorkspace = computed(() => this.activeLayout() === 'framework-workspace');
  readonly showFrameworkRail = computed(() => this.isFrameworkWorkspace() && this.viewportWidth() >= 1200);
  readonly showTopToolbar = computed(() => !this.showFrameworkRail());
  readonly showFooter = computed(() => !this.isFrameworkWorkspace());

  @HostBinding('class.site-shell--framework-workspace')
  get isFrameworkWorkspaceClass(): boolean {
    return this.isFrameworkWorkspace();
  }

  constructor() {
    this.applyTheme(this.themeMode());
    effect(() => {
      this.showFrameworkRail();
      this.viewportWidth();
      this.isCompact();
      this.updateToolbarHeightVariable();
    });
  }

  scrollToTop(): void {
    this.window?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.themeMode() === 'light' ? 'dusk' : 'light';
    this.themeMode.set(nextTheme);
    this.applyTheme(nextTheme);
    this.window?.localStorage?.setItem('cw-theme-mode', nextTheme);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isCompact.set((this.window?.scrollY ?? 0) > 24);
    this.updateToolbarHeightVariable();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const viewportWidth = this.window?.innerWidth ?? 1440;
    this.viewportWidth.set(viewportWidth);
    if (viewportWidth > 820 && this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
    }

    this.updateToolbarHeightVariable();
  }

  private applyTheme(theme: ThemeMode): void {
    const body = this.document.body;
    body.classList.remove('cw-theme-light', 'cw-theme-dusk');
    body.classList.add(theme === 'dusk' ? 'cw-theme-dusk' : 'cw-theme-light');
  }

  private readStoredTheme(): ThemeMode {
    const stored = this.window?.localStorage?.getItem('cw-theme-mode');
    return stored === 'dusk' ? 'dusk' : 'light';
  }

  private updateToolbarHeightVariable(): void {
    const root = this.document.documentElement;
    const isMobile = this.viewportWidth() <= 820;
    const height = this.showFrameworkRail() ? 0 : this.isCompact() ? 58 : isMobile ? 116 : 72;
    root.style.setProperty('--cw-toolbar-current-height', `${height}px`);
  }

  navIcon(path: string): string {
    const icons: Record<string, string> = {
      '/': 'home',
      '/writing': 'edit_note',
      '/frameworks': 'dashboard_customize',
      '/guides': 'handyman',
      '/about': 'info',
      '/connect': 'alternate_email'
    };

    return icons[path] ?? 'link';
  }

  private deepestLayout(): string {
    let snapshot = this.router.routerState.snapshot.root;

    while (snapshot.firstChild) {
      snapshot = snapshot.firstChild;
    }

    return typeof snapshot.data['layout'] === 'string' ? snapshot.data['layout'] : 'standard';
  }
}
