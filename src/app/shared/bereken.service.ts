import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Btw} from '../models/btw.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BerekenService {
  headers_object = new HttpHeaders({
    'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))
  });
  httpOptions = {
    headers: this.headers_object
  };
  constructor(private httpClient: HttpClient) {}

  calculatePrice(form: NgForm) {
    const brutokost = form.value['brutokost'];
    const btwprocent = form.value['btwprocent'];
    let nettokost = brutokost * (100 + btwprocent) / 100;
    let btwkost = nettokost - brutokost;
    nettokost = Math.round(nettokost * 100) / 100;
    btwkost = Math.round(btwkost * 100) / 100;

    form.form.patchValue({
      btwkost: btwkost,
      nettokost: nettokost
    });
  }

  getBtwPercentages() {
    return this.httpClient.get<Btw>('http://195.181.246.85:8080/api/btwpercentage/1' , this.httpOptions);
  }
}
