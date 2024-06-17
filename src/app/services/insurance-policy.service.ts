import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsurancePolicyService {
  private apiUrl = 'https://yourapiurl/api/policies';

  constructor(private http: HttpClient) {}

  getPolicies(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  addPolicy(userId: number, policy: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/${userId}`, policy);
  }

  updatePolicy(userId: number, policyId: number, policy: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/${userId}/${policyId}`, policy);
  }

  deletePolicy(userId: number, policyId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${userId}/${policyId}`);
  }
}
