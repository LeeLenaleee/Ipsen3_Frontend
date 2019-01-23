import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from '../../models/onkosten.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Brieven} from '../../models/brieven.model';
import {NgForm} from '@angular/forms';
import {FactuurModel} from '../../models/factuur.model';
import {DatePipe} from '@angular/common';

@Injectable()
export class BrievenService {

  brievenEmitter = new EventEmitter<Brieven[]>();
  brievenSelected = new EventEmitter<Brieven>();
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private httpClient: HttpClient) {}

  getBrieven() {
    this.httpClient.get<Brieven[]>('http://localhost:8080/api/brief', this.httpOptions)
      .subscribe(
        (brieven: Brieven[]) => {
          this.brievenEmitter.emit(brieven);
        }
      );
  }

  getBrief(index: number) {
    return this.httpClient.get<Brieven>('http://localhost:8080/api/brief/' + index , this.httpOptions);
  }

  // zoek request
  // getOnkostenByOmschrijving(omschrijving: string) {
  //   return this.httpClient.get<Onkosten[]>('http://localhost:8080/api/onkosten/zoek?omschrijving=' + omschrijving , this.httpOptions);
  // }

  formToBrief(form: NgForm) {
    const brief = new Brieven(null, this.toServerDateTransform(form.value['datum']), form.value['correspondentie'],
      form.value['betreft'], form.value['adressering'], form.value['verhaal']);
    return brief;
  }

  postBrief(brief: Brieven) {
    return this.httpClient.post<Brieven>('http://localhost:8080/api/brief', brief, this.httpOptions);
  }

  putBrief(brief: Brieven, id: number) {
    return this.httpClient.put<Brieven>('http://localhost:8080/api/brief/' + id, brief, this.httpOptions);
  }

  getBriefByPersoon(geadreseerde: string) {
    return this.httpClient.get<Brieven[]>('http://localhost:8080/api/brief/zoek?geadreseerde=' + geadreseerde ,
      this.httpOptions);
    console.log('return this.httpClient.get<Brieven[]>(\'http://localhost:8080/api/brief/zoek?geadreseerde=\' + geadreseerde ,\n' +
      '      this.httpOptions);');
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }
}
