import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppSharedModule } from '../../shared/app-shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthSharedModule } from './shared/auth-shared.module';

import { AuthLayoutComponent } from './layout/auth-layout.component';
import { AuthLoginPageComponent } from './pages/login/code/auth-login-page.component';
import { AuthRecoverPageComponent } from './pages/recover/code/auth-recover-page.component';
import { AuthRegisterPageComponent } from './pages/register/code/auth-register-page.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    AuthLoginPageComponent,
    AuthRecoverPageComponent,
    AuthRegisterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppSharedModule,
    AuthRoutingModule,
    AuthSharedModule
  ]
})
export class AuthModule { }
