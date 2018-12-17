import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ContactZoekenService} from '../contact-zoeken.service';

@Component({
  selector: 'app-contact-zoeken',
  templateUrl: './contact-zoeken.component.html',
  styleUrls: ['./contact-zoeken.component.css']
})
export class ContactZoekenComponent implements OnInit {
  @ViewChild('bedrijfInput') bedrijfNaam: ElementRef;
  mogelijkeBedrijven: {id: number, naam: string}[] = [];

  constructor(private service: ContactZoekenService) { }

  ngOnInit() {
    this.service.krijgMogelijkeBedrijven();
    this.mogelijkeBedrijven = this.service.mogelijkeBedrijven;
  }

  onZoekBedrijf() {
    const naam = this.bedrijfNaam.nativeElement.value;
    let naamIndex = null;

    for (const bedrijf of this.mogelijkeBedrijven) {
      if (bedrijf.naam === naam) {
        naamIndex = this.mogelijkeBedrijven.indexOf(bedrijf);
      }
    }
    if (naamIndex === null) {
      alert('Dit bedrijf bestaat niet');
      return;
    }
    const id = this.mogelijkeBedrijven[naamIndex].id;
    this.service.getContact(id);
  }
}
