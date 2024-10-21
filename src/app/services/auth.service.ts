import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5231/api';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/register`, user);
  }
  update(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/User/updateUser`, user);
  }
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Auth/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userDetails',JSON.stringify(response));
        }
      })
    );
  }

  logout(): void {
    
    localStorage.removeItem('isViewProfile');
    localStorage.removeItem('isEditProfile');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    localStorage.removeItem('isViewProfile');
    localStorage.removeItem('isEditProfile');
    return !!this.getToken();
  }
}
