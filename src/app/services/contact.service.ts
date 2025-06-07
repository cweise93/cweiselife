import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMessage } from '../data/portfolio/messages.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private supabaseUrl = 'https://slsejfnguzbhuuljaxnx.supabase.com';
  private table = 'messages';
  private apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsc2VqZm5ndXpiaHV1bGpheG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMjk1MzQsImV4cCI6MjA2NDkwNTUzNH0.NXx_2AN6Yx2CSCBA7azKXEQL9-gMH9vB0UKSp0JMjtM';

  constructor(private http: HttpClient) {}

  sendMessage(contact: ContactMessage): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': this.apiKey,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    });

    const body = {
      ...contact,
      origin: 'https://cweise.com'
    };

    return this.http.post(`${this.supabaseUrl}/rest/v1/${this.table}`, body, { headers });
  }}
