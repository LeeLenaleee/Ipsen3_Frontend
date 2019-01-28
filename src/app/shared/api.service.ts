import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) {
    }

    createURI(path: string) {
        return 'http://195.181.246.85:8080/api' + path;
    }

    createHeaders(): HttpHeaders {
        var headers_object = new HttpHeaders(
            { 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' + localStorage.getItem('password'))
        });
        return headers_object;
    }

    get<T>(path: string): Observable<T> {
        const uri = this.createURI(path);
        const headers = this.createHeaders();
        return this.httpClient.get<T>(uri, { headers: headers });
    }
    
    post<T>(path: string, model: T):  Observable<T> {
        const uri = this.createURI(path);
        const headers = this.createHeaders();
        return this.httpClient.post<T>(uri, model, { headers: headers });
    }

    put<T>(path: string, model: T):  Observable<T> {
        const uri = this.createURI(path);
        const headers = this.createHeaders();
        return this.httpClient.put<T>(uri, model, { headers: headers });
    }

    delete<T>(path: string, id: number): Observable<T> {
      const uri = this.createURI(path) + '/' + id;
      const headers = this.createHeaders();

      return this.httpClient.delete<T>(uri, { headers });
    }
}
