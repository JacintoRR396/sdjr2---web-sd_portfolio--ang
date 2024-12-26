import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { AuthStore } from '../../../../../services/auth.service';
import { MessagesStore } from '../../../../../shared/services/app-messages.service';
import { MessagesErrorService } from '../../../../../shared/services/app-messages-error.service';
import { ValidatorsService } from '../../../../../shared/services/app-validators.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';
import { ErrorsFormLogin } from '../../../shared/models/interfaces/auth-form-errors.interace';

@Component({
  selector: 'sdjr2--auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.scss'
})
export class AuthLoginPageComponent {

  @ViewChild('inputPassword') inputPass! : ElementRef<HTMLInputElement>;

  navRoutes = NAVIGATION_ROUTES;
  fgLogin: UntypedFormGroup;
  errors: ErrorsFormLogin = {
    email: '',
    password: '',
  };
  canShowPassword: boolean = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly router: Router,
    private readonly authStore: AuthStore,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService,
    private readonly validatorsService: ValidatorsService,
  ) {
    this.fgLogin = this.fb.group({
      email: [ '', [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createPasswordStrengthValidator() ] ],
      rememberMe: [ false ],
    });
    this.email.valueChanges
      .pipe( debounceTime(300), distinctUntilChanged() )
      .subscribe( () => this.errors.email = this.checkEmailErrors() );
    this.password.valueChanges
      .pipe( debounceTime(300), distinctUntilChanged() )
      .subscribe( () => this.errors.password = this.checkPasswordErrors() );
  }

  get email(): AbstractControl {
    return this.fgLogin.controls[ 'email' ];
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

  showEmailErrors(): boolean {
    return this.email.touched && this.email.dirty && !!this.email.errors;
  }
  checkEmailErrors(): string {
    if( this.email.errors?.['required'] ) {
      return this.messagesErrorService.getFormControlRequired( 'email' );
    } else if( this.email.errors?.['minlength'] ) {
      return this.messagesErrorService.getFormControlMinLength(
        'email', this.email.errors?.['minlength'].requiredLength, this.email.errors?.['minlength'].actualLength );
    } else if( this.email.errors?.['maxlength'] ) {
      return this.messagesErrorService.getFormControlMaxLength(
        'email', this.email.errors?.['maxlength'].requiredLength, this.email.errors?.['maxlength'].actualLength );
    } else if( this.email.errors?.['email'] ) {
      return this.messagesErrorService.getFormControlEmail();
    } else
      return '';
  }
  isEmailValid(): boolean {
    return this.email.touched && this.email.dirty && this.email.errors === null;
  }

  showPasswordErrors(): boolean {
    return this.password.touched && this.password.dirty && !!this.password.errors;
  }
  checkPasswordErrors(): string {
    if( this.password.errors?.['required'] ) {
      return this.messagesErrorService.getFormControlRequired( 'password' );
    } else if( this.password.errors?.['minlength'] ) {
      return this.messagesErrorService.getFormControlMinLength(
        'password', this.password.errors?.['minlength'].requiredLength, this.password.errors?.['minlength'].actualLength );
    } else if( this.password.errors?.['maxlength'] ) {
      return this.messagesErrorService.getFormControlMaxLength(
        'password', this.password.errors?.['maxlength'].requiredLength, this.password.errors?.['maxlength'].actualLength );
    } else if( this.password.errors?.['passwordStrength'] ) {
      return this.messagesErrorService.getFormControlPassword();
    } else
      return '';
  }
  isPasswordValid(): boolean {
    return this.password.touched && this.password.dirty && this.password.errors === null;
  }

  onShowPassword(): void {
    this.canShowPassword = !this.canShowPassword;
    if ( this.canShowPassword ) {
      this.inputPass.nativeElement.type = 'text';
    } else {
      this.inputPass.nativeElement.type = 'password';
    }
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
