import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactWijzigenService {
  contactUrl = 'http://localhost:8080/api/contacten/';

  constructor(private http: HttpClient) { }

  putContact(contact: Contact, id: number) {
    return this.http.put<Contact>(this.contactUrl + id, contact);
  }

}
