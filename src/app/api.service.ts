import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/items`);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/items/${id}`);
  }
}
