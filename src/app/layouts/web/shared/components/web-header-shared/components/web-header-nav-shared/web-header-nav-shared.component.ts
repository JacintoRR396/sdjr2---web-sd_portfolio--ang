import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthStore } from '../../../../../../../shared/store/app-auth.service';

import { User } from '../../../../../../../shared/models/interfaces/app-users.interface';
import { WebHeaderLink } from '../../models/interfaces/web-header-links-shared.interface';
import { WebHeaderMenuItem } from '../../models/interfaces/web-header-menu-shared.interface';
import { WEB_LINKS_HEADER } from '../../models/mocks/web-header-links-shared.mock';
import { WEB_MENU_HEADER } from '../../models/mocks/web-header-menu-shared.mock';

@Component({
  selector: 'sdjr2--web-header-nav-shared',
  templateUrl: './web-header-nav-shared.component.html',
  styleUrl: './web-header-nav-shared.component.scss'
})
export class WebHeaderNavSharedComponent {

  linkItems: WebHeaderLink[] = WEB_LINKS_HEADER.items;
  menuItems: WebHeaderMenuItem[] = WEB_MENU_HEADER.items;

  constructor(
    private readonly authStore: AuthStore,
  ){}

  get linkWeb(): string {
    return this.linkItems[0].routerLink;
  }
  get user(): Observable<User | undefined> {
    return this.authStore.user$;
  }
}
