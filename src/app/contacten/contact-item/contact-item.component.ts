import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactZoekenService} from '../contact-zoeken.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  contact: Contact = new Contact(null, null, null, null, null,
    null, null, null,  null, null);
  telNummers = [];
  emails = [];

  constructor(private contactZoekenService: ContactZoekenService) {
    this.contactZoekenService.bedrijfGezocht.subscribe(
      (contactGekregen: Contact) => this.contact = contactGekregen
      );
      contactZoekenService.telNrs.subscribe(
        (nummers: string[]) => this.telNummers = nummers
      );
      contactZoekenService.emails.subscribe(
        (emails: string[]) => this.emails = emails
      );
  }

  ngOnInit() { }

}
