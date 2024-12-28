import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

import { ValidatorsService } from './app-validators.service';

import { FormControlInputConfig, FormControlInputType } from '../components/bootstrap/app-bs-form-input/interfaces/app-comp-form.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private readonly validatorsService: ValidatorsService,
  ) { }

  createFormControlInputEmail(): FormControlInputConfig {
    return {
      type: FormControlInputType.EMAIL,
      name: 'email',
      lbl: 'Email address',
      iconBS: 'bi-envelope-at',
      placeHolder: 'Enter your email',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ],
      isMandatory: true,
    };
  }

  createFormControlInputPassword(): FormControlInputConfig {
    return {
      type: FormControlInputType.PASSWORD,
      name: 'pwd',
      lbl: 'Password',
      iconBS: 'bi-lock',
      placeHolder: 'Enter your password',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createPasswordStrengthValidator() ],
      isMandatory: true,
    };
  }

  createFormControlInputPasswordVerify(): FormControlInputConfig {
    return {
      type: FormControlInputType.PASSWORD,
      name: 'pwd_verify',
      lbl: 'Password verify',
      iconBS: 'bi-key',
      placeHolder: 'Enter your password verify',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(8), Validators.maxLength(40),
        this.validatorsService.createPasswordStrengthValidator() ],
      isMandatory: true,
    };
  }
}
