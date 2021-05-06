import { ActionReducerMap } from '@ngrx/store';

import * as fromNgRx from '../modules/component/ng-rx/store/ngrx.reducer';

export interface AppState {
  data: fromNgRx.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  data: fromNgRx.ngRxReducer,
};
