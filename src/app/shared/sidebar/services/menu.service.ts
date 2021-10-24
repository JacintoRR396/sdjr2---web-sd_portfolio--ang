import { Injectable } from '@angular/core';

import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu = {
    items: [
      {
          name: 'Home',
          path: 'home'
      },
      {
          name: 'About',
          path: 'about'
      },
      {
          name: 'Resume',
          path: 'resume'
      },
      {
          name: 'Projects',
          path: 'projects'
      },
      {
          name: 'Recomendations',
          path: 'recomendations'
      },
      {
          name: 'Contact',
          path: 'contact'
      }
    ],
    size: 6
  };

  constructor() { }

  getMenu(): Menu {
    return this.menu;
  }

}
