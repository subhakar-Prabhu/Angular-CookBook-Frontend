import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Data } from '../ng-rx/data.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  private dataService: Data[] = [];
  private dataInterceptor: Data[] = [];

  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http
      .get<Data[]>(
        'https://ust-angular-cookbook-default-rtdb.firebaseio.com/data.json'
      )
      .pipe(
        tap((dataArray) => {
          this.setServiceData(dataArray);
        })
      )
      .subscribe((resData) => {
        console.log('Data Fetch through Service - Response', resData);
      });
  }

  setServiceData(dataService: Data[]) {
    this.dataService = dataService;
  }

  getServiceData() {
    return this.dataService.slice();
  }

  setInterceptorData(dataInterceptor: Data[]) {
    this.dataInterceptor = dataInterceptor;
  }

  getInterceptorData() {
    return this.dataInterceptor.slice();
  }
}
