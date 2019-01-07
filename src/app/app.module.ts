import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactenComponent } from './contacten/contacten.component';
import { OnkostenComponent } from './onkosten/onkosten.component';
import { BelastingComponent } from './belasting/belasting.component';
import { InstellingenComponent } from './instellingen/instellingen.component';
import { BriefTikkenComponent } from './contacten/brief-tikken/brief-tikken.component';
import { OfferteTikkenComponent } from './contacten/offerte-tikken/offerte-tikken.component';
import { FactuurTikkenComponent } from './contacten/factuur-tikken/factuur-tikken.component';
import { ContactToevoegenComponent } from './contacten/contact-toevoegen/contact-toevoegen.component';
import { ContactWijzigenComponent } from './contacten/contact-wijzigen/contact-wijzigen.component';
import { ContactItemComponent } from './contacten/contact-item/contact-item.component';
import { OnkostenToevoegenComponent } from './onkosten/onkosten-toevoegen/onkosten-toevoegen.component';
import { OnkostenItemComponent } from './onkosten/onkosten-item/onkosten-item.component';
import { BelastingListComponent } from './belasting/belasting-list/belasting-list.component';
import { BelastingItemComponent } from './belasting/belasting-list/belasting-item/belasting-item.component';
import { KostenpostListComponent } from './instellingen/kostenpost-list/kostenpost-list.component';
import { KostenpostItemComponent } from './instellingen/kostenpost-list/kostenpost-item/kostenpost-item.component';
import { BtwWijzigenComponent } from './instellingen/btw-wijzigen/btw-wijzigen.component';
import { InloggenComponent } from './inloggen-uitloggen/inloggen/inloggen.component';
import { UitloggenComponent } from './inloggen-uitloggen/uitloggen/uitloggen.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactZoekenComponent } from './contacten/contact-zoeken/contact-zoeken.component';
import { HttpClientModule } from '@angular/common/http';
import { ToggleSwitchComponent } from './belasting/toggle-switch/toggle-switch.component';
import { FacturenSchermComponent } from './belasting/facturen-scherm/facturen-scherm.component';
import { UitgavenoverzichtComponent } from './belasting/uitgavenoverzicht/uitgavenoverzicht.component';
import { KwartaalWeergavenComponent } from './belasting/kwartaal-weergaven/kwartaal-weergaven.component';
import { KlantenoverzichtComponent } from './belasting/klantenoverzicht/klantenoverzicht.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactenComponent,
    OnkostenComponent,
    BelastingComponent,
    InstellingenComponent,
    BriefTikkenComponent,
    OfferteTikkenComponent,
    FactuurTikkenComponent,
    ContactToevoegenComponent,
    ContactWijzigenComponent,
    ContactItemComponent,
    OnkostenToevoegenComponent,
    OnkostenItemComponent,
    BelastingListComponent,
    BelastingItemComponent,
    KostenpostListComponent,
    KostenpostItemComponent,
    BtwWijzigenComponent,
    InloggenComponent,
    UitloggenComponent,
    ContactZoekenComponent,
    UitloggenComponent,
    FooterComponent,
    MainMenuComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    ToggleSwitchComponent,
    FacturenSchermComponent,
    UitgavenoverzichtComponent,
    KwartaalWeergavenComponent,
    KlantenoverzichtComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
