import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { trigger, transition, style, animate } from '@angular/animations';
import { blogDetails } from '../../../data/portfolio/blog';
import { BlogDetails, BlogCategory } from '../../../data/portfolio/blog.model';
import { techPlatforms } from '../../../data/portfolio/techPlatforms';
import { TechPlatform } from '../../../data/portfolio/techPlatforms.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    this.blogDetails = blogDetails;
    this.techPlatforms = techPlatforms;
  }
  techPlatforms: TechPlatform[] = []
  blogDetails: BlogDetails[] = [];
  constructor(private router: Router) {}


  getTechPlatform(title: string): TechPlatform {
    const type = this.techPlatforms.find(t => t.title === title);
    if (!type) throw new Error(`Invalid category title: ${title}`);
    return type;
  }
  update(checked: boolean, title: string){
    var techPlatform = this.getTechPlatform(title);
    techPlatform.selected = checked;
  }

  getBlogDetailsByCategory(): BlogDetails[] {
    const orderedSelectedLabels = this.techPlatforms
      .filter(type => type.selected)
      .map(type => type.title);
  
    const orderedBlogDetails: BlogDetails[] = [];
  
    for (const title of orderedSelectedLabels) {
      const matching = this.blogDetails;
//      const matching = this.blogDetails.filter(blogDetails => blogDetails.categories[0].title === title);
      orderedBlogDetails.push(...matching);
    }
  
    return orderedBlogDetails;
  }
  openBlogDetails(blogDetailsId: number): void {
    const blog = this.blogDetails.find(b => b.id === blogDetailsId);
    if (!blog) return;

    const { title } = blog;

    const formattedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')       // replace spaces/symbols with dashes
      .replace(/^-+|-+$/g, '');           // remove leading/trailing dashes

    this.router.navigate([
      '/details/blog',
      blog.publishYear,
      blog.publishMonth,
      blog.publishDate,
      formattedTitle
    ]);
  }
}
