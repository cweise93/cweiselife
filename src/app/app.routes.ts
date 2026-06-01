import { Routes, UrlMatchResult, UrlSegment } from '@angular/router';

function contentDetailMatcher(contentType: string) {
  return (segments: UrlSegment[]): UrlMatchResult | null => {
    if (segments.length < 5 || segments[0]?.path !== contentType) {
      return null;
    }

    return {
      consumed: segments,
      posParams: {
        slug: new UrlSegment(segments.map((segment) => segment.path).join('/'), {})
      }
    };
  };
}

export const routes: Routes = [
  { path: '', title: 'cweise.com | Operational Intelligence', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'writing', title: 'Writing | cweise.com', loadComponent: () => import('./pages/writing/writing.component').then(m => m.WritingComponent) },
  { matcher: contentDetailMatcher('writing'), title: 'Essay | cweise.com', loadComponent: () => import('./pages/writing-detail/writing-detail.component').then(m => m.WritingDetailComponent) },
  { path: 'frameworks', title: 'Frameworks | cweise.com', loadComponent: () => import('./pages/frameworks/frameworks.component').then(m => m.FrameworksComponent) },
  { path: 'guides', title: 'Guides | cweise.com', loadComponent: () => import('./pages/guides/guides.component').then(m => m.GuidesComponent) },
  { path: 'guides/:slug', title: 'Guide | cweise.com', loadComponent: () => import('./pages/guide-detail/guide-detail.component').then(m => m.GuideDetailComponent) },
  {
    matcher: contentDetailMatcher('frameworks'),
    title: 'Framework | cweise.com',
    data: { layout: 'framework-workspace' },
    loadComponent: () => import('./pages/framework-detail/framework-detail.component').then(m => m.FrameworkDetailComponent)
  },
  { path: 'initiatives', redirectTo: 'guides', pathMatch: 'full' },
  { matcher: contentDetailMatcher('initiatives'), title: 'Initiative | cweise.com', loadComponent: () => import('./pages/initiative-detail/initiative-detail.component').then(m => m.InitiativeDetailComponent) },
  { path: 'about', title: 'About | cweise.com', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'connect', title: 'Connect | cweise.com', loadComponent: () => import('./pages/connect/connect.component').then(m => m.ConnectComponent) },
  { path: '**', redirectTo: '' }
];
