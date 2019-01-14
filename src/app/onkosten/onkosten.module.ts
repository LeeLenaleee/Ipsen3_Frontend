import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnkostenService} from './onkosten.service';
import {OnkostenResolver} from '../shared/onkosten.resolver';
import {OnkostenZoekenComponent} from './onkosten-zoeken/onkosten-zoeken.component';
import {OnkostenListComponent} from './onkosten-list/onkosten-list.component';
import {OnkostenDetailComponent} from './onkosten-detail/onkosten-detail.component';
import {ContactToevoegenComponent} from '../contacten/contact-toevoegen/contact-toevoegen.component';
import {ContactWijzigenComponent} from '../contacten/contact-wijzigen/contact-wijzigen.component';
import {OnkostenToevoegenComponent} from './onkosten-toevoegen/onkosten-toevoegen.component';
import {OnkostenItemComponent} from './onkosten-list/onkosten-item/onkosten-item.component';
import {OnkostenComponent} from './onkosten.component';
import {AppRoutingModule} from '../app-routing.module';
import {AppComponent} from '../app.component';
import {OnkostenRoutingModule} from './onkosten-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../shared/auth.interceptor';

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
    OnkostenResolver,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class OnkostenModule { }
