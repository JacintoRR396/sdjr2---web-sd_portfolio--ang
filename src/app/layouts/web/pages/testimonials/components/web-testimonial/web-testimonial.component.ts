import { Component, Input } from '@angular/core';
import { Testimonial } from '../../interface/testimonial.interface';

@Component({
  selector: 'sdjr2-web-testimonial',
  templateUrl: './web-testimonial.component.html',
  styleUrl: './web-testimonial.component.scss'
})
export class WebTestimonialComponent {

  @Input({ required: true }) item!: Testimonial;

}
