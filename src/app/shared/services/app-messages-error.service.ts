import { Injectable } from '@angular/core';

import { ERRORS_FORM } from '../models/errors/app-form.error';
import { ERRORS_STORAGE } from '../models/errors/app-storage.error';

@Injectable({
  providedIn: 'root'
})
export class MessagesErrorService {

  constructor() { }

  /* Storage - Generic */
  getStorageNotItemFound( item: string ): string {
    return ERRORS_STORAGE.SELF.NOT_FOUND.replace( ERRORS_STORAGE.HELPER.ITEM, item );
  }

  /* Form - Self */
  getFormNotValid(): string {
    return ERRORS_FORM.SELF.NOT_VALID;
  }
  getFormCredentialsNotValid(): string {
    return ERRORS_FORM.SELF.CREDENTIALS;
  }
  getFormAccountIsInactive(): string {
    return ERRORS_FORM.SELF.ACC_INACTIVE;
  }

  /* Form - Controls */
  getFormControlRequired( nameControl: string ): string {
    return ERRORS_FORM.CONTROL.BASE_REQUIRED.replace( ERRORS_FORM.HELPER.NAME_CONTROL, nameControl );
  }
  getFormControlMinLength( nameControl: string, reqLength: string, actLength: string ): string {
    return ERRORS_FORM.CONTROL.BASE_MIN_LENGTH.replace( ERRORS_FORM.HELPER.NAME_CONTROL, nameControl )
        .replace( ERRORS_FORM.HELPER.REQ_LENGTH, reqLength )
        .replace( ERRORS_FORM.HELPER.ACT_LENGTH, actLength );
  }
  getFormControlMaxLength( nameControl: string, reqLength: string, actLength: string ): string {
    return ERRORS_FORM.CONTROL.BASE_MAX_LENGTH.replace( ERRORS_FORM.HELPER.NAME_CONTROL, nameControl )
        .replace( ERRORS_FORM.HELPER.REQ_LENGTH, reqLength )
        .replace( ERRORS_FORM.HELPER.ACT_LENGTH, actLength );
  }
  getFormControlFormat( nameControl: string ): string {
    return ERRORS_FORM.CONTROL.BASE_FORMAT.replace( ERRORS_FORM.HELPER.NAME_CONTROL, nameControl );
  }
  getFormControlEmailFormat(): string {
    return ERRORS_FORM.CONTROL.EMAIL_FORMAT;
  }
  getFormControlEmailExists(): string {
    return ERRORS_FORM.CONTROL.EMAIL_EXISTS;
  }
  getFormControlEmailNotExists(): string {
    return ERRORS_FORM.CONTROL.EMAIL_NOT_EXISTS;
  }
  getFormControlPwdFormat(): string {
    return ERRORS_FORM.CONTROL.PWD_FORMAT;
  }
  getFormControlPwdVerify(): string {
    return ERRORS_FORM.CONTROL.PWD_VERIFY;
  }

  /* Helper Methods */
  private getErrorStorageMsg( method: string, dto: string ): string {
    return method.replace( ERRORS_STORAGE.HELPER.DTO, dto );
  }
}
