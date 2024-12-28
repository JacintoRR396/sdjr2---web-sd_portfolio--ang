import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

import { FormsService } from '../../../../../shared/services/app-forms.service';
import { UsersService } from '../../../../../shared/services/app-users.service';
import { MessagesStore } from '../../../../../shared/store/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';

import { ImageLazyConfig } from '../../../../../shared/components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';
import { FormControlInputConfig, FormControlInputType } from '../../../../../shared/components/bootstrap/app-bs-form-input/interfaces/app-comp-form.interface';
import { ButtonConfig, ButtonConfigStyle, ButtonType } from '../../../../../shared/components/bootstrap/app-bs-btn/interfaces/app-comp-btn.interface';

import { FormRegister } from '../../../../../shared/models/interfaces/app-forms.interface';
import { RoleType, User } from '../../../../../shared/models/interfaces/app-users.interface';
import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-register-page',
  templateUrl: './auth-register-page.component.html',
  styleUrl: './auth-register-page.component.scss'
})
export class AuthRegisterPageComponent {
  private readonly navRoutes = NAVIGATION_ROUTES;

  imgLazyBackgorundConfig!: ImageLazyConfig;
  fgRegister!: UntypedFormGroup;
  fcUsernameConfig!: FormControlInputConfig;
  fcEmailConfig!: FormControlInputConfig;
  fcPasswordConfig!: FormControlInputConfig;
  fcPasswordVerifyConfig!: FormControlInputConfig;
  fcTermsOfServiceConfig!: FormControlInputConfig;
  btnRegisterConfig!: ButtonConfig;
  btnRegisterConfigStyle!: ButtonConfigStyle;
  btnResetConfig!: ButtonConfig;
  btnResetConfigStyle!: ButtonConfigStyle;
  btnLoginConfig!: ButtonConfig;
  btnLoginConfigStyle!: ButtonConfigStyle;
  isSpinnerActiveBtnRegister: boolean = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private readonly formsService: FormsService,
    private readonly usersService: UsersService,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService,
  ) {
    this.createImgBg();
    this.createFormGroup();
    this.createFormConstrols();
    this.createBtns();
  }

  get linkLogin(): string {
    return `../${this.navRoutes.auth.login}`;
  }

  private createImgBg(): void {
    this.imgLazyBackgorundConfig = {
      src: "../.././../../../../assets/images/web/auth/bg-auth_register.svg",
      alt: "Image background about Auth Register"
    }
  }
  private createFormGroup(): void {
    this.fgRegister = this.fb.group({});
  }
  private createFormConstrols(): void {
    this.fcUsernameConfig = {
      type: FormControlInputType.TEXT,
      name: 'username',
      lbl: 'Username',
      iconBS: 'bi-person',
      placeHolder: 'Enter your username',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(5), Validators.maxLength(40) ],
      isMandatory: true,
    };
    this.fcEmailConfig = this.formsService.createFormControlInputEmail();
    this.fcPasswordConfig = this.formsService.createFormControlInputPassword();
    this.fcPasswordVerifyConfig = this.formsService.createFormControlInputPasswordVerify();
    this.fcTermsOfServiceConfig = {
      type: FormControlInputType.CHECKBOX,
      name: 'terms',
      lbl: 'I agree all statements in Terms of service',
      valueDefault: 'false',
      isMandatory: true,
    };
  }
  private createBtns(): void {
    this.btnRegisterConfig = {
      type: ButtonType.BUTTON,
      name: 'Register',
      iconBS: 'bi-floppy',
    }
    this.btnRegisterConfigStyle = {
      color: 'btn-success',
    }
    this.btnResetConfig = {
      type: ButtonType.BUTTON,
      name: 'Reset All',
      iconBS: 'bi-trash',
    }
    this.btnResetConfigStyle = {
      color: 'btn-secondary',
    }
    this.btnLoginConfig = {
      type: ButtonType.LINK,
      name: 'Login',
      link: this.linkLogin,
    }
    this.btnLoginConfigStyle = {
      color: 'text-primary',
      space: 'ms-1',
    }
  }

  onRegister(): void {
    if( this.fgRegister.valid ) {
      this.isSpinnerActiveBtnRegister = true;
      const user = this.createUser( this.fgRegister.value );
      this.usersService.addUser( user )
        .pipe(
          delay( 500 )
        )
        .subscribe(
          ( resp ) => {
            if ( resp ) {
              this.router.navigateByUrl( `/${this.navRoutes.auth.self}/${this.navRoutes.auth.login}` )
            }
            this.isSpinnerActiveBtnRegister = false;
          }
        );
    } else {
      this.messagesStore.showErrors( this.messagesErrorService.getFormNotValid() );
    }
  }
  private createUser( dataForm: FormRegister ): User {
    return {
      id: 0,
      username: dataForm.username,
      email: dataForm.email,
      password: dataForm.pwd,
      role: RoleType.ROLE_USER,
      isTermsOfService: ( dataForm.terms === 'true' ) ? true : false,
      isActive: true,
      atCreate: new Date(),
      atUpdate: new Date(),
      atLastAccess: new Date(),
    }
  }

  onReset(): void {
    this.fgRegister.reset();
  }
}
