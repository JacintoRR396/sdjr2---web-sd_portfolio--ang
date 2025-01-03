import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

import { UsersService } from '../services/app-users.service';
import { StorageService } from '../services/app-storage.service';

import { User } from '../models/interfaces/app-users.interface';

const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private readonly userSubject = new BehaviorSubject<User | undefined>( undefined );
	user$: Observable<User | undefined> = this.userSubject.asObservable();
  isLoggedIn$ : Observable<boolean>;
	isLoggedOut$ : Observable<boolean>;
  dto: string = 'user';

  constructor(
    private readonly usersService: UsersService,
    private readonly storageService: StorageService
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
          this.updateLastAcceess( user );
          this.checkUserInDB( AUTH_DATA, user, isSaveInLS );
        }),
        catchError( err => of( undefined ) ),
      );
  }
  private updateLastAcceess( data: User | undefined ): void {
    if( data?.isActive ) {
      data.atLastAccess = new Date();
      this.usersService.updateUser( data );
    }
  }
  private checkUserInDB( name: string, data: User | undefined, isSaveInLS: boolean ): void {
    if( data?.isActive ) {
      if( isSaveInLS ) {
        this.storageService.saveLocalStorageBase64( name, data, this.dto );
      } else {
        this.storageService.removeLocalStorageBase64( name, this.dto );
      }
    }
    this.userSubject.next( data );
  }

  logout() {
    this.userSubject.next( undefined );
    this.storageService.removeLocalStorageBase64( AUTH_DATA, this.dto );
  }
}
