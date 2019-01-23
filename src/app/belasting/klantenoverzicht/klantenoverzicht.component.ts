import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Klant} from './klant.model';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-klantenoverzicht',
  templateUrl: './klantenoverzicht.component.html',
  styleUrls: ['./klantenoverzicht.component.css'],
  providers: [BelastingZoekenService]
})
export class KlantenoverzichtComponent implements OnInit {

  @ViewChild('contactInput') contactNaam: ElementRef;
  contactMatches: {id: number, bedrijf: string, naam: string, heeftBetaald: string, factuurDatum: string}[] = [];
  shownContacten: {id: number, bedrijf: string, naam: string, heeftBetaald: string, factuurDatum: string}[] = [];
  switchStatus = false;
  input = ' ';
  i: number;

  // TODO: De database contacten moeten uiteindelijk uit de database worden gehaald en in deze weergaven eindigen.
  klanten: Klant[] = [
    new Klant(1, 'Simon', false, '07-01-2019'),
    new Klant(2, 'Jacco', false, '02-05-2018'),
    new Klant(3, 'Kasper', true, '14-08-2017')
  ];

  contactList = []; // Een lijst voor de zoekfunctie.

  textValue = '';
  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.service.showContactMatches(this.contactNaam.nativeElement.value);
    this.shownContacten = this.service.contactMatches;
  }

  onKeyDown() {
    this.service.showContactMatches(this.contactNaam.nativeElement.value);
  }

  /**
   @author Wietse Nicolaas
   Methode die zoekt naar contacten in het belasting scherm.
   De gebruiker kan zo kijken of een contact al heeft betaald.
   ============================================================
   TOEVOEGEN VAN EEN TABEL **KOLOM** ZORGT ERVOOR DAT DIT NIET MEER WERKT (rijen is fine)
   */
  zoekContacten(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    // @ts-ignore
    this.contactList = document.getElementById('contactlijst').getElementsByTagName('td');

    for (this.i = 0; this.i < this.contactList.length; this.i++) { // i is hierin de Index van de contactList, startend bij 0.
      // @ts-ignore
      if ((this.i % 4) === 1) {
        this.textValue = this.contactList[this.i].textContent;
        if (this.textValue.toUpperCase().indexOf(this.input) > -1) { // Als de string die wordt ingevoerd voorkomt in het woord...
          this.textValue = this.contactList[this.i + 1].textContent;
          if (this.switchStatus === false || (this.switchStatus === true && this.textValue.toUpperCase().indexOf('NEE') > -1)) {
            this.contactList[this.i - 1].style.display = ''; // Laat de rij dan zien.
            this.contactList[this.i].style.display = '';
            this.contactList[this.i + 1].style.display = '';
            this.contactList[this.i + 2].style.display = '';
          }
        } else {
          this.contactList[this.i - 1].style.display = 'none'; // Zo niet, laat de rij dan niet zien.
          this.contactList[this.i].style.display = 'none';
          this.contactList[this.i + 1].style.display = 'none';
          this.contactList[this.i + 2].style.display = 'none';
        }
      } else {
        continue;
      }
    }
  }

  /**
   * @author Wietse Nicolaas
   * Methode die ervoor zorgt dat alleen de debiteuren nog worden laten zien in de klantentabel.
   */
  filterDebiteuren() {
    // @ts-ignore
    this.contactList = document.getElementById('contactlijst').getElementsByTagName('td');
    for (this.i = 0; this.i < this.contactList.length; this.i++) {
      if ((this.i % 4) === 2) {
        this.textValue = this.contactList[this.i].textContent;

        // Als het woord 'Nee' voorkomt in de "Heeft betaald" tabel & het filter staat aan..
        if (this.textValue.toUpperCase().indexOf('NEE') === -1 && this.switchStatus === true) {
          this.contactList[this.i - 2].style.display = 'none'; // Laat de rij dan zien.
          this.contactList[this.i - 1].style.display = 'none';
          this.contactList[this.i].style.display = 'none';
          this.contactList[this.i + 1].style.display = 'none';
        } else {
          this.contactList[this.i - 2].style.display = ''; // Zo niet, laat de rij niet zien.
          this.contactList[this.i - 1].style.display = '';
          this.contactList[this.i].style.display = '';
          this.contactList[this.i + 1].style.display = '';
        }
      } else {
        continue;
      }
    }
  }
}
