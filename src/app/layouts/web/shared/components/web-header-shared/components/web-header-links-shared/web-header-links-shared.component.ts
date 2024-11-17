import { Component } from '@angular/core';

import { WebHeaderLink } from '../../models/interfaces/web-header-links-shared.interace';
import { linksHeader } from '../../models/mocks/web-header-links-shared.mock';

@Component({
  selector: 'sdjr2--web-header-links-shared',
  templateUrl: './web-header-links-shared.component.html',
  styleUrl: './web-header-links-shared.component.scss'
})
export class WebHeaderLinksSharedComponent {

  items: WebHeaderLink[] = linksHeader.items;

}
