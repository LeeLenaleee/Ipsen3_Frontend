import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OnkostenService} from '../onkosten.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-onkosten-toevoegen',
  templateUrl: '../onkosten-shared/onkosten-form.component.html',
  styleUrls: ['./onkosten-toevoegen.component.css']
})
export class OnkostenToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';

  constructor(private onkostenService: OnkostenService,
              private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const onkost = this.onkostenService.formToOnkost(form);
    this.onkostenService.postOnkost(onkost)
      .subscribe();
    form.onReset();
  }


}
