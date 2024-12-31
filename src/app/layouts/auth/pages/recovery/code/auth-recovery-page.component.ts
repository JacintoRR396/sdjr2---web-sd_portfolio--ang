import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormsService } from '../../../../../shared/services/app-forms.service';
import { ValidatorsService } from '../../../../../shared/services/app-validators.service';
import { MessagesStore } from '../../../../../shared/store/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';

import { ImageLazyConfig } from '../../../../../shared/components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';
import { FormControlInputConfig } from '../../../../../shared/components/bootstrap/app-bs-form-input/interfaces/app-comp-form-input.interface';
import { ButtonConfig, ButtonConfigStyle, ButtonType } from '../../../../../shared/components/bootstrap/app-bs-btn/interfaces/app-comp-btn.interface';
import { FormRegister } from '../../../../../shared/models/interfaces/app-forms.interface';
import { ModalConfig } from '../../../../../shared/components/bootstrap/app-bs-modal/interfaces/app-bs-comp-modal.interface';
import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-recovery-page',
  templateUrl: './auth-recovery-page.component.html',
  styleUrl: './auth-recovery-page.component.scss'
})
export class AuthRecoveryPageComponent implements OnInit {
  private readonly navRoutes = NAVIGATION_ROUTES;

  imgLazyBgConfig!: ImageLazyConfig;
  titleForm: string = 'Password Reset';

  fgRecovery!: FormGroup;
  fcEmail!: FormControl;
  fcEmailConfig!: FormControlInputConfig;

  btnRecoveryConfig!: ButtonConfig;
  btnRecoveryConfigStyle!: ButtonConfigStyle;
  btnLoginConfig!: ButtonConfig;
  btnLoginConfigStyle!: ButtonConfigStyle;
  btnRegisterConfig!: ButtonConfig;
  btnRegisterConfigStyle!: ButtonConfigStyle;
  isSpinnerActiveBtnRecovery: boolean = false;

  modalConfig!: ModalConfig;
  modalShow: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly formsService: FormsService,
    private readonly validatorsService: ValidatorsService,
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

  get linkLogin(): string {
    return `../${this.navRoutes.auth.login}`;
  }
  get linkRegister(): string {
    return `../${this.navRoutes.auth.register}`;
  }

  private createImgBg(): void {
    this.imgLazyBgConfig = {
      src: "../.././../../../../assets/images/web/auth/bg-auth_recovery.svg",
      alt: "Image background about Auth Register"
    }
  }
  private createFormConstrols(): void {
    const emailNotExistsAsyncValidator = this.validatorsService.createFcEmailNotExistsAsyncValidator();
    this.fcEmailConfig = this.formsService.createFormControlInputEmail( [ emailNotExistsAsyncValidator ] );
    this.fcEmail = this.fb.control(
      this.fcEmailConfig.valueDefault, { validators: this.fcEmailConfig.validators, asyncValidators: this.fcEmailConfig.asyncValidators } );
  }
  private createFormGroup(): void {
    this.fgRecovery = this.fb.group({
      email: this.fcEmail
    });
  }
  private createBtns(): void {
    this.btnRecoveryConfig = {
      type: ButtonType.BUTTON,
      name: 'Recovery',
      iconBS: 'bi-life-preserver',
    }
    this.btnRecoveryConfigStyle = {
      color: 'btn-primary',
      width: 'w-100',
    }
    this.btnLoginConfig = {
      type: ButtonType.LINK,
      name: 'Login',
      link: this.linkLogin,
    }
    this.btnLoginConfigStyle = {
      color: 'text-success',
      space: 'ms-1',
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
      title: 'Send email',
      btnRight: 'OK',
    }
  }

  // Btns Form
  onRecovery(): void {
    if( this.fgRecovery.valid ) {
      this.isSpinnerActiveBtnRecovery = true;
      const fgValues: FormRegister = this.fgRecovery.value;
      // TODO : send message to email
      this.modalShow = true;
      this.isSpinnerActiveBtnRecovery = false;
    } else {
      this.messagesStore.showErrors( this.messagesErrorService.getFormNotValid() );
    }
  }

  // Btns Modal
  onClickModalClose(): void {
    this.modalShow = false;
    this.fgRecovery.reset();
  }
  onClickModal(): void {
    this.router.navigateByUrl( `/${this.navRoutes.auth.self}/${this.navRoutes.auth.login}` );
  }
}
