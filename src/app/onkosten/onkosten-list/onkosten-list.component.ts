import { Component, OnInit } from '@angular/core';
import {Onkosten} from '../onkosten.model';
import {OnkostenService} from '../onkosten.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-onkosten-list',
  templateUrl: './onkosten-list.component.html',
  styleUrls: ['./onkosten-list.component.css']
})
export class OnkostenListComponent implements OnInit {
  onkosten: Onkosten[];

  constructor(private onkostenService: OnkostenService) {
    this.onkostenService.onkostenGezocht
      .subscribe(
        (onkosten: Onkosten[]) => {
          this.onkosten = onkosten;
        }
      );
  }

  ngOnInit() {
    this.onkostenService.getOnkosten();
    this.onkostenService.onkostenEmitter
      .subscribe(
        (onkosten: Onkosten[]) => {
          this.onkosten = onkosten;
        }
      );
  }
}
