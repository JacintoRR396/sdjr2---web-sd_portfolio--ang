import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthStore } from '../../../../../../shared/store/app-auth.service';
import { User } from '../../../../../../shared/models/interfaces/app-users.interface';
import { ADMIN_SIDEBAR_MENU } from '../models/mocks/admin-sidebar-menu-shared.mock';
import { NavLinkItem } from '../../../../../../shared/models/interfaces/app-nav-links.interface';

@Component({
  selector: 'sdjr2--admin-sidebar-shared',
  templateUrl: './admin-sidebar-shared.component.html',
  styleUrl: './admin-sidebar-shared.component.scss'
})
export class AdminSidebarSharedComponent {

  linksMenuProfile: NavLinkItem[] = ADMIN_SIDEBAR_MENU.items;
  urlBrand: string = 'assets/images/web/common/programming.svg';

  constructor(
    private readonly authStore: AuthStore,
  ){}

  get linkWeb(): string {
    return '/';
  }
  get user(): Observable<User | undefined> {
    return this.authStore.user$;
  }
}
