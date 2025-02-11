import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged: boolean = false;

  constructor() { }

  logIn() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }
}
