import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MessagesStore } from '../../services/app-messages.service';

@Component({
  selector: 'sdjr2--app-base-messages',
  templateUrl: './app-base-messages.component.html',
  styleUrl: './app-base-messages.component.scss'
})
export class BaseMessagesComponent {

  constructor(
    private readonly messagesStore: MessagesStore
  ) {}

  get errors(): Observable<string[]> {
    return this.messagesStore.errors$;
  }
  get hasErrors(): Observable<boolean> {
    return this.messagesStore.hasErrors$;
  }

  onClose(): void {
    this.messagesStore.resetErrors();
  }
}
