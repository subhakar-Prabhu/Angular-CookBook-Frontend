import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [MessageService],
})
export class FormsComponent implements OnInit {
  //modalVisibility: boolean = false;
  uploadedFiles: any[] = [];
  isFormSubmitted = false;
  isFormValid = () => this.isFormSubmitted || !this.form.dirty;
  public form: FormGroup;
  objectArray = [
    { value: 'Tyre Replacement', key: 'A' },
    { value: 'General Service', key: 'M' },
    { value: 'Battery Service', key: 'P' },
    { value: 'A/C Service', key: 'R' },
  ];

  dropdownOptions = [
    { id: 1, name: 'Honda' },
    { id: 2, name: 'Volvo' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
    { id: 4, name: 'Chevrolet' },
    { id: 4, name: 'Nissan' },
    { id: 4, name: 'Hyundai ' },
    { id: 4, name: 'Volkswagen ' },
  ];

  constructor(fb: FormBuilder, private messageService: MessageService) {
    this.form = fb.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      ssnNumber: [null, Validators.required],
      comment: [null, Validators.required],
      vehicleDropdown: [null, Validators.required],
      radioChoice: [null, Validators.required],
      dateChoice: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onDataSelectEvent(evt: any) {
    this.form.patchValue({ vehicleDropdown: evt.name });
    this.form.markAsDirty();
    console.log('Selected Dropdown Value:', evt);
  }

  onDateSelectEvent(evt: any) {
    this.form.patchValue({ dateChoice: evt });
    this.form.markAsDirty();
    console.log('Selected Date Value:', evt);
  }
  onSubmit() {
    this.isFormSubmitted = true;
  }
  onUploadEvent(event: any) {
    this.form.markAsDirty();
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }
}
