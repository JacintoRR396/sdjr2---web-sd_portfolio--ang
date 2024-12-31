import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';

import { ValidatorsService } from './app-validators.service';

import { FormControlInputConfig, FormControlInputType } from '../components/bootstrap/app-bs-form-input/interfaces/app-comp-form-input.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private readonly validatorsService: ValidatorsService,
  ) { }

  createFormControlInputEmail( asyncValidators: AsyncValidatorFn[] = [] ): FormControlInputConfig {
    return {
      type: FormControlInputType.EMAIL,
      name: 'email',
      lbl: 'Email address',
      iconBS: 'bi-envelope-at',
      placeHolder: 'Enter your email',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ],
      asyncValidators,
      isMandatory: true,
    };
  }

  createFormControlInputPwd(): FormControlInputConfig {
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

  createFormControlInputPwdVerify(): FormControlInputConfig {
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
}
