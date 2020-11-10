import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdmComponent } from './component/login-adm/login-adm.component';
import { GjtComponent } from './component/gjt/gjt.component';
import { CmsComponent } from './component/cms/cms.component';
import { UsersComponent } from './component/Users/users/users.component';
import { JobComponent } from './component/Job/job/job.component';
import { UserNewComponent } from './component/Users/user-new/user-new.component';
import { UserEditComponent } from './component/Users/user-edit/user-edit.component';
import { UserListComponent } from './component/Users/user-list/user-list.component';

import { JobNewComponent } from './component/Job/job-new/job-new.component';
import { JobEditComponent } from './component/Job/job-edit/job-edit.component';
import { JobListComponent } from './component/Job/job-list/job-list.component';
import { InitComponent } from './component/init/init.component';
import { WhoComponent } from './component/who/who.component';
import { ContacComponent } from './component/contac/contac.component';
import { SignComponent } from './component/sign/sign.component';

import { AuthService } from './services/auth.service'

const routes: Routes = [
  {
    path:'',
    component:InitComponent
  },
  {
    path:'quienes-somos',
    component:WhoComponent
  },
  {
    path:'contacto',
    component:ContacComponent
  },
  {
    path:'sign-in',
    component:SignComponent
  },
  {
    path:'login-adm',
    component: LoginAdmComponent
  },
  {
    path:'gjt',
    component:CmsComponent,
    canActivate: [AuthService]
  },
  {
    path:'users',
    component:UsersComponent,
    canActivate:[AuthService]
  },
  {
    path:'user-new',
    component:UserNewComponent,
    canActivate:[AuthService]
  },
  {
    path:'user-edit',
    component:UserEditComponent,
    canActivate:[AuthService]
  },
  {
    path:'users-list',
    component:UserListComponent,
    canActivate:[AuthService]
  },
  {
    path:'jobs',
    component:JobComponent,
    canActivate:[AuthService]
  },
  {
    path:'job-new',
    component:JobNewComponent,
    canActivate:[AuthService]
  },
  {
    path:'job-edit/:id',
    component:JobEditComponent,
    canActivate:[AuthService]
  },
  {
    path:'jobs-list',
    component:JobListComponent,
    canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
