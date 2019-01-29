import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Contact} from '../models/contact.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Telefoon} from '../models/contact-telefoonnummer.model';
import {Email} from '../models/contact-email.model';
import { ApiService } from '../shared/api.service';

@Injectable()
export class ContactZoekenService implements OnInit {
  contact: Contact;
  bedrijfGezocht = new EventEmitter<Contact>();
  telNrs = new EventEmitter<string[]>();
  emails = new EventEmitter<string[]>();
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  
  constructor(private apiService: ApiService) { }

  getContact(id: number) {
    this.showContact(id).subscribe(
      (contact: Contact) => {
      this.bedrijfGezocht.emit(contact);
      }
      );
  }

  showContact(id: number) {
    return this.apiService.getById<Contact>('/contacten', id);
  }

  getTelefoon(id: number) {
    this.showTelefoon().subscribe(
      (nummers: Telefoon[]) => {
        const geselecteerdeNummers: string[] = [];
        for (const nummer of nummers) {
          if (nummer['contactId']['id'] === id) {
            geselecteerdeNummers.push(nummer['telnr']);
          }
        }
        this.telNrs.emit(geselecteerdeNummers);
      }
    );
  }

  showTelefoon() {
    return this.apiService.get<Telefoon[]>('/telefoonnummer');
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
    return this.apiService.get<Email[]>('/email');
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
          }
      );
  }

  showMogelijkeBedrijven(zoekterm: string) {
    return this.apiService.get<any[]>('/contacten/bedrijf?bedrijf=' + zoekterm);
  }

  ngOnInit(): void {
  }
}
