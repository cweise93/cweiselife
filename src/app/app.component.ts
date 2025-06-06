import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cweiselife';

  constructor(private router: Router) {
    const redirect = sessionStorage['redirect'];
    if (redirect) {
      sessionStorage.removeItem('redirect');
      this.router.navigateByUrl(redirect).catch(err => {
        console.error('Redirect failed:', err);
      });
    }
  }
}