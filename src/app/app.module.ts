import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactenComponent } from './contacten/contacten.component';
import { BelastingComponent } from './belasting/belasting.component';
import { InstellingenComponent } from './instellingen/instellingen.component';
import { BriefTikkenComponent } from './contacten/brief-tikken/brief-tikken.component';
import { OfferteTikkenComponent } from './contacten/offerte-tikken/offerte-tikken.component';
import { FactuurTikkenComponent } from './contacten/factuur-tikken/factuur-tikken.component';
import { BelastingListComponent } from './belasting/belasting-list/belasting-list.component';
import { BelastingItemComponent } from './belasting/belasting-list/belasting-item/belasting-item.component';
import { KostenpostListComponent } from './instellingen/kostenpost-list/kostenpost-list.component';
import { KostenpostItemComponent } from './instellingen/kostenpost-list/kostenpost-item/kostenpost-item.component';
import { BtwWijzigenComponent } from './instellingen/btw-wijzigen/btw-wijzigen.component';
import { UitloggenComponent } from './inloggen-uitloggen/uitloggen/uitloggen.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactZoekenComponent } from './contacten/contact-zoeken/contact-zoeken.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './inloggen-uitloggen/inloggen/auth.guard';
import {AlertService} from './inloggen-uitloggen/inloggen/alert.service';
import {AuthenticationService} from './inloggen-uitloggen/inloggen/authentication.service';
import {ErrorInterceptor} from './inloggen-uitloggen/inloggen/error.interceptor';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './inloggen-uitloggen/inloggen';
import {OnkostenModule} from './onkosten/onkosten.module';
import {ContactenModule} from './contacten/contacten.module';
import {OfferteZoekenComponent} from './contacten/offerte-tikken/offerte-zoeken/offerte-zoeken.component';
import {OfferteListComponent} from './contacten/offerte-tikken/offerte-list/offerte-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BelastingComponent,
    InstellingenComponent,
    BriefTikkenComponent,
    OfferteTikkenComponent,
    FactuurTikkenComponent,
    BelastingListComponent,
    BelastingItemComponent,
    KostenpostListComponent,
    KostenpostItemComponent,
    BtwWijzigenComponent,
    LoginComponent,
    UitloggenComponent,
    FooterComponent,
    MainMenuComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    AlertComponent,
    OfferteZoekenComponent,
    OfferteListComponent
  ],
  imports: [
    BrowserModule,
    OnkostenModule,
    ContactenModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [
    AppComponent,
    AuthGuard,
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
