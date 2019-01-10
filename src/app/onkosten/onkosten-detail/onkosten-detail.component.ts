import {Component, OnInit, ViewChild} from '@angular/core';
import {Onkosten} from '../onkosten.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {OnkostenService} from '../onkosten.service';

@Component({
  selector: 'app-onkosten-detail',
  templateUrl: '../onkosten-shared/onkosten-form.component.html',
  styleUrls: ['./onkosten-detail.component.css']
})
export class OnkostenDetailComponent implements OnInit {
  onkost: Onkosten;
  @ViewChild('f') form: NgForm;
  buttonTextOne = 'Wijzig';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private onkostenService: OnkostenService) { }

  ngOnInit() {
    // kan altijd nog worden omgebouwd naar dat onkosten detail component elke keer opnieuw wordt aangemaakt.
    this.route.params
      .subscribe(
        (params: Params) => {
          this.onkost = this.route.snapshot.data.onkost;
          this.setValues(this.onkost);
        }
      );
  }

  setValues(onkosten: Onkosten) {
    this.form.form.patchValue({
      bedrijf: onkosten.onkostenBedrijf,
      datum: onkosten.onkostenDatum,
      kostenpost: onkosten.onkostenKostenpost,
      omschrijving: onkosten.onkostenOmschrijving,
      brutokost: onkosten.onkostenBrutoKosten,
      btwprocent: onkosten.onkostenBtwPercentage,
      btwkost: onkosten.onkostenBtwKosten,
      nettokost: onkosten.onkostenNettoKosten
      }
    );
  }

  onSubmit(form: NgForm) {
    const onkost = this.onkostenService.formToOnkost(form);

    this.onkostenService.putOnkost(onkost, this.onkost.id)
      .subscribe(
      );
  }

}
