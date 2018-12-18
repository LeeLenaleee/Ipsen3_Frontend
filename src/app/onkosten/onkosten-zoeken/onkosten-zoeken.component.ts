import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {OnkostenService} from '../onkosten.service';
import {Onkosten} from '../onkosten.model';

@Component({
  selector: 'app-onkosten-zoeken',
  templateUrl: './onkosten-zoeken.component.html',
  styleUrls: ['./onkosten-zoeken.component.css']
})
export class OnkostenZoekenComponent implements OnInit {
  @ViewChild('omschrijvingInput') omschrijving: ElementRef;
  private onkostenArray: Onkosten[] = [];
  constructor(private onkostenService: OnkostenService) { }

  ngOnInit() {
  }

  koppelOmschrijving() {
    const omschrijving = this.omschrijving.nativeElement.value;
    const elementen = this.onkostenService.getOnkosten();
    this.onkostenArray = [];
    for (let i = 0; i < elementen.length; i++) {
      if (this.zoekOmschrijving(elementen[i], omschrijving) !== null) {
        this.onkostenArray.push((this.zoekOmschrijving(elementen[i], omschrijving)));
      }
    }
    this.onkostenService.onkostenGezocht.emit(this.onkostenArray);
  }

  zoekOmschrijving(onkosten: Onkosten, zoekterm: string) {
    if (onkosten.omschrijving.includes(zoekterm)) {
      return onkosten;
    } else {
      return null;
    }
  }
}
