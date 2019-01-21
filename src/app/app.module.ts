import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { OnkostenToevoegenComponent } from './onkosten/onkosten-toevoegen/onkosten-toevoegen.component';
import { OnkostenItemComponent } from './onkosten/onkosten-list/onkosten-item/onkosten-item.component';
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
import { OnkostenZoekenComponent } from './onkosten/onkosten-zoeken/onkosten-zoeken.component';
import { OnkostenListComponent } from './onkosten/onkosten-list/onkosten-list.component';
import { OnkostenDetailComponent } from './onkosten/onkosten-detail/onkosten-detail.component';
import {OnkostenService} from './onkosten/onkosten.service';
import {OnkostenResolver} from './shared/onkosten.resolver';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './inloggen-uitloggen/inloggen/auth.guard';
import {AlertService} from './inloggen-uitloggen/inloggen/alert.service';
import {AuthenticationService} from './inloggen-uitloggen/inloggen/authentication.service';
import {ErrorInterceptor} from './inloggen-uitloggen/inloggen/error.interceptor';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './inloggen-uitloggen/inloggen';
import { ContactenListComponent } from './contacten/contact-zoeken/contacten-list/contacten-list.component';
import { InstellingenService } from './instellingen/instellingen.Service';


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
    OnkostenToevoegenComponent,
    OnkostenItemComponent,
    BelastingListComponent,
    BelastingItemComponent,
    KostenpostListComponent,
    KostenpostItemComponent,
    BtwWijzigenComponent,
    LoginComponent,
    UitloggenComponent,
    ContactZoekenComponent,
    UitloggenComponent,
    FooterComponent,
    MainMenuComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    OnkostenZoekenComponent,
    OnkostenListComponent,
    OnkostenDetailComponent,
    AlertComponent,
    ContactenListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppComponent,
    AuthGuard,
    AlertService,
    AuthenticationService,
    OnkostenService,
    InstellingenService,
    OnkostenResolver,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
