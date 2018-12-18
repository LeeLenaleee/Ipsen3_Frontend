import {EventEmitter} from '@angular/core';
import {Contact} from './contact.model';

export class ContactZoekenService {
  bedrijfGezocht = new EventEmitter<Contact>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];

  constructor() { }

  getContact(id: number) {
    // TODO uit database zoeken
    const contact = new Contact(0, 'voor', 'achter', 'bedrijf',
      'straat', 'postcode', 'woonplaats', 'nederland', [12345678, 87654321, 34567890],
      ['iemand@iets.wat', 'haha@fheod.nl'], 'relatie', 'website.nl');
    const contact2 = new Contact(3, 'voornaam', 'achternaam', 'bedrijff',
      'straatnaam', 'postco', 'woonpla', 'nede', [12345678, 34567890],
      ['iemand@iets.wat'], 'relatie', 'webite.nl');
    const array = [contact, contact2];

    let gekozenContact: Contact;
    for (const iemand of array) {
      if (iemand.id === id) {
        gekozenContact = iemand;
      }
    }

    this.bedrijfGezocht.emit(gekozenContact);
  }

  krijgMogelijkeBedrijven() {
    // TODO uit de backend alle bedrijfnamen + id halen
    this.mogelijkeBedrijven = [{id: 0, bedrijf: 'Abedrijf', naam: 'piet met een lange naam'}, {id: 1, bedrijf: 'Bbedrijf', naam: 'jan'},
      {id: 2, bedrijf: 'Cbedrijf', naam: 'klaas'}, {id: 3, bedrijf: 'Abedrijf', naam: 'voornaam achternaam'}];
  }
}
