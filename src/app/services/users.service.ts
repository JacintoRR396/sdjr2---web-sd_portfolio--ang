import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';

import { environments } from '../../environments/environment';

import { User } from '../models/interfaces/users.interface';
import { USERS } from '../models/mocks/users.mock';
import { debug, LogginLevel } from '../shared/models/app-debug-operator.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly baseUrl: string = environments.baseUrl;
  private readonly endpointUrl: string = "users";
  private _data: User[] = [ ...USERS ];

  constructor( private readonly httpClient: HttpClient ) { }

  getAllUsers(): Observable<User[]> {
    if ( environments.isMockEnabled ) {
      return of( this._data );
    } else {
      return this.httpClient.get<User[]>( `${this.baseUrl}/${this.endpointUrl}` )
        .pipe(
          debug( LogginLevel.DEBUG, 'UsersService', "GET Users" ),
          catchError( err => of( [] ) ),
          shareReplay()
        );
    }
  }

  getUserById( id: number ): Observable<User | undefined> {
    if ( environments.isMockEnabled ) {
      return of( this._data[ id - 1 ] );
    } else {
      return this.httpClient.get<User>( `${this.baseUrl}/${this.endpointUrl}/${id}` )
        .pipe(
          debug( LogginLevel.DEBUG, 'UsersService', "GET User by Id" ),
          catchError( err => of( undefined ) ),
          shareReplay()
        );
    }
  }

  getUserByEmail( email: string ): Observable<User | undefined> {
    if ( environments.isMockEnabled ) {
      return of( this._data.filter( user => user.email === email )[0] );
    } else {
      const params = new HttpParams().set( 'email', email );
      return this.httpClient.get<User>( `${this.baseUrl}/${this.endpointUrl}`, {params} )
        .pipe(
          debug( LogginLevel.DEBUG, 'UsersService', "GET User by Email" ),
          catchError( err => of( undefined ) ),
          shareReplay()
        );
    }
  }

  getUserByEmailAndPassword( email: string, password: string ): Observable<User | undefined> {
    if ( environments.isMockEnabled ) {
      return of( this._data.filter( user => user.email === email && user.password == password )[0] );
    } else {
      const params = new HttpParams().set( 'email', email ).set( 'password', password );
      return this.httpClient.get<User>( `${this.baseUrl}/${this.endpointUrl}`, {params} )
        .pipe(
          debug( LogginLevel.DEBUG, 'UsersService', "GET User by Email/Pass" ),
          catchError( err => of( undefined ) ),
          shareReplay()
        );
    }
  }

  addUser( item: User ): Observable<User> {
    if( item.id !== 0 ) throw Error( 'User id not valid' );
    if ( environments.isMockEnabled ) {
      this._data = [ ...this._data, item ];
      return of( item );
    } else {
      return this.httpClient.post<User>( `${this.baseUrl}/${this.endpointUrl}`, item )
        .pipe(
          debug( LogginLevel.DEBUG, 'UsersService', "POST User" ),
          catchError( err => of( undefined ) ),
          shareReplay()
        );
    }
  }

  updateUser( item: User ): Observable<User> {
    if( !item.id ) throw Error( 'User id is required' );
    if ( environments.isMockEnabled ) {
      this._data = this._data.map( it => {
        if ( it.id === item.id ) {
          return item;
        }
        return it;
      });
      return of( item );
    } else {
      return this.httpClient.put<User>( `${this.baseUrl}/${this.endpointUrl}/${item.id}`, item )
        .pipe(
          debug( LogginLevel.DEBUG, 'UsersService', "PUT User" ),
          catchError( err => of( undefined ) ),
          shareReplay()
        );
    }
  }

  deleteUserById( id: number ): Observable<boolean> {
    if ( environments.isMockEnabled ) {
      this._data = this._data.filter( it => it.id !== id );
      return of( true );
    } else {
      return this.httpClient.delete<User>( `${this.baseUrl}/${this.endpointUrl}/${id}` )
      .pipe(
        debug( LogginLevel.DEBUG, 'UsersService', "DELETE User" ),
        catchError( err => of( false ) ),
        map( resp => true ),
        shareReplay()
      );
    }
  }
}
