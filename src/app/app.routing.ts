import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {OnkostenComponent} from "./onkosten/onkosten.component";
import {BelastingComponent} from "./belasting/belasting.component";
import {ContactenComponent} from "./contacten/contacten.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {InstellingenComponent} from "./instellingen/instellingen.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: MainMenuComponent },
    { path: 'onkosten', component: OnkostenComponent },
    { path: 'contacten', component: ContactenComponent },
    { path: 'belasting', component: BelastingComponent },
    { path: 'instellingen', component: InstellingenComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);