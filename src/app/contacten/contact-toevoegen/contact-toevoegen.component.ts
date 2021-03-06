import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactToevoegenService} from './contact-toevoegen.service';

@Component({
  selector: 'app-contact-toevoegen',
  templateUrl: '../contact-shared/contact-form.component.html',
  styleUrls: ['../contact-shared/contact-form.component.css'],
  providers: [ContactToevoegenService]
})
export class ContactToevoegenComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  selectedRelatie = 'Anders';
  land = 'Nederland';
  buttonText = 'Voeg toe';
  buttonText2 = 'Leeg velden';
  aantalTel = 1;
  aantalEmail = 1;
  relatieOpties = ['Anders', 'Familie', 'Kennis', 'Klant', 'Vriend', 'Leverancier'];

  constructor(private service: ContactToevoegenService) { }

  ngOnInit() {
  }

  telErbij() {
    this.aantalTel += 1;
    if (this.aantalTel === 4) {
      this.aantalTel = 3;
    }
  }
  mailErbij() {
    this.aantalEmail += 1;
    if (this.aantalEmail === 4) {
      this.aantalEmail = 3;
    }
  }

  telEraf() {
    this.aantalTel -= 1;
    if (this.aantalTel === 0) {
      this.aantalTel = 1;
    }
  }
  mailEraf() {
    this.aantalEmail -= 1;
    if (this.aantalEmail === 0) {
      this.aantalEmail = 1;
    }
  }

  onSubmit() {
    this.service.voegContactToe(this.form);
    alert('Contact toegevoegd!');
  }

  onButton() {
    if (confirm('Weet u het zeker?')) {
      this.form.onReset();
    }
  }

  onCapitalize(input: string) {
    if (this.form.value[input] !== '') {
      let woord = this.form.value[input];
      const hoofdletter = woord[0].toUpperCase();
      const rest = woord.slice(1);
      woord = (hoofdletter + rest);

      this.form.form.patchValue({[input]: woord});
    }
  }

  onCapitalizePostcode() {
    if (this.form.value['postcode'] !== '') {
      const postcode = this.form.value['postcode'].toUpperCase();
      this.form.form.patchValue({postcode: postcode});

    }
  }
}
