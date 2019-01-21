import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactenComponent} from './contacten.component';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {ContactWijzigenComponent} from './contact-wijzigen/contact-wijzigen.component';
import {ContactToevoegenComponent} from './contact-toevoegen/contact-toevoegen.component';

const contactenRoutes: Routes = [
    { path: 'contacten', component: ContactenComponent, canActivate: [AuthGuard], children: [
        { path: ':id/wijzigen', component: ContactWijzigenComponent },
        { path: 'toevoegen', component: ContactToevoegenComponent },
        { path: '', pathMatch: 'full', redirectTo: 'toevoegen' }
        ] }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(contactenRoutes)
  ],
  exports: [RouterModule]
})
export class ContactenRoutingModule {

}
