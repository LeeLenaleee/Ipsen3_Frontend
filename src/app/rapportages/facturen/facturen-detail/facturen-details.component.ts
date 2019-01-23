import {Component, OnInit, ViewChild} from '@angular/core';
import {FactuurModel} from '../../../models/factuur.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FacturenService} from '../facturen.service';
import {NgForm} from '@angular/forms';
import {OfferteModel} from '../../../models/offerte.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-facturen-details',
  templateUrl: '../facturen-shared/facturen-form.component.html',
  styleUrls: ['../facturen-shared/facturen-form.component.css']
})
export class FacturenDetailsComponent implements OnInit {
  factuur: FactuurModel;
  @ViewChild('f') form: NgForm;
  buttonTextOne = 'Wijzig';
  buttonTextTwo = 'Verwijder';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private factuurService: FacturenService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        () => {
          this.factuur = this.route.snapshot.data.factuur;
          this.setValues(this.factuur);
        }
      );
  }

  setValues(factuur: FactuurModel) {
    console.log(factuur.factuurOmschrijving);
    console.log('a');
    setTimeout( () => {   this.form.form.patchValue({
        datum: this.fromServerDateTransForm(factuur.datum),
        datumAflever: this.fromServerDateTransForm(factuur.afleverDatum),
        factuurOmschrijving: factuur.factuurOmschrijving,
        brutokost: factuur.brutoKosten,
        btwprocent: factuur.btwPercentage,
        btwkost: factuur.btwKosten,
        nettokost: factuur.nettoKosten
      }
    ); }, 1);
  }

  fromServerDateTransForm(date) {
    const parts = date.split('-');
    const x = parts[2] + '-' + parts[1] + '-' + parts[0];
    return x;
  }

}