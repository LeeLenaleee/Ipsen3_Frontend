import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OfferteModel} from '../models/offerte.model';
import {OffertesService} from '../rapportages/offertes/offertes.service';
import {FactuurModel} from '../models/factuur.model';
import {FacturenService} from '../rapportages/facturen/facturen.service';

@Injectable()
export class FactuurResolver implements Resolve<Observable<FactuurModel>> {
  constructor(private factuurService: FacturenService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<FactuurModel>> | Promise<Observable<FactuurModel>> | Observable<FactuurModel> {
    return this.factuurService.getFactuur(route.params.id);
  }
}
