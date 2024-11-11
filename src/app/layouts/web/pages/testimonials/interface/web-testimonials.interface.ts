export interface Testimonials {
  numMaxStars: number;
  numCharsEllipsis: number;
  items: Testimonial[];
}

export interface Testimonial {
  id: number;
  urlIcon?: string;
  name: string;
  gender?: Gender;
  job: string;
  qualification: QualificationTestimonial[];
  description: string;
}

export interface QualificationTestimonial {
  isStarFill: boolean;
}

export enum Gender {
  MALE = "Male",
  FEMALE = "FEMALE",
  M = "M",
  F = "F"
}
