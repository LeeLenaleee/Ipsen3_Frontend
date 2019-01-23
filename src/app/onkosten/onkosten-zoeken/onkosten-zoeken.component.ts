import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {OnkostenService} from '../onkosten.service';
import {Onkosten} from '../../models/onkosten.model';

@Component({
  selector: 'app-onkosten-zoeken',
  templateUrl: './onkosten-zoeken.component.html',
  styleUrls: ['./onkosten-zoeken.component.css']
})
export class OnkostenZoekenComponent implements OnInit {
  @ViewChild('inputOmschrijving') omschrijving: ElementRef;

  constructor(private onkostenService: OnkostenService) { }

  ngOnInit() {
  }

  searchOmschrijving() {
    this.onkostenService.getOnkostenByOmschrijving(this.omschrijving.nativeElement.value)
      .subscribe(
        (onkosten: Onkosten[]) => {
          this.onkostenService.onkostenEmitter.emit(onkosten);
        });
  }
}
