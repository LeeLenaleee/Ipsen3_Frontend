import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnkostenComponent} from './onkosten/onkosten.component';
import {ContactenComponent} from './contacten/contacten.component';
import {InstellingenComponent} from './instellingen/instellingen.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './inloggen-uitloggen/inloggen/auth.guard';
import {OnkostenResolver} from './shared/onkosten.resolver';
import {FactuurTikkenComponent} from './contacten/factuur-tikken/factuur-tikken.component';
import {OfferteTikkenComponent} from './contacten/offerte-tikken/offerte-tikken.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent, canActivate: [AuthGuard] },
  { path: 'instellingen', component: InstellingenComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'factuur', component: FactuurTikkenComponent, canActivate: [AuthGuard] },
  { path: 'offerte', component: OfferteTikkenComponent, canActivate: [AuthGuard]},
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
