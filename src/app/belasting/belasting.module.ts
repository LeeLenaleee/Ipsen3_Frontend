import {NgModule} from '@angular/core';
import {BelastingComponent} from './belasting.component';
import {FacturenSchermComponent} from './facturen-scherm/facturen-scherm.component';
import {KwartaalWeergavenComponent} from './kwartaal-weergaven/kwartaal-weergaven.component';
import {ToggleSwitchComponent} from './toggle-switch/toggle-switch.component';
import {UitgavenoverzichtComponent} from './uitgavenoverzicht/uitgavenoverzicht.component';
import {BelastingRoutingModule} from './belasting-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BelastingService} from './belasting.service';
import { UitgaveItemComponent } from './uitgavenoverzicht/uitgave-item/uitgave-item.component';
import { UitgaveListComponent } from './uitgavenoverzicht/uitgave-list/uitgave-list.component';
import { UitgaveFilterComponent } from './uitgavenoverzicht/uitgave-filter/uitgave-filter.component';

@NgModule({
  declarations: [BelastingComponent,
    FacturenSchermComponent,
    KwartaalWeergavenComponent,
    ToggleSwitchComponent,
    UitgavenoverzichtComponent,
    UitgaveItemComponent,
    UitgaveListComponent,
    UitgaveFilterComponent,
  ],
  imports: [BelastingRoutingModule,
  CommonModule,
  FormsModule],
  providers: [BelastingService],
})
export class BelastingModule {}
