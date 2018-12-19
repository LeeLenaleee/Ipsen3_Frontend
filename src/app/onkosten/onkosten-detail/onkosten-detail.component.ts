import {Component, OnDestroy, OnInit} from '@angular/core';
import {Onkosten} from '../onkosten.model';
import {ActivatedRoute, Router} from '@angular/router';
import {OnkostenService} from '../onkosten.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: './onkosten-detail.component.html',
  styleUrls: ['./onkosten-detail.component.css']
})
export class OnkostenDetailComponent implements OnInit, OnDestroy {
  onkosten: Onkosten;
  id: number;

  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private onkostenService: OnkostenService) { }

  ngOnInit() {
    this.subscription = this.onkostenService.getObservable().subscribe(
      data => {
        this.id = data.id;
        this.onkosten = data;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showEmptyItem() {
    this.id = null;
  }

}
