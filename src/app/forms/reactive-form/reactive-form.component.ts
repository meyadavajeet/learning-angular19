import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    userName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('Goa'),
    zip: new FormControl(''),
    isAgree: new FormControl(''),
  });

  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 2000);
  }

  onUserSave() {
    // isFormValid
    const isFormValid = this.userForm.valid;
    //get all the values of the form
    const formValues = this.userForm.value;
    // debugger;
  }
}
