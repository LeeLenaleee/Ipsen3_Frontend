import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OffertesService} from '../offertes.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-offertes-toevoegen',
  templateUrl: '../offertes-shared/offertes-form.component.html',
  styleUrls: ['../offertes-shared/offertes-form.component.css']
})
export class OffertesToevoegenComponent implements OnInit {

  constructor(private offerteService: OffertesService,
              private httpClient: HttpClient) { }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const offerteModel = this.offerteService.formToOfferte(form);
      this.offerteService.postOnkost(offerteModel)
        .subscribe(
          () => {
            alert('Onkosten toegevoegd');
            this.offerteService.getOffertes();
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