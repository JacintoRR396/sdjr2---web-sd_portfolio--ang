import { Component } from '@angular/core';
import { MessagesService } from '../../services/app-messages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sdjr2--app-base-messages',
  templateUrl: './app-base-messages.component.html',
  styleUrl: './app-base-messages.component.scss'
})
export class BaseMessagesComponent {

  constructor(
    private readonly messagesService: MessagesService
  ) {}

  get errors(): Observable<string[]> {
    return this.messagesService.errors$;
  }
  get hasErrors(): Observable<boolean> {
    return this.messagesService.hasErrors$;
  }

  onClose(): void {
    this.messagesService.resetErrors();
  }
}
