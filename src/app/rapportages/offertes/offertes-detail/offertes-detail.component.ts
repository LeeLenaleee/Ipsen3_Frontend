import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OffertesService} from '../offertes.service';
import {OfferteModel} from '../../../models/offerte.model';

@Component({
  selector: 'app-offertes-detail',
  templateUrl: '../offertes-shared/offertes-form.component.html',
  styleUrls: ['../offertes-shared/offertes-form.component.css']
})
export class OffertesDetailComponent implements OnInit {
  offerte: OfferteModel;
  @ViewChild('f') form: NgForm;
  buttonTextOne = 'Wijzig';
  buttonTextTwo = 'Verwijder';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private offerteService: OffertesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        () => {
          this.offerte = this.route.snapshot.data.offerte;
          this.setValues(this.offerte);
        }
      );
  }

  setValues(offerte: OfferteModel) {
    console.log(offerte.naamklant);
    setTimeout( () => {   this.form.form.patchValue({
        datum: offerte.datum,
        correspondentienummer: offerte.correspondentienummer,
        naamKlant: offerte.naamklant,
        uren: offerte.uren,
        btwprocent: offerte.btwPercentage,
        brutokost: offerte.kostenBruto,
        btwkost: offerte.kostenBTW,
        nettokost: offerte.kostenNetto
      /*datum: '1',
      correspondentienummer: 201,
      naamKlant: 'pjeter',
      uren: 8,
      btwprocent: 2,
      brutokost: 3,
      btwkost: 4,
      nettokost: 5*/
      }
    ); }, 1);
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const offerte = this.offerteService.formToOfferte(form);

      this.offerteService.putOfferte(offerte, this.offerte.id)
        .subscribe(
          () => {
            alert('Offerte gewijzigd');
            this.offerteService.getOffertes();
          }
        );
    }
  }

}
