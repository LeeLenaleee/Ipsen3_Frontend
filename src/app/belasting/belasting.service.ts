import {Injectable, OnInit} from '@angular/core';
import {Factuur} from './factuur.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Onkost} from './onkost.model';
import {Kostenpost} from './kostenpost.model';
import {Contact} from '../models/contact.model';
import { ApiService } from '../shared/api.service';


@Injectable()
export class BelastingService implements OnInit {
  factuur: Factuur;
  factuurMatches: {id: number, beschrijving: string, datum: string, afleverDatum: string, bruto: number, netto: number}[] = [];
  uitgaveMatches: {id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number}[] = [];
  kostenposten: {naam: string}[] = [];

  constructor(private apiService: ApiService) { }

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
              beschrijving: factuur['factuurOmschrijving'],
              datum: factuur['datum'],
              afleverDatum: factuur['afleverDatum'],
              bruto: factuur['brutoKosten'],
              netto: factuur['nettoKosten']});
          }
        }
      );
  }

  getFactuurMatches(zoekterm: string) {
    return this.apiService.get<any[]>('/factuur/zoek?omschrijving=' + zoekterm);
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
        }
      );
  }

  getUitgaveMatches(zoekterm: string) {
    return this.apiService.get<any[]>('/onkosten/zoek?omschrijving=' + zoekterm);
  }

  updateKostenposten() {
    this.apiService.get<any[]>('/kostenpost').subscribe(
      (kostenposten: Kostenpost[]) => {
        for (const kostenpost of kostenposten) {
          this.kostenposten.push({naam: kostenpost['kostenpost']});
        }
      }
    );
  }

  ngOnInit(): void {
  }
}
