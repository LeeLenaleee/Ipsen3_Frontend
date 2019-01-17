export class FactuurModel {
  datum: string;
  afleverDatum: string;
  factuurOmschrijving: string;
  brutoKosten: number;
  btwPercentage: number;
  btwKosten: number;
  nettoKosten: number;

  constructor(datum, afleverDatum, factuurOmschrijving, brutoKosten, btwPercentage, btwKosten, nettoKosten) {
    this.datum = datum;
    this.afleverDatum = afleverDatum;
    this.factuurOmschrijving = factuurOmschrijving;
    this.brutoKosten = brutoKosten;
    this.btwPercentage = btwPercentage;
    this.btwKosten = brutoKosten;
    this.nettoKosten = nettoKosten;
  }
}
