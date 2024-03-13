import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Simulated authentication data
private loggedIn = false;
private currentUserRole: string = '';
  constructor() { }

  login(username: string, password: string): boolean {
    // Simulated authentication logic
    if (username === 'super' && password === 'superpass') {
      this.loggedIn = true;
      this.currentUserRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'userpass') {
      this.loggedIn = true;
      this.currentUserRole = 'user';
      return true;
    }
    return false;
  }
  
  

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getCurrentUserRole(): string {
    return this.currentUserRole;
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUserRole = '';
  }
}
