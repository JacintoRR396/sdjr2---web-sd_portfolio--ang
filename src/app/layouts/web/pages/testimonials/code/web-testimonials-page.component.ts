import { Component, OnInit } from '@angular/core';

import { environments } from '../../../../../../environments/environment';

import { Testimonials } from '../interface/web-testimonials.interface';
import { dataTestimonials } from '../services/web-testimonials.mock';

import { WebTestimonialsService } from '../services/web-testimonials.service';
import { LoaderService } from '../../../../../shared/services/app-loader.service';

@Component({
  selector: 'sdjr2--web-testimonials-page',
  templateUrl: './web-testimonials-page.component.html',
  styleUrl: './web-testimonials-page.component.scss'
})
export class WebTestimonialsPageComponent implements OnInit {

  public data!: Testimonials;

  constructor(
    private readonly testimonialsService: WebTestimonialsService,
    public loaderService: LoaderService
  ){}

  ngOnInit(): void {
    if (environments.isMockEnabled){
      this.data = dataTestimonials;
    } else {
      this.testimonialsService.getTestimonials()
        .subscribe( testimonials => this.data = testimonials );
    }
  }

}
