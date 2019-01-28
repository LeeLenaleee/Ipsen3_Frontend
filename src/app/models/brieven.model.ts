export class Brieven {
  id: number;
  datum: string;
  correspondentie: number;
  betreft: string;
  adressering: string;
  verhaal: string;


  constructor(id: number, datum: string, correspondentie: number, betreft: string, adressering: string, verhaal: string) {
    this.id = id;
    this.datum = datum;
    this.correspondentie = correspondentie;
    this.betreft = betreft;
    this.adressering = adressering;
    this.verhaal = verhaal;
  }
}
