import { Component } from '@angular/core';
import { FooterLink } from '../../interfaces/footer-link.interace';

@Component({
  selector: 'sdjr2-web-footer-links-shared',
  templateUrl: './web-footer-links-shared.component.html',
  styleUrl: './web-footer-links-shared.component.scss'
})
export class WebFooterLinksSharedComponent {

  items: FooterLink[] = [
    {
      icon: "bi-twitter-x",
      urlLink: "https://twitter.com/JacintoR2",
    },
    {
      icon: "bi-linkedin",
      urlLink: "https://www.linkedin.com/in/jacinto-rold%C3%A1n-rodr%C3%ADguez-06026589/",
    },
    {
      icon: "bi-github",
      urlLink: "https://github.com/JacintoRR396",
    }
  ];

}
