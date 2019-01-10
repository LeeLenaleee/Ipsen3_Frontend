import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from './onkosten.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OnkostenService {

  onkostenEmitter = new EventEmitter<Onkosten[]>();
  subject = new Subject<Onkosten[]>();
  onkostenSelected = new EventEmitter<Onkosten>();
  onkostenGezocht = new EventEmitter<Onkosten[]>();

  constructor(private httpClient: HttpClient) {}

  getOnkosten() {
    this.httpClient.get<Onkosten[]>('http://localhost:8080/api/onkosten', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (onkosten: Onkosten[]) => {
          this.onkostenEmitter.emit(onkosten);
        }
      );
  }

  getOnkost(index: number) {
    return this.httpClient.get<Onkosten>('http://localhost:8080/api/onkosten/' + index , {
      observe: 'body',
      responseType: 'json'
    });
  }

  getOnkostenByOmschrijving(omschrijving: string) {
    return this.httpClient.get<Onkosten[]>('http://localhost:8080/api/onkosten/zoek?omschrijving=' + omschrijving, {
      observe: 'body',
      responseType: 'json'
    });
  }

  selectOnkosten(data) {
    this.subject.next(data);
  }
}
