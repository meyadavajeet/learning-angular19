import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { AppComponent } from './app.component';
import { ReactiveUserComponent } from './reactive-user/reactive-user.component';
import { BatchMasterCrudComponent } from './batch-master-crud/batch-master-crud.component';
import { ProjectCompetationComponent } from './project-competation/project-competation.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        component: UserMasterComponent,
      },
      {
        path: 'reactive-users',
        component: ReactiveUserComponent,
      },
      {
        path: 'batch',
        component: BatchMasterCrudComponent,
      },
      {
        path: 'project-competation',
        component: ProjectCompetationComponent,
      },
    ],
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];
