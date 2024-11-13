import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { environments } from '../../environments/environment';

import { Testimonial } from '../models/interfaces/web-testimonials.interface';
import { testimonials } from '../models/mocks/web-testimonials.mock';


@Injectable({
  providedIn: 'root'
})
export class WebTestimonialsService {

  private readonly baseUrl: string = environments.baseUrl;
  private readonly objUrl: string = "testimonials";

  constructor(private readonly httpClient: HttpClient) { }

  getTestimonials(): Observable<Testimonial[]> {
    if (environments.isMockEnabled){
      return of(testimonials);
    } else {
      return this.httpClient.get<Testimonial[]>( `${this.baseUrl}/${this.objUrl}` )
        .pipe( catchError( err => of([]) ) );
    }
  }

  getTestimonialById(id: number): Observable<Testimonial> {
    return this.httpClient.get<Testimonial>( `${this.baseUrl}/${this.objUrl}/${id}` );
  }
}
