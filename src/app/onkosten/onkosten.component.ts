import {Component, OnInit, ViewChild} from '@angular/core';
import {Onkosten} from '../models/onkosten.model';
import {OnkostenService} from './onkosten.service';
import {OnkostenZoekenComponent} from './onkosten-zoeken/onkosten-zoeken.component';
import {OnkostenListComponent} from './onkosten-list/onkosten-list.component';

@Component({
  selector: 'app-onkosten',
  templateUrl: './onkosten.component.html',
  styleUrls: ['./onkosten.component.css']
})
export class OnkostenComponent implements OnInit {
  selectedOnkosten: Onkosten;

  @ViewChild(OnkostenZoekenComponent) onkostenZoekComponent: OnkostenZoekenComponent;
  @ViewChild(OnkostenListComponent) onkostenListComponent: OnkostenListComponent;

  constructor(private onkostenService: OnkostenService) { }

  ngOnInit() {
    this.onkostenService.onkostenSelected
      .subscribe(
        (onkosten: Onkosten) => {
          this.selectedOnkosten = onkosten;
        }
      );
  }

}
