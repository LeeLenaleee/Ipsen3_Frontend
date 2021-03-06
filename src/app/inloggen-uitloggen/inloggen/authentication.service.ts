import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {sha256} from 'js-sha256';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    const passwordHashed = sha256(password);
    return this.http.post<any>(`http://195.181.246.85:8080/api/login`, { gebruikersnaam: email, wachtwoord: passwordHashed })
      .pipe(map(user => {
        // login successful
        if (user !== null) {
          // store user details in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          sessionStorage.setItem('password', passwordHashed);
          sessionStorage.setItem('email', email);
        }
        return user;
      }));
}

  logout() {
    // remove user from local storage to log user out
    /*localStorage.removeItem('currentUser');
    localStorage.removeItem('password');*/
    sessionStorage.clear();
  }
}
