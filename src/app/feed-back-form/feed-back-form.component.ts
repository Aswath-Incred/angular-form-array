import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-feed-back-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, NgFor, JsonPipe],
  templateUrl: './feed-back-form.component.html',
  styleUrl: './feed-back-form.component.css',
})
export class FeedBackFormComponent implements OnInit {
  myForm: FormGroup | any;
  counter: number = 0;
  labels = ['First Name', 'Last Name', 'Mobile', 'Experience'];
  namePattern: string = "^[A-Z][a-zA-Z'-]{1,49}$";
  mobilePattern: string = '^[6-9][0-9]{9}$';

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.mobilePattern),
      ]),
      experience: new FormControl(null, [Validators.required]),
      subArray: new FormArray([]),
    });
  }

  onFormSubmitted() {
    const { subArray } = this.myForm.value;
    let { subArray: undefined, ...formValues } = this.myForm.value;
    if (subArray.length > 0) {
      for (let i = 0; i < subArray.length; i++) {
        formValues = { ...formValues, ...subArray[i] };
      }
    }
    console.log('<---------------------------->');
    for (let i in formValues) {
      console.log(`${i}: ${formValues[i]}`);
    }
    console.log('<---------------------------->');
    alert('Thank you for submitting the form!');
    this.ngOnInit();
  }

  addMore() {
    this.counter++;
    (<FormArray>this.myForm.get('subArray')).push(
      new FormGroup({
        [`firstName${this.counter}`]: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.namePattern),
        ]),
        [`lastName${this.counter}`]: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.namePattern),
        ]),
        [`mobile${this.counter}`]: new FormControl(null, [
          Validators.required,
          Validators.pattern(this.mobilePattern),
        ]),
        [`experience${this.counter}`]: new FormControl(null, [
          Validators.required,
        ]),
      })
    );
  }

  undoAddMore() {
    let subArray = <FormArray>this.myForm.get('subArray');
    subArray.removeAt(subArray.length - 1);
    this.counter--;
  }

  getFormControlNames(index: number) {
    const control = (<FormArray>this.myForm.get('subArray')).at(index);
    return Object.keys(control.value);
  }
}
