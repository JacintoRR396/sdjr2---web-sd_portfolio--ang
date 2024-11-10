import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from '../../interface/testimonial.interface';

@Component({
  selector: 'sdjr2-web-testimonial',
  templateUrl: './web-testimonial.component.html',
  styleUrl: './web-testimonial.component.scss'
})
export class WebTestimonialComponent implements OnInit {

  @Input({ required: true }) numCharsEllipsis!: number;
  @Input({ required: true }) item!: Testimonial;

  isEllipsis: boolean = false;

  ngOnInit(): void {
    this.isEllipsis = this.numCharsEllipsis < this.item.description.length
  }

  onToogleEllipsis(): void {
    this.isEllipsis = !this.isEllipsis;
  }

}
