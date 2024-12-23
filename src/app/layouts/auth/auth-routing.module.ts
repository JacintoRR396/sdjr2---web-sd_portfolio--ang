import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from './layout/auth-layout.component';
import { AuthLoginPageComponent } from './pages/login/code/auth-login-page.component';
import { AuthRecoverPageComponent } from './pages/recover/code/auth-recover-page.component';
import { AuthRegisterPageComponent } from './pages/register/code/auth-register-page.component';

import { NAVIGATION_ROUTES } from '../../models/navigation-routes.model';

const navRoutes = NAVIGATION_ROUTES;

const routes: Routes = [
  { path: navRoutes.helperRoot, component: AuthLayoutComponent, children: [
      { path: navRoutes.auth.login, component: AuthLoginPageComponent },
      { path: navRoutes.auth.register, component: AuthRegisterPageComponent },
      { path: navRoutes.auth.recovery, component: AuthRecoverPageComponent },
      { path: '', redirectTo: navRoutes.auth.login, pathMatch: 'full' },
      { path: '**', redirectTo: navRoutes.auth.login }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
