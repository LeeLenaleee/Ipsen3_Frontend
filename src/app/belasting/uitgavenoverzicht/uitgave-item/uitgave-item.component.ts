import {Component, Input, OnInit} from '@angular/core';
import {Onkosten} from '../../../models/onkosten.model';

@Component({
  selector: 'app-uitgave-item',
  templateUrl: './uitgave-item.component.html',
  styleUrls: ['./uitgave-item.component.css']
})
export class UitgaveItemComponent implements OnInit {
  @Input() uitgave: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number};

  constructor() { }

  ngOnInit() {
  }

}
