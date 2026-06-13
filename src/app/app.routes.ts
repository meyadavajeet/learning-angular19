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
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIFComponent } from './ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ControlFlowStatementsComponent } from './control-flow-statements/control-flow-statements.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // here we have to give the path name
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
      {
        path: 'directives',
        component: DirectivesComponent,
      },
      {
        path: 'ngIf',
        component: NgIFComponent,
      },
      {
        path: 'ngFor',
        component: NgForComponent,
      },
      {
        path: 'ngClass',
        component: NgClassComponent,
      },
      {
        path: 'ngStyle',
        component: NgStyleComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
      {
        path: 'control-flow-statements',
        component: ControlFlowStatementsComponent,
      },
      {
        path: 'template-form',
        component: TemplateFormComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
