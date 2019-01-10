import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';
import {Telefoon} from './contact-telefoonnummer.model';
import {Email} from './contact-email.model';

@Injectable()
export class ContactZoekenService {
  contact: Contact;
  bedrijfGezocht = new EventEmitter<Contact>();
  telNrs = new EventEmitter<string[]>();
  emails = new EventEmitter<string[]>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  idUrl = 'http://localhost:8080/api/contacten/';
  zoektermUrl = 'http://localhost:8080/api/contacten?bedrijf=';
  telUrl = 'http://localhost:8080/api/telefoonnummer';
  emailUrl = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { }

  getContact(id: number) {
    this.showContact(id).subscribe(
      (contact: Contact) => {
      this.bedrijfGezocht.emit(contact);
      },
      (error) => console.log(error));
  }

  showContact(id: number) {
    return this.http.get<Contact>(this.idUrl + id);
  }

  getTelefoon(id: number) {
    this.showTelefoon().subscribe(
      (nummers: Telefoon[]) => {
        const geselecteerdeNummers: string[] = [];
        for (const nummer of nummers) {
          // if (nummer['contactId'] === id) {
          if (nummer['contactId']['id'] === id) {
            geselecteerdeNummers.push(nummer['telnr']);
          }
        }
        this.telNrs.emit(geselecteerdeNummers);
      }
    );
  }

  showTelefoon() {
    return this.http.get<Telefoon[]>(this.telUrl);
  }

  getEmail(id: number) {
    this.showEmail().subscribe(
      (mails: Email[]) => {
        const geselecteerdeEmails: string[] = [];
        for (const mail of mails) {
          if (mail['contactId']['id'] === id) {
            geselecteerdeEmails.push(mail['email']);
          }
        }
        this.emails.emit(geselecteerdeEmails);
      }
    );
  }

  showEmail() {
    return this.http.get<Email[]>(this.emailUrl);
  }

  krijgMogelijkeBedrijven(zoekterm: string) {
    if (zoekterm === null) {
      zoekterm = '';
    }
    this.mogelijkeBedrijven = [];
    this.showMogelijkeBedrijven(zoekterm)
      .subscribe(
        (data: Contact[]) => {
          for (const contact of data) {
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
  }
}
