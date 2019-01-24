import {Injectable, OnInit} from '@angular/core';
import {Factuur} from './factuur.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../contacten/contact.model';
import {Onkost} from './onkost.model';
import {Kostenpost} from './kostenpost.model';


@Injectable()
export class BelastingZoekenService implements OnInit {
  factuur: Factuur;
  contact: Contact;
  contactMatches: {id: number, bedrijf: string, naam: string, heeftBetaald: string, factuurDatum: string}[] = [];
  factuurMatches: {id: number, beschrijving: string, beginDatum: string, eindDatum: string, bruto: number, netto: number}[] = [];
  uitgaveMatches: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[] = [];
  kostenposten: {naam: string}[] = [];
  headers_object = new HttpHeaders({
    'Authorization': 'basic ' + btoa('test@test.com:' +
      '9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')
  });
  httpOptions = {
    headers: this.headers_object
  };
  factuurZoekterm = 'http://localhost:8080/api/factuur/omschrijving?omschrijving=';
  contactZoekterm = 'http://localhost:8080/api/contacten/bedrijf?bedrijf=';
  uitgaveZoekterm = 'http://localhost:8080/api/onkosten/zoek?omschrijving=';
  kostenpostZoekterm = 'http://localhost:8080/api/kostenpost';

  constructor(private http: HttpClient) { }

  updateFactuurMatches(zoekterm: string) {
    if (zoekterm === null) {
      zoekterm = '';
    }
    this.factuurMatches = [];
    this.getFactuurMatches(zoekterm)
      .subscribe(
        (facturen: Factuur[]) => {
          for (const factuur of facturen) {
            this.factuurMatches.push({id: factuur.id,
              beschrijving: factuur.beschrijving,
              beginDatum: factuur.beginDatum,
              eindDatum: factuur.eindDatum,
              bruto: factuur.bruto,
              netto: factuur.netto});
          }
        },
        (error) => console.log('error: ' + error)
      );
  }

  getFactuurMatches(zoekterm: string) {
    console.log(this.httpOptions.headers.get('Authorization'));
    return this.http.get<any[]>(this.factuurZoekterm + zoekterm, this.httpOptions);
  }

  updateContactMatches(zoekterm: string) {
    if (zoekterm === null) {
      zoekterm = '';
    }
    this.contactMatches = [];
    this.getContactMatches(zoekterm)
      .subscribe(
        (contacten: Contact[]) => {
          for (const contact of contacten) {
            this.contactMatches.push({id: contact.id,
              bedrijf: contact['contactBedrijf'],
              naam: contact['contactVoornaam'] + ' ' + contact['contactAchternaam'],
              heeftBetaald: 'Nee',
              factuurDatum: '2018'});
          }
        },
        (error) => console.log('error: ' + error)
      );
  }

  getContactMatches(zoekterm: string) {
    console.log(this.httpOptions.headers.get('Authorization'));
    return this.http.get<any[]>(this.contactZoekterm + zoekterm, this.httpOptions);
  }

  updateUitgaveMatches(zoekterm: string) {
    if (zoekterm === null) {
      zoekterm = '';
    }
    this.uitgaveMatches = [];
    this.getUitgaveMatches(zoekterm)
      .subscribe(
        (uitgaven: Onkost[]) => {
          for (const uitgave of uitgaven) {
            this.uitgaveMatches.push({id: uitgave.id,
              beschrijving: uitgave['onkostenOmschrijving'],
              kostenpost: uitgave['onkostenKostenpost'],
              datum: uitgave['onkostenDatum'],
              bruto: uitgave['onkostenBrutoKosten'],
              netto: uitgave['onkostenNettoKosten']});
          }
        },
        (error) => console.log('error: ' + error)
      );
  }

  getUitgaveMatches(zoekterm: string) {
    console.log(this.httpOptions.headers.get('Authorization'));
    return this.http.get<any[]>(this.uitgaveZoekterm + zoekterm, this.httpOptions);
  }

  getKostenposten() {
    this.http.get<any[]>(this.kostenpostZoekterm, this.httpOptions)
      .subscribe(
        (kostenposten: Kostenpost[]) => {
          for (const kostenpost of kostenposten) {
            console.log(kostenpost);
            this.kostenposten.push({naam: kostenpost['kostenpost']});
          }
        },
        (error) => console.log('error: ' + error)
      );
  }


  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
  }


}



