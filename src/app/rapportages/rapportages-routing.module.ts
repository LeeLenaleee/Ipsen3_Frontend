import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RapportagesComponent} from './rapportages.component';
import {AuthGuard} from '../inloggen-uitloggen/inloggen/auth.guard';
import {BrievenComponent} from './brieven/brieven.component';
import {FacturenComponent} from './facturen/facturen.component';
import {OffertesComponent} from './offertes/offertes.component';
import {OffertesDetailComponent} from './offertes/offertes-detail/offertes-detail.component';
import {OffertesToevoegenComponent} from './offertes/offertes-toevoegen/offertes-toevoegen.component';
import {OfferteResolver} from '../shared/offerte.resolver';
import {FacturenDetailsComponent} from './facturen/facturen-detail/facturen-details.component';
import {FacturenToevoegenComponent} from './facturen/facturen-toevoegen/facturen-toevoegen.component';
import {FactuurResolver} from '../shared/factuur.resolver';

const rapportagesRoutes: Routes = [
  {path: 'rapportages', component: RapportagesComponent, canActivate: [AuthGuard] },
      { path: 'brieven', component: BrievenComponent, canActivate: [AuthGuard] },
      { path: 'facturen', component: FacturenComponent, canActivate: [AuthGuard], children: [
          { path: '', component: FacturenToevoegenComponent },
          { path: ':id', component: FacturenDetailsComponent,
          resolve: {factuur: FactuurResolver}}
        ] },
      { path: 'offertes', component: OffertesComponent, canActivate: [AuthGuard], children: [
          { path: '', component: OffertesToevoegenComponent },
          { path: ':id', component: OffertesDetailComponent,
            resolve: { offerte: OfferteResolver }},
        ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(rapportagesRoutes)
  ],
  exports: [RouterModule]
})
export class RapportagesRoutingModule {}
