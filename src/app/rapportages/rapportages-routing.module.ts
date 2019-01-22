import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RapportagesComponent} from './rapportages.component';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {BrievenComponent} from './brieven/brieven.component';
import {FacturenComponent} from './facturen/facturen.component';
import {OffertesComponent} from './offertes/offertes.component';
import {OffertesDetailComponent} from './offertes/offertes-detail/offertes-detail.component';
import {OffertesToevoegenComponent} from './offertes/offertes-toevoegen/offertes-toevoegen.component';

const rapportagesRoutes: Routes = [
  {path: 'rapportages', component: RapportagesComponent, canActivate: [AuthGuard] },
      { path: 'brieven', component: BrievenComponent },
      { path: 'facturen', component: FacturenComponent },
      { path: 'offertes', component: OffertesComponent, children: [
          { path: '', component: OffertesToevoegenComponent },
          { path: ':id', component: OffertesDetailComponent},
        ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(rapportagesRoutes)
  ],
  exports: [RouterModule]
})
export class RapportagesRoutingModule {}
