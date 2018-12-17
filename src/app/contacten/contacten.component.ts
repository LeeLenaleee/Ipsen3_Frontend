import { Component, OnInit } from '@angular/core';
import {Contact} from './contact.model';

@Component({
  selector: 'app-contacten',
  templateUrl: './contacten.component.html',
  styleUrls: ['./contacten.component.css']
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
