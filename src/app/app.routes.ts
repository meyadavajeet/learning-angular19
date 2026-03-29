import { Routes } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { AppComponent } from './app.component';
import { ReactiveUserComponent } from './reactive-user/reactive-user.component';
import { BatchMasterCrudComponent } from './batch-master-crud/batch-master-crud.component';
import { ProjectCompetationComponent } from './project-competation/project-competation.component';

export const routes: Routes = [
  {
    path:"users",
    component: UserMasterComponent,
  },
  {
    path:"reactive-users",
    component: ReactiveUserComponent,
  },
  {
    path:"batch",
    component: BatchMasterCrudComponent
  },
  {
    path:"project-competation",
    component: ProjectCompetationComponent
  }
];
