import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 || err.status === 500) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        // mooier I guess als error blijft
        // setTimeout( () => {location.reload(true); }, 5000);
      }

      const error = 'Er is iets mis gegaan bij het inloggen probeer het opnieuw' || err.statusText;
      return throwError(error);
    }));
  }
}
