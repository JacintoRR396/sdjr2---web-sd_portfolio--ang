import { Injectable } from '@angular/core';

import { ERRORS_STORAGE } from '../models/errors/app-storage.error';
import { ERRORS_FORM } from '../models/errors/app-form.error';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  /* Storage - LocalStorage */
  getLocalStorageLoad( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.LOCAL.LOAD, dto );
  }
  getLocalStorageSave( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.LOCAL.SAVE, dto );
  }
  getLocalStorageRemove( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.LOCAL.REMOVE, dto );
  }

  /* Storage - SessionStorage */
  getSessionStorageLoad( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.SESSION.LOAD, dto );
  }
  getSessionStorageSave( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.SESSION.SAVE, dto );
  }
  getSessionStorageRemove( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.SESSION.REMOVE, dto );
  }

  /* Storage - Cookies */
  getCookieLoad( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.COOKIES.LOAD, dto );
  }
  getCookieSave( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.COOKIES.SAVE, dto );
  }
  getCookieRemove( dto: string ): string {
    return this.getErrorStorageMsg( ERRORS_STORAGE.COOKIES.REMOVE, dto );
  }

  /* Form - Self */
  getFormNotValid(): string {
    return ERRORS_FORM.SELF.NOT_VALID;
  }
  getFormCredentials(): string {
    return ERRORS_FORM.SELF.CREDENTIALS;
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
  getFormControlEmail(): string {
    return ERRORS_FORM.CONTROL.EMAIL;
  }
  getFormControlPassword(): string {
    return ERRORS_FORM.CONTROL.PASSWORD;
  }

  /* Helper Methods */
  private getErrorStorageMsg( method: string, dto: string ): string {
    return method.replace( ERRORS_STORAGE.HELPER.DTO, dto );
  }
}
