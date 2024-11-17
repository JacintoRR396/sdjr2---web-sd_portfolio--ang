import { Component } from '@angular/core';

import { WebHeaderMenuItem } from '../../models/interfaces/web-header-menu-shared.interace';
import { menuHeader } from '../../models/mocks/web-header-menu-shared.mock';

@Component({
  selector: 'sdjr2--web-header-nav-shared',
  templateUrl: './web-header-nav-shared.component.html',
  styleUrl: './web-header-nav-shared.component.scss'
})
export class WebHeaderNavSharedComponent {

  items: WebHeaderMenuItem[] = menuHeader.items;

}
