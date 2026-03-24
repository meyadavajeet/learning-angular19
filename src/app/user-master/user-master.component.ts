import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-master',
  imports: [FormsModule],
  templateUrl: './user-master.component.html',
  styleUrl: './user-master.component.css'
})
export class UserMasterComponent {

  userObj={
    id:0,
    name:"",
    username:"",
    email:"",
    password:"",
    city:"",
    state:""
  }
}
