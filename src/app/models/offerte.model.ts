export class OfferteModel {
  id: number;
  datum: string;
  correspondentienummer: number;
  naamklant: string;
  uren: number;
  btwPercentage: number;
  kostenBruto: number;
  kostenBTW: number;
  kostenNetto: number;


  constructor(id: number, datum: string, correspondentienummer: number, naamklant: string, uren: number, btwPercentage: number,
              kostenBruto: number, kostenBTW: number, kostenNetto: number) {
    this.id = id;
    this.datum = datum;
    this.correspondentienummer = correspondentienummer;
    this.naamklant = naamklant;
    this.uren = uren;
    this.btwPercentage = btwPercentage;
    this.kostenBruto = kostenBruto;
    this.kostenBTW = kostenBTW;
    this.kostenNetto = kostenNetto;
  }
}
