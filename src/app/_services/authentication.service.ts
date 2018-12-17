import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {parseHttpResponse} from "selenium-webdriver/http";

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    /*login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }*/

    login(email: string, password: string) {
        //return this.http.get<any>(`http://localhost:8080/api/login?email=` + email + '&password=' + password)
        return this.http.post<any>(`http://localhost:8080/api/login`, { username: email, password: password })
            .pipe(map(user => {
                console.log(user);
                // login successful if there's a jwt token in the response
                if (email === user.emailAddress && password === user.password) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}