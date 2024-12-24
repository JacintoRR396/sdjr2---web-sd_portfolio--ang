import { Component } from '@angular/core';

import { WebHeaderLink } from '../../models/interfaces/web-header-links-shared.interace';
import { WEB_LINKS_HEADER } from '../../models/mocks/web-header-links-shared.mock';
import { WebHeaderMenuItem } from '../../models/interfaces/web-header-menu-shared.interace';
import { WEB_MENU_HEADER } from '../../models/mocks/web-header-menu-shared.mock';

@Component({
  selector: 'sdjr2--web-header-nav-shared',
  templateUrl: './web-header-nav-shared.component.html',
  styleUrl: './web-header-nav-shared.component.scss'
})
export class WebHeaderNavSharedComponent {

  linkItems: WebHeaderLink[] = WEB_LINKS_HEADER.items;
  menuItems: WebHeaderMenuItem[] = WEB_MENU_HEADER.items;

  get linkWeb(): string {
    return this.linkItems[0].routerLink;
  }
}
