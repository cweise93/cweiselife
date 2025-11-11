import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelemetryService {
  private appInsights: ApplicationInsights | null = null;

  constructor() {
    const connectionString = environment.appInsightsConnectionString?.trim();
    if (!connectionString) {
      return;
    }

    this.appInsights = new ApplicationInsights({
      config: {
        connectionString,
        enableAutoRouteTracking: true
      }
    });

    this.appInsights.loadAppInsights();
  }

  trackPageView(name?: string, uri?: string): void {
    this.appInsights?.trackPageView({ name, uri });
  }

  trackEvent(name: string, properties?: Record<string, unknown>): void {
    this.appInsights?.trackEvent({ name }, properties);
  }
}
