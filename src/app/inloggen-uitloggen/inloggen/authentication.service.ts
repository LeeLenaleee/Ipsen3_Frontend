import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {sha256} from 'js-sha256';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    // const password2 = Md5.hashStr(password);
    const password2 = sha256(password);
    console.log(password2);
    // return this.http.get<any>(`http://localhost:8080/api/login?email=` + email + '&password=' + password)
    return this.http.post<any>(`http://localhost:8080/api/login`, { gebruikersnaam: email, wachtwoord: password2 })
      .pipe(map(user => {
        // console.log(user);
        // console.log(user.emailAdres);
        // console.log(user.wachtwoord);
        // login successful
        if (user !== null) {
          // store user details in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('password', password2);
        }
        return user;
      }));
}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('password');
  }
}
