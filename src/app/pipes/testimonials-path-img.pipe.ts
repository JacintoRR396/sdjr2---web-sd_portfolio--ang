import { Pipe, PipeTransform } from '@angular/core';

import { environments } from '../../environments/environment';
import { Gender, Testimonial } from '../models/interfaces/testimonials.interface';

@Pipe({
  name: 'testimonialsPathImg'
})
export class WebTestimonialsPathImgPipe implements PipeTransform {

  private readonly basePath = `../../../../../../../${environments.basePathImages}`;

  transform(value: Testimonial): string {
    if( !value.urlIcon && !value.gender ) { return `${this.basePath}app/image-no-available.svg`; }
    if( !value.urlIcon ) {
      return (value.gender === Gender.MALE || value.gender === Gender.M)
        ? `${this.basePath}web/common/male_avatar.svg`
        : `${this.basePath}web/common/female_avatar.svg` ;
    }
    return `${this.basePath}${value.urlIcon}`;
  }
}
