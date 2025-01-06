import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { UsersService } from '../../layouts/auth/shared/services/auth-users.service';
import { MessagesErrorService } from './app-messages-error.service';

import { CONST } from '../utils/app-constants.util';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(
    private readonly usersService: UsersService,
    private readonly messagesErrorService: MessagesErrorService,
  ){}

  // User
  createFcEmailFormatValidator(): ValidatorFn {
    return ( control: AbstractControl ) : ValidationErrors | null => {
      const value = control.value;
      if ( !value ) { return null; }
      const emailValid = CONST.REG_EXP.EMAIL.test( value );
      return !emailValid ? { emailFormat: true } : null;
    }
  }
  createFcEmailExistsAsyncValidator(): AsyncValidatorFn {
    return ( control: AbstractControl ) => {
      return this.usersService.getUserByEmail( control.value )
        .pipe(
          map( user => user ? { emailExists: true } : null )
        );
    }
  }
  createFcEmailNotExistsAsyncValidator(): AsyncValidatorFn {
    return ( control: AbstractControl ) => {
      return this.usersService.getUserByEmail( control.value )
        .pipe(
          map( user => user ? null : { emailNotExists: true } )
        );
    }
  }

  createFcPwdStrengthValidator(): ValidatorFn {
    return ( control: AbstractControl ) : ValidationErrors | null => {
      const value = control.value;
      if ( !value ) { return null; }
      const passwordValid = CONST.REG_EXP.PASSWORD.test( value );
      return !passwordValid ? { pwdStrength: true } : null;
    }
  }
  createFgPwdVerifyValidator(): Validators {
    return ( fg: FormGroup ): Validators | null => {
      const fcPwdValue = fg.get( 'pwd' )!.value;
      const fcPwdVerifyValue = fg.get( 'pwd_verify' )!.value;
      if( fcPwdValue && fcPwdVerifyValue ) {
        return ( fcPwdValue === fcPwdVerifyValue ) ? null : { pwdVerify: true };
      }
      return null;
    }
  }

  // Helpers
  // Text, Email, Password
  checkErrorsFCInput( fc: FormControl, fcLabel: string, fgErrors?: ValidationErrors ): string {
    const label = fcLabel.toLocaleLowerCase();
    if( fc.errors?.['required'] ) {
      return this.messagesErrorService.getFormControlRequired( label );
    } else if( fc.errors?.['minlength'] ) {
      return this.messagesErrorService.getFormControlMinLength(
        label, fc.errors?.['minlength'].requiredLength, fc.errors?.['minlength'].actualLength );
    } else if( fc.errors?.['maxlength'] ) {
      return this.messagesErrorService.getFormControlMaxLength(
        label, fc.errors?.['maxlength'].requiredLength, fc.errors?.['maxlength'].actualLength );
    } else if( fc.errors?.['email'] ) {
      return this.messagesErrorService.getFormControlEmailFormat();
    } else if( fc.errors?.['emailExists'] ) {
      return this.messagesErrorService.getFormControlEmailExists();
    } else if( fc.errors?.['emailNotExists'] ) {
      return this.messagesErrorService.getFormControlEmailNotExists();
    } else if( fc.errors?.['pwdStrength'] ) {
      return this.messagesErrorService.getFormControlPwdFormat();
    } else if ( fgErrors?.['pwdVerify'] ) {
      return this.messagesErrorService.getFormControlPwdVerify();
    } else {
      return '';
    }
  }
}
