import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';

import { AuthStore } from '../../../../../shared/store/app-auth.service';
import { MessagesStore } from '../../../../../shared/store/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';
import { ValidatorsService } from '../../../../../shared/services/app-validators.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';
import { FormControlInputConfig, FormControlInputType } from '../../../../../shared/components/bootstrap/app-bs-form-input/interfaces/app-comp-form.interface';
import { ButtonConfig, ButtonConfigStyle, ButtonType } from '../../../../../shared/components/bootstrap/app-bs-btn/interfaces/app-comp-btn.interface';
import { ImageLazyConfig } from '../../../../../shared/components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';

@Component({
  selector: 'sdjr2--auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.scss'
})
export class AuthLoginPageComponent {

  @ViewChild('inputPassword') inputPass! : ElementRef<HTMLInputElement>;

  navRoutes = NAVIGATION_ROUTES;
  imgLazyBackgorundConfig!: ImageLazyConfig;
  fgLogin!: UntypedFormGroup;
  fcEmailConfig!: FormControlInputConfig;
  fcPasswordConfig!: FormControlInputConfig;
  fcRememberConfig!: FormControlInputConfig;
  btnForgotPwdConfig!: ButtonConfig;
  btnForgotPwdConfigStyle!: ButtonConfigStyle;
  btnLoginConfig!: ButtonConfig;
  btnLoginConfigStyle!: ButtonConfigStyle;
  btnRegisterConfig!: ButtonConfig;
  btnRegisterConfigStyle!: ButtonConfigStyle;
  isSpinnerActiveBtnLogin: boolean = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private readonly authStore: AuthStore,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService,
    private readonly validatorsService: ValidatorsService,
  ) {
    this.createImgBg();
    this.createFormGroup();
    this.createFormConstrols();
    this.createBtns();
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

  private createImgBg(): void {
    this.imgLazyBackgorundConfig = {
      src: "../.././../../../../assets/images/web/auth/bg-auth_login.svg",
      alt: "Image background about Auth Login"
    }
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
  private createBtns(): void {
    this.btnForgotPwdConfig = {
      type: ButtonType.LINK,
      name: 'Forgot password?',
      link: this.linkRecovery,
    }
    this.btnForgotPwdConfigStyle = {
      color: 'text-primary',
    }
    this.btnLoginConfig = {
      type: ButtonType.BUTTON,
      name: 'Login',
      iconBS: 'bi-box-arrow-in-right',
    }
    this.btnLoginConfigStyle = {
      color: 'btn-primary',
      width: 'w-100',
    }
    this.btnRegisterConfig = {
      type: ButtonType.LINK,
      name: 'Register',
      link: this.linkRegister,
    }
    this.btnRegisterConfigStyle = {
      color: 'text-danger',
      space: 'ms-1',
    }
  }

  onLogin() {
    if( this.fgLogin.valid ) {
      this.isSpinnerActiveBtnLogin = true;
      const val = this.fgLogin.value;
      this.authStore.login( val.email, val.pwd, val.remember )
        .pipe(
          delay( 500 )
        )
        .subscribe(
          ( resp ) => {
            if( resp?.isActive ) {
              this.router.navigateByUrl( `/${this.navRoutes.web.self}` )
            } else if ( !!resp && !resp.isActive ) {
              this.messagesStore.showErrors( this.messagesErrorService.getFormAccountIsInactive() );
            } else {
              this.messagesStore.showErrors( this.messagesErrorService.getFormCredentialsNotValid() );
            }
            this.isSpinnerActiveBtnLogin = false;
          }
        );
    } else {
      this.messagesStore.showErrors( this.messagesErrorService.getFormNotValid() );
    }
  }
}
