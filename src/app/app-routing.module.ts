import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnkostenComponent} from './onkosten/onkosten.component';
import {ContactenComponent} from './contacten/contacten.component';
import {BelastingComponent} from './belasting/belasting.component';
import {InstellingenComponent} from './instellingen/instellingen.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './inloggen-uitloggen/inloggen/auth.guard';
import {ContactZoekenComponent} from './contacten/contact-zoeken/contact-zoeken.component';
import {ContactWijzigenComponent} from './contacten/contact-wijzigen/contact-wijzigen.component';
import {ContactToevoegenComponent} from './contacten/contact-toevoegen/contact-toevoegen.component';
import {OnkostenDetailComponent} from './onkosten/onkosten-detail/onkosten-detail.component';
import {OnkostenToevoegenComponent} from './onkosten/onkosten-toevoegen/onkosten-toevoegen.component';
import {OnkostenResolver} from './shared/onkosten.resolver';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent, canActivate: [AuthGuard] },
  { path: 'onkosten', component: OnkostenComponent, canActivate: [AuthGuard] },
  { path: 'contacten', component: ContactenComponent, canActivate: [AuthGuard] },
  { path: 'belasting', component: BelastingComponent, canActivate: [AuthGuard] },
  { path: 'instellingen', component: InstellingenComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: MainMenuComponent },
  { path: 'onkosten', component: OnkostenComponent },
  { path: 'contacten', component: ContactenComponent, children: [
      // { path: 'zoeken', component: ContactZoekenComponent },
      { path: ':id/wijzigen', component: ContactWijzigenComponent },
      { path: 'toevoegen', component: ContactToevoegenComponent },
      { path: '', pathMatch: 'full', redirectTo: 'toevoegen' }
    ] },
  { path: 'onkosten', component: OnkostenComponent, children: [
      { path: ':id', component: OnkostenDetailComponent,
        resolve: { onkost: OnkostenResolver }},
      { path: '', component: OnkostenToevoegenComponent }
    ] },

  { path: 'contacten', component: ContactenComponent },
  { path: 'belasting', component: BelastingComponent },
  { path: 'instellingen', component: InstellingenComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [OnkostenResolver]
})
export class AppRoutingModule {

}
