import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BelastingComponent } from './belasting/belasting.component';
import { InstellingenComponent } from './instellingen/instellingen.component';
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

import {OnkostenModule} from './onkosten/onkosten.module';
import {ContactenModule} from './contacten/contacten.module';
import {RapportagesModule} from './rapportages/rapportages.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BelastingComponent,
    InstellingenComponent,
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
  ],
  imports: [
    BrowserModule,
    OnkostenModule,
    ContactenModule,
    RapportagesModule,
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
    InstellingenService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
