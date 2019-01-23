import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Contact} from '../models/contact.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Telefoon} from '../models/contact-telefoonnummer.model';
import {Email} from '../models/contact-email.model';

@Injectable()
export class ContactZoekenService implements OnInit {
  contact: Contact;
  bedrijfGezocht = new EventEmitter<Contact>();
  telNrs = new EventEmitter<string[]>();
  emails = new EventEmitter<string[]>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  idUrl = 'http://localhost:8080/api/contacten/';
  zoektermUrl = 'http://localhost:8080/api/contacten?bedrijf=';
  telUrl = 'http://localhost:8080/api/telefoonnummer';
  emailUrl = 'http://localhost:8080/api/email';
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa('test@test.com:' +
      '9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient) { }

  getContact(id: number) {
    this.showContact(id).subscribe(
      (contact: Contact) => {
      this.bedrijfGezocht.emit(contact);
      },
      (error) => console.log(error));
  }

  showContact(id: number) {
    return this.http.get<Contact>(this.idUrl + id, this.httpOptions);
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
        // TODO checken of er meer dan 3 in zitten en dat de eerste verwijderen
        this.telNrs.emit(geselecteerdeNummers);
      }
    );
  }

  showTelefoon() {
    return this.http.get<Telefoon[]>(this.telUrl, this.httpOptions);
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
    return this.http.get<Email[]>(this.emailUrl, this.httpOptions);
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
        (error) => console.log('error: ' + error) // als de letter zit mogelijk niet in de dingen
      );
  }

  showMogelijkeBedrijven(zoekterm: string) {
    return this.http.get<any[]>(this.zoektermUrl + zoekterm, this.httpOptions);
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
  }
}
