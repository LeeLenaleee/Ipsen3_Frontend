export class Contact {
  public id: number;
  public voornaam: string;
  public achternaam: string;
  public bedrijf: string;
  public straatnaam: string;
  public postcode: string;
  public woonplaats: string;
  public land: string;
  public telefoon: number[];
  public email: string[];
  public relatie: string;
  public website: string;


  constructor(id: number, voornaam: string, achternaam: string, bedrijf: string,
              straatnaam: string, postcode: string, woonplaats: string, land: string,
              telefoon: number[], email: string[], relatie: string, website: string) {
    this.id = id;
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.bedrijf = bedrijf;
    this.straatnaam = straatnaam;
    this.postcode = postcode;
    this.woonplaats = woonplaats;
    this.land = land;
    this.telefoon = telefoon;
    this.email = email;
    this.relatie = relatie;
    this.website = website;
  }
}
