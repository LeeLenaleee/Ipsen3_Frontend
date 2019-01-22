import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OffertesService} from '../offertes.service';

@Component({
  selector: 'app-offertes-detail',
  templateUrl: '../offertes-shared/offertes-form.component.html',
  styleUrls: ['../offertes-shared/offertes-form.component.css']
})
export class OffertesDetailComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private offerteService: OffertesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const offerte = this.offerteService.formToOfferte(form);

      this.offerteService.putOnkost(onkost, this.onkost.id)
        .subscribe(
          () => {
            alert('Onkosten gewijzigd');
            this.onkostenService.getOnkosten();
          }
        );
    }
  }

}
