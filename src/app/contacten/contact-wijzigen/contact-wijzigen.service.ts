import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact.model';
import {Telefoon} from '../contact-telefoonnummer.model';

@Injectable({
  providedIn: 'root'
})
export class ContactWijzigenService {
  contactUrl = 'http://localhost:8080/api/contacten/';

  constructor(private http: HttpClient) { }

  putContact(contact: Contact, id: number) {
    return this.http.put<Contact>(this.contactUrl + id, contact);
  }

  putTelefoon(telefoon: Telefoon, id: number) {
    return this.http.put<Contact>(this.contactUrl + id, telefoon);
  }

  deleteContact(contact: Contact) {
    return this.http.delete<Contact>(this.contactUrl);
  }

}
