import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-uitgavenoverzicht',
  templateUrl: './uitgavenoverzicht.component.html',
  styleUrls: ['./uitgavenoverzicht.component.css'],
  providers: [BelastingZoekenService]
})
export class UitgavenoverzichtComponent implements OnInit {
  @ViewChild('uitgaveInput') uitgaveNaam: ElementRef;
  input = '';
  shownUitgaven: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[] = [];
  kostenpostSwitch = false;
  jaarSwitch = false;
  kostenposten: {naam: string}[] = [];
  geselecteerdeKostenpost = '';
  inputJaar = '';
  inputKwartaal = 'kwartaal 1';

  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.service.updateUitgaveMatches(this.uitgaveNaam.nativeElement.value);
    this.service.getKostenposten();
    this.shownUitgaven = this.service.uitgaveMatches;
    this.kostenposten = this.service.kostenposten;
  }

  zoekUitgaven(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.service.updateUitgaveMatches(this.input);
    this.shownUitgaven = this.service.uitgaveMatches;
  }

  zetKostenpost(event: any) {
    this.geselecteerdeKostenpost = (<HTMLInputElement>event.target).value;
    this.filter();
  }

  veranderJaar(event: any) {
    this.inputJaar = (<HTMLInputElement>event.target).value;
  }

  veranderKwartaal(event: any) {
    this.inputKwartaal = (<HTMLInputElement>event.target).value;
  }

  filter() {
    const uitgavenLijst = document.getElementById('uitgaventabel').getElementsByTagName('td');
    let kostenpost: string;
    for (let i = 0; i < uitgavenLijst.length; i++) {
      if (i % 6 === 2) {
        kostenpost = uitgavenLijst[i].textContent;
        if (kostenpost !== this.geselecteerdeKostenpost && this.kostenpostSwitch) {
          uitgavenLijst[i - 2].style.display = 'none';
          uitgavenLijst[i - 1].style.display = 'none';
          uitgavenLijst[i].style.display = 'none';
          uitgavenLijst[i + 1].style.display = 'none';
          uitgavenLijst[i + 2].style.display = 'none';
          uitgavenLijst[i + 3].style.display = 'none';
        } else {
          uitgavenLijst[i - 2].style.display = '';
          uitgavenLijst[i - 1].style.display = '';
          uitgavenLijst[i].style.display = '';
          uitgavenLijst[i + 1].style.display = '';
          uitgavenLijst[i + 2].style.display = '';
          uitgavenLijst[i + 3].style.display = '';
        }
      }
    }
  }
}
