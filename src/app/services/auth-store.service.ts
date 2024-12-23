import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';

import { User } from '../models/interfaces/users.interface';

import { AuthService } from './auth.service';
import { LoaderService } from '../shared/services/app-loader.service';
import { MessagesService } from '../shared/services/app-messages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private usersSubject = new BehaviorSubject<User[]>( [] );
	users$: Observable<User[]> = this.usersSubject.asObservable();

  constructor(
    private readonly authService: AuthService,
    private readonly loaderService: LoaderService,
    private readonly messagesService: MessagesService
  ) {
    this.getAllUsers();
  }

  private getAllUsers(): void {
    const loadUsers$ = this.authService.getAllUsers()
      .pipe(
        catchError( err => {
          this.messagesService.showErrors( "Could not load users" );
          return throwError( () => err );
        }),
        tap( users => this.usersSubject.next( users ) )
      );
      this.loaderService.showLoader( loadUsers$ ).subscribe();
  }

  getAllUsersByEmail( email: string ): Observable<User[]> {
    return this.users$.
      pipe(
        map( users => users.filter( user => user.email === email ) )
      );
  }
}
