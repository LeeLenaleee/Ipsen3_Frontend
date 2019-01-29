import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-uitgave-list',
  templateUrl: './uitgave-list.component.html',
  styleUrls: ['./uitgave-list.component.css']
})
export class UitgaveListComponent implements OnInit {
  @Input() uitgaven: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[];

  constructor() { }

  ngOnInit() {
  }

}
