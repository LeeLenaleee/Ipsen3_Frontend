import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../../models/contact.model';
import {NgForm} from '@angular/forms';
import {ContactZoekenService} from '../contact-zoeken.service';
import {Telefoon} from '../../models/contact-telefoonnummer.model';
import {Email} from '../../models/contact-email.model';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactToevoegenService {
  constructor(private zoekenService: ContactZoekenService, private apiService: ApiService) { }

  voegContactToe(form: NgForm) {
    const contact: Contact = this.formToContact(form);
    const telNummers = this.formToTel(form);
    const emails = this.formToEmail(form);

    this.postContact(contact).subscribe(
      () => {
        form.onReset();
        let id;

        this.zoekenService.showMogelijkeBedrijven(contact.contactBedrijf)
          .subscribe(
            (contacten: Contact[]) => {
              id = contacten[contacten.length - 1]['id'];
              this.voegTelToe(telNummers, contact, id);
              this.voegEmailToe(emails, contact, id);
              this.zoekenService.krijgMogelijkeBedrijven('');
            }
          );
        }
    );
  }

  voegTelToe(telNummers: string[], contact: Contact, id) {
    contact.id = id;
    for (const nummer of telNummers) {
      this.postTelefoon(nummer, contact).subscribe();
    }
  }

  voegEmailToe(emails: string[], contact: Contact, id) {
    contact.id = id;
    for (const email of emails) {
      this.postEmail(email, contact).subscribe();
    }
  }

  postContact(contact: Contact) {
    return this.apiService.post<Contact>('/contacten', contact);
  }

  postTelefoon(nummer: string, contact: Contact) {
    const telefoon = new Telefoon(null, nummer, contact);
    return this.apiService.post<Telefoon>('/telefoonnummer', telefoon);
  }

  postEmail(mail: string, contact: Contact) {
    const email = new Email(null, mail, contact);
    return this.apiService.post<Email>('/email', email);
  }

  formToContact(form: NgForm) {
    const straat = form.value['straatnaam'] + ' ' + form.value['huisnummer'];

    const contact = new Contact(null, form.value['voornaam'], form.value['achternaam'],
      form.value['bedrijf'], straat, form.value['postcode'], form.value['woonplaats'],
      form.value['land'], form.value['relatie'], form.value['website']);

    return contact;
  }

  formToTel(form: NgForm) {
    let tels = [form.value['telefoon1'], form.value['telefoon2'], form.value['telefoon3']];
    tels = this.verwijderUndefined(tels);
    return tels;
  }

  formToEmail(form: NgForm) {
    let mails = [form.value['email1'], form.value['email2'], form.value['email3']];
    mails = this.verwijderUndefined(mails);
    return mails;
  }

  verwijderUndefined(lijst: any[]) {
    for (const item in lijst) {
      if (lijst[item] === undefined) {
        lijst.splice(+item, 2);
      }
    }
    return lijst;
  }

}
