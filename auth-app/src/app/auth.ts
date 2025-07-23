import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  login(username: string, password: string): boolean {
    // Dummy check – replace with real API call
    if (username === 'admin' && password === 'admin123') {
      const fakeToken = 'sample.jwt.token';
      if (this.isBrowser()) {
        localStorage.setItem(this.TOKEN_KEY, fakeToken);
      }
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }

  isAuthenticated(): boolean {
    if (this.isBrowser()) {
      return !!localStorage.getItem(this.TOKEN_KEY);
    }
    return false;
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }
}
