import { Injectable } from '@angular/core';

import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BaseComponent } from './base.component';

@Injectable({
  providedIn: 'root',
})
export class IsFormValidGuard implements CanDeactivate<BaseComponent> {
  canDeactivate(
    component: BaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //  if(component.isFormValid()) {
    //    return true;
    //  }
    //  else {
    //    component.modalVisibility = true;
    //  }
    return component.isFormValid()
      ? true
      : window.confirm('You have unsaved changes. Leave?');
  }
}
