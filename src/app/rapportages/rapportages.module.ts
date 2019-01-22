import {NgModule} from '@angular/core';
import {RapportagesComponent} from './rapportages.component';
import {BrievenComponent} from './brieven/brieven.component';
import {FacturenComponent} from './facturen/facturen.component';
import {FacturenDetailsComponent} from './facturen/facturen-details/facturen-details.component';
import {OffertesComponent} from './offertes/offertes.component';
import {OffertesListComponent} from './offertes/offertes-list/offertes-list.component';
import {OffertesZoekenComponent} from './offertes/offertes-zoeken/offertes-zoeken.component';
import {RapportagesRoutingModule} from './rapportages-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RapportagesComponent,
    BrievenComponent,
    FacturenComponent,
    FacturenDetailsComponent,
    OffertesComponent,
    OffertesListComponent,
    OffertesZoekenComponent
  ],
  imports: [
    RapportagesRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [

  ]
})
export class RapportagesModule {}
