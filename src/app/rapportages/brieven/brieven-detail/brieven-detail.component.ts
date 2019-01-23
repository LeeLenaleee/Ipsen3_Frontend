import {Component, OnInit, ViewChild} from '@angular/core';
import {Onkosten} from '../../../models/onkosten.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OnkostenService} from '../../../onkosten/onkosten.service';
import {Brieven} from '../../../models/brieven.model';
import {BrievenService} from '../brieven.service';

@Component({
  selector: 'app-brieven-detail',
  templateUrl: '../brieven-shared/brieven-shared.component.html',
  styleUrls: ['../brieven-shared/brieven-shared.component.css']
})
export class BrievenDetailComponent implements OnInit {
  brief: Brieven;
  @ViewChild('f') form: NgForm;
  buttonTextOne = 'Wijzig';
  buttonTextTwo = 'Verwijder';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private brievenService: BrievenService) { }

  ngOnInit() {
    // kan altijd nog worden omgebouwd naar dat onkosten detail component elke keer opnieuw wordt aangemaakt.
    this.route.params
      .subscribe(
        () => {
          this.brief = this.route.snapshot.data.brief;
          this.setValues(this.brief);
        }
      );
  }

  setValues(brief: Brieven) {
    setTimeout( () => {   this.form.form.patchValue({
        datum: this.fromServerDateTransForm(brief.datum),
        correspondentie: brief.correspondentie,
        betreft: brief.betreft,
        adressering: brief.adressering,
        verhaal: brief.verhaal
      }
    ); }, 1);
  }

  fromServerDateTransForm(date) {
    const parts = date.split('-');
    const x = parts[2] + '-' + parts[1] + '-' + parts[0];
    return x;
  }

  onSubmit(form: NgForm) {
    if (confirm('Weet u het zeker?')) {
      const brief = this.brievenService.formToBrief(form);

      this.brievenService.putBrief(brief, this.brief.id)
        .subscribe(
          () => {
            alert('Brief gewijzigd');
            this.brievenService.getBrieven();
          }
        );
    }
  }

  clearAndDelete() {
    if (confirm('Weet u het zeker?')) {
      this.brievenService.deleteBrief(+this.route.snapshot.params['id'])
        .subscribe(
          () => {
            this.brievenService.getBrieven();
            alert('Brief verwijderd');
            this.router.navigate(['/brieven']);
          }
        );
    }
  }

  downLoad() {
    this.brievenService.downLoad(this.brief.id);
  }
}
