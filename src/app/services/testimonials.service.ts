import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { environments } from '../../environments/environment';

import { Testimonial } from '../models/interfaces/testimonials.interface';
import { TESTIMONIALS } from '../models/mocks/testimonials.mock';


@Injectable({
  providedIn: 'root'
})
export class WebTestimonialsService {

  private readonly baseUrl: string = environments.baseUrl;
  private readonly endpointUrl: string = "testimonials";
  private _data: Testimonial[] = [...TESTIMONIALS];

  constructor( private readonly httpClient: HttpClient ) { }

  getTestimonials(): Observable<Testimonial[]> {
    if ( environments.isMockEnabled ) {
      return of( this._data );
    } else {
      return this.httpClient.get<Testimonial[]>( `${this.baseUrl}/${this.endpointUrl}` )
        .pipe(
          catchError( err => of( [] ) )
        );
    }
  }

  getTestimonialById( id: number ): Observable<Testimonial | undefined> {
    if ( environments.isMockEnabled ) {
      return of( this._data[ id - 1 ] );
    } else {
      return this.httpClient.get<Testimonial>( `${this.baseUrl}/${this.endpointUrl}/${id}` )
        .pipe(
          catchError( err => of( undefined ) )
        );
    }
  }

  addTestimonial( item: Testimonial ): Observable<Testimonial> {
    if ( environments.isMockEnabled ) {
      this._data = [ ...this._data, item ];
      return of( item );
    } else {
      return this.httpClient.post<Testimonial>( `${this.baseUrl}/${this.endpointUrl}`, item );
    }
  }

  updateTestimonial( item: Testimonial ): Observable<Testimonial> {
    if( !item.id ) throw Error( 'Testimonial id is required' );
    if ( environments.isMockEnabled ) {
      this._data = this._data.map( it => {
        if ( it.id === item.id ) {
          return item;
        }
        return it;
      });
      return of( item );
    } else {
      return this.httpClient.put<Testimonial>( `${this.baseUrl}/${this.endpointUrl}/${item.id}`, item );
    }
  }

  deleteTestimonialById( id: number ): Observable<boolean> {
    if ( environments.isMockEnabled ) {
      this._data = this._data.filter( it => it.id !== id );
      return of( true );
    } else {
      return this.httpClient.delete<Testimonial>( `${this.baseUrl}/${this.endpointUrl}/${id}` )
      .pipe(
        catchError( err => of( false ) ),
        map( resp => true )
      );
    }
  }

}
