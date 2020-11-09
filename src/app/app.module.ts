import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginAdmComponent } from './component/login-adm/login-adm.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { GjtComponent } from './component/gjt/gjt.component';
import { CmsComponent } from './component/cms/cms.component';
import { UsersComponent } from './component/Users/users/users.component';
import { JobComponent } from './component/Job/job/job.component';
import { UserNewComponent } from './component/Users/user-new/user-new.component';
import { UserEditComponent } from './component/Users/user-edit/user-edit.component';
import { UserListComponent } from './component/Users/user-list/user-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { JobNewComponent } from './component/Job/job-new/job-new.component';
import { JobEditComponent } from './component/Job/job-edit/job-edit.component';
import { JobListComponent } from './component/Job/job-list/job-list.component';
import { InitComponent } from './component/init/init.component';
import { WhoComponent } from './component/who/who.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FootComponent } from './component/foot/foot.component';
import { ContacComponent } from './component/contac/contac.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAdmComponent,
    GjtComponent,
    CmsComponent,
    UsersComponent,
    JobComponent,
    UserNewComponent,
    UserEditComponent,
    UserListComponent,
    JobNewComponent,
    JobEditComponent,
    JobListComponent,
    InitComponent,
    WhoComponent,
    NavbarComponent,
    FootComponent,
    ContacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
