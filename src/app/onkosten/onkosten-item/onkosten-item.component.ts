import {Component, Input, OnInit} from '@angular/core';
import {Onkosten} from '../onkosten.model';
import {OnkostenService} from '../onkosten.service';

@Component({
  selector: 'app-onkosten-item',
  templateUrl: './onkosten-item.component.html',
  styleUrls: ['./onkosten-item.component.css']
})
export class OnkostenItemComponent implements OnInit {
  @Input() onkosten: Onkosten;

  constructor(private onkostenService: OnkostenService) { }

  ngOnInit() {
  }

  onSelected() {
    this.onkostenService.onkostenSelected.emit(this.onkosten);
  }
}
