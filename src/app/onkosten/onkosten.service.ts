import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from '../models/onkosten.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Btw} from '../models/btw.model';

@Injectable()
export class OnkostenService {

  onkostenEmitter = new EventEmitter<Onkosten[]>();
  onkostenSelected = new EventEmitter<Onkosten>();
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private httpClient: HttpClient) {}

  getOnkosten() {
    this.httpClient.get<Onkosten[]>('http://localhost:8080/api/onkosten', this.httpOptions)
      .subscribe(
        (onkosten: Onkosten[]) => {
          this.onkostenEmitter.emit(onkosten);
        }
      );
  }

  getOnkost(index: number) {
    return this.httpClient.get<Onkosten>('http://localhost:8080/api/onkosten/' + index , this.httpOptions);
  }

  getOnkostenByOmschrijving(omschrijving: string) {
    return this.httpClient.get<Onkosten[]>('http://localhost:8080/api/onkosten/zoek?omschrijving=' + omschrijving , this.httpOptions);
  }

  formToOnkost(form: NgForm) {
    const onkost = new Onkosten(null, form.value['bedrijf'], this.toServerDateTransform(form.value['datum']),
      form.value['kostenpost'], form.value['omschrijving'], form.value['brutokost'],
      form.value['btwprocent'], form.value['btwkost'], form.value['nettokost']);
    return onkost;
  }

  postOnkost(onkost: Onkosten) {
    return this.httpClient.post<Onkosten>('http://localhost:8080/api/onkosten', onkost, this.httpOptions);
  }

  putOnkost(onkost: Onkosten, id: number) {
    return this.httpClient.put<Onkosten>('http://localhost:8080/api/onkosten/' + id, onkost, this.httpOptions);
  }

  deleteOnkost(id: number) {
    return this.httpClient.delete<Onkosten>('http://localhost:8080/api/onkosten/' + id, this.httpOptions);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  getBtwPercentages() {
    return this.httpClient.get<Btw>('http://localhost:8080/api/btwpercentage/1' , this.httpOptions);
  }
}
