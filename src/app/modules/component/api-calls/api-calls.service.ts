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

  // Fetching the data from server
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

  //Setting the data on local variable, getting from server service.
  setServiceData(dataService: Data[]) {
    this.dataService = dataService;
  }

  //Setting the data to UI, getting from server service.
  getServiceData() {
    return this.dataService.slice();
  }

  //Setting the data on local variable, getting from server interceptor.
  setInterceptorData(dataInterceptor: Data[]) {
    this.dataInterceptor = dataInterceptor;
  }

  //Setting the data to UI, getting from server interceptor.
  getInterceptorData() {
    return this.dataInterceptor.slice();
  }
}
