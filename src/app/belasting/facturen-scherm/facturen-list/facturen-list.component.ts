import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-facturen-list',
  templateUrl: './facturen-list.component.html',
  styleUrls: ['./facturen-list.component.css']
})
export class FacturenListComponent implements OnInit {
  @Input() facturen: {id: number, beschrijving: string, datum: string, afleverDatum: string, bruto: number, netto: number}[];

  constructor() { }

  ngOnInit() {
  }

}
