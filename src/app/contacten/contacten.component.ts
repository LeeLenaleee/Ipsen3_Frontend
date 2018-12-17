import { Component, OnInit } from '@angular/core';
import {Contact} from './contact.model';
import {ContactZoekenService} from './contact-zoeken.service';

@Component({
  selector: 'app-contacten',
  templateUrl: './contacten.component.html',
  styleUrls: ['./contacten.component.css'],
  providers: [ContactZoekenService]
})
export class ContactenComponent implements OnInit {
  gekozenContact: Contact;

  constructor() { }

  ngOnInit() {
  }

  contactWeergeven(contact: Contact) {
    this.gekozenContact = contact;
  }

}
