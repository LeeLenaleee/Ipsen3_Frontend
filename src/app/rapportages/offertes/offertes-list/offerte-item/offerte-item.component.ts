import {Component, Input, OnInit} from '@angular/core';
import {OfferteModel} from '../../../../models/offerte.model';
import {OffertesService} from '../../offertes.service';

@Component({
  selector: 'app-offerte-item',
  templateUrl: './offerte-item.component.html',
  styleUrls: ['./offerte-item.component.css']
})
export class OfferteItemComponent implements OnInit {
  @Input() offerte: OfferteModel;
  @Input() index: number;

  constructor(private offerteService: OffertesService) { }

  ngOnInit() {
  }
}
