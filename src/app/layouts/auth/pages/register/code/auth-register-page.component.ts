import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

import { FormsService } from '../../../../../shared/services/app-forms.service';
import { ValidatorsService } from '../../../../../shared/services/app-validators.service';
import { UsersService } from '../../../../../shared/services/app-users.service';
import { MessagesStore } from '../../../../../shared/store/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';

import { ImageLazyConfig } from '../../../../../shared/components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';
import { FormControlInputConfig, FormControlInputType } from '../../../../../shared/components/bootstrap/app-bs-form-input/interfaces/app-comp-form-input.interface';
import { ButtonConfig, ButtonConfigStyle, ButtonType } from '../../../../../shared/components/bootstrap/app-bs-btn/interfaces/app-comp-btn.interface';
import { FormHelper, FormRegister } from '../../../../../shared/models/interfaces/app-forms.interface';
import { RoleType, User } from '../../../../../shared/models/interfaces/app-users.interface';
import { ModalConfig } from '../../../../../shared/components/bootstrap/app-bs-modal/interfaces/app-bs-comp-modal.interface';
import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-register-page',
  templateUrl: './auth-register-page.component.html',
  styleUrl: './auth-register-page.component.scss'
})
export class AuthRegisterPageComponent implements OnInit {
  private readonly navRoutes = NAVIGATION_ROUTES;

  imgLazyBgConfig!: ImageLazyConfig;
  titleForm: string = 'Sign up';

  fgRegister!: FormGroup;
  fcUsername!: FormControl;
  fcUsernameConfig!: FormControlInputConfig;
  fcEmail!: FormControl;
  fcEmailConfig!: FormControlInputConfig;
  fcPwd!: FormControl;
  fcPwdConfig!: FormControlInputConfig;
  fcPwdVerify!: FormControl;
  fcPwdVerifyConfig!: FormControlInputConfig;
  fcTermsOfService!: FormControl;
  fcTermsOfServiceConfig!: FormControlInputConfig;

  btnRegisterConfig!: ButtonConfig;
  btnRegisterConfigStyle!: ButtonConfigStyle;
  btnResetConfig!: ButtonConfig;
  btnResetConfigStyle!: ButtonConfigStyle;
  btnLoginConfig!: ButtonConfig;
  btnLoginConfigStyle!: ButtonConfigStyle;
  isSpinnerActiveBtnRegister: boolean = false;

  modalShow: boolean = false;
  modalConfig!: ModalConfig;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly formsService: FormsService,
    private readonly validatorsService: ValidatorsService,
    private readonly usersService: UsersService,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService,
  ) {}

  ngOnInit(): void {
    this.createImgBg();
    this.createFormControls();
    this.createFormGroup();
    this.createBtns();
    this.createModal();
  }

  get linkLogin(): string {
    return `../${this.navRoutes.auth.login}`;
  }

  private createImgBg(): void {
    this.imgLazyBgConfig = {
      src: "../.././../../../../assets/images/web/auth/bg-auth_register.svg",
      alt: "Image background about Auth Register"
    }
  }
  private createFormControls(): void {
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
    this.fcUsername = this.fb.control( this.fcUsernameConfig.valueDefault, this.fcUsernameConfig.validators );
    const emailExistsAsyncValidator = this.validatorsService.createFcEmailExistsAsyncValidator();
    this.fcEmailConfig = this.formsService.createFormControlInputEmail( [ emailExistsAsyncValidator ] );
    this.fcEmail = this.fb.control(
      this.fcEmailConfig.valueDefault, { validators: this.fcEmailConfig.validators, asyncValidators: this.fcEmailConfig.asyncValidators } );

    this.fcPwdConfig = this.formsService.createFormControlInputPwd();
    this.fcPwd = this.fb.control( this.fcPwdConfig.valueDefault, this.fcPwdConfig.validators );
    this.fcPwdVerifyConfig = this.formsService.createFormControlInputPwdVerify();
    this.fcPwdVerify = this.fb.control( this.fcPwdVerifyConfig.valueDefault, this.fcPwdVerifyConfig.validators );
    this.fcTermsOfServiceConfig = {
      type: FormControlInputType.CHECKBOX,
      name: 'terms',
      lbl: 'I agree all statements in Terms of service',
      valueDefault: '',
      isMandatory: true,
    };
    this.fcTermsOfService = this.fb.control( this.fcTermsOfServiceConfig.valueDefault, Validators.requiredTrue );
  }
  private createFormGroup(): void {
    this.fgRegister = this.fb.group(
      {
        username: this.fcUsername,
        email: this.fcEmail,
        pwd: this.fcPwd,
        pwd_verify: this.fcPwdVerify,
        terms: this.fcTermsOfService,
      },
      {
        validators: [ this.validatorsService.createFgPwdVerifyValidator() ],
        updateOn: 'blur'
      }
    );
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
  private createModal(): void {
    this.modalConfig = {
      title: 'Register user',
      btnRight: 'OK',
      msg: "You have successfully registered, press 'OK' to navigate to the login screen.",
    }
  }

  showErrorCheckboxTerms(): boolean {
    return this.fcTermsOfService.touched && this.fcTermsOfService.dirty && !this.fgRegister.value.terms;
  }
  isValidCheckboxTerms(): boolean {
    return this.fcTermsOfService.touched && this.fcTermsOfService.dirty && this.fgRegister.value.terms;
  }

  // Btns Form
  onRegister(): void {
    if( this.fgRegister.valid ) {
      this.isSpinnerActiveBtnRegister = true;
      const user = this.createUser( this.fgRegister.value );
      this.usersService.addUser( user )
        .pipe(
          delay( 1000 )
        )
        .subscribe(
          ( resp ) => {
            if ( resp ) {
              this.modalShow = true;
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
      isTermsOfService: dataForm.terms,
      isActive: true,
      atCreate: new Date(),
      atUpdate: new Date(),
      atLastAccess: new Date(),
    }
  }

  onReset(): void {
    this.fgRegister.reset();
    this.fgRegister.markAllAsTouched();
    FormHelper.markAllControlsAsDirty( [ this.fgRegister ] );
  }

  // Btns Modal
  onClickModalClose(): void {
    this.modalShow = false;
    this.fgRegister.reset();
  }
  onClickModal(): void {
    this.router.navigateByUrl( `/${this.navRoutes.auth.self}/${this.navRoutes.auth.login}` );
  }
}
