import {Component, OnInit, ViewChild} from '@angular/core';
import {Onkosten} from '../../models/onkosten.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {OnkostenService} from '../onkosten.service';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: '../onkosten-shared/onkosten-form.component.html',
  styleUrls: ['../onkosten-shared/onkosten-form.component.css']
})
export class OnkostenDetailComponent implements OnInit {
  onkost: Onkosten;
  @ViewChild('f') form: NgForm;
  buttonTextOne = 'Wijzig';
  buttonTextTwo = 'Verwijder';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private onkostenService: OnkostenService) { }

  ngOnInit() {
    // kan altijd nog worden omgebouwd naar dat onkosten detail component elke keer opnieuw wordt aangemaakt.
    this.route.params
      .subscribe(
        () => {
          this.onkost = this.route.snapshot.data.onkost;
          this.setValues(this.onkost);
        }
      );
  }

  setValues(onkosten: Onkosten) {
    setTimeout( () => {   this.form.form.patchValue({
        bedrijf: onkosten.onkostenBedrijf,
        datum: this.fromServerDateTransForm(onkosten.onkostenDatum),
        kostenpost: onkosten.onkostenKostenpost,
        omschrijving: onkosten.onkostenOmschrijving,
        brutokost: onkosten.onkostenBrutoKosten,
        btwprocent: onkosten.onkostenBtwPercentage,
        btwkost: onkosten.onkostenBtwKosten,
        nettokost: onkosten.onkostenNettoKosten
      }
    ); }, 1);
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const onkost = this.onkostenService.formToOnkost(form);

      this.onkostenService.putOnkost(onkost, this.onkost.id)
        .subscribe(
          () => {
            alert('Onkosten gewijzigd');
            this.onkostenService.getOnkosten();
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
      this.onkostenService.deleteOnkost(+this.route.snapshot.params['id'])
        .subscribe(
          () => {
            this.onkostenService.getOnkosten();
            alert('Onkosten verwijderd');
            this.router.navigate(['/onkosten']);
          }
        );
    }
  }
}
