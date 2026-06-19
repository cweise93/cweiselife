import { routes } from './app.routes';

describe('routes', () => {
  it('defines the expected top-level pages', () => {
    const paths = routes.map((route) => route.path);

    expect(paths).toContain('');
    expect(paths).toContain('writing');
    expect(paths).toContain('frameworks');
    expect(paths).toContain('guides');
    expect(paths).toContain('about');
    expect(paths).toContain('connect');
    expect(paths).toContain('**');
  });

  it('redirects unknown paths back to the homepage', () => {
    const fallbackRoute = routes.find((route) => route.path === '**');

    expect(fallbackRoute?.redirectTo).toBe('');
  });
});
