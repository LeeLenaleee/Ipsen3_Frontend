import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from '../../models/onkosten.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Brieven} from '../../models/brieven.model';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ApiService } from 'src/app/shared/api.service';
import 'rxjs/add/operator/map'

@Injectable()
export class BrievenService {

  brievenEmitter = new EventEmitter<Brieven[]>();
  brievenSelected = new EventEmitter<Brieven>();
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private httpClient: HttpClient, private apiService: ApiService) {}

  getBrieven() {
    // this.httpClient.get<Brieven[]>('http://195.181.246.85:8080/api/brief', this.httpOptions)
    //   .subscribe(
    //     (brieven: Brieven[]) => {
    //       this.brievenEmitter.emit(brieven);
    //     }
    //   );

      this.apiService.get<Brieven[]>("/brief").subscribe(
        (brieven: Brieven[]) => {
          this.brievenEmitter.emit(brieven);
        }
      )
  }

  getBrief(index: number) {
    //return this.httpClient.get<Brieven>('http://195.181.246.85:8080/api/brief/' + index , this.httpOptions);
    return this.apiService.getById<Brieven>("/brief", index);
  }

  // zoek request
  // getOnkostenByOmschrijving(omschrijving: string) {
  //   return this.httpClient.get<Onkosten[]>('http://195.181.246.85:8080/api/onkosten/zoek?omschrijving=' + omschrijving , this.httpOptions);
  // }

  formToBrief(form: NgForm) {
    const brief = new Brieven(null, this.toServerDateTransform(form.value['datum']), form.value['correspondentie'],
      form.value['betreft'], form.value['adressering'], form.value['verhaal']);
    return brief;
  }

  postBrief(brief: Brieven) {
    //return this.httpClient.post<Brieven>('http://195.181.246.85:8080/api/brief', brief, this.httpOptions);
    return this.apiService.post<Brieven>("/brief", brief);
  }

  putBrief(brief: Brieven, id: number) {
    //return this.httpClient.put<Brieven>('http://195.181.246.85:8080/api/brief/' + id, brief, this.httpOptions);
    return this.apiService.put<Brieven>("/brief", id, brief);
  }


  getBriefByPersoon(geadreseerde: string) {
    // return this.httpClient.get<Brieven[]>('http://195.181.246.85:8080/api/brief/zoek?geadreseerde=' + geadreseerde ,
    //   this.httpOptions);
    return this.apiService.get<Brieven[]>('/brief/zoek/?geadreseerde=' + geadreseerde);
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  deleteBrief(id: number) {
    //return this.httpClient.delete<Brieven>('http://195.181.246.85:8080/api/brief/' + id, this.httpOptions);
    return this.apiService.delete<Brieven>("/brief", id);

  }

  downLoad(id: number) {
    const downloadString = 'http://195.181.246.85:8080/api/brief/download?id=' + id;

    const anchor = document.createElement('a');
    const headers = new Headers({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
        localStorage.getItem('password'))});
    fetch(downloadString, { headers })
      .then(response => response.blob())
      .then(blobby => {
        const objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'BriefId: ' + id;
        anchor.click();
        window.URL.revokeObjectURL(objectUrl);
      });
  }
}
