import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactZoekenService {
  contact: Contact;
  bedrijfGezocht = new EventEmitter<Contact>();
  telNrs = new EventEmitter<string[]>();
  emails = new EventEmitter<string[]>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  idUrl = 'http://localhost:8080/api/contacts/';
  zoektermUrl = 'http://localhost:8080/api/contacts?bedrijf=';
  telUrl = 'assets/testTel.json';
  mailUrl = 'assets/testMail.json';

  constructor(private http: HttpClient) { }

  getContact(id: number) {
    // TODO uit database zoeken
    // console.log(this.showContact(id));
    this.showContact(id).subscribe(
      (contact: Contact) => {
      this.bedrijfGezocht.emit(contact);
        // this.contact = contact;
        // console.log('is dit ' + contact);
      },
      (error) => console.log(error));

    // console.log('contact: ' + this.contact);

    // this.getTelefoon(id);
    // this.getEmail(id);

    // this.bedrijfGezocht.emit(this.contact);
  }

  showContact(id: number) {
    return this.http.get<Contact>(this.idUrl + id);
    // return this.http.get<Contact>(this.testUrl);
  }

  getTelefoon(id: number) {
    this.showTelefoon(id).subscribe(
      (nummers: string[]) => {
        this.telNrs.emit(nummers);
        // for (const nummer of nummers) {
        //   console.log('tel erbij: ' + nummer);
        //   // this.contact.telefoon.push(nummer);
        // }
      }
    );
  }

  showTelefoon(id: number) {
    // return this.http.get<any[]>(this.zoektermUrl + zoekterm);
    return this.http.get<string[]>(this.telUrl);
  }

  getEmail(id: number) {
    this.showEmail(id).subscribe(
      (mails: string[]) => {
        this.emails.emit(mails);
        // for (const mail of mails) {
        //   this.contact.email.push(mail);
        // }
      }
    );
  }

  showEmail(id: number) {
    // return this.http.get<any[]>(this.zoektermUrl + zoekterm);
    return this.http.get<string[]>(this.mailUrl);
  }

  krijgMogelijkeBedrijven(zoekterm: string) {
    if (zoekterm === null) {
      zoekterm = '';
    }
    this.mogelijkeBedrijven = [];
    this.showMogelijkeBedrijven(zoekterm)
      .subscribe(
        (data: Contact[]) => {
          // console.log(data);
          for (const contact of data) {
            // console.log(contact);
            this.mogelijkeBedrijven.push({id: contact.id,
              bedrijf: contact.contactBedrijf,
              naam: contact.contactAchternaam + ', ' + contact.contactVoornaam});
          }
          },
        (error) => console.log(error) // als de letter zit mogelijk niet in de dingen
      );
  }

  showMogelijkeBedrijven(zoekterm: string) {
    return this.http.get<any[]>(this.zoektermUrl + zoekterm);
    // return this.http.get<any[]>(this.test2Url);
  }
}
