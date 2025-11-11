import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Content } from '../data/portfolio/content.model';
import { content as localContent } from '../data/portfolio/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly baseUrl = `${environment.apiUrl}/content`;

  constructor(private readonly http: HttpClient) {}

  getContent(type?: string): Observable<Content[]> {
    let params = new HttpParams();
    if (type) params = params.set('type', type);

    return this.http.get<Content[]>(this.baseUrl, { params }).pipe(
      catchError(() => of(this.filterLocal(type)))
    );
  }

  getDetails(
    type: string,
    slug: string,
    options?: { year?: string; month?: string; day?: string }
  ): Observable<Content | undefined> {
    let params = new HttpParams();
    if (options?.year) params = params.set('year', options.year);
    if (options?.month) params = params.set('month', options.month);
    if (options?.day) params = params.set('day', options.day);

    return this.http
      .get<Content>(`${this.baseUrl}/${type}/${slug}`, { params })
      .pipe(catchError(() => of(this.findLocal(type, slug, options))));
  }

  private filterLocal(type?: string): Content[] {
    if (!type) return localContent;
    const filtered = localContent.filter(item => item.contentType === type);
    return filtered.length ? filtered : localContent;
  }

  private findLocal(
    type: string,
    slug: string,
    options?: { year?: string; month?: string; day?: string }
  ): Content | undefined {
    return this.filterLocal(type).find(item => {
      if (item.slug !== slug) return false;
      return this.matchesDate(item.date, options);
    });
  }

  private matchesDate(
    dateValue: string | Date | undefined,
    options?: { year?: string; month?: string; day?: string }
  ): boolean {
    if (!dateValue || (!options?.year && !options?.month && !options?.day)) return true;
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return true;
    const yearMatch = !options?.year || date.getFullYear().toString() === options.year;
    const monthMatch =
      !options?.month || (date.getMonth() + 1).toString().padStart(2, '0') === options.month;
    const dayMatch =
      !options?.day || date.getDate().toString().padStart(2, '0') === options.day;
    return yearMatch && monthMatch && dayMatch;
  }
}
