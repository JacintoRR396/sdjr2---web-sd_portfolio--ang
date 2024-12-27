import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthStore } from '../../../../../shared/store/app-auth.service';
import { MessagesStore } from '../../../../../shared/store/app-messages.service';
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
  fcRememberConfig!: FormControlInputConfig;

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
    this.fgLogin = this.fb.group({});
  }
  private createFormConstrols(): void {
    this.fcEmailConfig = {
      type: FormControlInputType.EMAIL,
      name: 'email',
      lbl: 'Email address',
      iconBS: 'bi-envelope-at',
      placeHolder: 'Enter your email',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ],
      isMandatory: true,
    };
    this.fcPasswordConfig = {
      type: FormControlInputType.PASSWORD,
      name: 'pwd',
      lbl: 'Password',
      iconBS: 'bi-door-closed',
      placeHolder: 'Enter your password',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createPasswordStrengthValidator() ],
      isMandatory: true,
    };
    this.fcRememberConfig = {
      type: FormControlInputType.CHECKBOX,
      name: 'remember',
      lbl: 'Remember me',
      valueDefault: false,
      isMandatory: false,
    };
  }

  onLogin() {
    if( this.fgLogin.valid ) {
      const val = this.fgLogin.value;
      console.log( val );
      this.authStore.login( val.email, val.pwd, val.remember )
        .subscribe(
          ( resp ) => {
            if( resp?.isActive ) {
              this.router.navigateByUrl( `/${this.navRoutes.web.self}` )
            } else {
              this.messagesStore.showErrors( this.messagesErrorService.getFormAccountIsInactive() );
            }
          }
        );
    } else {
      this.messagesStore.showErrors( this.messagesErrorService.getFormNotValid() );
    }
  }
}
