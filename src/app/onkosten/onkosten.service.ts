import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from '../models/onkosten.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Btw} from '../models/btw.model';
import { ApiService } from '../shared/api.service';
import {Observable} from 'rxjs';
import {Kostenpost} from '../models/kostenpost.model';

@Injectable()
export class OnkostenService {

  onkostenEmitter = new EventEmitter<Onkosten[]>();
  onkostenSelected = new EventEmitter<Onkosten>();
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  getOnkosten() {
    // this.httpClient.get<Onkosten[]>('http://195.181.246.85:8080/api/onkosten', this.httpOptions)
    //   .subscribe(
    //     (onkosten: Onkosten[]) => {
    //       this.onkostenEmitter.emit(onkosten);
    //     }
    //   );

    this.apiService.get<Onkosten[]>("/onkosten").subscribe(
      (onkosten: Onkosten[]) => {
        this.onkostenEmitter.emit(onkosten);
      }
    );
  }

  getOnkost(index: number) {
    //return this.httpClient.get<Onkosten>('http://195.181.246.85:8080/api/onkosten/' + index , this.httpOptions);
    return this.apiService.get<Onkosten>("/onkosten");

  }

  getOnkostenByOmschrijving(omschrijving: string) {
    //return this.httpClient.get<Onkosten[]>('http://195.181.246.85:8080/api/onkosten/zoek?omschrijving=' + omschrijving , this.httpOptions);
    return this.apiService.get<Onkosten[]>('/onkosten/zoek?omschrijving=' + omschrijving);
  }

  formToOnkost(form: NgForm) {
    const onkost = new Onkosten(null, form.value['bedrijf'], this.toServerDateTransform(form.value['datum']),
      form.value['kostenpost'], form.value['omschrijving'], form.value['brutokost'],
      form.value['btwprocent'], form.value['btwkost'], form.value['nettokost']);
    return onkost;
  }

  postOnkost(onkost: Onkosten) {
    //return this.httpClient.post<Onkosten>('http://195.181.246.85:8080/api/onkosten', onkost, this.httpOptions);
    return this.apiService.post<Onkosten>("/onkosten", onkost);
  }

  putOnkost(onkost: Onkosten, id: number) {
    //return this.httpClient.put<Onkosten>('http://195.181.246.85:8080/api/onkosten/' + id, onkost, this.httpOptions);
    return this.apiService.put<Onkosten>("/onkosten", id, onkost);
  }

  deleteOnkost(id: number) {
    //return this.httpClient.delete<Onkosten>('http://195.181.246.85:8080/api/onkosten/' + id, this.httpOptions);
    return this.apiService.delete<Onkosten>("/onkosten", id);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  getKostenPosten(): Observable<Kostenpost[]> {
    return this.apiService.get<Kostenpost[]>('/kostenpost');
  }
}
