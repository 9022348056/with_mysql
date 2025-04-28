import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:5000/events';  // Ensure this matches your backend URL

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEvent(event: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, event);
  }

  // ✅ Updated to delete by NAME, not ID
  deleteEvent(name: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${encodeURIComponent(name)}`);
  }
}
