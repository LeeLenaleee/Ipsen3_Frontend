import {Component, Input, OnInit} from '@angular/core';
import {Onkosten} from '../onkosten.model';
import {ActivatedRoute, Params} from '@angular/router';
import {OnkostenService} from '../onkosten.service';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: './onkosten-detail.component.html',
  styleUrls: ['./onkosten-detail.component.css']
})
export class OnkostenDetailComponent implements OnInit {
  onkosten: Onkosten;
  id: number;

  constructor(private route: ActivatedRoute,
              private onkostenService: OnkostenService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.onkosten = this.onkostenService.getOnkost(this.id);
        }
      );
  }

}
