import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../contact.model';
import {Telefoon} from '../contact-telefoonnummer.model';

@Injectable({
  providedIn: 'root'
})
export class ContactWijzigenService {
  contactUrl = 'http://localhost:8080/api/contacten/';
  telefoonUrl = 'http://localhost:8080/api/telefoonnummer';
  emailUrl = 'http://localhost:8080/api/email';
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))});
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
