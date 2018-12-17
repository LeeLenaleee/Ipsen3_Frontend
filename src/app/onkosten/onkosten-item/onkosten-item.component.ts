import {Component, Input, OnInit} from '@angular/core';
import {Onkosten} from '../onkosten.model';

@Component({
  selector: 'app-onkosten-item',
  templateUrl: './onkosten-item.component.html',
  styleUrls: ['./onkosten-item.component.css']
})
export class OnkostenItemComponent implements OnInit {
  @Input() onkosten: Onkosten;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
