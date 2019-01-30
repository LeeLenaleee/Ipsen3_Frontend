import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FactuurModel} from '../../models/factuur.model';
import {OfferteModel} from '../../models/offerte.model';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ApiService } from 'src/app/shared/api.service';

@Injectable()
export class FacturenService {

  factuurEmitter = new EventEmitter<FactuurModel[]>();
  factuurSelected = new EventEmitter<FactuurModel>();

  constructor(private apiService: ApiService) {
  }

  getFacturen() {
    this.apiService.get<FactuurModel[]>('/factuur').subscribe(
      (factuurModels: FactuurModel[]) => {
        this.factuurEmitter.emit(factuurModels)
      }
    )
  }

  getFactuurByOmschrijving(omschrijving: string) {
      return this.apiService.get<FactuurModel[]>('/factuur/zoek?omschrijving=' + omschrijving);
  }

  formToFactuur(form: NgForm) {
    const factuur = new FactuurModel(null, this.toServerDateTransform(form.value['datum']),
      this.toServerDateTransform(form.value['datumAflever']),
      form.value['factuurOmschrijving'], form.value['brutokost'], form.value['btwprocent'],
      form.value['btwkost'], form.value['nettokost']);
    return factuur;
  }

  postFactuur(factuurModel: FactuurModel) {
    return this.apiService.post<FactuurModel>('/factuur', factuurModel);
  }

  putFactuur(factuurModel: FactuurModel, id: number) {
    return this.apiService.put<FactuurModel>('/factuur', id, factuurModel);
  }

  getFactuur(index: number) {
    return this.apiService.getById<FactuurModel>('/factuur', index);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  deleteFactuur(id: number) {
    return this.apiService.delete<FactuurModel>('/factuur', id);
  }

  downLoad(id: number) {
    const downloadString = 'http://195.181.246.85:8080/api/factuur/download?id=' + id;

    const anchor = document.createElement('a');
    const headers = new Headers({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
        localStorage.getItem('password'))});
    fetch(downloadString, { headers })
      .then(response => response.blob())
      .then(blobby => {
        const objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'FactuurNummer: ' + id;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(objectUrl);
      });
  }
}
