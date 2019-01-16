import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactenListComponent} from './contact-zoeken/contacten-list/contacten-list.component';
import {ContactZoekenComponent} from './contact-zoeken/contact-zoeken.component';
import {ContactenComponent} from './contacten.component';
import {ContactToevoegenComponent} from './contact-toevoegen/contact-toevoegen.component';
import {ContactToevoegenService} from './contact-toevoegen/contact-toevoegen.service';
import {ContactZoekenService} from './contact-zoeken.service';
import {ContactWijzigenService} from './contact-wijzigen/contact-wijzigen.service';
import {ContactenRoutingModule} from './contacten-routing.module';
import {FormsModule} from '@angular/forms';
import {ContactWijzigenComponent} from './contact-wijzigen/contact-wijzigen.component';

@NgModule({
  declarations: [
    ContactenListComponent,
    ContactZoekenComponent,
    ContactenComponent,
    ContactToevoegenComponent,
    ContactWijzigenComponent
  ],
  imports: [
    CommonModule,
    ContactenRoutingModule,
    FormsModule
  ],
  providers: [
    ContactToevoegenService,
    ContactZoekenService,
    ContactWijzigenService
  ],
})
export class ContactenModule { }
