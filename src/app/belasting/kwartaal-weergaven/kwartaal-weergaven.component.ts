import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-kwartaal-weergaven',
  templateUrl: './kwartaal-weergaven.component.html',
  styleUrls: ['./kwartaal-weergaven.component.css'],
  providers: [BelastingZoekenService]
})
export class KwartaalWeergavenComponent implements OnInit {
  inputJaar = (new Date()).getFullYear().toString();
  kwartaalMaanden = ['01', '02', '03'];
  kwartaalItems: {beschrijving: string, datum: string, netto: string}[] = [];
  shownWeergaven: {beschrijving: string, datum: string, netto: string}[] = [];
  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.updateItems();
  }

  updateItems() {

    let maand: string;
    let jaar: string;

    this.shownWeergaven = [];
    this.kwartaalItems = [];

    this.service.updateUitgaveMatches('');
    this.service.updateFactuurMatches('');

    setTimeout(() => {
        for (let i = 0; i < this.service.factuurMatches.length; i++) {
          this.kwartaalItems.push({
            beschrijving: this.service.factuurMatches[i].beschrijving,
            datum: this.service.factuurMatches[i].afleverDatum,
            netto: '+ ' + this.service.factuurMatches[i].netto.toString()
          });
        }

        for (let i = 0; i < this.service.uitgaveMatches.length; i++) {
          this.kwartaalItems.push({
            beschrijving: this.service.uitgaveMatches[i].beschrijving,
            datum: this.service.uitgaveMatches[i].datum,
            netto: '- ' + this.service.uitgaveMatches[i].netto.toString()
          });
        }

        for (let i = 0; i < this.kwartaalItems.length; i++) {

          maand = this.kwartaalItems[i].datum.slice(3, 5);
          jaar = this.kwartaalItems[i].datum.slice(6, 10);

          if (jaar === this.inputJaar && (maand === this.kwartaalMaanden[0] ||
            maand === this.kwartaalMaanden[1] || maand === this.kwartaalMaanden[2])) {
            this.shownWeergaven.push(this.kwartaalItems[i]);
          }
        }

      },
      100);
  }

  veranderJaar(event: any) {
    this.inputJaar = (<HTMLInputElement>event.target).value;
    this.updateItems();
  }

  veranderKwartaal(event: any) {
    const kwartaal = (<HTMLInputElement>event.target).value;
    switch (kwartaal) {
      case 'Kwartaal 1':  this.kwartaalMaanden = ['01', '02', '03'];
        break;
      case 'Kwartaal 2':  this.kwartaalMaanden = ['04', '05', '06'];
        break;
      case 'Kwartaal 3':  this.kwartaalMaanden = ['07', '08', '09'];
        break;
      case 'Kwartaal 4':  this.kwartaalMaanden = ['10', '11', '12'];
        break;
    }
    this.updateItems();
  }
}
