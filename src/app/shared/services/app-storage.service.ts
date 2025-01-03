import { Injectable } from '@angular/core';

import { MessagesInfoService } from './app-messages-info.service';
import { MessagesErrorService } from './app-messages-error.service';

import { logConsole, LogLevel } from '../models/app-debug-operator.model';
@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor(
    private readonly messagesInfoService: MessagesInfoService,
    private readonly messagesErrorService: MessagesErrorService,
  ){}

  /* LocalStorage */
  public existsLocalStorage( item: string, showLog: boolean = false ): boolean {
    if ( !localStorage.getItem( item ) ) {
      if( showLog ) {
        logConsole( LogLevel.INFO, 'StorageService', this.messagesErrorService.getStorageNotItemFound( item ) );
      }
      return false;
    }
    return true;
  }

  public loadLocalStorageBase64( item: string, dto: string ): any {
    if ( !this.existsLocalStorage( item, true ) ) return;

    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getLocalStorageLoad( dto ) );
    const json: string = localStorage.getItem( item )!;
    return this.decode( json );
  }

  public saveLocalStorageBase64( item: string, data: any, dto: string ): void {
    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getLocalStorageSave( dto ) );
    const jsonStr: string = this.encode( data );
    localStorage.setItem( item, jsonStr );
  }

  public removeLocalStorageBase64( item: string, dto: string ): void {
    if ( !this.existsLocalStorage( item, true ) ) return;

    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getLocalStorageRemove( dto ) );
    localStorage.removeItem( item );
  }

  public removeAllLocalStorageBase64(): void {
    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getLocalStorageRemoveAll() );
    localStorage.clear();
  }

  /* SessionStorage */
  public existsSessionStorage( item: string, showLog: boolean = false ): boolean {
    if ( !sessionStorage.getItem( item ) ) {
      if( showLog ) {
        logConsole( LogLevel.INFO, 'StorageService', this.messagesErrorService.getStorageNotItemFound( item ) );
      }
      return false;
    }
    return true;
  }

  public loadSessionStorageBase64( item: string, dto: string ): any {
    if ( !this.existsSessionStorage( item, true ) ) return;

    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getSessionStorageLoad( dto ) );
    const json: string = sessionStorage.getItem( item )!;
    return this.decode( json );
  }

  public saveSessionStorageBase64( item: string, data: any, dto: string ): void {
    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getSessionStorageSave( dto ) );
    const jsonStr: string = this.encode( data );
    sessionStorage.setItem( item, jsonStr );
  }

  public removeSessionStorageBase64( item: string, dto: string ): void {
    if ( !this.existsSessionStorage( item, true ) ) return;

    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getSessionStorageRemove( dto ) );
    sessionStorage.removeItem( item );
  }

  public removeAllSessionStorageBase64(): void {
    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getSeesionStorageRemoveAll() );
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
          logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getCookieLoad( name ) );
          return cookie.substring( cookieName.length, cookie.length );
        }
    }

    logConsole( LogLevel.INFO, 'StorageService', this.messagesErrorService.getStorageNotItemFound( name ) );
    return '';
  }

  public saveCookie( name: string, value: string, expireDays: number, path: string = '' ): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const pathChain = path ? `; path=${path}` : '';

    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getCookieSave( name ) );
    document.cookie = `${name}=${value}; ${expires}${pathChain}; SameSite=Lax`;
  }

  public removeCookie( name: string ): void {
    logConsole( LogLevel.DEBUG, 'StorageService', this.messagesInfoService.getCookieRemove( name ) );
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
