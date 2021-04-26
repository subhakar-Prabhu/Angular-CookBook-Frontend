import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public form: FormGroup;
  objectArray = [
    {value: 'Tyre Replacement', key: 'A'},
    {value: 'General Service', key: 'M'},
    {value: 'Battery Service', key: 'P'},
    {value: 'A/C Service', key: 'R'}
  ];

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

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      ssnNumber: [null, Validators.required],
      comment: [null, Validators.required],
      vehicleDropdown: [null, Validators.required],
      radioChoice: [null, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onDataSelectEvent(evt: any) {
    console.log('Selected Dropdown Value:', evt);
  }
}
