import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from '../models/onkosten.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Btw} from '../models/btw.model';
import { ApiService } from '../shared/api.service';

@Injectable()
export class OnkostenService {

  onkostenEmitter = new EventEmitter<Onkosten[]>();
  onkostenSelected = new EventEmitter<Onkosten>();

  constructor(private apiService: ApiService) {}

  getOnkosten() {
    this.apiService.get<Onkosten[]>('/onkosten').subscribe(
      (onkosten: Onkosten[]) => {
        this.onkostenEmitter.emit(onkosten);
      }
    );
  }

  getOnkost(index: number) {
    return this.apiService.getById<Onkosten>('/onkosten', index);
  }

  getOnkostenByOmschrijving(omschrijving: string) {
    return this.apiService.get<Onkosten[]>('/onkosten/zoek?omschrijving=' + omschrijving);
  }

  formToOnkost(form: NgForm) {
    const onkost = new Onkosten(null, form.value['bedrijf'], this.toServerDateTransform(form.value['datum']),
      form.value['kostenpost'], form.value['omschrijving'], form.value['brutokost'],
      form.value['btwprocent'], form.value['btwkost'], form.value['nettokost']);
    return onkost;
  }

  postOnkost(onkost: Onkosten) {
    return this.apiService.post<Onkosten>('/onkosten', onkost);
  }

  putOnkost(onkost: Onkosten, id: number) {
    return this.apiService.put<Onkosten>('/onkosten', id, onkost);
  }

  deleteOnkost(id: number) {
    return this.apiService.delete<Onkosten>('/onkosten', id);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }
}
