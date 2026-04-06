import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { AppComponent } from './app.component';
import { ReactiveUserComponent } from './reactive-user/reactive-user.component';
import { BatchMasterCrudComponent } from './batch-master-crud/batch-master-crud.component';
import { ProjectCompetationComponent } from './project-competation/project-competation.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { ComponentLifeCycleComponent } from './component-life-cycle/component-life-cycle.component';
import { PipesComponent } from './pipes/pipes.component';

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
    // canActivate:[authGuard] // add in the parent to protect all the routes
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
        canActivate: [authGuard],
      },
      {
        path: 'project-competation',
        component: ProjectCompetationComponent,
      },
      {
        path: 'component-lifecycle',
        component: ComponentLifeCycleComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
