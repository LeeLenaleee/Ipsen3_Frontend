// TODO: SCRAP THIS CLASS. Use Models/Onkost instead!

export class Onkost {
  public id: number;
  public kostenpost: string;
  public beschrijving: string;
  public bruto: number;
  public netto: number;
  public datum: string;

  constructor(id: number, beschrijving: string, kostenpost: string, datum: string, bruto: number, netto: number) {
    this.id = id;
    this.beschrijving = beschrijving;
    this.kostenpost = kostenpost;
    this.bruto = bruto;
    this.netto = netto;
    this.datum = datum;
  }
}
