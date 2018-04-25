import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,} from '@angular/router'



import { AppComponent } from './app.component';
import { NavbarComponent } from './_pages/general_pages/navbar/navbar.component';
import { LoginComponent } from './_pages/general_pages/login/login.component';
import { Router } from './app.routes';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { GeneralDahboardComponent } from './_pages/general-dahboard/general-dahboard.component';
import { JoinSchoolComponent } from './_pages/general_pages/join-school/join-school.component';
import { EmailValidator } from '../assets/validators';


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
    RouterModule,
    Router,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [EmailValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
