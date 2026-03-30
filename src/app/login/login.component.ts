import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj = new LoginModel();
  router = inject(Router);

  doLogin() {
    if (
      this.loginObj.email == 'admin@gmail.com' &&
      this.loginObj.password == '112233'
    ) {
      this.router.navigateByUrl('/batch');
    } else {
      alert('Wrong Credential');
    }
  }
}

class LoginModel {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
