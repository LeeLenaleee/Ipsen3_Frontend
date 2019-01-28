import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BelastingComponent} from './belasting.component';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {FacturenSchermComponent} from './facturen-scherm/facturen-scherm.component';
import {KlantenoverzichtComponent} from './klantenoverzicht/klantenoverzicht.component';
import {KwartaalWeergavenComponent} from './kwartaal-weergaven/kwartaal-weergaven.component';
import {UitgavenoverzichtComponent} from './uitgavenoverzicht/uitgavenoverzicht.component';

const belastingRoutes: Routes = [
  { path: 'belasting', component: BelastingComponent, canActivate: [AuthGuard] },
  { path: 'facturen-overzicht', component: FacturenSchermComponent },
  { path: 'kwartaal', component: KwartaalWeergavenComponent },
  { path: 'uitgave', component: UitgavenoverzichtComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(belastingRoutes)
  ],
  exports: [RouterModule]
})
export class BelastingRoutingModule {

}
