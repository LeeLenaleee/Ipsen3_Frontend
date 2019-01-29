import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FacturenService} from '../facturen.service';
import {BerekenService} from '../../../shared/bereken.service';
import {Btw} from '../../../models/btw.model';

@Component({
  selector: 'app-facturen-toevoegen',
  templateUrl: '../facturen-shared/facturen-form.component.html',
  styleUrls: ['../facturen-shared/facturen-form.component.css']
})
export class FacturenToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;
  btwPercentages = new Btw(null, null, null);
  percentage = null;

  constructor(private facturenService: FacturenService,
              private httpClient: HttpClient,
              private  berekenService: BerekenService) { }

  ngOnInit() {
    this.berekenService.getBtwPercentages()
      .subscribe(
        (btw: Btw) => {
          this.btwPercentages = btw;
          this.percentage = this.btwPercentages.btwPercentageHoog;
        }
      );
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const factuurModel = this.facturenService.formToFactuur(form);
      this.facturenService.postFactuur(factuurModel)
        .subscribe(
          () => {
            alert('Factuur toegevoegd');
            this.facturenService.getFacturen();
          }
        );
      form.onReset();
    }
  }

  downLoad() {}

  clearAndDelete() {}

  clearFields() {
    if (confirm('Weet u het zeker?')) {
      this.form.onReset();
    }
  }


  calculatePrice() {
    this.berekenService.calculatePrice(this.form);
  }

}
