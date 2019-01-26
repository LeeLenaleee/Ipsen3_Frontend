import {Component, Input, OnInit} from '@angular/core';
import {ContactZoekenService} from '../../contact-zoeken.service';

@Component({
  selector: 'app-contacten-list',
  templateUrl: './contacten-list.component.html',
  styleUrls: ['./contacten-list.component.css']
})
export class ContactenListComponent implements OnInit {
  @Input() personen: {id: number, bedrijf: string, naam: string}[] = [];

  constructor(private service: ContactZoekenService) { }

  ngOnInit() {
  }

  kiesPersoon(id: number) {
    this.service.getContact(id);
  }

}
