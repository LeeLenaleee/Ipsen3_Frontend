import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OnkostenService} from '../onkosten.service';
import {HttpClient} from '@angular/common/http';
import {Btw} from '../../models/btw.model';

@Component({
  selector: 'app-onkosten-toevoegen',
  templateUrl: '../onkosten-shared/onkosten-form.component.html',
  styleUrls: ['../onkosten-shared/onkosten-form.component.css']
})
export class OnkostenToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;
  btwPercentages = new Btw(null, null, null);
  constructor(private onkostenService: OnkostenService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.onkostenService.getBtwPercentages()
      .subscribe(
        (btw: Btw) => {
          this.btwPercentages = btw;
        }
      );
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const onkost = this.onkostenService.formToOnkost(form);
      this.onkostenService.postOnkost(onkost)
        .subscribe(
          () => {
            alert('Onkosten toegevoegd');
            this.onkostenService.getOnkosten();
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
}
