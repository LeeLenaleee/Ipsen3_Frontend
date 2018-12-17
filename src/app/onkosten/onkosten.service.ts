import {EventEmitter, Injectable} from '@angular/core';
import {Onkosten} from './onkosten.model';

@Injectable()
export class OnkostenService {
  onkostenSelected = new EventEmitter<Onkosten>();

  private onkosten: Onkosten[] = [
    new Onkosten(
      1,
      'mac',
      '22-22-2022' ,
      'restaurant',
      'big menk',
      2.00,
      0.50,
      21,
      2.50,
),
    new Onkosten(
      2,
      'vriendin',
      'datum klopt nog niet xd' ,
      'cadeau',
      'nieuwe fiets',
      500,
      20,
      21,
      60000,
    ),
  ];

  getOnkosten() {
    return this.onkosten.slice();
  }

  getOnkost(index: number) {
    return this.onkosten[index];
  }
}
