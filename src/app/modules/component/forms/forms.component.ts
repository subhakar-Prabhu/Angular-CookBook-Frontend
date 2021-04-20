import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  dropdownOptions = [
    { id: 1, name: 'Honda' },
    { id: 2, name: 'Volvo' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
    { id: 4, name: 'Chevrolet' },
    { id: 4, name: 'Nissan' },
    { id: 4, name: 'Hyundai ' },
    { id: 4, name: 'Volkswagen ' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDataSelectEvent(evt: any) {
    console.log('Selected Dropdown Value:', evt);
  }
}
