import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthStore } from '../../../../../services/auth.service';
import { MessagesStore } from '../../../../../shared/services/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';
import { ValidatorsService } from '../../../../../shared/services/app-validators.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';
import { FormControlInputConfig, FormControlInputType } from '../../../../../shared/models/interfaces/app-form.interface';

@Component({
  selector: 'sdjr2--auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.scss'
})
export class AuthLoginPageComponent {

  @ViewChild('inputPassword') inputPass! : ElementRef<HTMLInputElement>;

  navRoutes = NAVIGATION_ROUTES;
  fgLogin!: UntypedFormGroup;
  fcEmailConfig!: FormControlInputConfig;
  fcPasswordConfig!: FormControlInputConfig;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private readonly authStore: AuthStore,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService,
    private readonly validatorsService: ValidatorsService,
  ) {
    this.createFormGroup();
    this.createFormConstrols();
  }

  get password(): AbstractControl {
    return this.fgLogin.controls[ 'password' ];
  }

  get linkRecovery(): string {
    return `../${this.navRoutes.auth.recovery}`;
  }
  get linkRegister(): string {
    return `../${this.navRoutes.auth.register}`;
  }

  private createFormGroup(): void {
    this.fgLogin = this.fb.group({
      rememberMe: [ false ],
    });
  }
  private createFormConstrols(): void {
    this.fcEmailConfig = {
      type: FormControlInputType.EMAIL,
      name: 'email',
      iconBS: 'bi-envelope-at',
      placeHolder: 'Enter your email',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ]
    };
    this.fcPasswordConfig = {
      type: FormControlInputType.PASSWORD,
      name: 'password',
      iconBS: 'bi-door-closed',
      placeHolder: 'Enter your password',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createPasswordStrengthValidator() ]
    };
  }

  onLogin() {
    if( this.fgLogin.valid ) {
      const val = this.fgLogin.value;
      this.authStore.login( val.email, val.password, val.rememberMe )
        .subscribe(
          ( resp ) => {
            if( resp ) {
              this.router.navigateByUrl( `/${this.navRoutes.web.self}` )
            }
          }
        );
    } else {
      this.messagesStore.showErrors( this.messagesErrorService.getFormNotValid() );
    }
  }
}
