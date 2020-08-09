import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const authCredentialsKey = 'credentials';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authCredentails: {userName};

  constructor(private http: HttpClient) {
    const savedAuthCredentials = sessionStorage.getItem(authCredentialsKey) || localStorage.getItem(authCredentialsKey);
    if (savedAuthCredentials) {
      this.authCredentails = JSON.parse(savedAuthCredentials);
    }
  }

  login(userName: string) {
    return this.http.get('https://api.github.com/users/' + userName);
  }

  logout(): Observable<boolean> {
    this.setAuthCredentials();
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.authCredentails;
  }

  get authCredentials(): {userName} | null {
    return this.authCredentails;
  }

  setAuthCredentials(authCredentials?: {userName}, remember?: boolean) {
    this.authCredentails = authCredentials || null;

    if (authCredentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(authCredentialsKey , JSON.stringify(authCredentials));
    } else {
      sessionStorage.removeItem(authCredentialsKey);
      localStorage.removeItem(authCredentialsKey);
    }

  }
}
