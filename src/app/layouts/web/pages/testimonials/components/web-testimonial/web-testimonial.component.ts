import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from '../../../../../../models/interfaces/testimonials.interface';

@Component({
  selector: 'sdjr2--web-testimonial',
  templateUrl: './web-testimonial.component.html',
  styleUrl: './web-testimonial.component.scss'
})
export class WebTestimonialComponent implements OnInit {

  @Input({ required: true }) numCharsEllipsis!: number;
  @Input({ required: true }) item!: Testimonial;

  isEllipsis: boolean = false;
  isToogleEllipsis: boolean = false;
  btnText: string = "View more";

  ngOnInit(): void {
    this.isEllipsis = this.numCharsEllipsis < this.item.description.length
    this.isToogleEllipsis = this.numCharsEllipsis < this.item.description.length
  }

  onToogleEllipsis(): void {
    this.isToogleEllipsis = !this.isToogleEllipsis;
    this.btnText = (this.isToogleEllipsis) ? "View more" : "View less";
  }

}
