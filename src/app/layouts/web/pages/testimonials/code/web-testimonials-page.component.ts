import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Testimonial } from '../../../../../models/interfaces/testimonials.interface';

import { LoaderStore } from '../../../../../shared/services/app-loader.service';
import { WebTestimonialsService } from '../../../../../services/testimonials.service';

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
    private readonly loaderStore: LoaderStore
  ){}

  get isLoading(): Observable<boolean> {
    return this.loaderStore.loading$;
  }

  ngOnInit(): void {
      this.testimonialsService.getTestimonials()
        .subscribe( (resp:Testimonial[]) => this.data = resp );
  }
}
