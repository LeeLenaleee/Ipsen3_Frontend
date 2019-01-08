import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact.model';
import {NgForm} from '@angular/forms';
import {ContactZoekenService} from '../contact-zoeken.service';

@Injectable({
  providedIn: 'root'
})
export class ContactToevoegenService {

  constructor(private http: HttpClient, ) { } // private zoekenService: ContactZoekenService

  voegContactToe(form: NgForm) {
    console.log(form);
    const contact = this.formToContact(form);

    // TODO iets met http

    // TODO id ervan ophalen

    // this.zoekenService.krijgMogelijkeBedrijven(contact.contact_bedrijf);
    // const lijst = this.zoekenService.mogelijkeBedrijven;

    // const id = lijst[lijst.length - 1].id;

    // TODO tel en email met http toevoegen
  }

  formToContact(form: NgForm) {
    let tels = [form.value['telefoon1'], form.value['telefoon2'], form.value['telefoon3']];
    let mails = [form.value['email1'], form.value['email2'], form.value['email3']];
    tels = this.verwijderUndefined(tels);
    mails = this.verwijderUndefined(mails);

    const straat = form.value['straatnaam'] + ' ' + form.value['huisnummer'];

    const contact = new Contact(null, form.value['voornaam'], form.value['achternaam'],
      form.value['bedrijf'], straat, form.value['postcode'], form.value['woonplaats'],
      form.value['land'], form.value['relatie'], form.value['website']);
    console.log(contact);

    // als bedrijf is undefined, naam naar bedrijf?

    return contact;
  }

  verwijderUndefined(lijst: any[]) {
    for (const item in lijst) {
      if (lijst[item] === undefined) {
        lijst.splice(item, 2);
      }
    }
    return lijst;
  }

}
