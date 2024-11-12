import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environments } from '../../../../../../environments/environment';
import { Testimonial } from '../interface/web-testimonials.interface';

@Injectable({
  providedIn: 'root'
})
export class WebTestimonialsService {

  private readonly baseUrl: string = environments.baseUrl;
  private readonly objUrl: string = "testimonials";

  constructor(private readonly httpClient: HttpClient) { }

  getTestimonials(): Observable<Testimonial[]> {
    return this.httpClient.get<Testimonial[]>( `${this.baseUrl}/${this.objUrl}` );
  }

  getTestimonialById(id: number): Observable<Testimonial> {
    return this.httpClient.get<Testimonial>( `${this.baseUrl}/${this.objUrl}/${id}` );
  }
}
