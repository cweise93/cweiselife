import { ChangeDetectionStrategy, Component, AfterViewInit, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterLink } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-settings',
  imports: [
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatCardModule,
    MatExpansionModule,
    MatExpansionPanel,
    MatListModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, AfterViewInit{
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  navItems = [
    { text: 'Profile', icon: "account_circle", link: "../settings/profile", id: "_ProfileComponent", updatedRoute: 'profile' },
    { text: 'Security', icon: "verified_user", link: "../settings/security", id: "_SecurityComponent", updatedRoute: 'security'  },
    { text: 'Support', icon: "support_agent", link: "../settings/support", id: "_SupportComponent", updatedRoute: 'support'  },
    { text: 'Documentation', icon: "description", link: "../settings/documentation", id: "_DocumentationComponent", updatedRoute: 'documentation'  },
    { text: 'Release Notes', icon: "new_releases", link: "../settings/releasenotes", id: "_ReleasenotesComponent", updatedRoute: 'releasenotes'  }
  ]
  constructor( 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onPanelOpened(updatedRoute: string) {
    this.router.navigate([updatedRoute], { relativeTo: this.route });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Update the array when the route is opened
        this.openPanelBasedOnRoute();
      }
    });
  }

  ngAfterViewInit() {
    this.openPanelBasedOnRoute();
  }
  openPanelBasedOnRoute() {
    const currentComponent = this.route.firstChild?.component?.name;
    if (currentComponent) {
      const targetIdx = this.navItems.findIndex(navItem => navItem.id === currentComponent);
      this.panels.forEach((panel, idx) =>{
        if(idx === targetIdx){
          panel.open()
        }
      })
      // return the list of navItems - find the slot of the matching object - open the same accordion
    } else {
      this.panels.forEach(panel =>{
        panel.close()
      })
    }
  }

}
