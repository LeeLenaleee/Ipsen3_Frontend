import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../../models/contact.model';
import {Telefoon} from '../../models/contact-telefoonnummer.model';
import {Email} from '../../models/contact-email.model';
import {ContactZoekenService} from '../contact-zoeken.service';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactWijzigenService {
  constructor(private zoekenService: ContactZoekenService, private apiService: ApiService) {
  }

  putContact(contact: Contact, id: number) {
    return this.apiService.put<Contact>('/contacten', id, contact);

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
    return this.apiService.delete<Telefoon>('/telefoonnummer', id);
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
    return this.apiService.delete<Email>('/email', id);

  }

  deleteContact(id: number) {
    return this.apiService.delete<Contact>('/contacten', id);
  }
}
