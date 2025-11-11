import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AnalyticsService } from './services/analytics.service';
import { environment } from '../environments/environment';
import { TelemetryService } from './services/telemetry.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cweiselife';

  constructor(
    private router: Router,
    private analytics: AnalyticsService,
    private telemetry: TelemetryService
  ) {
    const redirect = sessionStorage['redirect'];
    if (redirect) {
      sessionStorage.removeItem('redirect');
      this.router.navigateByUrl(redirect).catch(err => {
        console.error('Redirect failed:', err);
      });
    }

    this.analytics.init(environment.gaMeasurementId);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.telemetry.trackPageView(undefined, event.urlAfterRedirects);
      });
  }
}
