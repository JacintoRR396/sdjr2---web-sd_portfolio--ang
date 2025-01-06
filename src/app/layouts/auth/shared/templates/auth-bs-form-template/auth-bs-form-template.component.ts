import { Component, Input } from '@angular/core';

import { ImageLazyConfig } from '../../../../../shared/components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';

@Component({
  selector: 'sdjr2--auth-bs-form-template',
  templateUrl: './auth-bs-form-template.component.html',
  styleUrl: './auth-bs-form-template.component.scss'
})
export class BSAuthFormTemplateComponent {

  @Input({required: true}) imgLazyBgConfig!: ImageLazyConfig;
  @Input({required: true}) titleForm!: string;
}
