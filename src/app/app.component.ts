import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteShellComponent } from './core/layout/site-shell.component';

@Component({
  selector: 'cw-root',
  standalone: true,
  imports: [RouterOutlet, SiteShellComponent],
  template: `
    <cw-site-shell>
      <router-outlet />
    </cw-site-shell>
  `
})
export class AppComponent {}
