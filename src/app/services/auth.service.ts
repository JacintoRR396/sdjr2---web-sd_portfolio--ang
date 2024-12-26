import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

import { UsersService } from './users.service';
import { StorageService } from '../shared/services/app-storage.service';
import { MessagesService } from '../shared/services/app-messages.service';
import { ErrorsService } from '../shared/services/app-errors.service';

import { User } from '../models/interfaces/users.interface';
import { logConsole, LogginLevel } from '../shared/models/app-debug-operator.model';

const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private userSubject = new BehaviorSubject<User | undefined>( undefined );
	user$: Observable<User | undefined> = this.userSubject.asObservable();
  isLoggedIn$ : Observable<boolean>;
	isLoggedOut$ : Observable<boolean>;

  constructor(
    private readonly usersService: UsersService,
    private readonly storageService: StorageService,
    private readonly messagesService: MessagesService,
    private readonly errorsService: ErrorsService
  ) {
    logConsole( LogginLevel.DEBUG, 'AuthStore',this.errorsService.getLocalStorageLoad( 'user' ) );
    const user = this.storageService.loadLocalStorageBase64( AUTH_DATA );
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
        logConsole( LogginLevel.DEBUG, 'AuthStore', this.errorsService.getLocalStorageSave( 'user' ) );
        this.storageService.saveLocalStorageBase64( name, data );
      } else {
        logConsole( LogginLevel.DEBUG, 'AuthStore', this.errorsService.getLocalStorageRemove( 'user' ) );
        this.storageService.removeLocalStorageBase64( name );
      }
    } else {
      this.messagesService.showErrors( this.errorsService.getFormCredentials() );
    }
    this.userSubject.next( data );
  }

  logout() {
    this.userSubject.next( undefined );
    logConsole( LogginLevel.DEBUG, 'AuthStore', this.errorsService.getLocalStorageRemove( 'user' ) );
    this.storageService.removeLocalStorageBase64( AUTH_DATA );
  }
}
