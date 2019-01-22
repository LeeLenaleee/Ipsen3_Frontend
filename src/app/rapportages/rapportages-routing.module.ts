import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RapportagesComponent} from './rapportages.component';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {BrievenComponent} from './brieven/brieven.component';
import {FacturenComponent} from './facturen/facturen.component';
import {OffertesComponent} from './offertes/offertes.component';

const rapportagesRoutes: Routes = [
  {path: 'rapportages', component: RapportagesComponent, canActivate: [AuthGuard] },
      { path: 'brieven', component: BrievenComponent },
      { path: 'facturen', component: FacturenComponent },
      { path: 'offertes', component: OffertesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(rapportagesRoutes)
  ],
  exports: [RouterModule]
})
export class RapportagesRoutingModule {}
