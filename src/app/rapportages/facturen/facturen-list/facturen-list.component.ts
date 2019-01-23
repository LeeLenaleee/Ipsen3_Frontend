import { Component, OnInit } from '@angular/core';
import {OfferteModel} from '../../../models/offerte.model';
import {FactuurModel} from '../../../models/factuur.model';
import {FacturenService} from '../facturen.service';

@Component({
  selector: 'app-facturen-list',
  templateUrl: './facturen-list.component.html',
  styleUrls: ['./facturen-list.component.css']
})
export class FacturenListComponent implements OnInit {
  facturen: FactuurModel[];
  constructor(private factuurService: FacturenService) { }

  ngOnInit() {
    this.factuurService.getFacturen();
    this.factuurService.factuurEmitter.subscribe(
      (facturen: FactuurModel[]) => {
        this.facturen = facturen;
      }
    );
  }

}
