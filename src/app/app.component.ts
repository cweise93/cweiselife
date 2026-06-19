import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteShellComponent } from './core/layout/site-shell.component';
import { RouteSeoService } from './core/seo/route-seo.service';

@Component({
  selector: 'cw-root',
  standalone: true,
  imports: [RouterOutlet, SiteShellComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <cw-site-shell>
      <router-outlet />
    </cw-site-shell>
  `
})
export class AppComponent {
  private readonly routeSeoService = inject(RouteSeoService);
}
