import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import * as NgRxActions from './ngrx.actions';
import { Data } from '../data.model';

@Injectable()
export class NgRxEffects {

  //Fetching the data from Server using ngRx effects.
  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgRxActions.FETCH_DATA),
      switchMap(() => {
        return this.http.get<Data[]>(
          'https://ust-angular-cookbook-default-rtdb.firebaseio.com/data.json'
        );
      }),
      map((dataArray) => {
        return dataArray.map((data) => {
          return {
            ...data,
          };
        });
      }),
      map((data) => {
        return new NgRxActions.SetAPIData(data);
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
