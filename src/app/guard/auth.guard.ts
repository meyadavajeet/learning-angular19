import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem("loggedUserId");
  if(isLoggedIn == null){
    router.navigateByUrl("/login")
    return false;
  }
  return true;
};
