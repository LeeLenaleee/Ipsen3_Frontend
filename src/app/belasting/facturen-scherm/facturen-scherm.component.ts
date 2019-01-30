import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingService} from '../belasting.service';

@Component({
  selector: 'app-facturen-scherm',
  templateUrl: './facturen-scherm.component.html',
  styleUrls: ['./facturen-scherm.component.css'],
  providers: [BelastingService]
})
export class FacturenSchermComponent implements OnInit {

  @ViewChild('factuurInput') factuurNaam: ElementRef;
  inputJaar = '';
  allFacturen: {id: number, beschrijving: string, datum: string, afleverDatum: string, bruto: number, netto: number}[] = [];
  kwartaalMaanden = ['01', '02', '03'];
  geselecteerdKwartaal = 'Kwartaal 1';
  input = '';
  kwartaalSwitch = false;
  shownFacturen: {id: number, beschrijving: string, datum: string, afleverDatum: string, bruto: number, netto: number}[] = [];

  constructor(private service: BelastingService) { }

  ngOnInit() {
    this.service.updateFactuurMatches(this.factuurNaam.nativeElement.value);
    this.allFacturen = this.service.factuurMatches;
    this.shownFacturen = this.service.factuurMatches;
  }

  zoekFacturen(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.service.updateFactuurMatches(this.input);
    this.allFacturen = this.service.factuurMatches;
    this.filter();
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

  filter() {
    this.veranderKwartaal(this.geselecteerdKwartaal);
    this.shownFacturen = [];
    let maand: string;
    let jaar: string;

    console.log(this.allFacturen);

    setTimeout( () => {
      for (let i = 0; i < this.allFacturen.length; i++) {
        maand = this.allFacturen[i].datum.slice(3, 5);
        jaar = this.allFacturen[i].datum.slice(6, 10);

        if (this.kwartaalSwitch) {
          if (jaar == this.inputJaar && (maand == this.kwartaalMaanden[0] ||
            maand == this.kwartaalMaanden[1] || maand == this.kwartaalMaanden[2])) {
            this.shownFacturen.push(this.allFacturen[i]);
          } else {
            continue;
          }
        } else {
          this.shownFacturen.push(this.allFacturen[i]);
        }
      }
    }, 100);
  }

}
