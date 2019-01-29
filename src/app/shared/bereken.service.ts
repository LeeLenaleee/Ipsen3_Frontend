import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Btw} from '../models/btw.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable()
export class BerekenService {
  constructor(private apiService: ApiService) {}

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
    return this.apiService.getById<Btw>('/btwpercentage', 1);
  }
}
