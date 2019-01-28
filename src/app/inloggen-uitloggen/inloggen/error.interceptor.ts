import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 || err.status === 500) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        // reload voor als ie in een child klasse een error krijgt zodat child klasse weg gaat en hij alsnog naar de login page gaat
        if (this.router.url !== '/login') { location.reload(true);  }
      }

      if (err.status === 404) {
        // auto logout if 401 response returned from api
        // reload voor als ie in een child klasse een error krijgt zodat child klasse weg gaat en hij alsnog naar de login page gaat
        if (this.router.url !== '/login') { location.reload(true);  }
      }

      const error = 'Er is iets mis gegaan bij het inloggen, probeer het opnieuw' || err.statusText;
      return throwError(error);
    }));
  }
}
