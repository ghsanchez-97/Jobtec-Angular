import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdmComponent } from './component/login-adm/login-adm.component';
import { GjtComponent } from './component/gjt/gjt.component';

import { AuthService } from './services/auth.service'

const routes: Routes = [
  {
    path:'login-adm',
    component: LoginAdmComponent
  },
  {
    path:'gjt',
    component:GjtComponent,
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
