import {Routes} from '@angular/router';
import {LoginComponent} from '../authentication/login/login.component';
import {ManageComponent} from '../manage/manage.component';
import {HomeComponent} from '../home/home.component';
import {ProjectsComponent} from '../projects/projects.component';
import {ReportsComponent} from '../reports/reports.component';
import {ProfileComponent} from '../profile/profile.component';
import {RegisterComponent} from '../authentication/register/register.component';
import {MyProjectsComponent} from '../projects/my-projects/my-projects.component';
import {NewProjectsComponent} from '../projects/new-projects/new-projects.component';
import {ForgetPasswordComponent} from '../authentication/forget-password/forget-password.component';


export const TimeTrackerRouter: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
    {
      path: 'projects/myProjects',
      component: MyProjectsComponent
    },
    {
      path: 'projects/newProject',
      component: NewProjectsComponent
    },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
];
