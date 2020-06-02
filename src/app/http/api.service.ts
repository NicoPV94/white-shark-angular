import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string = "https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io";

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }

  getCampaigns(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaigns`);
  }

  getCampaignGroups(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campaign-groups`, {params: {id}});
  }



}
