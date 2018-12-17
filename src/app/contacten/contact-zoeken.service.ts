import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactZoekenService {
  bedrijfGezocht = new EventEmitter<Contact>();
  mogelijkeBedrijven: {id: number, naam: string}[] = [];

  constructor() { }

  getContact(id: number) {
    // TODO uit database zoeken
    const contact = new Contact(1, 'voor', 'achter', 'bedrijf',
      'straat', 'postcode', 'woonplaats', 'nederland', [12345678, 87654321, 34567890],
      ['iemand@iets.wat', 'haha@fheod.nl'], 'relatie', 'website.nl');

    this.bedrijfGezocht.emit(contact);
  }

  krijgMogelijkeBedrijven() {
    // TODO uit de backend alle bedrijfnamen + id halen
    this.mogelijkeBedrijven = [{id: 0, naam: 'Abedrijf'}, {id: 1, naam: 'Bbedrijf'}, {id: 2, naam: 'Cbedrijf'}];
  }
}
