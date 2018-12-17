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
    ),    new Onkosten(
      3,
      'hema',
      '07-17-2018' ,
      'materialen',
      'tekenpennen rood zwart',
      6,
      4,
      5,
      70,
    ),    new Onkosten(
      4,
      'vogeltre',
      '15-05-1998' ,
      'reiskosten',
      'vakantie valencia',
      89,
      71,
      5,
      718,
    ),    new Onkosten(
      5,
      'bedrijff',
      '21-12-1998' ,
      'geboorte',
      'lucia geboren',
      78,
      5,
      61,
      3,
    ),
  ];

  getOnkosten() {
    return this.onkosten.slice();
  }

  getOnkost(index: number) {
    return this.onkosten[index];
  }
}
