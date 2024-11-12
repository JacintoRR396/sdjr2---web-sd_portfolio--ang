import { Component, OnInit } from '@angular/core';

import { environments } from '../../../../../../environments/environment';

import { Testimonial } from '../interface/web-testimonials.interface';
import { testimonials } from '../services/web-testimonials.mock';

import { WebTestimonialsService } from '../services/web-testimonials.service';
import { LoaderService } from '../../../../../shared/services/app-loader.service';

@Component({
  selector: 'sdjr2--web-testimonials-page',
  templateUrl: './web-testimonials-page.component.html',
  styleUrl: './web-testimonials-page.component.scss'
})
export class WebTestimonialsPageComponent implements OnInit {

  public data!: Testimonial[];
  public numCharsEllipsis: number = 210;
  public numMaxStarts: number = 5;

  constructor(
    private readonly testimonialsService: WebTestimonialsService,
    public loaderService: LoaderService
  ){}

  ngOnInit(): void {
    if (environments.isMockEnabled){
      this.data = testimonials;
    } else {
      this.testimonialsService.getTestimonials()
        .subscribe( resp => this.data = resp );
    }
  }

}
