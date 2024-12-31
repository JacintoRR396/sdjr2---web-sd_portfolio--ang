import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { UsersService } from './app-users.service';

import { CONST } from '../utils/app-constants.util';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(
    private readonly usersService: UsersService
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
}
