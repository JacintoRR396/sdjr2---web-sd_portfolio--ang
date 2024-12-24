import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthStore } from '../../../../../services/auth.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.scss'
})
export class AuthLoginPageComponent {
  navRoutes = NAVIGATION_ROUTES;
  formLogin: UntypedFormGroup;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private readonly authStore: AuthStore
  ) {
    this.formLogin = this.fb.group({
      email: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ],
      rememberMe: [ false ],
    });
  }

  get linkRecovery(): string {
    return `../${this.navRoutes.auth.recovery}`;
  }
  get linkRegister(): string {
    return `../${this.navRoutes.auth.register}`;
  }

  onLogin() {
    const val = this.formLogin.value;
    this.authStore.login( val.email, val.password, val.rememberMe )
      .subscribe(
        ( resp ) => {
          if( resp ) {
            this.router.navigateByUrl( '/web' )
          }
        }
      );
  }
}
