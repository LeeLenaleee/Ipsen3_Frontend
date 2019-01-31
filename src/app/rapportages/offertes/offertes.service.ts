import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OfferteModel} from '../../models/offerte.model';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ApiService } from 'src/app/shared/api.service';

@Injectable()
export class OffertesService {

  offerteEmitter = new EventEmitter<OfferteModel[]>();
  offerteSelected = new EventEmitter<OfferteModel>();

  constructor(private apiService: ApiService) {
  }

  getOffertes() {
      this.apiService.get<OfferteModel[]>('/offerte').subscribe(
        (offerteModels: OfferteModel[]) => {
          this.offerteEmitter.emit(offerteModels);
        }
      );
  }

  getOfferteByCorrespondentieNummer(correspondentieNummer: number) {
      return this.apiService.get<OfferteModel[]>('/offerte/zoek?correspondentie=' + correspondentieNummer);

    }

  formToOfferte(form: NgForm) {
    const offerte = new OfferteModel(null, this.toServerDateTransform(form.value['datum']), form.value['correspondentienummer'],
      form.value['naamKlant'], form.value['uren'], form.value['btwprocent'],
      form.value['brutokost'], form.value['btwkost'], form.value['nettokost']);
    return offerte;
  }

  postOfferte(offerteModel: OfferteModel) {
    return this.apiService.post<OfferteModel>('/offerte', offerteModel);
  }

  putOfferte(offerte: OfferteModel, id: number) {
    return this.apiService.put<OfferteModel>('/offerte', id, offerte);
  }

  getOfferte(index: number) {
    return this.apiService.getById<OfferteModel>('/offerte', index);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  deleteOfferte(id: number) {
    return this.apiService.delete<OfferteModel>('/offerte', id);
  }

  downLoad(id: number) {
    const downloadString = 'http://195.181.246.85:8080/api/offerte/download?id=' + id;

    const anchor = document.createElement('a');
    const headers = new Headers({ 'Authorization': 'basic ' + btoa(sessionStorage.getItem('email') + ':' +
        sessionStorage.getItem('password'))});
    fetch(downloadString, { headers })
      .then(response => response.blob())
      .then(blobby => {
        const objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'OfferteId: ' + id + '.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(objectUrl);
      });
  }
}
