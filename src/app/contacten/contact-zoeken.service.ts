import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactZoekenService {
  bedrijfGezocht = new EventEmitter<Contact>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  testUrl = 'assets/test.json';
  idUrl = 'http://localhost:8080/api/contacts/';
  test2Url = 'assets/test2.json';
  zoektermUrl = 'http://localhost:8080/api/contacts/company/';

  constructor(private http: HttpClient) { }

  getContact(id: number) {
    // TODO uit database zoeken
    this.showContact(id).subscribe(
      (contact: Contact) => {
      this.bedrijfGezocht.emit(contact);
      },
      (error) => console.log(error));
  }

  showContact(id: number) {
    // return this.http.get<Contact>(this.idUrl + id);
    return this.http.get<Contact>(this.testUrl);
  }

  krijgMogelijkeBedrijven(zoekterm: string) {
    // TODO uit de backend alle bedrijfnamen + id halen
    this.mogelijkeBedrijven = [];
    this.showMogelijkeBedrijven(zoekterm)
      .subscribe(
        (data: Contact[]) => {
          for (const contact of data) {
            this.mogelijkeBedrijven.push({id: contact.id,
              bedrijf: contact.contact_bedrijf,
              naam: contact.contact_achternaam + ', ' + contact.contact_voornaam});
          }
          },
        (error) => console.log(error) // als de letter zit mogelijk niet in de dingen
      );
  }

  showMogelijkeBedrijven(zoekterm: string) {
    // return this.http.get<any[]>(this.zoektermUrl + zoekterm);
    return this.http.get<any[]>(this.test2Url);
  }
}
