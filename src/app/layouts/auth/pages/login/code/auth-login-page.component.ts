import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

import { FormsService } from '../../../../../shared/services/app-forms.service';
import { AuthStore } from '../../../../../shared/store/app-auth.service';
import { MessagesStore } from '../../../../../shared/store/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';

import { ImageLazyConfig } from '../../../../../shared/components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';
import { FormControlInputConfig, FormControlInputType } from '../../../../../shared/components/bootstrap/app-bs-form-input/interfaces/app-comp-form-input.interface';
import { ButtonConfig, ButtonConfigStyle, ButtonType } from '../../../../../shared/components/bootstrap/app-bs-btn/interfaces/app-comp-btn.interface';
import { FormLogin } from '../../../../../shared/models/interfaces/app-forms.interface';
import { ModalConfig } from '../../../../../shared/components/bootstrap/app-bs-modal/interfaces/app-bs-comp-modal.interface';
import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.scss'
})
export class AuthLoginPageComponent implements OnInit {
  private readonly navRoutes = NAVIGATION_ROUTES;

  imgLazyBgConfig!: ImageLazyConfig;
  titleForm: string = 'Sign in';

  fgLogin!: FormGroup;
  fcEmail!: FormControl;
  fcEmailConfig!: FormControlInputConfig;
  fcPwd!: FormControl;
  fcPwdConfig!: FormControlInputConfig;
  fcRemember!: FormControl;
  fcRememberConfig!: FormControlInputConfig;

  btnForgotPwdConfig!: ButtonConfig;
  btnForgotPwdConfigStyle!: ButtonConfigStyle;
  btnLoginConfig!: ButtonConfig;
  btnLoginConfigStyle!: ButtonConfigStyle;
  btnRegisterConfig!: ButtonConfig;
  btnRegisterConfigStyle!: ButtonConfigStyle;
  isSpinnerActiveBtnLogin: boolean = false;

  modalConfig!: ModalConfig;
  modalShow: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly formsService: FormsService,
    private readonly authStore: AuthStore,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService,
  ) {}

  ngOnInit(): void {
    this.createImgBg();
    this.createFormConstrols();
    this.createFormGroup();
    this.createBtns();
    this.createModal();
  }

  get linkRecovery(): string {
    return `../${this.navRoutes.auth.recovery}`;
  }
  get linkRegister(): string {
    return `../${this.navRoutes.auth.register}`;
  }

  private createImgBg(): void {
    this.imgLazyBgConfig = {
      src: "../.././../../../../assets/images/web/auth/bg-auth_login.svg",
      alt: "Image background about Auth Login"
    }
  }
  private createFormConstrols(): void {
    this.fcEmailConfig = this.formsService.createFormControlInputEmail();
    this.fcEmail = this.fb.control( this.fcEmailConfig.valueDefault, this.fcEmailConfig.validators );
    this.fcPwdConfig = this.formsService.createFormControlInputPwd();
    this.fcPwd = this.fb.control( this.fcPwdConfig.valueDefault, this.fcPwdConfig.validators );
    this.fcRememberConfig = {
      type: FormControlInputType.CHECKBOX,
      name: 'remember',
      lbl: 'Remember me',
      valueDefault: '',
      isMandatory: false,
    };
    this.fcRemember = this.fb.control( this.fcRememberConfig.valueDefault );
  }
  private createFormGroup(): void {
    this.fgLogin = this.fb.group({
      email: this.fcEmail,
      pwd: this.fcPwd,
      remember: this.fcRemember,
    });
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
  private createModal(): void {
    this.modalConfig = {
      title: 'Login success',
      btnRight: 'OK',
    }
  }

  // Btns Form
  onLogin(): void {
    if( this.fgLogin.valid ) {
      this.isSpinnerActiveBtnLogin = true;
      const fgValues: FormLogin = this.fgLogin.value;
      this.authStore.login( fgValues.email, fgValues.pwd, fgValues.remember )
        .pipe(
          delay( 1000 )
        )
        .subscribe(
          ( resp ) => {
            if( resp?.isActive ) {
              this.modalShow = true;
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

  // Btns Modal
  onClickModalClose(): void {
    this.modalShow = false;
    this.authStore.logout();
  }
  onClickModal(): void {
    this.router.navigateByUrl( `/${this.navRoutes.web.self}` );
  }
}
