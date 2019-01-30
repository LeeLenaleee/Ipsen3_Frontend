import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weergave-list',
  templateUrl: './weergave-list.component.html',
  styleUrls: ['./weergave-list.component.css']
})
export class WeergaveListComponent implements OnInit {
  @Input() weergaven: {type: string, beschrijving: string, datum: string, netto: string}[];

  constructor() { }

  ngOnInit() {
  }

}
