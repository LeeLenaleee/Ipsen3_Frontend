import { Component, OnInit } from '@angular/core';
import {Factuur} from '../factuur.model';
import {Onkost} from '../onkost.model';

@Component({
  selector: 'app-kwartaal-weergaven',
  templateUrl: './kwartaal-weergaven.component.html',
  styleUrls: ['./kwartaal-weergaven.component.css']
})
export class KwartaalWeergavenComponent implements OnInit {

  jaar = (new Date()).getFullYear();
  kwartaal = 'Kwartaal 1';
  kwartaalmaanden = [];
  weergaven: any[] = [];

  facturen: Factuur[] = [
    new Factuur(1, 'HSleiden Infographic', '12-05-2011', '19-11-2012', 380, 325),
    new Factuur(2, 'HP Infographic', '17-02-2014', '07-10-2014', 580, 520),
    new Factuur(3, 'Google Infographic', '10-10-2017', '29-05-2018', 780, 700)
  ];

  onkosten: Onkost[] = [
    new Onkost(1, 'Nieuwe printer', 'Printer', '05-10-2010', 2000, 1900),
    new Onkost(2, 'Printer papier', 'Printer', '02-11-2014', 50, 45),
    new Onkost(3, 'Nieuwe telefoon', 'Communicatie', '15-05-2017', 100, 96)
  ];

  constructor() { }

  ngOnInit() {
  }

  veranderJaar(event: any) {
    this.jaar = Number((<HTMLInputElement>event.target).value);
    this.filterWeergaven();
  }
  filterWeergaven() {
    this.weergaven = [];

    // Onkosten
    for (let i = 0; i <  this.onkosten.length; i++) {
      if (this.onkosten[i].datum.slice(6, 10) !== this.jaar.toString()) {
        continue;
      }
      for (let j = 0; j < this.kwartaalmaanden.length; j++) {
        if (this.onkosten[i].datum.slice(3, 5) === this.kwartaalmaanden[j]) {
          this.weergaven.push(this.onkosten[i]);
        }
      }
    }

    // Facturen
    for (let i = 0; i <  this.facturen.length; i++) {
      if (this.facturen[i].eindDatum.slice(6, 10) !== this.jaar.toString()) {
        continue;
      }
      for (let j = 0; j < this.kwartaalmaanden.length; j++) {
        if (this.facturen[i].eindDatum.slice(3, 5) === this.kwartaalmaanden[j]) {
          this.weergaven.push(this.facturen[i]);
        }
      }
    }
    console.log(this.weergaven);
  }

  zetKwartaalMaanden(event: any) {
    this.kwartaal = (<HTMLInputElement>event.target).value;
    switch (this.kwartaal) {
      case 'Kwartaal 1':  this.kwartaalmaanden = ['01', '02', '03'];
                          break;
      case 'Kwartaal 2':  this.kwartaalmaanden = ['04', '05', '06'];
                          break;
      case 'Kwartaal 3':  this.kwartaalmaanden = ['07', '08', '09'];
                          break;
      case 'Kwartaal 4':  this.kwartaalmaanden = ['10', '11', '12'];
                          break;
      default:            console.log('Dit zou niet moeten kunnen.'); // TODO: Error afhandeling.
    }
    this.filterWeergaven();
  }


}
