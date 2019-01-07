export class Klant {
  public id: number;
  public naam: string;
  public heeftBetaald: boolean;
  public factuurDatum: string; // De factuurdatum hoort waarschijnlijk niet in deze class. TODO: Verplaatsen

  constructor(id: number, naam: string, heeftBetaald: boolean, datum: string) {
    this.id = id;
    this.naam = naam;
    this.heeftBetaald = heeftBetaald;
    this.factuurDatum = datum;
  }
}
