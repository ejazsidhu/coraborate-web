import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./_pages/general_pages/login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { PasswordComponent } from "./_pages/general-dahboard/password/password.component";

export const routes:Routes=[

{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    
    { path: 'login', component: LoginComponent },
    { path:'Password',component:PasswordComponent}
    // { path: '**', component: PageNotFoundComponent },



];

export const Router:ModuleWithProviders=RouterModule.forRoot(routes);