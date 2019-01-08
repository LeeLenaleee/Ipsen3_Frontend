import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-toevoegen',
  templateUrl: './contact-toevoegen.component.html',
  styleUrls: ['./contact-toevoegen.component.css']
})
export class ContactToevoegenComponent implements OnInit {
  selectedRelatie = 'Anders';
  relatieOpties = ['Anders', 'Familie', 'Kennis', 'Klant', 'Vriend', 'Leverancier'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    // TODO iets naar service en dan naar backend
  }

}
