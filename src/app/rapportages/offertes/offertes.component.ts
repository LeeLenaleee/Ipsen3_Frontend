import { Component, OnInit } from '@angular/core';
import {OffertesService} from './offertes.service';
import {OfferteModel} from '../../models/offerte.model';

@Component({
  selector: 'app-offertes',
  templateUrl: './offertes.component.html',
  styleUrls: ['./offertes.component.css']
})
export class OffertesComponent implements OnInit {
  selectedOfferte: OfferteModel;

  constructor(private offerteService: OffertesService) { }

  ngOnInit() {
    this.offerteService.offerteSelected
      .subscribe(
        (offerte: OfferteModel) => {
          this.selectedOfferte = offerte;
        }
      );
  }

}
