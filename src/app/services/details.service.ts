import { Injectable } from '@angular/core';
import { contentDetails } from '../data/portfolio/content';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }
  getDetails(
    type: string,
    slug: string,
    year?: string,
    month?: string,
    day?: string
  ): any {
    return contentDetails.find(item => {
      // Must match type and slug
      if (item.contentType !== type || item.slug !== slug) return false;

      // Optionally match year/month/day if provided
      if (item.date && (year || month || day)) {
        const date = new Date(item.date);
        const matchesDate =
          (!year || date.getFullYear().toString() === year) &&
          (!month || (date.getMonth() + 1).toString().padStart(2, '0') === month) &&
          (!day || date.getDate().toString().padStart(2, '0') === day);
        return matchesDate;
      }

      return true;
    });
  }

}
