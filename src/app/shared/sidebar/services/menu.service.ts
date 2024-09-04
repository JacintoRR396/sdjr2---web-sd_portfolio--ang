import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Menu } from '../interfaces/menu.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  menu: Menu;

  constructor( private httpClient: HttpClient ) {}

  getMenuDefault(): Menu {
    return {
      items: [],
      size: 0
    };
  }

  getMenu(): Observable<Menu> {
    return this.httpClient.get<Menu>( `${environment.baseUrl}/configMenu` );
  }

}
