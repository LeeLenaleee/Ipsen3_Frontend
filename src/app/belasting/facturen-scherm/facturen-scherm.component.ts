import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Factuur} from '../factuur.model';
import {BelastingZoekenService} from '../belasting-zoeken-service';

@Component({
  selector: 'app-facturen-scherm',
  templateUrl: './facturen-scherm.component.html',
  styleUrls: ['./facturen-scherm.component.css'],
  providers: [BelastingZoekenService]
})
export class FacturenSchermComponent implements OnInit {

  @ViewChild('factuurInput') factuurNaam: ElementRef;
  input = '';
  shownFacturen: {id: number, beschrijving: string, beginDatum: string, eindDatum: string, bruto: number, netto: number}[] = [];

  constructor(private service: BelastingZoekenService) { }

  ngOnInit() {
    this.service.updateFactuurMatches(this.factuurNaam.nativeElement.value);
    this.shownFacturen = this.service.factuurMatches;
  }

  zoekFacturen(event: any) {
    this.input = (<HTMLInputElement>event.target).value.toUpperCase();
    this.service.updateFactuurMatches(this.input);
    this.shownFacturen = this.service.factuurMatches;
  }

}
