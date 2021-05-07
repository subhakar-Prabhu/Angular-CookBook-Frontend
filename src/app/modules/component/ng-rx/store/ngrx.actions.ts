import { Action } from '@ngrx/store';

import { Data } from '../data.model';

export const SET_DATA = '[NgRx] Set Data';
export const SET_API_DATA = '[NgRx] Set API Data';
export const FETCH_DATA = '[NgRx] Fetch Data';

//Setting data with local stored variable data.
export class SetData implements Action {
  readonly type = SET_DATA;
}

//Setting data with server stored data.
export class SetAPIData implements Action {
  readonly type = SET_API_DATA;

  constructor(public payload: Data[]) {}
}

//Fetch data action for ngRx effects.
export class FetchData implements Action {
  readonly type = FETCH_DATA;
}

export type NgRxActions = SetData | SetAPIData | FetchData;
