import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);
  constructor() {}

  login(loginData: any) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/UserApp/login',
      loginData,
    );
  }
}
