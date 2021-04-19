import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formsBtn() {
    alert('formsBtn');
  }

  ngRxBtn() {
    alert('ngRxBtn');
  }

  apiBtn() {
    alert('apiBtn');
  }

  validationsBtn() {
    alert('validationsBtn');
  }

}
