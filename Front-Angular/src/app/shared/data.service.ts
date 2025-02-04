import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiBaseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getDataForView1(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/view1`);
  }

  getDataForView2(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/view2`);
  }

  getDataForView3(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/view3`);
  }
}
