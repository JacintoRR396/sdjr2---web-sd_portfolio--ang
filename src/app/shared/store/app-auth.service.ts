import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

import { UsersService } from '../services/app-users.service';
import { StorageService } from '../services/app-storage.service';
import { MessagesStore } from './app-messages.service';
import { MessagesErrorService } from '../services/app-messages-error.service';

import { User } from '../models/interfaces/app-users.interface';

const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private userSubject = new BehaviorSubject<User | undefined>( undefined );
	user$: Observable<User | undefined> = this.userSubject.asObservable();
  isLoggedIn$ : Observable<boolean>;
	isLoggedOut$ : Observable<boolean>;
  dto: string = 'user';

  constructor(
    private readonly usersService: UsersService,
    private readonly storageService: StorageService,
    private readonly messagesStore: MessagesStore,
    private readonly messagesErrorService: MessagesErrorService
  ) {
    const user = this.storageService.loadLocalStorageBase64( AUTH_DATA, this.dto );
    if ( user ) {
      this.userSubject.next( user );
    }
    this.isLoggedIn$ = this.user$.pipe( map( user => !!user ) );
		this.isLoggedOut$ = this.isLoggedIn$.pipe( map( loggedIn => !loggedIn ) );
  }

  login( email: string, password: string, isSaveInLS: boolean ): Observable<User | undefined> {
    return this.usersService.getUserByEmailAndPassword( email, password )
      .pipe(
        tap( user => {
          this.checkUserInDB( AUTH_DATA, user, isSaveInLS );
        }),
        catchError( err => of( undefined ) ),
      );
  }

  private checkUserInDB( name: string, data: User | undefined, isSaveInLS: boolean ): void {
    if( data ) {
      if( isSaveInLS ) {
        this.storageService.saveLocalStorageBase64( name, data, this.dto );
      } else {
        this.storageService.removeLocalStorageBase64( name, this.dto );
      }
    } else {
      this.messagesStore.showErrors( this.messagesErrorService.getFormCredentialsNotValid() );
    }
    this.userSubject.next( data );
  }

  logout() {
    this.userSubject.next( undefined );
    this.storageService.removeLocalStorageBase64( AUTH_DATA, this.dto );
  }
}
