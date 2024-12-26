import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { AuthStore } from '../../../../../services/auth.service';
import { MessagesService } from '../../../../../shared/services/app-messages.service';
import { ErrorsService } from '../../../../../shared/services/app-errors.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';
import { ErrorsFormLogin } from '../../../shared/models/interfaces/auth-form-errors.interace';
import { createPasswordStrengthValidator } from '../../../../../shared/models/validations/app-form.validator';

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
    private readonly messagesService: MessagesService,
    private readonly errorsService: ErrorsService
  ) {
    this.fgLogin = this.fb.group({
      email: [ '', [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(8), Validators.maxLength(40), createPasswordStrengthValidator() ] ],
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
      return this.errorsService.getFormControlRequired( 'email' );
    } else if( this.email.errors?.['minlength'] ) {
      return this.errorsService.getFormControlMinLength(
        'email', this.email.errors?.['minlength'].requiredLength, this.email.errors?.['minlength'].actualLength );
    } else if( this.email.errors?.['maxlength'] ) {
      return this.errorsService.getFormControlMaxLength(
        'email', this.email.errors?.['maxlength'].requiredLength, this.email.errors?.['maxlength'].actualLength );
    } else if( this.email.errors?.['email'] ) {
      return this.errorsService.getFormControlEmail();
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
      return this.errorsService.getFormControlRequired( 'password' );
    } else if( this.password.errors?.['minlength'] ) {
      return this.errorsService.getFormControlMinLength(
        'password', this.password.errors?.['minlength'].requiredLength, this.password.errors?.['minlength'].actualLength );
    } else if( this.password.errors?.['maxlength'] ) {
      return this.errorsService.getFormControlMaxLength(
        'password', this.password.errors?.['maxlength'].requiredLength, this.password.errors?.['maxlength'].actualLength );
    } else if( this.password.errors?.['passwordStrength'] ) {
      return this.errorsService.getFormControlPassword();
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
      this.messagesService.showErrors( this.errorsService.getFormNotValid() );
    }
  }
}
