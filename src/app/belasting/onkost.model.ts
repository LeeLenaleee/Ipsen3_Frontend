export class Onkost {
  public beschrijving: string;
  public bruto: number;
  public netto: number;
  public eindDatum: string;

  constructor(beschrijving: string, bruto: number, netto: number, datum: string) {
    this.beschrijving = beschrijving;
    this.bruto = bruto;
    this.netto = netto;
    this.eindDatum = datum;
  }
}
