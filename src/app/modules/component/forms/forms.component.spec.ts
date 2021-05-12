import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('form should be invalid', () => {
    component.form.controls['firstName'].setValue('');
    component.form.controls['middleName'].setValue('');
    component.form.controls['lastName'].setValue('');
    component.form.controls['phoneNumber'].setValue('');
    component.form.controls['ssnNumber'].setValue('');
    component.form.controls['comment'].setValue('');
    component.form.controls['vehicleDropdown'].setValue('');
    component.form.controls['radioChoice'].setValue('');
    component.form.controls['dateChoice'].setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.form.controls['firstName'].setValue('Fathima');
    component.form.controls['middleName'].setValue('Mehajabin');
    component.form.controls['lastName'].setValue('K');
    component.form.controls['phoneNumber'].setValue('9954365856');
    component.form.controls['ssnNumber'].setValue('568956589');
    component.form.controls['comment'].setValue('Testing Comment');
    component.form.controls['vehicleDropdown'].setValue('Honda');
    component.form.controls['radioChoice'].setValue('Tyre Replacement');
    component.form.controls['dateChoice'].setValue('2021-05-12');
    expect(component.form.valid).toBeTruthy();
  });

  it('should set isFormSubmitted to true', () => {
    component.onSubmit();
    expect(component.isFormSubmitted).toBeTruthy();
  });

  it('firstName field validity', () => {
    let firstName = component.form.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    component.form.controls['firstName'].setValue("Fathima");
    expect(firstName.valid).toBeTruthy();
  });
});
