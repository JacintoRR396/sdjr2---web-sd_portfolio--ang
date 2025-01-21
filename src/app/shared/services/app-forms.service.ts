import { Injectable } from '@angular/core';
import { AsyncValidatorFn, FormControl, ValidationErrors, Validators } from '@angular/forms';

import { ValidatorsService } from './app-validators.service';

import { FormControlInputConfig, FormControlInputType } from '../components/bootstrap/app-bs-form-input/interfaces/app-comp-form-input.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private readonly validatorsService: ValidatorsService,
  ) { }

  // User
  createFcInputEmail( asyncValidators: AsyncValidatorFn[] = [] ): FormControlInputConfig {
    return {
      type: FormControlInputType.EMAIL,
      name: 'email',
      lbl: 'Email address',
      iconBS: 'bi-envelope-at',
      placeHolder: 'Enter your email',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(15), Validators.maxLength(60),
        this.validatorsService.createFcEmailFormatValidator() ],
      asyncValidators,
      isMandatory: true,
    };
  }

  createFcInputPwd(): FormControlInputConfig {
    return {
      type: FormControlInputType.PASSWORD,
      name: 'pwd',
      lbl: 'Password',
      iconBS: 'bi-lock',
      placeHolder: 'Enter your password',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createFcPwdStrengthValidator() ],
      isMandatory: true,
    };
  }

  createFcInputPwdVerify(): FormControlInputConfig {
    return {
      type: FormControlInputType.PASSWORD,
      name: 'pwd_verify',
      lbl: 'Password verify',
      iconBS: 'bi-key',
      placeHolder: 'Enter your password verify',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createFcPwdStrengthValidator() ],
      isMandatory: true,
    };
  }

  // Helpers
  isValidFc( fc: FormControl, fgErrors?: ValidationErrors ): boolean {
    return fc.touched && fc.dirty &&
      ( fc.errors === null && fgErrors === undefined || fgErrors === null );
  }
  showErrorsFc( fc: FormControl, fgErrors?: ValidationErrors ): boolean {
    return fc.touched && fc.dirty && ( !!fc.errors || !!fgErrors );
  }
    // Text, Email, Password
  checkErrorsFcInput( fc: FormControl, fcLabel: string, fgErrors?: ValidationErrors ): string {
    if( fgErrors ) {
      return this.validatorsService.checkErrorsFCInput( fc, fcLabel, fgErrors );
    } else {
      return this.validatorsService.checkErrorsFCInput( fc, fcLabel );
    }
  }
}
