import { Component, OnInit } from '@angular/core';
import {OfferteModel} from '../../../models/offerte.model';
import {OffertesService} from '../offertes.service';

@Component({
  selector: 'app-offertes-list',
  templateUrl: './offertes-list.component.html',
  styleUrls: ['./offertes-list.component.css']
})
export class OffertesListComponent implements OnInit {
  offertes: OfferteModel[];
  constructor(private offerteService: OffertesService) {
  }

  ngOnInit() {
    this.offerteService.getOffertes();
    this.offerteService.offerteEmitter
      .subscribe(
        (offertes: OfferteModel[]) => {
          this.offertes = offertes;
        }
      );
  }

}
