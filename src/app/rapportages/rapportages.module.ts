import {NgModule} from '@angular/core';
import {RapportagesComponent} from './rapportages.component';
import {BrievenComponent} from './brieven/brieven.component';
import {FacturenComponent} from './facturen/facturen.component';
import {FacturenDetailsComponent} from './facturen/facturen-detail/facturen-details.component';
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
import {OfferteResolver} from '../shared/offerte.resolver';
import { FacturenToevoegenComponent } from './facturen/facturen-toevoegen/facturen-toevoegen.component';
import { FacturenListComponent } from './facturen/facturen-list/facturen-list.component';
import { FactuurItemComponent } from './facturen/facturen-list/factuur-item/factuur-item.component';
import { FacturenZoekenComponent } from './facturen/facturen-zoeken/facturen-zoeken.component';
import {FactuurResolver} from '../shared/factuur.resolver';
import {FacturenService} from './facturen/facturen.service';

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
    FacturenToevoegenComponent,
    FacturenListComponent,
    FactuurItemComponent,
    FacturenZoekenComponent
  ],
  imports: [
    RapportagesRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    OffertesService,
    OfferteResolver,
    FactuurResolver,
    FacturenService
  ]
})
export class RapportagesModule {}
