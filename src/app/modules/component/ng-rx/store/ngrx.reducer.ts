import * as NgRxActions from './ngrx.actions';
import { Data } from '../data.model';

export interface State {
  dataLocal: Data[];
  dataAPI: Data[];
}

const initialState: State = {
  dataLocal: [
    {
      title: 'Test Data 1 - Local',
      description: 'Test Data 1 from Local.',
    },
    {
      title: 'Test Data 2 - Local',
      description: 'Test Data 2 from Local.',
    },
  ],
  dataAPI: [],
};

export function ngRxReducer(
  state = initialState,
  action: NgRxActions.NgRxActions
) {
  switch (action.type) {
    case NgRxActions.SET_DATA:
      return {
        ...state,
      };
    case NgRxActions.SET_API_DATA:
      return {
        ...state,
        dataAPI: [...action.payload],
      };
    default:
      return state;
  }
}
