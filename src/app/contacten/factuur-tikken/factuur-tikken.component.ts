import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'rxjs-compat/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {FactuurModel} from '../../models/factuur.model';

@Component({
  selector: 'app-factuur-tikken',
  templateUrl: './factuur-tikken.component.html',
  styleUrls: ['./factuur-tikken.component.css']
})
export class FactuurTikkenComponent implements OnInit {
  @ViewChild('datum') datum: ElementRef;
  @ViewChild('factNummer') factNummer: ElementRef;
  @ViewChild('aflvrDatum') aflvrDatum: ElementRef;
  @ViewChild('omschrijving') omschrijving: ElementRef;
  @ViewChild('brutoKosten') brutoKosten: ElementRef;
  @ViewChild('btwPercentage') btwPercentage: ElementRef;
  @ViewChild('btwKosten') btwKosten: ElementRef;
  @ViewChild('nettoKosten') nettoKosten: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  voegToe() {
    console.log(this.nettoKosten.nativeElement.value);
    const factuurModel = new FactuurModel(this.datum.nativeElement.value, this.aflvrDatum.nativeElement.value,
      this.omschrijving.nativeElement.value, this.brutoKosten.nativeElement.value, this.btwPercentage.nativeElement.value,
      this.btwKosten.nativeElement.value, this.nettoKosten.nativeElement.value);
    console.log(factuurModel.nettoKosten);
  }

  download() {
    // niewe window openen zodat de download triggerd
    window.open('http://localhost:8080/api/factuur/download?id=' + this.factNummer.nativeElement.value +
      '&naam=' + 'FactuurNummer: ' + this.factNummer.nativeElement.value);
  }
}
