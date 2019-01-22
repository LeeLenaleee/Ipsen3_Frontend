import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OfferteModel} from '../../models/offerte.model';
import {NgForm} from '@angular/forms';
import {Onkosten} from '../../onkosten/onkosten.model';

@Injectable()
export class OffertesService {

  offerteEmitter = new EventEmitter<OfferteModel[]>();

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
    const offerte = new OfferteModel(null, form.value['datum'], form.value['correspondentienummer'],
      form.value['naamKlant'], form.value['uren'], form.value['btwprocent'],
      form.value['brutokost'], form.value['btwkost'], form.value['nettokost']);
    return offerte;
  }

  postOfferte(offerteModel: OfferteModel) {
    return this.httpClient.post<OfferteModel>('http://localhost:8080/api/offerte', offerteModel, this.httpOptions);
  }

  putOfferte(offerte: OfferteModel, id: number) {
    return this.httpClient.put<Onkosten>('http://localhost:8080/api/onkosten/' + id, offerte, this.httpOptions);
  }

}
