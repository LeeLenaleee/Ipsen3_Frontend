export class FactuurModel {
  public id: number;
  public datum: string;
  public afleverDatum: string;
  public factuurOmschrijving: string;
  public brutoKosten: number;
  public btwPercentage: number;
  public btwKosten: number;
  public nettoKosten: number;

  constructor(id, datum, afleverDatum, factuurOmschrijving, brutoKosten, btwPercentage, btwKosten, nettoKosten) {
    this.id = id;
    this.datum = datum;
    this.afleverDatum = afleverDatum;
    this.factuurOmschrijving = factuurOmschrijving;
    this.brutoKosten = brutoKosten;
    this.btwPercentage = btwPercentage;
    this.btwKosten = brutoKosten;
    this.nettoKosten = nettoKosten;
  }
}
