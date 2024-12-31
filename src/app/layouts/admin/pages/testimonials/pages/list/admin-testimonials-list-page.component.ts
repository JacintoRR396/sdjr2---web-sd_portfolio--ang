import { Component, OnInit } from '@angular/core';

import { Testimonial } from '../../../../../../models/interfaces/testimonials.interface';

import { WebTestimonialsService } from '../../../../../../services/testimonials.service';

@Component({
  selector: 'sdjr2--admin-testimonials-list-page',
  templateUrl: './admin-testimonials-list-page.component.html',
  styleUrl: './admin-testimonials-list-page.component.scss'
})
export class AdminTestimonialsListPageComponent implements OnInit {

  public items!: Testimonial[];

  constructor( private readonly testimonialsService: WebTestimonialsService ){}

  ngOnInit(): void {
    this.testimonialsService.getTestimonials()
      .subscribe( (resp:Testimonial[]) => this.items = resp );
  }
}
