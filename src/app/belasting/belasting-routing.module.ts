import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {FacturenSchermComponent} from './facturen-scherm/facturen-scherm.component';
import {KwartaalWeergavenComponent} from './kwartaal-weergaven/kwartaal-weergaven.component';
import {UitgavenoverzichtComponent} from './uitgavenoverzicht/uitgavenoverzicht.component';

const belastingRoutes: Routes = [
  { path: 'facturen-overzicht', component: FacturenSchermComponent, canActivate: [AuthGuard] },
  { path: 'uitgave-overzicht', component: UitgavenoverzichtComponent, canActivate: [AuthGuard] },
  { path: 'kwartaal-overzicht', component: KwartaalWeergavenComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forChild(belastingRoutes)
  ],
  exports: [RouterModule]
})
export class BelastingRoutingModule {

}
