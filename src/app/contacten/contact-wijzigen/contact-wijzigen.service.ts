import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../../models/contact.model';
import {Telefoon} from '../../models/contact-telefoonnummer.model';

@Injectable({
  providedIn: 'root'
})
export class ContactWijzigenService {
  contactUrl = 'http://localhost:8080/api/contacten/';
  telefoonUrl = 'http://localhost:8080/api/telefoonnummer';
  emailUrl = 'http://localhost:8080/api/email';
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa('test@test.com:9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B' +
      '2B0B822CD15D6C15B0F00A08')});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient) { }

  putContact(contact: Contact, id: number) {
    return this.http.put<Contact>(this.contactUrl + id, contact, this.httpOptions);
  }

  putTelefoon(telefoon: Telefoon, id: number) {
    return this.http.put<Telefoon>(this.telefoonUrl + id, telefoon);
  }

  deleteContact(contact: Contact) {
    return this.http.delete<Contact>(this.contactUrl, this.httpOptions);
  }

}
