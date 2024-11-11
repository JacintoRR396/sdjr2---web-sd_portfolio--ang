import { Gender, Testimonials } from "../interface/web-testimonials.interface";

export const dataTestimonials: Testimonials = {
  numMaxStars: 5,
  numCharsEllipsis: 210,
  items: [
    {
      id: 1,
      urlIcon: "/web/common/female_avatar.svg",
      name: "Rocio Boceta",
      gender: Gender.F,
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
      name: "Adrián Cantón",
      gender: Gender.M,
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
};
