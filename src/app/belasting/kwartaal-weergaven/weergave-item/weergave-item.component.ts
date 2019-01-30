import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weergave-item',
  templateUrl: './weergave-item.component.html',
  styleUrls: ['./weergave-item.component.css']
})
export class WeergaveItemComponent implements OnInit {
  @Input() weergave: {type: string, beschrijving: string, datum: string, netto: string};

  constructor() { }

  ngOnInit() {
  }

}
