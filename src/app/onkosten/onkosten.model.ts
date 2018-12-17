export class Onkosten {
  id: number;
  bedrijf: string;
  datum: string; // dit moet iets van een Date worden maar voor nu even string gemaakt om het werkende te krijgen
  kostenpost: string;
  omschrijving: string;
  brutoPrijs: number;
  brutoKost: number;
  brutoPercentage: number;
  nettoPrijs: number;

  constructor(id: number, bedrijf: string, datum: string, kostenpost: string, omschrijving: string,
              brutoPrijs: number, brutoKost: number, brutoPercentage: number,
              nettoPrijs: number) {
    this.id = id;
    this.bedrijf = bedrijf;
    this.datum = datum;
    this.kostenpost = kostenpost;
    this.omschrijving = omschrijving;
    this.brutoPrijs = brutoPrijs;
    this.brutoKost = brutoKost;
    this.brutoPercentage = brutoPercentage;
    this.nettoPrijs = nettoPrijs;
  }
}
