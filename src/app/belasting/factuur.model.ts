export class Factuur {
  public id: number;
  public beschrijving: string;
  public beginDatum: string;
  public eindDatum: string;
  public bruto: number;
  public netto: number;

  constructor(id: number, beschrijving: string, beginDatum: string, eindDatum: string, bruto: number, netto: number) {
    this.id = id;
    this.beschrijving = beschrijving;
    this.beginDatum = beginDatum;
    this.eindDatum = eindDatum;
    this.bruto = bruto;
    this.netto = netto;
  }
}
