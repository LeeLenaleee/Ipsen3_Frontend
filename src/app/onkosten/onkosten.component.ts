import { Component, OnInit } from '@angular/core';
import {Onkosten} from './onkosten.model';
import {OnkostenService} from './onkosten.service';

@Component({
  selector: 'app-onkosten',
  templateUrl: './onkosten.component.html',
  styleUrls: ['./onkosten.component.css']
})
export class OnkostenComponent implements OnInit {
  selectedOnkosten: Onkosten;

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
