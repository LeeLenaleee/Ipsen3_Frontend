import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-facturen-item',
  templateUrl: './facturen-item.component.html',
  styleUrls: ['./facturen-item.component.css']
})
export class FacturenItemComponent implements OnInit {
  @Input() factuur: {id: number, beschrijving: string, datum: string, afleverDatum: string, bruto: number, netto: number};

  constructor() { }

  ngOnInit() {
  }

}
