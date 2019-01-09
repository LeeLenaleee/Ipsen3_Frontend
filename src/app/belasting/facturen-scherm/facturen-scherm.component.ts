import { Component, OnInit } from '@angular/core';
import {Factuur} from '../factuur.model';

@Component({
  selector: 'app-facturen-scherm',
  templateUrl: './facturen-scherm.component.html',
  styleUrls: ['./facturen-scherm.component.css']
})
export class FacturenSchermComponent implements OnInit {

  i = 0;
  input = '';
  databaseFacturen = ['Nieuwe Auto', 'Iets anders', 'Nieuwe Telefoon', 'Kantoor PC', 'Nieuwe LCD TV'];
  factuurList = [];
  textValue = '';

  // TODO: vul deze weergaven op basis van de database waarden.
  facturen: Factuur[] = [
    new Factuur(1, 'Google Infographic', '19-02-2011', '23-11-2012', 580, 500),
    new Factuur(2, 'HSL Infographic', '02-11-2014', '02-12-2014', 420, 300),
    new Factuur(3, 'LUMC Infographic', '03-11-2014', '03-12-2014', 100, 80),
    new Factuur(4, 'Groep Illustratie', '02-10-2014', '01-11-2014', 200, 170),
  ];

  constructor() { }

  ngOnInit() {
  }
  /**
   @author Wietse Nicolaas
   Methode die zoekt naar facturen in het facturen scherm.
   Overgenomen van de zoekContacten() functie.
   ============================================================
   TOEVOEGEN VAN EEN TABEL KOLOM ZORGT ERVOOR DAT DIT NIET MEER WERKT
   */
  zoekFacturen(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    // @ts-ignore
    this.factuurList = document.getElementById('facturentabel').getElementsByTagName('td');

    for (this.i = 0; this.i < this.factuurList.length; this.i++) { // i is hierin de Index van de contactList, startend bij 0.
      // @ts-ignore
      if ((this.i % 4) === 1) {
        this.textValue = this.factuurList[this.i].textContent;
        if (this.textValue.toUpperCase().indexOf(this.input) > -1) { // Als de string die wordt ingevoerd voorkomt in het woord...
          this.textValue = this.factuurList[this.i + 1].textContent;
            this.factuurList[this.i - 1].style.display = ''; // Laat de rij dan zien.
            this.factuurList[this.i].style.display = '';
            this.factuurList[this.i + 1].style.display = '';
            this.factuurList[this.i + 2].style.display = '';
        } else {
          this.factuurList[this.i - 1].style.display = 'none'; // Zo niet, laat de rij dan niet zien.
          this.factuurList[this.i].style.display = 'none';
          this.factuurList[this.i + 1].style.display = 'none';
          this.factuurList[this.i + 2].style.display = 'none';
        }
      } else {
        continue;
      }
    }
  }

}
