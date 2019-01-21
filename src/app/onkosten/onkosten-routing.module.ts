import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnkostenComponent} from './onkosten.component';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {OnkostenDetailComponent} from './onkosten-detail/onkosten-detail.component';
import {OnkostenResolver} from '../shared/onkosten.resolver';
import {OnkostenToevoegenComponent} from './onkosten-toevoegen/onkosten-toevoegen.component';

const onkostenRoutes: Routes = [
  { path: 'onkosten', component: OnkostenComponent, canActivate: [AuthGuard], children: [
      { path: '', component: OnkostenToevoegenComponent },
      { path: ':id', component: OnkostenDetailComponent,
        resolve: { onkost: OnkostenResolver }},
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(onkostenRoutes)
  ],
  exports: [RouterModule]
})
export class OnkostenRoutingModule {}
