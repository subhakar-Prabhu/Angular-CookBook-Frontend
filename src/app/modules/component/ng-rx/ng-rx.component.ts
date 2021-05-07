import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Data } from './data.model';
import * as fromApp from '../../../store/app.reducer';
import * as NgRxActions from './store/ngrx.actions';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.css'],
})
export class NgRxComponent implements OnInit, OnDestroy {
  dataLocal: Data[];
  dataAPI: Data[];
  loadingFlag = false;
  subscriptionLocalData: Subscription;
  subscriptionAPIData: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {}

  //Populating the UI with data getting from local stored variable.
  onClickLocalStore() {
    this.subscriptionLocalData = this.store
      .select('data')
      .pipe(map((dataState) => dataState.dataLocal))
      .subscribe((data: Data[]) => {
        this.dataLocal = data;
      });
  }

  //Populating the UI with data getting from server API call.
  onClickAPIStore() {
    this.store.dispatch(new NgRxActions.FetchData());
    this.subscriptionAPIData = this.store
      .select('data')
      .pipe(map((dataState) => dataState.dataAPI))
      .subscribe((data: Data[]) => {
        this.dataAPI = data;
        if (data.length === 0) {
          this.loadingFlag = true;
        } else {
          this.loadingFlag = false;
        }
      });
  }

  //Removing the subscriptions created.
  ngOnDestroy() {
    if (this.subscriptionLocalData) {
      this.subscriptionLocalData.unsubscribe();
    }

    if (this.subscriptionAPIData) {
      this.subscriptionAPIData.unsubscribe();
    }
  }
}
