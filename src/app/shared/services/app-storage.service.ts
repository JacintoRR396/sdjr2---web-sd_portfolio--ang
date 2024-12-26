import { Injectable } from '@angular/core';

import { ErrorsService } from './app-errors.service';

import { logConsole, LogginLevel } from '../models/app-debug-operator.model';
@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor( private readonly errorsService: ErrorsService ){}

  /* LocalStorage */
  public existsLocalStorage( item: string, showLog: boolean = false ): boolean {
    if ( !localStorage.getItem( item ) ) {
      if( showLog ) {
        logConsole( LogginLevel.INFO, 'StorageService', this.errorsService.getStorageNotItemFound( item ) );
      }
      return false;
    }
    return true;
  }

  public loadLocalStorageBase64( item: string, dto: string ): any {
    if ( !this.existsLocalStorage( item, true ) ) return;

    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getLocalStorageLoad( dto ) );
    const json: string = localStorage.getItem( item )!;
    return this.decode( json );
  }

  public saveLocalStorageBase64( item: string, data: any, dto: string ): void {
    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getLocalStorageSave( dto ) );
    const jsonStr: string = this.encode( data );
    localStorage.setItem( item, jsonStr );
  }

  public removeLocalStorageBase64( item: string, dto: string ): void {
    if ( !this.existsLocalStorage( item, true ) ) return;

    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getLocalStorageRemove( dto ) );
    localStorage.removeItem( item );
  }

  public removeAllLocalStorageBase64(): void {
    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getLocalStorageRemoveAll() );
    localStorage.clear();
  }

  /* SessionStorage */
  public existsSessionStorage( item: string, showLog: boolean = false ): boolean {
    if ( !sessionStorage.getItem( item ) ) {
      if( showLog ) {
        logConsole( LogginLevel.INFO, 'StorageService', this.errorsService.getStorageNotItemFound( item ) );
      }
      return false;
    }
    return true;
  }

  public loadSessionStorageBase64( item: string, dto: string ): any {
    if ( !this.existsSessionStorage( item, true ) ) return;

    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getSessionStorageLoad( dto ) );
    const json: string = sessionStorage.getItem( item )!;
    return this.decode( json );
  }

  public saveSessionStorageBase64( item: string, data: any, dto: string ): void {
    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getSessionStorageSave( dto ) );
    const jsonStr: string = this.encode( data );
    sessionStorage.setItem( item, jsonStr );
  }

  public removeSessionStorageBase64( item: string, dto: string ): void {
    if ( !this.existsSessionStorage( item, true ) ) return;

    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getSessionStorageRemove( dto ) );
    sessionStorage.removeItem( item );
  }

  public removeAllSessionStorageBase64(): void {
    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getSeesionStorageRemoveAll() );
    sessionStorage.clear();
  }

  /* Cookies */
  public loadCookie( name: string ): string {
    const cookies: Array<string> = decodeURIComponent(document.cookie).split(';');
    const numCookies: number = cookies.length;
    const cookieName = `${name}=`;
    let cookie: string;

    for (let i  = 0; i < numCookies; i += 1) {
      cookie = cookies[i].replace(/^\s+/g, '');
        if ( cookie.startsWith( cookieName ) ) {
          logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getCookieLoad( name ) );
          return cookie.substring( cookieName.length, cookie.length );
        }
    }

    logConsole( LogginLevel.INFO, 'StorageService', this.errorsService.getStorageNotItemFound( name ) );
    return '';
  }

  public saveCookie( name: string, value: string, expireDays: number, path: string = '' ): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const pathChain = path ? `; path=${path}` : '';

    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getCookieSave( name ) );
    document.cookie = `${name}=${value}; ${expires}${pathChain}; SameSite=Lax`;
  }

  public removeCookie( name: string ): void {
    logConsole( LogginLevel.DEBUG, 'StorageService', this.errorsService.getCookieRemove( name ) );
    this.saveCookie(name, '', -1);
  }

  /* Helper Methods */
  private encode(data: any): string {
    const encodeBase64: string = btoa(data);
    return JSON.stringify(encodeBase64);
  }

  private decode(json: string): any {
    const obj: string = JSON.parse(json);
    return atob(obj);
  }
}
