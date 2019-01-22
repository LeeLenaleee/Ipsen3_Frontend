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
          this.offerte = this.route.snapshot.data.onkost;
          this.setValues(this.offerte);
        }
      );
  }

  setValues(offerte: OfferteModel) {
    setTimeout( () => {   this.form.form.patchValue({
        naamKlant: offerte.naamklant,
        datum: offerte.datum,
        uren: offerte.uren,
        correspondentienummer: offerte.correspondentienummer,
        brutokost: offerte.kostenBruto,
        btwprocent: offerte.btwPercentage,
        btwkost: offerte.kostenBTW,
        nettokost: offerte.kostenNetto
      }
    ); }, 1);
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const offerte = this.offerteService.formToOfferte(form);

      this.offerteService.postOfferte(offerte)
        .subscribe(
          () => {
            alert('Offerte gewijzigd');
            this.offerteService.getOffertes();
          }
        );
    }
  }

}
