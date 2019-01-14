import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ContactZoekenService} from '../contact-zoeken.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-zoeken',
  templateUrl: './contact-zoeken.component.html',
  styleUrls: ['./contact-zoeken.component.css']
})
export class ContactZoekenComponent implements OnInit {
  @ViewChild('bedrijfInput') bedrijfNaam: ElementRef;
  mogelijkeBedrijven: {id: number, bedrijf: string, naam: string}[] = [];
  gezochtePersonen: {id: number, bedrijf: string, naam: string}[] = [];

  constructor(private service: ContactZoekenService,
              private router: Router) { }

  ngOnInit() {
    /*this.service.krijgMogelijkeBedrijven(this.bedrijfNaam.nativeElement.value);
    this.mogelijkeBedrijven = this.service.mogelijkeBedrijven;*/
  }

 /* onKeyDown() {
    this.service.krijgMogelijkeBedrijven(this.bedrijfNaam.nativeElement.value);
  }

  onZoekBedrijf() {
    const naam = this.bedrijfNaam.nativeElement.value;
    // this.service.getContact(id);
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
    // this.service.getTelefoon(id);
    // this.service.getEmail(id);
    this.router.navigate(['/contacten', id, 'wijzigen']);
    this.bedrijfNaam.nativeElement.value = '';
  }*/
}
