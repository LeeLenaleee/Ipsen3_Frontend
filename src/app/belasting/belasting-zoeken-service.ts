import {Injectable, OnInit} from '@angular/core';
import {Factuur} from './factuur.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../contacten/contact.model';


@Injectable()
export class BelastingZoekenService implements OnInit {
  factuur: Factuur;
  contact: Contact;
  contactMatches: {id: number, bedrijf: string, naam: string, heeftBetaald: string, factuurDatum: string}[] = [];
  factuurMatches: {id: number, beschrijving: string, beginDatum: string, eindDatum: string, bruto: number, netto: number}[] = [];
  headers_object = new HttpHeaders({
    'Authorization': 'basic ' + btoa('test@test.com:' +
      '9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')
  });
  httpOptions = {
    headers: this.headers_object
  };
  factuurZoekterm = 'http://localhost:8080/api/factuur/omschrijving?omschrijving=';
  contactZoekterm = 'http://localhost:8080/api/contacten/bedrijf?bedrijf=';

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


  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
  }


}



