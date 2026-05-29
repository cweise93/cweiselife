import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AnalyticsService } from './app/core/analytics/analytics.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(AnalyticsService).initialize()
    },
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withViewTransitions()
    )
  ]
}).catch((error: unknown) => console.error(error));
