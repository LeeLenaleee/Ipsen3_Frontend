import {Component, OnDestroy, OnInit} from '@angular/core';
import {Onkosten} from '../onkosten.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {OnkostenService} from '../onkosten.service';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: './onkosten-detail.component.html',
  styleUrls: ['./onkosten-detail.component.css']
})
export class OnkostenDetailComponent implements OnInit, OnDestroy {
  onkosten: Onkosten;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // kan altijd nog worden omgebouwd naar dat onkosten detail component elke keer opnieuw wordt aangemaakt.
    this.route.params
      .subscribe(
        (params: Params) => {
          this.onkosten = this.route.snapshot.data.onkost;
        }
      );
  }

  ngOnDestroy() {
    // empty
  }
}
