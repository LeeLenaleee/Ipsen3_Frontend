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
    null, null, null, [null], [null], null, null);

  constructor(private contactZoekenService: ContactZoekenService) {
    this.contactZoekenService.bedrijfGezocht.subscribe(
      (contactGekregen: Contact) => this.contact = contactGekregen
  );
  }

  ngOnInit() { }

}
