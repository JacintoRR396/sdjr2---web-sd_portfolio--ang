import { Component, OnInit } from '@angular/core';

import { Testimonials } from '../interface/web-testimonials.interface';

import { dataTestimonials } from '../services/web-testimonials.mock';
import { WebTestimonialsService } from '../services/web-testimonials.service';
import { environments } from '../../../../../../environments/environment';

@Component({
  selector: 'sdjr2--web-testimonials-page',
  templateUrl: './web-testimonials-page.component.html',
  styleUrl: './web-testimonials-page.component.scss'
})
export class WebTestimonialsPageComponent implements OnInit {

  public data!: Testimonials;

  constructor(private readonly testimonialsService: WebTestimonialsService){}

  ngOnInit(): void {
    if (environments.isMockEnabled){
      this.data = dataTestimonials;
    } else {
      this.testimonialsService.getTestimonials()
        .subscribe( testimonials => this.data = testimonials );
    }
  }

}
