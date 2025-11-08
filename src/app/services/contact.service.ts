import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../data/portfolio/messages.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessage): Observable<any> {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'unknown';

    return this.http.post(`${this.baseUrl}/contact`, {
      ...contact,
      origin
    });
  }
}
