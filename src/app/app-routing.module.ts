import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnkostenComponent} from './onkosten/onkosten.component';
import {ContactenComponent} from './contacten/contacten.component';
import {BelastingComponent} from './belasting/belasting.component';
import {InstellingenComponent} from './instellingen/instellingen.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ContactZoekenComponent} from './contacten/contact-zoeken/contact-zoeken.component';
import {ContactWijzigenComponent} from './contacten/contact-wijzigen/contact-wijzigen.component';
import {ContactToevoegenComponent} from './contacten/contact-toevoegen/contact-toevoegen.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'onkosten', component: OnkostenComponent },
  { path: 'contacten', component: ContactenComponent, children: [
      { path: 'zoeken', component: ContactZoekenComponent },
      { path: 'wijzigen', component: ContactWijzigenComponent },
      { path: 'toevoegen', component: ContactToevoegenComponent },
      { path: '', pathMatch: 'full', redirectTo: 'zoeken' }
    ] },
  { path: 'belasting', component: BelastingComponent },
  { path: 'instellingen', component: InstellingenComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
