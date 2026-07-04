import { RenderMode, ServerRoute } from '@angular/ssr';
import {
  publishedFrameworkItems,
  publishedOperatingToolItems,
  publishedWritingItems
} from './core/content/content.catalog';

function stripRoutePrefix(slug: string, prefix: string): string {
  return slug.startsWith(`${prefix}/`) ? slug.slice(prefix.length + 1) : slug;
}

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'writing',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'writing/:year/:month/:day/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return publishedWritingItems.map((item) => {
        const [year, month, day, slug] = stripRoutePrefix(item.slug, 'writing').split('/');
        return { year, month, day, slug };
      });
    }
  },
  {
    path: 'frameworks',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'frameworks/:year/:month/:day/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return publishedFrameworkItems.map((item) => {
        const [year, month, day, slug] = stripRoutePrefix(item.slug, 'frameworks').split('/');
        return { year, month, day, slug };
      });
    }
  },
  {
    path: 'operating-tools',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'guides',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'operating-tools/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return publishedOperatingToolItems.map((item) => ({
        slug: stripRoutePrefix(item.slug, 'operating-tools')
      }));
    }
  },
  {
    path: 'guides/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return publishedOperatingToolItems.map((item) => ({
        slug: stripRoutePrefix(item.slug, 'operating-tools')
      }));
    }
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'connect',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
