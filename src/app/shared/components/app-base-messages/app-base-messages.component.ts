import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/app-messages.service';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'sdjr2--app-base-messages',
  templateUrl: './app-base-messages.component.html',
  styleUrl: './app-base-messages.component.scss'
})
export class BaseMessagesComponent implements OnInit {

  showMessages: boolean = false;
  errors$: Observable<string[]> = of([]);

  constructor(
    private readonly messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.errors$ = this.messagesService.errors$
      .pipe(
        tap( () => this.showMessages = true )
      );
  }

  onClose(): void {
    this.showMessages = false;
  }
}
