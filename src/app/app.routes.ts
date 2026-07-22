import { Routes } from '@angular/router';

const SITE_DESCRIPTION =
  'Operational clarity for complex organizations.';
const WRITING_DESCRIPTION =
  'Essays on operational clarity, organizational sensemaking, leadership systems, and execution design for complex organizations.';
const FRAMEWORKS_DESCRIPTION =
  'Reusable systems and visual frameworks for leadership, execution, and organizational clarity.';
const OPERATING_TOOLS_DESCRIPTION =
  'Practical operating tools to help you think clearly, decide well, and lead through ambiguity before you commit to a plan.';

export const routes: Routes = [
  {
    path: '',
    title: 'cweise.com | Operational Clarity',
    data: { seoDescription: SITE_DESCRIPTION },
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'writing',
    title: 'Writing | cweise.com',
    data: { seoDescription: WRITING_DESCRIPTION },
    loadComponent: () => import('./pages/writing/writing.component').then(m => m.WritingComponent)
  },
  { path: 'writing/:year/:month/:day/:slug', title: 'Essay | cweise.com', loadComponent: () => import('./pages/writing-detail/writing-detail.component').then(m => m.WritingDetailComponent) },
  {
    path: 'frameworks',
    title: 'Frameworks | cweise.com',
    data: { seoDescription: FRAMEWORKS_DESCRIPTION },
    loadComponent: () => import('./pages/frameworks/frameworks.component').then(m => m.FrameworksComponent)
  },
  {
    path: 'operating-tools',
    title: 'Operating Tools | cweise.com',
    data: { seoDescription: OPERATING_TOOLS_DESCRIPTION },
    loadComponent: () => import('./pages/operating-tools/operating-tools.component').then(m => m.OperatingToolsComponent)
  },
  {
    path: 'guides',
    title: 'Operating Tools | cweise.com',
    loadComponent: () => import('./pages/legacy-guides-redirect/legacy-guides-redirect.component').then(m => m.LegacyGuidesRedirectComponent)
  },
  {
    path: 'guides/:slug',
    title: 'Operating Tool | cweise.com',
    loadComponent: () => import('./pages/legacy-guides-redirect/legacy-guides-redirect.component').then(m => m.LegacyGuidesRedirectComponent)
  },
  { path: 'operating-tools/:slug', title: 'Operating Tool | cweise.com', loadComponent: () => import('./pages/operating-tool-detail/operating-tool-detail.component').then(m => m.OperatingToolDetailComponent) },
  {
    path: 'frameworks/:year/:month/:day/:slug',
    title: 'Framework | cweise.com',
    data: { layout: 'framework-workspace' },
    loadComponent: () => import('./pages/framework-detail/framework-detail.component').then(m => m.FrameworkDetailComponent)
  },
  { path: 'about', title: 'About | cweise.com', data: { seoDescription: SITE_DESCRIPTION }, loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'connect', title: 'Connect | cweise.com', data: { seoDescription: 'Connect with Charles Weise.' }, loadComponent: () => import('./pages/connect/connect.component').then(m => m.ConnectComponent) },
  { path: '**', redirectTo: '' }
];
