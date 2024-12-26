import { Component } from '@angular/core';

import { MessagesStore } from '../../../../../shared/services/app-messages.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-register-page',
  templateUrl: './auth-register-page.component.html',
  styleUrl: './auth-register-page.component.scss'
})
export class AuthRegisterPageComponent {
  navRoutes = NAVIGATION_ROUTES;

  constructor( private readonly messagesStore: MessagesStore ) {}

  get linkLogin(): string {
    return `../${this.navRoutes.auth.login}`;
  }
}
