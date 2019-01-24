import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../../models/contact.model';
import {ContactWijzigenService} from './contact-wijzigen.service';
import {ContactZoekenService} from '../contact-zoeken.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactToevoegenService} from '../contact-toevoegen/contact-toevoegen.service';

@Component({
  selector: 'app-contact-wijzigen',
  templateUrl: '../contact-shared/contact-form.component.html',
  styleUrls: ['../contact-shared/contact-form.component.css'],
  providers: [ContactWijzigenService, ContactToevoegenService]
})
export class ContactWijzigenComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  buttonText = 'Contact Wijzigen';
  buttonText2 = 'Wijzigingen verwijderen';
  buttonText3 = 'Nieuw contact';
  aantalTel = 3;
  aantalEmail = 3;
  relatieOpties = ['Anders', 'Familie', 'Kennis', 'Klant', 'Vriend', 'Leverancier'];

  constructor(private wijzigenService: ContactWijzigenService,
              private zoekenService: ContactZoekenService,
              private toevoegenService: ContactToevoegenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        () => this.getValues()
      );
  }

  onSubmit() {
    if (confirm('Weet u het zeker?')) {
      const contact = this.toevoegenService.formToContact(this.form);
      const id = this.route.snapshot.params['id'];
      this.wijzigenService.putContact(contact, id)
        .subscribe(
          () => {
            alert(contact.contactBedrijf + ' gewijzigd!');
            this.router.navigate(['/contacten']);
          }
        );

      this.wijzigenService.deleteTelefoons(id);
      this.wijzigenService.deleteEmails(id);

      const tels: string[] = this.toevoegenService.formToTel(this.form);
      const emails: string[] = this.toevoegenService.formToEmail(this.form);

      this.toevoegenService.voegTelToe(tels, contact, id);
      this.toevoegenService.voegEmailToe(emails, contact, id);

    }
  }


  onButton() {
    if (confirm('Weet u het zeker?')) {
      this.getValues();
    }
  }

  onDelete() {
    if (confirm('Weet u het zeker?')) {
      const id = this.route.snapshot.params['id'];
      this.wijzigenService.deleteContact(id)
        .subscribe();

      this.wijzigenService.deleteTelefoons(id);
      this.wijzigenService.deleteEmails(id);

      this.router.navigate(['/contacten']);
    }
  }

  getValues() {
    const id = +this.route.snapshot.params['id'];
    let contact: Contact = null;
    const nummers: string[] = [];
    const emails: string[] = [];
    this.zoekenService.getTelefoon(id);
    this.zoekenService.getEmail(id);
    this.zoekenService.getContact(id);
    this.zoekenService.telNrs
      .subscribe(
        (num: string[]) => {
          this.aantalTel = num.length;
          for (const tel of num) {
            nummers.push(tel);
          }
          if (contact !== null && emails.length === this.aantalEmail) {
            // this.setValues(contact, nummers, emails);
          }
        }
      );
    this.zoekenService.emails
      .subscribe(
        (mails: string[]) => {
          this.aantalEmail = mails.length;
          for (const mail of mails) {
            emails.push(mail);
          }
          if (contact !== null && nummers.length === this.aantalTel) {
            // this.setValues(contact, nummers, emails);
          }
        }
      );
    this.zoekenService.bedrijfGezocht
      .subscribe(
        (cont: Contact) => {
          contact = cont;
          this.router.navigate(['/contacten', cont.id, 'wijzigen']);
          // if (emails.length === this.aantalEmail && nummers.length === this.aantalTel) {
          setTimeout(() => {
            this.setValues(contact, nummers, emails);
          }, 5);
          // }
        }
      );
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

  setValues(contact: Contact, telNummers: string[], emails: string[]) {
    let straat = contact.contactStraatnaam;
    const delen = straat.split(' ');
    const huisnummer = delen.pop();
    straat = delen.join(' ');

    this.form.form.patchValue({
      voornaam: contact.contactVoornaam,
      achternaam: contact.contactAchternaam,
      telefoon1: telNummers[0],
      email1: emails[0],
      bedrijf: contact.contactBedrijf,
      website: contact.contactWebsite,
      woonplaats: contact.contactPlaats,
      relatie: contact.contactRelatie,
      straatnaam: straat,
      huisnummer: huisnummer,
      postcode: contact.contactPostcode,
      land: contact.contactLand
    });

    if (this.aantalTel > 1) {
      this.form.form.patchValue({telefoon2: telNummers[1]});
      if (this.aantalTel > 2) {
        this.form.form.patchValue({telefoon3: telNummers[2]});
      }
    }
    if (this.aantalEmail > 1) {
      this.form.form.patchValue({email2: emails[1]});
      if (this.aantalEmail > 2) {
        this.form.form.patchValue({email3: emails[2]});
      }
    }
  }

}
