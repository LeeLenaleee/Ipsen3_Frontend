import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContactZoekenService {
  bedrijfGezocht = new EventEmitter<Contact>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];

  constructor(private http: HttpClient) { }

  getContact(id: number) {
    // TODO uit database zoeken
    const contact = new Contact(0, 'voor', 'achter', 'bedrijf',
      'straat', 'postcode', 'woonplaats', 'nederland',  'relatie', 'website.nl');
    const contact2 = new Contact(3, 'voornaam', 'achternaam', 'bedrijff',
      'straatnaam', 'postco', 'woonpla', 'nede',  'relatie', 'webite.nl');
    const array = [contact, contact2];

    let gekozenContact: Contact;
    for (const iemand of array) {
      if (iemand.id === id) {
        gekozenContact = iemand;
      }
    }

    this.bedrijfGezocht.emit(gekozenContact);
  }

  krijgMogelijkeBedrijven(zoekterm: string) {
    // TODO uit de backend alle bedrijfnamen + id halen
    this.mogelijkeBedrijven = [{id: 0, bedrijf: 'Abedrijf', naam: 'piet met een lange naam'}, {id: 1, bedrijf: 'Bbedrijf', naam: 'jan'},
      {id: 2, bedrijf: 'Cbedrijf', naam: 'klaas'}, {id: 3, bedrijf: 'Abedrijf', naam: 'voornaam achternaam'}];

    // this.mogelijkeBedrijven = [];
    // this.http.get<Contact>('http://localhost:8080/api/contacts/company/' + zoekterm);
    // krijg id, bedrijf en naam?
  }
}
