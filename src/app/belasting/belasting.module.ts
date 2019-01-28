import {NgModule} from '@angular/core';
import {BelastingComponent} from './belasting.component';
import {FacturenSchermComponent} from './facturen-scherm/facturen-scherm.component';
import {KlantenoverzichtComponent} from './klantenoverzicht/klantenoverzicht.component';
import {KwartaalWeergavenComponent} from './kwartaal-weergaven/kwartaal-weergaven.component';
import {ToggleSwitchComponent} from './toggle-switch/toggle-switch.component';
import {UitgavenoverzichtComponent} from './uitgavenoverzicht/uitgavenoverzicht.component';
import {BelastingRoutingModule} from './belasting-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BelastingService} from './belasting.service';

@NgModule({
  declarations: [BelastingComponent,
    FacturenSchermComponent,
    KlantenoverzichtComponent,
    KwartaalWeergavenComponent,
    ToggleSwitchComponent,
    UitgavenoverzichtComponent,
  ],
  imports: [BelastingRoutingModule,
  CommonModule,
  FormsModule],
  providers: [BelastingService],
})
export class BelastingModule {}
