import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  formsBtn() {
    this.router.navigate(['/forms']);
  }

  ngRxBtn() {
    this.router.navigate(['/ngRx']);
  }

  apiBtn() {
    this.router.navigate(['/api-calls']);
  }

  validationsBtn() {
    alert('validationsBtn');
  }
}
