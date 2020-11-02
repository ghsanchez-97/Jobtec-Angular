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


@NgModule({
  declarations: [
    AppComponent,
    LoginAdmComponent,
    GjtComponent
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
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
