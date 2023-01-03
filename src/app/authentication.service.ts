import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLogged: boolean = false;

  constructor() { }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => { resolve(this.isLogged) }, 1000);
      }
    )

    return promise;
  }
}
