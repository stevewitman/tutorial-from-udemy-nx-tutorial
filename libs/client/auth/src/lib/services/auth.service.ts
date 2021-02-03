import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    return of({
      id: 1,
      name: 'Bombasto',
      email: 'bombasto@example.com'
    })
  }
}
