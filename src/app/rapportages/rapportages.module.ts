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
import {OfferteItemComponent} from './offertes/offertes-list/offerte-item/offerte-item.component';
import {OffertesService} from './offertes/offertes.service';
import { OffertesDetailComponent } from './offertes/offertes-detail/offertes-detail.component';
import { OffertesToevoegenComponent } from './offertes/offertes-toevoegen/offertes-toevoegen.component';

@NgModule({
  declarations: [
    RapportagesComponent,
    BrievenComponent,
    FacturenComponent,
    FacturenDetailsComponent,
    OffertesComponent,
    OffertesListComponent,
    OffertesZoekenComponent,
    OfferteItemComponent,
    OffertesDetailComponent,
    OffertesToevoegenComponent,
  ],
  imports: [
    RapportagesRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    OffertesService
  ]
})
export class RapportagesModule {}
