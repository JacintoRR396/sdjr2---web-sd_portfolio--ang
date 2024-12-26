import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { CONST } from '../utils/app-constants.util';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  createEmailValidator(): ValidatorFn {
    return ( control: AbstractControl ) : ValidationErrors | null => {
      const value = control.value;
      if ( !value ) { return null; }
      const emailValid = CONST.REG_EXP.EMAIL.test( value );
      return !emailValid ? { emailFormat: true } : null;
    }
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return ( control: AbstractControl ) : ValidationErrors | null => {
      const value = control.value;
      if ( !value ) { return null; }
      const passwordValid = CONST.REG_EXP.PASSWORD.test( value );
      return !passwordValid ? { passwordStrength: true } : null;
    }
  }
}
