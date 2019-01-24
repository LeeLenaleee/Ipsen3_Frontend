import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-uitgavenoverzicht',
  templateUrl: './uitgavenoverzicht.component.html',
  styleUrls: ['./uitgavenoverzicht.component.css'],
  providers: [BelastingZoekenService]
})
export class UitgavenoverzichtComponent implements OnInit {
  @ViewChild('uitgaveInput') uitgaveNaam: ElementRef;
  input = '';
  shownUitgaven: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[] = [];

  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.service.updateUitgaveMatches(this.uitgaveNaam.nativeElement.value);
    this.shownUitgaven = this.service.uitgaveMatches;
  }

  zoekUitgaven(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.service.updateUitgaveMatches(this.input);
    this.shownUitgaven = this.service.uitgaveMatches;
  }

}
