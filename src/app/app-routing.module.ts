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

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent, canActivate: [AuthGuard] },
  { path: 'onkosten', component: OnkostenComponent, canActivate: [AuthGuard] },
  { path: 'contacten', component: ContactenComponent, canActivate: [AuthGuard] },
  { path: 'belasting', component: BelastingComponent, canActivate: [AuthGuard] },
  { path: 'instellingen', component: InstellingenComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
