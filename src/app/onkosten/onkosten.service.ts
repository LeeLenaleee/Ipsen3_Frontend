import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from './onkosten.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

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

  formToOnkost(form: NgForm) {
    const onkost = new Onkosten(null, form.value['bedrijf'], form.value['datum'],
      form.value['kostenpost'], form.value['omschrijving'], form.value['brutokost'],
      form.value['btwprocent'], form.value['btwkost'], form.value['nettokost']);
    return onkost;
  }

  postOnkost(onkost: Onkosten) {
    return this.httpClient.post<Onkosten>('http://localhost:8080/api/onkosten', onkost);
  }

  putOnkost(onkost: Onkosten, id: number) {
    return this.httpClient.put<Onkosten>('http://localhost:8080/api/onkosten/' + id, onkost);
  }

  // deleteOnkost(onkost: Onkosten) {
  //   this.httpClient.delete<Onkosten>('http://localhost:8080/api/onkosten/', onkost);
  // }

  selectOnkosten(data) {
    this.subject.next(data);
  }
}
