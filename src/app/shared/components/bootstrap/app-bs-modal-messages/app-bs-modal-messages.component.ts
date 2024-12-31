import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MessagesStore } from '../../../store/app-messages.service';

@Component({
  selector: 'sdjr2--app-bs-modal-messages',
  templateUrl: './app-bs-modal-messages.component.html',
  styleUrl: './app-bs-modal-messages.component.scss'
})
export class BSModalMessagesComponent {

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
