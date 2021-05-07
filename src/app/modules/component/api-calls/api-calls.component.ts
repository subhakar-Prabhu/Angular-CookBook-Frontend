import { Component, OnInit } from '@angular/core';
import { Data } from '../ng-rx/data.model';
import { ApiCallsService } from './api-calls.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css'],
})
export class ApiCallsComponent implements OnInit {
  dataService: Data[];
  dataInterceptor: Data[];

  constructor(private apiCallService: ApiCallsService) {}

  ngOnInit(): void {
    this.apiCallService.fetchData();
  }

  //Populating the UI with data getting from Service API Call.
  onClickServiceAPICall() {
    this.dataService = this.apiCallService.getServiceData();
  }

  //Populating the UI with data getting from Interceptor API Call.
  onClickInterceptorAPICall() {
    this.dataInterceptor = this.apiCallService.getInterceptorData();
    console.log(this.dataInterceptor);
  }
}
