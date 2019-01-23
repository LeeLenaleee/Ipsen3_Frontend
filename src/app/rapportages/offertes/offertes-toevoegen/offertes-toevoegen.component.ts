import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OffertesService} from '../offertes.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-offertes-toevoegen',
  templateUrl: '../offertes-shared/offertes-form.component.html',
  styleUrls: ['../offertes-shared/offertes-form.component.css']
})
export class OffertesToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;

  constructor(private offerteService: OffertesService,
              private httpClient: HttpClient) { }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const offerteModel = this.offerteService.formToOfferte(form);
      this.offerteService.postOfferte(offerteModel)
        .subscribe(
          () => {
            alert('Offerte toegevoegd');
            this.offerteService.getOffertes();
          }
        );
      form.onReset();
    }
  }

  clearAndDelete() {
    if (confirm('Weet u het zeker?')) {
      this.form.onReset();
    }
  }

  ngOnInit(): void {
  }

}
