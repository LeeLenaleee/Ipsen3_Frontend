import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ContactZoekenService} from '../contact-zoeken.service';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-zoeken',
  templateUrl: './contact-zoeken.component.html',
  styleUrls: ['./contact-zoeken.component.css']
})
export class ContactZoekenComponent implements OnInit {
  @ViewChild('bedrijfInput') bedrijfNaam: ElementRef;
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  gezochtePersonen: {id: number, bedrijf: string, naam: string}[] = [];

  constructor(private service: ContactZoekenService) { }

  hey() {
    console.log('het werkt?');
  }

  ngOnInit() {
    this.service.krijgMogelijkeBedrijven();
    this.mogelijkeBedrijven = this.service.mogelijkeBedrijven;
  }

  onZoekBedrijf() {
    const naam = this.bedrijfNaam.nativeElement.value;
    let naamIndex = null;
    this.gezochtePersonen = [];

    for (const bedrijf of this.mogelijkeBedrijven) {
      if (bedrijf.bedrijf === naam) {
        this.gezochtePersonen.push(bedrijf);
        if (naamIndex === null) {
          naamIndex = this.mogelijkeBedrijven.indexOf(bedrijf);
        }
      }
    }
    if (naamIndex === null) {
      alert('Dit bedrijf bestaat niet');
      return;
    }
    const id = this.mogelijkeBedrijven[naamIndex].id;
    this.service.getContact(id);
  }

  kiesPersoon(id: number) {
    this.service.getContact(id);
  }
}
