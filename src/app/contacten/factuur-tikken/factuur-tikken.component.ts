import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { DatePipe } from '@angular/common';
import 'rxjs-compat/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
  @ViewChild('id') id: ElementRef;
  headers_object = new HttpHeaders({ 'Authorization': 'basic ' + btoa('test@test.com:9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B' +
      '2B0B822CD15D6C15B0F00A08')});
  httpOptions = {
    headers: this.headers_object
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  zoek() {
    this.http.get<FactuurModel>('http://localhost:8080/api/factuur/' + this.id.nativeElement.value, this.httpOptions).subscribe(
      (factuur: FactuurModel) => {
          this.datum.nativeElement.value = this.fromServerDateTransForm(factuur.datum);
          this.aflvrDatum.nativeElement.value = this.fromServerDateTransForm(factuur.afleverDatum);
          this.omschrijving.nativeElement.value = factuur.factuurOmschrijving;
          this.brutoKosten.nativeElement.value = factuur.brutoKosten; this.btwPercentage.nativeElement.value = factuur.btwPercentage;
          this.btwKosten.nativeElement.value = factuur.btwKosten; this.nettoKosten.nativeElement.value = factuur.nettoKosten;
          this.factNummer.nativeElement.value = factuur.id;
      }
    );
  }

  voegToe() {
    const factuurModel = new FactuurModel(this.toServerDateTransform(this.datum.nativeElement.value),
      this.toServerDateTransform(this.aflvrDatum.nativeElement.value),
      this.omschrijving.nativeElement.value, this.brutoKosten.nativeElement.value, this.btwPercentage.nativeElement.value,
      this.btwKosten.nativeElement.value, this.nettoKosten.nativeElement.value);
    console.log(factuurModel.nettoKosten);
    this.http.post<FactuurModel>('http://localhost:8080/api/factuur/', factuurModel, this.httpOptions).subscribe(
      () => {
        alert('Factuur toegevoegd');
      }
    );
  }

  wijzig() {
    const factuurModel = new FactuurModel(this.datum.nativeElement.value, this.aflvrDatum.nativeElement.value,
      this.omschrijving.nativeElement.value, this.brutoKosten.nativeElement.value, this.btwPercentage.nativeElement.value,
      this.btwKosten.nativeElement.value, this.nettoKosten.nativeElement.value);
    console.log(factuurModel.id);
    this.http.put<FactuurModel>('http://localhost:8080/api/factuur/13', factuurModel);
  }

  maakFactuur () {
    const factuurModel = new FactuurModel(this.datum.nativeElement.value, this.aflvrDatum.nativeElement.value,
      this.omschrijving.nativeElement.value, this.brutoKosten.nativeElement.value, this.btwPercentage.nativeElement.value,
      this.btwKosten.nativeElement.value, this.nettoKosten.nativeElement.value);
    return factuurModel;
  }

  download() {
    // niewe window openen zodat de download triggerd
    /*window.open('http://localhost:8080/api/factuur/download?id=' + this.factNummer.nativeElement.value +
      '&naam=' + 'FactuurNummer: ' + this.factNummer.nativeElement.value);*/
    const x = this.http.get<FactuurModel>('http://localhost:8080/api/factuur/download?id=' + this.factNummer.nativeElement.value +
      '&naam=' + 'FactuurNummer: ' + this.factNummer.nativeElement.value, this.httpOptions);
    const url = window.URL.createObjectURL(x);
    window.open(url);
    // if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
    //   alert( 'Please disable your Pop-up blocker and try again.');
    // }
  }

  toServerDateTransform(date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'dd-MM-yyyy');
    return dateSendingToServer;
  }

  fromServerDateTransForm(date) {
    const parts = date.split('-');
    const x = parts[2] + '-' + parts[1] + '-' + parts[0];
    return x;
  }
}
