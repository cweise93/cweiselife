import { ApplicationConfig, ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { AnalyticsService } from './core/analytics/analytics.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(AnalyticsService).initialize()
    },
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withViewTransitions()
    ),
    provideClientHydration(withEventReplay())
  ]
};
