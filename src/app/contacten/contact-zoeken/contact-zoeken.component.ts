import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ContactZoekenService} from '../contact-zoeken.service';

@Component({
  selector: 'app-contact-zoeken',
  templateUrl: './contact-zoeken.component.html',
  styleUrls: ['./contact-zoeken.component.css']
})
export class ContactZoekenComponent implements OnInit {
  @ViewChild('bedrijfInput') bedrijfNaam: ElementRef;
  gezochtePersonen: {id: number, bedrijf: string, naam: string}[] = [];

  constructor(private service: ContactZoekenService) { }

  ngOnInit() {
    this.service.krijgMogelijkeBedrijven(this.bedrijfNaam.nativeElement.value);
    this.gezochtePersonen = this.service.mogelijkeBedrijven;
  }

  onKeyDown() {
    this.service.krijgMogelijkeBedrijven(this.bedrijfNaam.nativeElement.value);
    this.gezochtePersonen = this.service.mogelijkeBedrijven;
  }
}
