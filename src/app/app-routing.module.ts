import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnkostenComponent} from './onkosten/onkosten.component';
import {ContactenComponent} from './contacten/contacten.component';
import {BelastingComponent} from './belasting/belasting.component';
import {InstellingenComponent} from './instellingen/instellingen.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FacturenSchermComponent} from './belasting/facturen-scherm/facturen-scherm.component';
import {UitgavenoverzichtComponent} from './belasting/uitgavenoverzicht/uitgavenoverzicht.component';
import {KwartaalWeergavenComponent} from './belasting/kwartaal-weergaven/kwartaal-weergaven.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'onkosten', component: OnkostenComponent },
  { path: 'contacten', component: ContactenComponent },
  { path: 'belasting', component: BelastingComponent },
  { path: 'instellingen', component: InstellingenComponent },
  { path: 'facturen', component: FacturenSchermComponent},
  { path: 'uitgaven', component: UitgavenoverzichtComponent},
  { path: 'kwartaal', component: KwartaalWeergavenComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
