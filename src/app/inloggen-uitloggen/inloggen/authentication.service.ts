import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    // return this.http.get<any>(`http://localhost:8080/api/login?email=` + email + '&password=' + password)
    return this.http.post<any>(`http://localhost:8080/api/login`, { email: email, password: password })
      .pipe(map(user => {
        // login successful
        if (email === user.emailAddress && password === user.password) {
          // store user details in local storage to keep user logged in between page refreshes
          console.log('kk');
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(localStorage.getItem('currentUser') + ' pietjekappa');
        }
        return user;
      }));
}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
