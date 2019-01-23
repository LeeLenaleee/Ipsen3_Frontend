import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OffertesService} from '../offertes.service';
import {OfferteModel} from '../../../models/offerte.model';

@Component({
  selector: 'app-offertes-zoeken',
  templateUrl: './offertes-zoeken.component.html',
  styleUrls: ['./offertes-zoeken.component.css']
})
export class OffertesZoekenComponent implements OnInit {

  @ViewChild('inputOmschrijving') correspondentie: ElementRef;

  constructor(private offerteService: OffertesService) { }

  ngOnInit() {
  }

  searchOmschrijving() {
    if (this.correspondentie.nativeElement.value !== '') {
      this.offerteService.getOfferteByCorrespondentieNummer(this.correspondentie.nativeElement.value)
        .subscribe(
          (offerte: OfferteModel[]) => {
            this.offerteService.offerteEmitter.emit(offerte);
          });
    } else {
      this.offerteService.getOffertes();
    }
  }

}
