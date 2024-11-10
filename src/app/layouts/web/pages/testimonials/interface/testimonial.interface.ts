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
  qualification: TestimonialQualification[];
  description: string;
}

export interface TestimonialQualification {
  isStarFill: boolean;
}
