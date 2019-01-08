import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactZoekenService {
  contact: Contact;
  bedrijfGezocht = new EventEmitter<Contact>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  testUrl = 'assets/test.json';
  idUrl = 'http://localhost:8080/api/contacts/';
  test2Url = 'assets/test2.json';
  zoektermUrl = 'http://localhost:8080/api/contacts/company/';
  telUrl = 'assets/testTel.json';
  mailUrl = 'assets/testMail.json';

  constructor(private http: HttpClient) { }

  getContact(id: number) {
    // TODO uit database zoeken
    console.log('dit moet niks zijn: ' + this.contact);
    this.showContact(id).subscribe(
      (contact: Contact) => {
      this.bedrijfGezocht.emit(contact);
        // this.contact = contact;
        // console.log('is dit legit.2? ' + contact);
      },
      (error) => console.log(error));

    console.log('contact: ' + this.contact);

    // this.getTelefoon(id);
    // this.getEmail(id);

    // this.bedrijfGezocht.emit(this.contact);
  }

  showContact(id: number) {
    // return this.http.get<Contact>(this.idUrl + id);
    return this.http.get<Contact>(this.testUrl);
  }

  // getTelefoon(id: number) {
  //   this.showTelefoon(id).subscribe(
  //     (nummers: number[]) => {
  //       for (const nummer of nummers) {
  //         console.log('tel erbij: ' + nummer);
  //         this.contact.telefoon.push(nummer);
  //       }
  //     }
  //   );
  // }
  //
  // showTelefoon(id: number) {
  //   // return this.http.get<any[]>(this.zoektermUrl + zoekterm);
  //   return this.http.get<number[]>(this.telUrl);
  // }
  //
  // getEmail(id: number) {
  //   this.showEmail(id).subscribe(
  //     (mails: string[]) => {
  //       for (const mail of mails) {
  //         this.contact.email.push(mail);
  //       }
  //     }
  //   );
  // }
  //
  // showEmail(id: number) {
  //   // return this.http.get<any[]>(this.zoektermUrl + zoekterm);
  //   return this.http.get<string[]>(this.mailUrl);
  // }

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
