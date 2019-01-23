import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FactuurModel} from '../../models/factuur.model';
import {OfferteModel} from '../../models/offerte.model';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Injectable()
export class FacturenService {

  factuurEmitter = new EventEmitter<FactuurModel[]>();
  factuurSelected = new EventEmitter<FactuurModel>();

  headers_object = new HttpHeaders({
    'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))
  });
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private httpClient: HttpClient) {
  }

  getFacturen() {
    this.httpClient.get<FactuurModel[]>('http://localhost:8080/api/factuur', this.httpOptions)
      .subscribe(
        (factuurModels: FactuurModel[]) => {
          this.factuurEmitter.emit(factuurModels);
        }
      );
  }

  getOfferteByOmschrijving(omschrijving: string) {
    return this.httpClient.get<FactuurModel[]>('http://localhost:8080/api/factuur/zoek?omschrijving=' + omschrijving ,
      this.httpOptions);
  }

  formToFactuur(form: NgForm) {
    const factuur = new FactuurModel(null, this.toServerDateTransform(form.value['datum']),
      this.toServerDateTransform(form.value['datumAflever']),
      form.value['factuurOmschrijving'], form.value['brutokost'], form.value['btwprocent'],
      form.value['btwkost'], form.value['nettokost']);
    return factuur;
  }

  postFactuur(factuurModel: FactuurModel) {
    return this.httpClient.post<FactuurModel>('http://localhost:8080/api/factuur', factuurModel, this.httpOptions);
  }

  putFactuur(factuurModel: FactuurModel, id: number) {
    return this.httpClient.put<FactuurModel>('http://localhost:8080/api/factuur/' + id, factuurModel, this.httpOptions);
  }

  getFactuur(index: number) {
    return this.httpClient.get<FactuurModel>('http://localhost:8080/api/factuur/' + index , this.httpOptions);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

}