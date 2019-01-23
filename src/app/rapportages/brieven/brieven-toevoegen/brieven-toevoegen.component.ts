import {Component, OnInit, ViewChild} from '@angular/core';
import {OnkostenService} from '../../../onkosten/onkosten.service';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BrievenService} from '../brieven.service';

@Component({
  selector: 'app-brieven-toevoegen',
  templateUrl: '../brieven-shared/brieven-shared.component.html',
  styleUrls: ['../brieven-shared/brieven-shared.component.css']
})
export class BrievenToevoegenComponent implements OnInit {
  buttonTextOne = 'Voeg toe';
  buttonTextTwo = 'Leeg velden';
  @ViewChild('f') form: NgForm;

  constructor(private brievenService: BrievenService,
              private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const brief = this.brievenService.formToBrief(form);
      this.brievenService.postBrief(brief)
        .subscribe(
          () => {
            alert('brief toegevoegd');
            this.brievenService.getBrieven();
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
