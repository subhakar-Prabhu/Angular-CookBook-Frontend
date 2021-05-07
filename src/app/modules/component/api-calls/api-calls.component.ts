import { Component, OnInit } from '@angular/core';
import { Data } from '../ng-rx/data.model';
import { ApiCallsService } from './api-calls.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css'],
})
export class ApiCallsComponent implements OnInit {
  data: Data[];

  constructor(private apiCallService: ApiCallsService) {}

  ngOnInit(): void {
    this.apiCallService.fetchData();
  }

  onClickAPICall() {
    this.data = this.apiCallService.getData();
  }
}
