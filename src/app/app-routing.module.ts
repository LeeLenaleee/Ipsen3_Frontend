import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnkostenComponent} from './onkosten/onkosten.component';
import {ContactenComponent} from './contacten/contacten.component';
import {BelastingComponent} from './belasting/belasting.component';
import {InstellingenComponent} from './instellingen/instellingen.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {OnkostenDetailComponent} from './onkosten/onkosten-detail/onkosten-detail.component';
import {OnkostenToevoegenComponent} from './onkosten/onkosten-toevoegen/onkosten-toevoegen.component';
import {OnkostenResolver} from './shared/onkosten.resolver';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent },
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
