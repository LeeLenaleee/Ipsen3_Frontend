import { Component, OnInit } from '@angular/core';
import {ContactZoekenService} from './contact-zoeken.service';

@Component({
  selector: 'app-contacten',
  templateUrl: './contacten.component.html',
  styleUrls: ['./contacten.component.css'],
  providers: [ContactZoekenService]
})
export class ContactenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
