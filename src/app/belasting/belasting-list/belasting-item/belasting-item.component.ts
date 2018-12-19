import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-belasting-item',
  templateUrl: './belasting-item.component.html',
  styleUrls: ['./belasting-item.component.css']
})
export class BelastingItemComponent implements OnInit {

  switchStatus = false;
  input = ' ';
  i: number;

  // TODO: De database contacten moeten uiteindelijk uit de database worden gehaald en in deze array eindigen.
  databaseContacten = ['Simon', 'Jacco', 'Kasper', 'Jazzlyn', 'Wietse'];

  contactList = []; // Een lijst voor de zoekfunctie.

  textValue = '';
  constructor() { }

  ngOnInit() {
  }

  /*
    @author Wietse Nicolaas
    Methode die zoekt naar contacten in het belasting scherm.
    De gebruiker kan zo kijken of een contact al heeft betaald.
   */
  zoekContacten(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    // @ts-ignore
    this.contactList = document.getElementById('contactlijst').getElementsByTagName('td');

    for (this.i = 0; this.i < this.contactList.length; this.i++) { // i is hierin de Index van de contactList, startend bij 0.
      // @ts-ignore
      if ((this.i % 3) === 1) {
        this.textValue = this.contactList[this.i].textContent;
        if (this.textValue.toUpperCase().indexOf(this.input) > -1) { // Als de string die wordt ingevoerd voorkomt in het woord...
          this.textValue = this.contactList[this.i + 1].textContent;
          if (this.switchStatus === false || (this.switchStatus === true && this.textValue.toUpperCase().indexOf('NEE') > -1)) {
            this.contactList[this.i - 1].style.display = ''; // Laat de rij dan zien.
            this.contactList[this.i].style.display = '';
            this.contactList[this.i + 1].style.display = '';
          }
        } else {
          this.contactList[this.i - 1].style.display = 'none'; // Zo niet, laat de rij dan niet zien.
          this.contactList[this.i].style.display = 'none';
          this.contactList[this.i + 1].style.display = 'none';
        }
      } else {
          continue;
      }
    }
  }

  filterDebiteuren() {
    // @ts-ignore
    this.contactList = document.getElementById('contactlijst').getElementsByTagName('td');
    for (this.i = 0; this.i < this.contactList.length; this.i++) {
      if ((this.i % 3) === 2) {
        this.textValue = this.contactList[this.i].textContent;

        // Als het woord 'Nee' voorkomt in de "Heeft betaald" tabel & het filter staat aan..
        if (this.textValue.toUpperCase().indexOf('NEE') === -1 && this.switchStatus === true) {
          this.contactList[this.i - 2].style.display = 'none'; // Laat de rij dan zien.
          this.contactList[this.i - 1].style.display = 'none';
          this.contactList[this.i].style.display = 'none';
        } else {
          this.contactList[this.i - 2].style.display = ''; // Zo niet, laat de rij niet zien.
          this.contactList[this.i - 1].style.display = '';
          this.contactList[this.i].style.display = '';
        }
      } else {
          continue;
      }
    }
  }

}
