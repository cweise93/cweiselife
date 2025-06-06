import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';

export interface Tile {
  text: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-topbar',
  imports: [ 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    MatCardModule,
    MatDivider,
    MatGridListModule,
    MatDialogModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(SearchComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  tiles: Tile[] = [
    { text: 'Welcome', icon: "dashboard", link: "./welcome" },
    { text: 'Goals', icon: "task_alt", link: "./goals" },
    { text: 'Support', icon: "support_agent", link: "./settings/support"},
    { text: 'Settings', icon: "settings", link: "./settings" }
  ]
  /*
  @Output() toggleSidenavEvent = new EventEmitter<void>();
  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }
  */
  navToExternalLink(link: string){
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  subscriberOrgName!: string;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // ref the subscriberID to retrieve the Org Name after the record is structured correctly
      this.subscriberOrgName = params.get('accountUserId')!;
    });
  }
}