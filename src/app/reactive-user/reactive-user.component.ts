import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.component.html',
  styleUrl: './reactive-user.component.css'
})
export class ReactiveUserComponent {

  userForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    userName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    email: new FormControl(""),
    password: new FormControl("")
  })
}
