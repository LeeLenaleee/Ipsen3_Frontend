import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OnkostenService} from '../onkosten.service';
import {HttpClient} from '@angular/common/http';
import {Btw} from '../../models/btw.model';
import {BerekenService} from '../../shared/bereken.service';
import {Kostenpost} from '../../models/kostenpost.model';

@Component({
  selector: 'app-onkosten-toevoegen',
  templateUrl: '../onkosten-shared/onkosten-form.component.html',
  styleUrls: ['../onkosten-shared/onkosten-form.component.css']
})
export class OnkostenToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;
  kostenposten: String[] = [];
  selectedKostenpost;
  btwPercentages = new Btw(null, null, null);
  percentage = null;

  constructor(private onkostenService: OnkostenService,
              private berekenService: BerekenService) { }

  ngOnInit() {
    this.berekenService.getBtwPercentages()
      .subscribe(
        (btw: Btw) => {
          this.btwPercentages = btw;
          this.percentage = this.btwPercentages.btwPercentageHoog;
        }
      );

    this.onkostenService.getKostenPosten()
      .subscribe(
        (kostenposten: Kostenpost[]) => {
          for (const kostenpost of kostenposten) {
            this.kostenposten.push(kostenpost.kostenpost);
          }
          this.selectedKostenpost = kostenposten[0];
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

  calculatePrice() {
    this.berekenService.calculatePrice(this.form);
  }
}
