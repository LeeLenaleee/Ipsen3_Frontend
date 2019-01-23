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

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const factuur = this.factuurService.formToFactuur(form);

      this.factuurService.putFactuur(factuur, this.factuur.id)
        .subscribe(
          () => {
            alert('Factuur gewijzigd');
            this.factuurService.getFacturen();
          }
        );
    }
  }

  setValues(factuur: FactuurModel) {
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

  clearAndDelete() {
    if (confirm('Weet u het zeker?')) {
      this.factuurService.deleteFactuur(+this.route.snapshot.params['id'])
        .subscribe(
          () => {
            this.factuurService.getFacturen();
            alert('Factuur verwijderd');
            this.router.navigate(['/facturen']);
          }
        );
    }
  }

  downLoad() {
    this.factuurService.downLoad(this.factuur.id);
  }
}
