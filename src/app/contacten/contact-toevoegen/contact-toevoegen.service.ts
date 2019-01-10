import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact.model';
import {NgForm} from '@angular/forms';
import {ContactZoekenService} from '../contact-zoeken.service';
import {Telefoon} from '../contact-telefoonnummer.model';
import {Email} from '../contact-email.model';

@Injectable({
  providedIn: 'root'
})
export class ContactToevoegenService {
  contactUrl = 'http://localhost:8080/api/contacten/';
  telefoonUrl = 'http://localhost:8080/api/telefoonnummer';
  emailUrl = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient, private zoekenService: ContactZoekenService) { }

  voegContactToe(form: NgForm) {
    const contact: Contact = this.formToContact(form);

    this.postContact(contact).subscribe(
      () => {
        alert('Contact toegevoegd!');
        form.onReset();
        const id = this.getId(contact);
        contact.id = id;
        // console.log('contact: ' + contact);
        // TODO tel en email met http toevoegen
        // const telNummers = this.formToTel(form);
        // for (const nummer of telNummers) {
        //   this.postTelefoon(nummer, contact).subscribe(
        //     (response) => console.log(response)
        //   );
        // }
        // const emails = this.formToEmail(form);
        // for (const email of emails) {
        //   this.addEmail(email, contact).subscribe(
        //     (response1) => console.log(response1)
        //   );
        // }
      },
      (error) => console.log(error)
    );
  }

  getId(contact: Contact) {
    let id = 0;
    this.zoekenService.showMogelijkeBedrijven(contact.contactBedrijf)
      .subscribe(
        (contacten: Contact[]) => {
          // console.log(contacten);
          console.log(contacten[contacten.length - 1]['id']);
          id = contacten[contacten.length - 1]['id'];
        }
      );
    return id;
  }

  postContact(contact: Contact) {
    return this.http.post<Contact>(this.contactUrl, contact);
  }

  postTelefoon(telefoon: string, contact: Contact) {
    return this.http.post<Telefoon>(this.telefoonUrl, new Telefoon(null, telefoon, contact));
  }

  postEmail(email: string, contact: Contact) {
    return this.http.post<Email>(this.emailUrl, new Email(null, email, contact));
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
