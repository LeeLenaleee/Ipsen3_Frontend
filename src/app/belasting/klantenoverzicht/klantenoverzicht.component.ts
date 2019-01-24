import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-klantenoverzicht',
  templateUrl: './klantenoverzicht.component.html',
  styleUrls: ['./klantenoverzicht.component.css'],
  providers: [BelastingZoekenService]
})
export class KlantenoverzichtComponent implements OnInit {

  @ViewChild('contactInput') contactNaam: ElementRef;
  shownContacten: {id: number, bedrijf: string, naam: string, heeftBetaald: string, factuurDatum: string}[] = [];
  switchStatus = false;
  input = '';

  contactList = []; // Een lijst voor de zoekfunctie.

  textValue = '';
  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.service.updateContactMatches(this.contactNaam.nativeElement.value);
    this.shownContacten = this.service.contactMatches;
  }

  onKeyDown() {
    this.service.updateContactMatches(this.contactNaam.nativeElement.value);
  }


  zoekContacten(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.service.updateContactMatches(this.input);
    this.shownContacten = this.service.contactMatches;
  }

  filterDebiteuren() {
    // @ts-ignore
    this.contactList = document.getElementById('contactlijst').getElementsByTagName('td');
    for (let i = 0; i < this.contactList.length; i++) {
      if ((i % 4) === 2) {
        this.textValue = this.contactList[i].textContent;

        // Als het woord 'Nee' voorkomt in de "Heeft betaald" tabel & het filter staat aan..
        if (this.textValue.toUpperCase().indexOf('NEE') === -1 && this.switchStatus === true) {
          this.contactList[i - 2].style.display = 'none'; // Laat de rij dan zien.
          this.contactList[i - 1].style.display = 'none';
          this.contactList[i].style.display = 'none';
          this.contactList[i + 1].style.display = 'none';
        } else {
          this.contactList[i - 2].style.display = ''; // Zo niet, laat de rij niet zien.
          this.contactList[i - 1].style.display = '';
          this.contactList[i].style.display = '';
          this.contactList[i + 1].style.display = '';
        }
      } else {
        continue;
      }
    }
  }
}
