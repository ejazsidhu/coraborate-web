import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router'



import { AppComponent } from './app.component';
import { NavbarComponent } from './_pages/general_pages/navbar/navbar.component';
import { LoginComponent } from './_pages/general_pages/login/login.component';
import { Router } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { GeneralDahboardComponent } from './_pages/general-dahboard/general-dahboard.component';
import { JoinSchoolComponent } from './_pages/general_pages/join-school/join-school.component';
import { EmailValidator } from '../assets/validators';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { ConfigService } from './_services/config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    GeneralDahboardComponent,
    JoinSchoolComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    Router,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [EmailValidator, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
