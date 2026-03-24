import { Routes } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { AppComponent } from './app.component';
import { ReactiveUserComponent } from './reactive-user/reactive-user.component';

export const routes: Routes = [
  {
    path:"",
    component: AppComponent,
  },
  {
    path:"users",
    component: UserMasterComponent,
  },
  {
    path:"reactive-users",
    component: ReactiveUserComponent,
  }
];
