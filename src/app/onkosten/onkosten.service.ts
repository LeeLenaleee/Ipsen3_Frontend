import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from './onkosten.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OnkostenService {

  subject = new Subject<Onkosten[]>();

  onkostenSelected = new EventEmitter<Onkosten>();
  onkostenGezocht = new EventEmitter<Onkosten[]>();

  constructor(private httpClient: HttpClient) {}

  getOnkosten() {
    return this.httpClient.get<Onkosten[]>('http://localhost:8080/api/onkosten', {
      observe: 'body',
      responseType: 'json'
    });
    // return this.onkosten.slice();
  }

  getOnkost(index: number) {
    return this.httpClient.get<Onkosten>('http://localhost:8080/api/onkosten/' + index , {
      observe: 'body',
      responseType: 'json'
    });
  }


  // getObservable() {
  //   return this.subject.asObservable();
  // }

  selectOnkosten(data) {
    this.subject.next(data);
  }
}
