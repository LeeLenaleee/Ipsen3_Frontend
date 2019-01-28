import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-kwartaal-weergaven',
  templateUrl: './kwartaal-weergaven.component.html',
  styleUrls: ['./kwartaal-weergaven.component.css'],
  providers: [BelastingZoekenService]
})
export class KwartaalWeergavenComponent implements OnInit {
  jaar = (new Date()).getFullYear();
  kwartaal = 'Kwartaal 1';
  kwartaalmaanden = [];
  weergaven: any[] = [];
  allUitgaven: any[] = [];
  allFacturen: any[] = [];
  shownFacturen: {beschrijving: string, datum: string, netto: number}[] = [];
  shownUitgaven: {beschrijving: string, datum: string, netto: number}[] = [];

  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.service.updateUitgaveMatches('');
    this.allUitgaven = this.service.uitgaveMatches;
    this.service.updateFactuurMatches('');
    this.allFacturen = this.service.factuurMatches;
  }

  updateItems(input: string) {
    this.service.updateFactuurMatches('');
    this.service.updateUitgaveMatches('');

    this.shownUitgaven = [];
    this.shownFacturen = [];

    for (let i = 0; i < this.allFacturen.length; i++) {
      this.shownFacturen.push({
        beschrijving: this.service.factuurMatches[i].beschrijving,
        datum: this.service.factuurMatches[i].eindDatum,
        netto: this.service.factuurMatches[i].netto});
    }
    for (let i = 0; i < this.service.uitgaveMatches.length; i++) {
      this.shownUitgaven.push({
        beschrijving: this.service.uitgaveMatches[i].beschrijving,
        datum: this.service.uitgaveMatches[i].datum,
        netto: this.service.uitgaveMatches[i].netto});
    }
  }

  zoekItems(event: any) {
    this.weergaven = [];
    const input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.updateItems(input);
    console.log(this.shownFacturen);
    for (const uitgave of this.shownUitgaven) {
      console.log(uitgave);
      this.weergaven.push(uitgave);
    }
    for (const factuur of this.shownFacturen) {
      this.weergaven.push(factuur);
    }
  }


}
