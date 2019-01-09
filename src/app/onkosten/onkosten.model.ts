export class Onkosten {
  id: number;
  onkostenBedrijf: string;
  onkostenDatum: string; // dit moet iets van een Date worden maar voor nu even string gemaakt om het werkende te krijgen
  onkostenKostenpost: string;
  onkostenOmschrijving: string;
  onkostenBrutoKosten: number;
  onkostenBtwPercentage: number;
  onkostenBtwKosten: number;
  onkostenNettoKosten: number;


  constructor(id: number, onkostenBedrijf: string, onkostenDatum: string, onkostenKostenpost: string, onkostenOmschrijving: string, onkostenBrutoKosten: number, onkostenBtwPercentage: number, onkostenBtwKosten: number, onkostenNettoKosten: number) {
    this.id = id;
    this.onkostenBedrijf = onkostenBedrijf;
    this.onkostenDatum = onkostenDatum;
    this.onkostenKostenpost = onkostenKostenpost;
    this.onkostenOmschrijving = onkostenOmschrijving;
    this.onkostenBrutoKosten = onkostenBrutoKosten;
    this.onkostenBtwPercentage = onkostenBtwPercentage;
    this.onkostenBtwKosten = onkostenBtwKosten;
    this.onkostenNettoKosten = onkostenNettoKosten;
  }
}
