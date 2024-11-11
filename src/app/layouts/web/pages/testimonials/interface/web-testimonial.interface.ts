export interface Testimonials {
  numMaxStars: number;
  numCharsEllipsis: number;
  items: Testimonial[];
}

export interface Testimonial {
  id: number;
  urlIcon: string;
  name: string;
  job: string;
  qualification: QualificationTestimonial[];
  description: string;
}

export interface QualificationTestimonial {
  isStarFill: boolean;
}
