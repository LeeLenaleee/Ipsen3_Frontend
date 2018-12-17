import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
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
import { UitloggenComponent } from './inloggen-uitloggen/uitloggen/uitloggen.component';
import {FooterComponent} from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactZoekenComponent } from './contacten/contact-zoeken/contact-zoeken.component';
import {routing} from "./app.routing";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
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
        UitloggenComponent,
        ContactZoekenComponent,
        UitloggenComponent,
        FooterComponent,
        MainMenuComponent,
        ErrorPageComponent,
        PageNotFoundComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }