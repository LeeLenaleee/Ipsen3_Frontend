export class Onkosten {
  id: number;
  bedrijf: string;
  datum: Date;
  omschrijving: string;
  brutoPrijs: number;
  brutoKost: number;
  brutoPercentage: number;
  nettoPrijs: number;

  constructor(id: number, bedrijf: string, datum: Date, omschrijving: string,
              brutoPrijs: number, brutoKost: number, brutoPercentage: number,
              nettoPrijs: number) {
    this.id = id;
    this.bedrijf = bedrijf;
    this.datum = datum;
    this.omschrijving = omschrijving;
    this.brutoPrijs = brutoPrijs;
    this.brutoKost = brutoKost;
    this.brutoPercentage = brutoPercentage;
    this.nettoPrijs = nettoPrijs;
  }
}