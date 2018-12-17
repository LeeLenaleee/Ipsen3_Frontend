import {Component, Input, OnInit} from '@angular/core';
import {Onkosten} from '../onkosten.model';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: './onkosten-detail.component.html',
  styleUrls: ['./onkosten-detail.component.css']
})
export class OnkostenDetailComponent implements OnInit {
  @Input() onkosten: Onkosten;

  constructor() { }

  ngOnInit() {
  }

}
