import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj = new LoginModel();
  router = inject(Router);
  loginService = inject(LoginService);

  doLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      loginForm.form.markAllAsTouched();
      return;
    }

    // if (
    //   this.loginObj.email == 'admin@gmail.com' &&
    //   this.loginObj.password == '112233'
    // ) {
    //   this.router.navigateByUrl('/batch');
    // } else {
    //   alert('Wrong Credential');
    // }

    this.loginService.login(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.result || res.data != null) {
          alert('Login Success');
          localStorage.setItem("loggedUserId",res.data.userId)
          this.router.navigateByUrl('/batch');
        }else{
         alert(res.message || 'Wrong credential');
        }

      },
      error: (error: any) => {
        console.log(error.error.message);
        alert('Wrong credential');
      },
    });
  }
}

class LoginModel {
  emailId: string;
  password: string;
  constructor() {
    this.emailId = '';
    this.password = '';
  }
}
