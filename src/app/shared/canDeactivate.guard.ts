import {CanDeactivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {ComponentCanDeactivate} from './canDeactivate.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {

    if (!component.canDeactivate()) {
      localStorage.clear();
    return true;
    }
  }
}
