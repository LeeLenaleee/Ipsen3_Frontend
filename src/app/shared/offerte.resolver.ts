import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OfferteModel} from '../models/offerte.model';
import {OffertesService} from '../rapportages/offertes/offertes.service';

@Injectable()
export class OfferteResolver implements Resolve<Observable<OfferteModel>> {
  constructor(private offertesService: OffertesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<OfferteModel>> | Promise<Observable<OfferteModel>> | Observable<OfferteModel> {
    return this.offertesService.getOfferte(route.params.id);
  }
}
