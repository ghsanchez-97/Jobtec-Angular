import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdmComponent } from './component/login-adm/login-adm.component';

const routes: Routes = [
  {
    path:'login-adm',
    component: LoginAdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
