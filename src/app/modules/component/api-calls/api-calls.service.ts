import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Data } from '../ng-rx/data.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  private data: Data[] = [];

  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http
      .get<Data[]>(
        'https://ust-angular-cookbook-default-rtdb.firebaseio.com/data.json'
      )
      .pipe(
        tap((dataArray) => {
          this.setData(dataArray);
        })
      )
      .subscribe((resData) => {
        console.log('Data Fetch through Service - Response', resData);
      });
  }

  setData(data: Data[]) {
    this.data = data;
  }

  getData() {
    return this.data.slice();
  }
}
