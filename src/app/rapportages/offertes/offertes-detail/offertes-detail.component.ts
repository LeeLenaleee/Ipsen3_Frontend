import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OffertesService} from '../offertes.service';
import {OfferteModel} from '../../../models/offerte.model';
import {BerekenService} from '../../../shared/bereken.service';
import {Btw} from '../../../models/btw.model';

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
  btwPercentages = new Btw(null, null, null);

  constructor(private router: Router,
              private route: ActivatedRoute,
              private offerteService: OffertesService,
              private berekenService: BerekenService) { }

  ngOnInit() {
    this.berekenService.getBtwPercentages()
      .subscribe(
        (btw: Btw) => {
          this.btwPercentages = btw;
        }
      );
    this.route.params
      .subscribe(
        () => {
          this.offerte = this.route.snapshot.data.offerte;
          this.setValues(this.offerte, this.btwPercentages);
        }
      );
  }

  setValues(offerte: OfferteModel, btw: Btw) {
    setTimeout( () => {   this.form.form.patchValue({
        datum: this.fromServerDateTransForm(offerte.datum),
        correspondentienummer: offerte.correspondentienummer,
        naamKlant: offerte.naamklant,
        uren: offerte.uren,
        btwprocent: offerte.btwPercentage,
        btwPercentageHoog: btw.btwPercentageHoog,
        btwPercentageLaag: btw.btwPercentageLaag,
        brutokost: offerte.kostenBruto,
        btwkost: offerte.kostenBTW,
        nettokost: offerte.kostenNetto
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
  fromServerDateTransForm(date) {
    const parts = date.split('-');
    const x = parts[2] + '-' + parts[1] + '-' + parts[0];
    return x;
  }

  clearAndDelete() {
    if (confirm('Weet u het zeker?')) {
      this.offerteService.deleteOfferte(+this.route.snapshot.params['id'])
        .subscribe(
          () => {
            this.offerteService.getOffertes();
            alert('Offerte verwijderd');
            this.router.navigate(['/offertes']);
          }
        );
    }
  }

  downLoad() {
    this.offerteService.downLoad(this.offerte.id);
  }

  calculatePrice() {
    this.berekenService.calculatePrice(this.form);
  }
}
