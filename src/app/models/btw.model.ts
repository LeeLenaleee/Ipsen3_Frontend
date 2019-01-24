export class Btw {

  id: number;
  btwPercentageHoog: number;
  btwPercentageLaag: number;


  constructor(id: number, btwPercentageHoog: number, btwPercentageLaag: number) {
    this.id = id;
    this.btwPercentageHoog = btwPercentageHoog;
    this.btwPercentageLaag = btwPercentageLaag;
  }
}
