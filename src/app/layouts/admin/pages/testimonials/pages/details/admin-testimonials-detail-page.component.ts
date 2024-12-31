import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Testimonial } from '../../../../../../models/interfaces/testimonials.interface';

import { WebTestimonialsService } from '../../../../../../services/testimonials.service';

@Component({
  selector: 'sdjr2--admin-testimonials-details-page',
  templateUrl: './admin-testimonials-detail-page.component.html',
  styleUrl: './admin-testimonials-detail-page.component.scss'
})
export class AdminTestimonialsDetailPageComponent implements OnInit {

  public item!: Testimonial;

  constructor(
    private readonly testimonialsService: WebTestimonialsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router ){  }

  ngOnInit(): void {
    this.activatedRoute.params
			.pipe( switchMap( ({ id }) => this.testimonialsService.getTestimonialById( id ) ) )
			.subscribe( resp => {
				if( !resp ) return this.router.navigate([ 'admin/testimonials/list' ]);
				this.item = resp;
        return resp;
      } );
  }
}
