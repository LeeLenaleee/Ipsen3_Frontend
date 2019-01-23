import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OfferteModel} from '../../models/offerte.model';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Injectable()
export class OffertesService {

  offerteEmitter = new EventEmitter<OfferteModel[]>();
  offerteSelected = new EventEmitter<OfferteModel>();

  headers_object = new HttpHeaders({
    'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))
  });
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private httpClient: HttpClient) {
  }

  getOffertes() {
    this.httpClient.get<OfferteModel[]>('http://localhost:8080/api/offerte', this.httpOptions)
      .subscribe(
        (offerteModels: OfferteModel[]) => {
          this.offerteEmitter.emit(offerteModels);
        }
      );
  }

  getOfferteByCorrespondentieNummer(correspondentieNummer: number) {
      return this.httpClient.get<OfferteModel[]>('http://localhost:8080/api/offerte/zoek?correspondentie=' + correspondentieNummer ,
        this.httpOptions);
    }

  formToOfferte(form: NgForm) {
    const offerte = new OfferteModel(null, this.toServerDateTransform(form.value['datum']), form.value['correspondentienummer'],
      form.value['naamKlant'], form.value['uren'], form.value['btwprocent'],
      form.value['brutokost'], form.value['btwkost'], form.value['nettokost']);
    return offerte;
  }

  postOfferte(offerteModel: OfferteModel) {
    return this.httpClient.post<OfferteModel>('http://localhost:8080/api/offerte', offerteModel, this.httpOptions);
  }

  putOfferte(offerte: OfferteModel, id: number) {
    return this.httpClient.put<OfferteModel>('http://localhost:8080/api/offerte/' + id, offerte, this.httpOptions);
  }

  getOfferte(index: number) {
    return this.httpClient.get<OfferteModel>('http://localhost:8080/api/offerte/' + index , this.httpOptions);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  deleteOfferte(id: number) {
    return this.httpClient.delete<OfferteModel>('http://localhost:8080/api/offerte/' + id, this.httpOptions);
  }

  downLoad(id: number) {
    const downloadString = 'http://localhost:8080/api/offerte/download?id=' + id;

    const anchor = document.createElement('a');
    const headers = new Headers({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
        localStorage.getItem('password'))});
    fetch(downloadString, { headers })
      .then(response => response.blob())
      .then(blobby => {
        const objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'OfferteNummer: ' + id;
        anchor.click();
        window.URL.revokeObjectURL(objectUrl);
      });
  }
}
