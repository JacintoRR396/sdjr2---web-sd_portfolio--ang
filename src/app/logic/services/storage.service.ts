import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public saveLocalStoreBase64(name: string, data: any): void {
    const encodeBase64: string = btoa(data);
    const jsonString: string = JSON.stringify(encodeBase64);
    localStorage.setItem(name, jsonString);
  }

  public loadLocalStoreBase64(name: string): any {
    if (!localStorage.getItem(name)) return;
    const data: string = localStorage.getItem(name)!;
    const obj: string = JSON.parse(data);
    return atob(obj);
  }
}
