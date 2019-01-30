import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnkostenService} from './onkosten.service';
import {OnkostenResolver} from '../shared/onkosten.resolver';
import {OnkostenZoekenComponent} from './onkosten-zoeken/onkosten-zoeken.component';
import {OnkostenListComponent} from './onkosten-list/onkosten-list.component';
import {OnkostenDetailComponent} from './onkosten-detail/onkosten-detail.component';
import {OnkostenToevoegenComponent} from './onkosten-toevoegen/onkosten-toevoegen.component';
import {OnkostenItemComponent} from './onkosten-list/onkosten-item/onkosten-item.component';
import {OnkostenComponent} from './onkosten.component';
import {OnkostenRoutingModule} from './onkosten-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OnkostenComponent,
    OnkostenZoekenComponent,
    OnkostenListComponent,
    OnkostenDetailComponent,
    OnkostenToevoegenComponent,
    OnkostenItemComponent,

  ],
  imports: [
    OnkostenRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    OnkostenService,
    OnkostenResolver
  ]
})
export class OnkostenModule { }
