import { Component } from '@angular/core';

import { Testimonials } from '../interface/testimonial.interface';

@Component({
  selector: 'sdjr2-web-testimonials-page',
  templateUrl: './web-testimonials-page.component.html',
  styleUrl: './web-testimonials-page.component.scss'
})
export class WebTestimonialsPageComponent {

  data: Testimonials = {
    numMaxStars: 5,
    items: [
      {
        id: 1,
        urlIcon: "../../../../../../../assets/images/web/common/female_avatar.svg",
        name: "Rocio Boceta",
        job: "Study Partner",
        qualification: [{
            isStarFill: true
          },
          {
            isStarFill: true
          },
          {
            isStarFill: false
          },
          {
            isStarFill: false
          },
          {
            isStarFill: false
          }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum, earum fugiat voluptatibus ullam dolorem modi, hic consequuntur quibusdam dolore placeat eveniet nam molestias corrupti praesentium labore enim neque odit?"
      },
      {
        id: 2,
        urlIcon: "../../../../../../../assets/images/web/common/male_avatar.svg",
        name: "Adrián Cantón",
        job: "Ex-Coworker",
        qualification: [{
          isStarFill: true
        },
        {
          isStarFill: true
        },
        {
          isStarFill: true
        },
        {
          isStarFill: true
        },
        {
          isStarFill: false
        }
      ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        id: 3,
        urlIcon: "../../../../../../../assets/images/web/common/male_avatar.svg",
        name: "Javi Cáceres",
        job: "Ex-Coworker",
        qualification: [{
          isStarFill: true
        },
        {
          isStarFill: true
        },
        {
          isStarFill: true
        },
        {
          isStarFill: true
        },
        {
          isStarFill: true
        }
      ],
        description: "Es un crack, tanto en backend como frontend."
      }
    ]
  }

}
