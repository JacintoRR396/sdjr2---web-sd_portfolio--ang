import { Component } from '@angular/core';

import { MessagesService } from '../../../../../shared/services/app-messages.service';

import { NAVIGATION_ROUTES } from '../../../../../models/navigation-routes.model';

@Component({
  selector: 'sdjr2--auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.scss'
})
export class AuthLoginPageComponent {
  navRoutes = NAVIGATION_ROUTES;

  constructor( private readonly messagesService: MessagesService ) {}

  get linkRecovery(): string {
    return `../${this.navRoutes.auth.recovery}`;
  }
  get linkRegister(): string {
    return `../${this.navRoutes.auth.register}`;
  }

  onLogin(): void {
    // this.messagesService.showErrors( "Testing the error messages" );
  }
}
