import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-zoeken',
  templateUrl: './contact-zoeken.component.html',
  styleUrls: ['./contact-zoeken.component.css']
})
export class ContactZoekenComponent implements OnInit {
  @Output('bedrijfGezocht') gekozenContact = new EventEmitter<Contact>();
  @ViewChild('bedrijfInput') bedrijfNaam: ElementRef;

  constructor() { }


  ngOnInit() {
  }

  onZoekBedrijf() {
    const naam = this.bedrijfNaam.nativeElement.value;
    // TODO uit database zoeken
    const contact = new Contact(1, 'voor', 'achter', 'bedrijf',
      'straat', 'postcode', 'woonplaats', 'nederland', [12345678, 87654321],
      ['iemand@iets.wat', 'haha@fheod.nl'], 'relatie', 'website.nl');
    this.gekozenContact.emit(contact);
  }
  
}
