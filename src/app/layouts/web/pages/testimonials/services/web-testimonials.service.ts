import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

import { environments } from '../../../../../../environments/environment';
import { Testimonials } from '../interface/web-testimonials.interface';

@Injectable({
  providedIn: 'root'
})
export class WebTestimonialsService {

  private readonly baseUrl: string = environments.baseUrl;
  private readonly objUrl: string = "testimonials";

  constructor(private readonly httpClient: HttpClient) { }

  getTestimonials(): Observable<Testimonials> {
    return this.httpClient.get<Testimonials>( `${this.baseUrl}/${this.objUrl}` )
      .pipe( delay(1000) )
      ;
  }
}
