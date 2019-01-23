import { Injectable } from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Brieven} from '../models/brieven.model';
import {BrievenService} from '../rapportages/brieven/brieven.service';

@Injectable()
export class BrievenResolver implements Resolve<Observable<Brieven>> {
  constructor(private brievenService: BrievenService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Brieven>> | Promise<Observable<Brieven>> | Observable<Brieven> {
    return this.brievenService.getBrief(route.params.id);
  }


}
