import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OnkostenService} from '../onkosten.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-onkosten-toevoegen',
  templateUrl: '../onkosten-shared/onkosten-form.component.html',
  styleUrls: ['../onkosten-shared/onkosten-form.component.css']
})
export class OnkostenToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;
  
  constructor(private onkostenService: OnkostenService,
              private httpClient: HttpClient) { }

  ngOnInit() {
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
