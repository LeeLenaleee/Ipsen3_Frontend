import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingService} from '../belasting.service';

@Component({
  selector: 'app-kwartaal-weergaven',
  templateUrl: './kwartaal-weergaven.component.html',
  styleUrls: ['./kwartaal-weergaven.component.css'],
  providers: [BelastingService]
})
export class KwartaalWeergavenComponent implements OnInit {
  inputJaar = (new Date()).getFullYear().toString();
  kwartaalMaanden = ['01', '02', '03'];
  geselecteerdKwartaal = 'Kwartaal 1';
  kwartaalItems: {type: string, beschrijving: string, datum: string, netto: number}[] = [];
  shownWeergaven: {type: string, beschrijving: string, datum: string, netto: number}[] = [];
  kwartaalSwitch = false;
  constructor(private service: BelastingService) { }

  ngOnInit() {
    this.service.updateFactuurMatches('');
    this.service.updateUitgaveMatches('');
    setTimeout( () => {
      for (let i = 0; i < this.service.factuurMatches.length; i++) {
        this.kwartaalItems.push({
          type: 'Factuur',
          beschrijving: this.service.factuurMatches[i].beschrijving,
          datum: this.service.factuurMatches[i].afleverDatum,
          netto: this.service.factuurMatches[i].netto
        });
      }
      for (let i = 0; i < this.service.uitgaveMatches.length; i++) {
        this.kwartaalItems.push({
          type: 'Uitgave',
          beschrijving: this.service.uitgaveMatches[i].beschrijving,
          datum: this.service.uitgaveMatches[i].datum,
          netto: this.service.uitgaveMatches[i].netto
        });
      }
      for (let i = 0; i < this.service.factuurMatches.length; i++) {
        this.shownWeergaven.push({
          type: 'Factuur',
          beschrijving: this.service.factuurMatches[i].beschrijving,
          datum: this.service.factuurMatches[i].afleverDatum,
          netto: this.service.factuurMatches[i].netto
        });
      }
      for (let i = 0; i < this.service.uitgaveMatches.length; i++) {
        this.shownWeergaven.push({
          type: 'Uitgave',
          beschrijving: this.service.uitgaveMatches[i].beschrijving,
          datum: this.service.uitgaveMatches[i].datum,
          netto: this.service.uitgaveMatches[i].netto
        });
      }
    }, 100);

  }

  filter() {
    this.veranderKwartaal(this.geselecteerdKwartaal);
    this.shownWeergaven = [];
    let maand: string;
    let jaar: string;

    setTimeout( () => {
      for (let i = 0; i < this.kwartaalItems.length; i++) {
        maand = this.kwartaalItems[i].datum.slice(3, 5);
        jaar = this.kwartaalItems[i].datum.slice(6, 10);

        if (this.kwartaalSwitch) {
          if (jaar === this.inputJaar && (maand === this.kwartaalMaanden[0] ||
            maand === this.kwartaalMaanden[1] || maand === this.kwartaalMaanden[2])) {
            this.shownWeergaven.push(this.kwartaalItems[i]);
          } else {
            continue;
          }
        } else {
          this.shownWeergaven.push(this.kwartaalItems[i]);
        }
      }
    }, 100);
  }

  veranderKwartaal(kwartaal: string) {
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
  }
}
