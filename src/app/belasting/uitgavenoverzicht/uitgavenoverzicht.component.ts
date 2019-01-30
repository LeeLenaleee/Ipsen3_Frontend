import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BelastingService} from '../belasting.service';

@Component({
  selector: 'app-uitgavenoverzicht',
  templateUrl: './uitgavenoverzicht.component.html',
  styleUrls: ['./uitgavenoverzicht.component.css'],
  providers: [BelastingService]
})
export class UitgavenoverzichtComponent implements OnInit {
  @ViewChild('uitgaveInput') uitgaveNaam: ElementRef;
  allUitgaven: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[] = [];
  kostenpostSwitch = false;
  kwartaalSwitch = false;
  kostenposten: {naam: string}[] = [];
  @Input() geselecteerdeKostenpost = '';
  inputJaar = '';
  geselecteerdKwartaal = 'Kwartaal 1';
  kwartaalMaanden = ['01', '02', '03'];
  shownUitgaven: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[] = [];

  constructor(private service: BelastingService) { }

  ngOnInit() {
    this.service.updateUitgaveMatches(this.uitgaveNaam.nativeElement.value);
    this.service.updateKostenposten();
    this.allUitgaven = this.service.uitgaveMatches;
    this.shownUitgaven = this.service.uitgaveMatches;
    this.kostenposten = this.service.kostenposten;
  }

  zoekUitgaven(event: any) {
    const input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.service.updateUitgaveMatches(input);
    this.allUitgaven = this.service.uitgaveMatches;
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

    this.shownUitgaven = [];
    let kostenpost: string;
    let maand: string;
    let jaar: string;

    setTimeout( () => {
      for (let i = 0; i < this.allUitgaven.length; i++) {
        kostenpost = this.allUitgaven[i].kostenpost;
        maand = this.allUitgaven[i].datum.slice(3, 5);
        jaar = this.allUitgaven[i].datum.slice(6, 10);

        if (this.kwartaalSwitch) {
          if (this.kostenpostSwitch) { // Both kostenpost & kwartaal
            if (kostenpost == this.geselecteerdeKostenpost && (jaar == this.inputJaar && (maand == this.kwartaalMaanden[0] ||
              maand == this.kwartaalMaanden[1] || maand == this.kwartaalMaanden[2]))) {
              this.shownUitgaven.push(this.allUitgaven[i]);
            }
          } else if (jaar == this.inputJaar && (maand == this.kwartaalMaanden[0] || // Only kwartaal
            maand == this.kwartaalMaanden[1] || maand == this.kwartaalMaanden[2])) {
            this.shownUitgaven.push(this.allUitgaven[i]);
          }
        } else if (this.kostenpostSwitch) { // Only kostenpost
          if (kostenpost == this.geselecteerdeKostenpost) {
            this.shownUitgaven.push(this.allUitgaven[i]);
          }
        } else { // Neither kostenpost nor kwartaal

          this.shownUitgaven.push(this.allUitgaven[i]);
        }
      }
    }, 100);
  }
}
