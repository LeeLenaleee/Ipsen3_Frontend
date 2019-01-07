export class Factuur {
  public id: number;
  public naam: string;
  public factuurDatum: string;

  constructor(id: number, naam: string, datum: string) {
    this.id = id;
    this.naam = naam;
    this.factuurDatum = datum;
  }
}
