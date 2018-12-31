export class Contact {
  public id: number;
  public contact_voornaam: string;
  public contact_achternaam: string;
  public contact_bedrijf: string;
  public contact_straatnaam: string;
  public contact_postcode: string;
  public contact_plaats: string;
  public contact_land: string;
  // public telefoon: number[];
  // public email: string[];
  public contact_relatie: string;
  public contact_website: string;


  constructor(id: number, voornaam: string, achternaam: string, bedrijf: string,
              straatnaam: string, postcode: string, woonplaats: string, land: string,
              // telefoon: number[], email: string[],
              relatie: string, website: string) {
    this.id = id;
    this.contact_voornaam = voornaam;
    this.contact_achternaam = achternaam;
    this.contact_bedrijf = bedrijf;
    this.contact_straatnaam = straatnaam;
    this.contact_postcode = postcode;
    this.contact_plaats = woonplaats;
    this.contact_land = land;
    // this.telefoon = telefoon;
    // this.email = email;
    this.contact_relatie = relatie;
    this.contact_website = website;
  }
}
