import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FacturenService} from '../facturen.service';

@Component({
  selector: 'app-facturen-toevoegen',
  templateUrl: '../facturen-shared/facturen-form.component.html',
  styleUrls: ['../facturen-shared/facturen-form.component.css']
})
export class FacturenToevoegenComponent implements OnInit {

  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';

  constructor(private facturenService: FacturenService,
              private httpClient: HttpClient) { }

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

  clearFields(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      form.onReset();
    }
  }

  ngOnInit(): void {
  }


}
