import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLoginPageComponent } from './pages/login/code/auth-login-page.component';
import { AuthRecoverPageComponent } from './pages/recover/code/auth-recover-page.component';
import { AuthRegisterPageComponent } from './pages/register/code/auth-register-page.component';

const routes: Routes = [
  { path: 'login', component: AuthLoginPageComponent },
  { path: 'register', component: AuthRegisterPageComponent },
  { path: 'recovery', component: AuthRecoverPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
