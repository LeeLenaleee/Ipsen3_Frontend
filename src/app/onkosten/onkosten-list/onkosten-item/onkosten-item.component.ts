import {Component, Input, OnInit} from '@angular/core';
import {Onkosten} from '../../../models/onkosten.model';
import {OnkostenService} from '../../onkosten.service';

@Component({
  selector: 'app-onkosten-item',
  templateUrl: './onkosten-item.component.html',
  styleUrls: ['./onkosten-item.component.css']
})
export class OnkostenItemComponent implements OnInit {
  @Input() onkosten: Onkosten;
  @Input() index: number;

  constructor(private onkostenService: OnkostenService) { }

  ngOnInit() {
  }
}
