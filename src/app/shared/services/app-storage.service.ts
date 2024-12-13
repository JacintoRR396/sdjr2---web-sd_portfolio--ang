import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  /* LocalStorage */
  public loadLocalStoreBase64(name: string): any {
    if (!localStorage.getItem(name)) return;

    const json: string = localStorage.getItem(name)!;
    return this.decode(json);
  }

  public saveLocalStoreBase64(name: string, data: any): void {
    const jsonStr: string = this.encode(data);
    localStorage.setItem(name, jsonStr);
  }

  public deleteLocalStoreBase64(name: string): void {
    if (!localStorage.getItem(name)) return;

    localStorage.removeItem(name);
  }

  public deleteAllLocalStoreBase64(name: string): void {
    localStorage.clear();
  }

  /* SessionStorage */
  public loadSessionStoreBase64(name: string): any {
    if (!sessionStorage.getItem(name)) return;

    const json: string = sessionStorage.getItem(name)!;
    return this.decode(json);
  }

  public saveSessionStoreBase64(name: string, data: any): void {
    const jsonStr: string = this.encode(data);
    sessionStorage.setItem(name, jsonStr);
  }

  public deleteSessionStoreBase64(name: string): void {
    if (!sessionStorage.getItem(name)) return;

    sessionStorage.removeItem(name);
  }

  public deleteAllSessionStoreBase64(name: string): void {
    sessionStorage.clear();
  }

  /* Cookies */
  public loadCookie(name: string): string {
    const cookies: Array<string> = decodeURIComponent(document.cookie).split(';');
    const numCookies: number = cookies.length;
    const cookieName = `${name}=`;
    let cookie: string;

    for (let i  = 0; i < numCookies; i += 1) {
      cookie = cookies[i].replace(/^\s+/g, '');
        if (cookie.startsWith(cookieName)) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return '';
  }

  public saveCookie(name: string, value: string, expireDays: number, path: string = ''): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const pathChain = path ? `; path=${path}` : '';

    document.cookie = `${name}=${value}; ${expires}${pathChain}; SameSite=Lax`;
  }

  public deleteCookie(name: string): void {
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
