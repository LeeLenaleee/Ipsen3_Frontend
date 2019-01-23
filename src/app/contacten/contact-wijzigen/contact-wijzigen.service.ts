import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../../models/contact.model';
import {Telefoon} from '../../models/contact-telefoonnummer.model';
import {Email} from '../../models/contact-email.model';
import {ContactZoekenService} from '../contact-zoeken.service';

@Injectable({
  providedIn: 'root'
})
export class ContactWijzigenService {
  contactUrl = 'http://localhost:8080/api/contacten/';
  telefoonUrl = 'http://localhost:8080/api/telefoonnummer/';
  emailUrl = 'http://localhost:8080/api/email/';
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa(localStorage.getItem('email') + ':' +
      localStorage.getItem('password'))});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient, private zoekenService: ContactZoekenService) {
  }

  putContact(contact: Contact, id: number) {
    return this.http.put<Contact>(this.contactUrl + id, contact, this.httpOptions);
  }

  deleteTelefoons(id: number) {
    this.zoekenService.showTelefoon()
      .subscribe(
        (nummers: Telefoon[]) => {
          for (const nummer of nummers) {
            if (+nummer['contactId']['id'] == id) {
              this.deleteTelefoon(nummer['id']).subscribe();
            }
          }
        }
      );
  }

  deleteTelefoon(id: number) {
    return this.http.delete<Telefoon>(this.telefoonUrl + id, this.httpOptions);
  }

  deleteEmails(id: number) {
    this.zoekenService.showEmail()
      .subscribe(
        (emails: Email[]) => {
          for (const email of emails) {
            if (email['contactId']['id'] == id) {
              this.deleteEmail(email['id']).subscribe();
            }
          }
        }
      );
  }

  deleteEmail(id: number) {
    return this.http.delete<Email>(this.emailUrl + id, this.httpOptions);
  }

  deleteContact(id: number) {
    return this.http.delete<Contact>(this.contactUrl + id, this.httpOptions);
  }

}
