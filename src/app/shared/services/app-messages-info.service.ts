import { Injectable } from '@angular/core';

import { INFO_STORAGE } from '../models/messages/app-storage.info';

@Injectable({
  providedIn: 'root'
})
export class MessagesInfoService {

  constructor() { }

  /* Storage - LocalStorage */
  getLocalStorageLoad( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.LOCAL.LOAD, dto );
  }
  getLocalStorageSave( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.LOCAL.SAVE, dto );
  }
  getLocalStorageRemove( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.LOCAL.REMOVE, dto );
  }
  getLocalStorageRemoveAll(): string {
    return INFO_STORAGE.LOCAL.REMOVE_ALL;
  }

  /* Storage - SessionStorage */
  getSessionStorageLoad( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.SESSION.LOAD, dto );
  }
  getSessionStorageSave( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.SESSION.SAVE, dto );
  }
  getSessionStorageRemove( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.SESSION.REMOVE, dto );
  }
  getSeesionStorageRemoveAll(): string {
    return INFO_STORAGE.SESSION.REMOVE_ALL;
  }

  /* Storage - Cookies */
  getCookieLoad( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.COOKIES.LOAD, dto );
  }
  getCookieSave( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.COOKIES.SAVE, dto );
  }
  getCookieRemove( dto: string ): string {
    return this.getInfoStorageMsg( INFO_STORAGE.COOKIES.REMOVE, dto );
  }

  /* Helper Methods */
  private getInfoStorageMsg( method: string, dto: string ): string {
    return method.replace( INFO_STORAGE.HELPER.DTO, dto );
  }
}
