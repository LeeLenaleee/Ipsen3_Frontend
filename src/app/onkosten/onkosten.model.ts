export class Onkosten {
  id: number;
  bedrijf: string;
  datum: string;
  onkostenSoort: string;
  omschrijving: string;
  brutoPrijs: number;
  brutoKost: number;
  brutoPercentage: number;
  nettoPrijs: number;

  constructor(id: number, bedrijf: string, datum: string, onkostenSoort: string, omschrijving: string,
              brutoPrijs: number, brutoKost: number, brutoPercentage: number,
              nettoPrijs: number) {
    this.id = id;
    this.bedrijf = bedrijf;
    this.datum = datum;
    this.onkostenSoort = onkostenSoort;
    this.omschrijving = omschrijving;
    this.brutoPrijs = brutoPrijs;
    this.brutoKost = brutoKost;
    this.brutoPercentage = brutoPercentage;
    this.nettoPrijs = nettoPrijs;
  }
}
