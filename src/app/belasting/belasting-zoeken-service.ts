import {OnInit} from '@angular/core';
import {Factuur} from './factuur.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../contacten/contact.model';

export class BelastingZoekenService implements OnInit {
  factuur: Factuur;
  contact: Contact;
  contactMatches: {id: number, naam: string, heeftBetaald: string, factuurDatum: string}[] = [];
  factuurMatches: {id: number, beschrijving: string, beginDatum: string, eindDatum: string}[] = [];
  headers_object = new HttpHeaders({
    'Authorization': 'basic ' + btoa('test@test.com:' +
      '9F86D081884C7D659A2FEAA0C55AD015A3BF4F1B2B0B822CD15D6C15B0F00A08')
  });
  httpOptions = {
    headers: this.headers_object
  };
  factuurZoekterm = 'http://localhost:8080/api/factuur?factuur='; // TODO AANPASSEN
  contactZoekterm = 'http://localhost:8080/api/contacten?bedrijf=';



  constructor(private http: HttpClient) { }

  showFactuurMatches(zoekterm: string) {
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
              eindDatum: factuur.eindDatum});
          }
        },
        (error) => console.log('error: ' + error) // als de string niet voorkomt
      );
  }

  getFactuurMatches(zoekterm: string) {
    console.log(this.httpOptions.headers.get('Authorization'));
    return this.http.get<any[]>(this.factuurZoekterm + zoekterm, this.httpOptions);
  }

  showContactMatches(zoekterm: string) {
    if (zoekterm === null) {
      zoekterm = '';
    }
    this.contactMatches = [];
    this.getContactMatches(zoekterm)
      .subscribe(
        (contacten: Contact[]) => {
          for (const contact of contacten) {
            this.contactMatches.push({id: contact.id,
              naam: contact.voornaam + contact.achternaam,
              heeftBetaald: 'Ja',
              factuurDatum: '2018'});
          }
        },
        (error) => console.log('error: ' + error) // als de string niet voorkomt
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



