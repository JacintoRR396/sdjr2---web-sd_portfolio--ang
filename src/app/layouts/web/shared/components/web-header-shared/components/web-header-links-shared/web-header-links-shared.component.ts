import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthStore } from '../../../../../../../shared/store/app-auth.service';

import { WebHeaderLink } from '../../models/interfaces/web-header-links-shared.interace';
import { WEB_LINKS_HEADER } from '../../models/mocks/web-header-links-shared.mock';

@Component({
  selector: 'sdjr2--web-header-links-shared',
  templateUrl: './web-header-links-shared.component.html',
  styleUrl: './web-header-links-shared.component.scss'
})
export class WebHeaderLinksSharedComponent {

  linkItems: WebHeaderLink[] = WEB_LINKS_HEADER.items;

  constructor( private readonly authStore: AuthStore ){}

  get isLoggedIn(): Observable<boolean>{
    return this.authStore.isLoggedIn$;
  }
  get isLoggedOut(): Observable<boolean>{
    return this.authStore.isLoggedOut$;
  }

  onLogout(): void {
    this.authStore.logout();
  }
}
