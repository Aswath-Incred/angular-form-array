import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      items: this.fb.array([
        this.fb.group({
          firstName: [
            '',
            Validators.required,
            Validators.pattern("^[A-Z][a-zA-Z'-]{1,49}$"),
          ],
          lastName: [
            '',
            Validators.required,
            Validators.pattern("^[A-Z][a-zA-Z'-]{1,49}$"),
          ],
          mobile: [
            '',
            Validators.required,
            Validators.pattern('/^[6-9][0-9]{9}$/'),
          ],
          subArray: []
        }),
      ]),
    });
  }

  ngOnInit(): void {}

  get items(): FormArray {
    return this.contactForm.get('items') as FormArray;
  }

  get controls(){
    console.log(this.items.controls.map(control => control.value));
    return this.contactForm.controls;
  }

  addItem() {
    console.log(this.contactForm);
    
    const item = this.fb.group({
      password: ['', Validators.required, Validators.pattern('')],
      confirmPassword: ['', Validators.required],
    });
    this.items.push(item);
  }

  subItems(index: number) {
    console.log(this.fb.array);
    return (this.items.at(index) as FormGroup).get('subArray') as FormArray;
  }

  showItems(index: number) {
    alert(this.items.at(index) as FormGroup);
  }
}
