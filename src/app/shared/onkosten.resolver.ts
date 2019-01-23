import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Onkosten} from '../models/onkosten.model';
import {OnkostenService} from '../onkosten/onkosten.service';

@Injectable()
export class OnkostenResolver implements Resolve<Observable<Onkosten>> {
  constructor(private onkostenService: OnkostenService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Onkosten>> | Promise<Observable<Onkosten>> | Observable<Onkosten> {
    return this.onkostenService.getOnkost(route.params.id);
  }


}
