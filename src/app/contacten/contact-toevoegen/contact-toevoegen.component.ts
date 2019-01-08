import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactToevoegenService} from './contact-toevoegen.service';

@Component({
  selector: 'app-contact-toevoegen',
  templateUrl: './contact-toevoegen.component.html',
  styleUrls: ['./contact-toevoegen.component.css']
})
export class ContactToevoegenComponent implements OnInit {
  selectedRelatie = 'Anders';
  land = 'Nederland';
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

  onSubmit(form: NgForm) {
    this.service.voegContactToe(form);
  }

}
