import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OfferteModel} from '../../../models/offerte.model';
import {FacturenService} from '../facturen.service';
import {FactuurModel} from '../../../models/factuur.model';

@Component({
  selector: 'app-facturen-zoeken',
  templateUrl: './facturen-zoeken.component.html',
  styleUrls: ['./facturen-zoeken.component.css']
})
export class FacturenZoekenComponent implements OnInit {

  @ViewChild('inputOmschrijving') omschrijving: ElementRef;

  constructor(private factuurService: FacturenService) { }

  ngOnInit() {
  }
  searchOmschrijving() {
    if (this.omschrijving.nativeElement.value !== '') {
      this.factuurService.getFactuurByOmschrijving(this.omschrijving.nativeElement.value)
        .subscribe(
          (factuur: FactuurModel[]) => {
            this.factuurService.factuurEmitter.emit(factuur);
          });
    } else {
      this.factuurService.getFacturen();
    }
  }

}
