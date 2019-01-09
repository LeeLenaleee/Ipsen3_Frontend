export class Contact {
  public id: number;
  public contactVoornaam: string;
  public contactAchternaam: string;
  public contactBedrijf: string;
  public contactStraatnaam: string;
  public contactPostcode: string;
  public contactPlaats: string;
  public contactLand: string;
  // public telefoon: number[];
  // public email: string[];
  public contactRelatie: string;
  public contactWebsite: string;


  constructor(id: number, voornaam: string, achternaam: string, bedrijf: string,
              straatnaam: string, postcode: string, woonplaats: string, land: string,
              // telefoon: number[], email: string[],
              relatie: string, website: string) {
    this.id = id;
    this.contactVoornaam = voornaam;
    this.contactAchternaam = achternaam;
    this.contactBedrijf = bedrijf;
    this.contactStraatnaam = straatnaam;
    this.contactPostcode = postcode;
    this.contactPlaats = woonplaats;
    this.contactLand = land;
    // this.telefoon = telefoon;
    // this.email = email;
    this.contactRelatie = relatie;
    this.contactWebsite = website;
  }
}
