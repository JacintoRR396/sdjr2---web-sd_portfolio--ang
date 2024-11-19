import { Component } from '@angular/core';

import { WebFooterLink } from '../../models/interfaces/web-footer-links-shared.interace';
import { WEB_LINKS_FOOTER } from '../../models/mocks/web-footer-links-shared.mock';

@Component({
  selector: 'sdjr2--web-footer-links-shared',
  templateUrl: './web-footer-links-shared.component.html',
  styleUrl: './web-footer-links-shared.component.scss'
})
export class WebFooterLinksSharedComponent {

  items: WebFooterLink[] = WEB_LINKS_FOOTER.items;

}
