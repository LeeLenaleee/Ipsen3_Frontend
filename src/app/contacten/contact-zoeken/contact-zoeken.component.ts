import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-zoeken',
  templateUrl: './contact-zoeken.component.html',
  styleUrls: ['./contact-zoeken.component.css']
})
export class ContactZoekenComponent implements OnInit {
  @Output() bedrijfGezocht = new EventEmitter<Contact>();
  @ViewChild('bedrijfInput') bedrijfNaam: ElementRef;
  mogelijkeBedrijven: {id: number, naam: string}[];

  constructor() { }


  ngOnInit() {
    this.krijgMogelijkeBedrijven();
  }

  onZoekBedrijf() {
    const naam = this.bedrijfNaam.nativeElement.value;
    let naamIndex = null; // = this.mogelijkeBedrijven.indexOf(naam);

    for (const bedrijf of this.mogelijkeBedrijven) {
      if (bedrijf.naam === naam) {
        naamIndex = this.mogelijkeBedrijven.indexOf(bedrijf);
      }
    }
    if (naamIndex === null) {
      // TODO foutmelding geven
      console.log('dit bedrijf bestaat niet')
      return;
    }
    const id = this.mogelijkeBedrijven[naamIndex].id;
    console.log(id);

    // TODO uit database zoeken
    const contact = new Contact(1, 'voor', 'achter', 'bedrijf',
      'straat', 'postcode', 'woonplaats', 'nederland', [12345678, 87654321, 34567890],
      ['iemand@iets.wat', 'haha@fheod.nl'], 'relatie', 'website.nl');

    this.bedrijfGezocht.emit(contact);
  }

  krijgMogelijkeBedrijven() {
    // TODO uit de backhand alle bedrijfnamen + id halen
    this.mogelijkeBedrijven = [{id: 0, naam: 'Abedrijf'}, {id: 1, naam: 'Bbedrijf'}, {id: 2, naam: 'Cbedrijf'}];
  }

}
