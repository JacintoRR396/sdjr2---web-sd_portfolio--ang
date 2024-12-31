import { Component, Input } from '@angular/core';

import { ImageLazyConfig } from '../../../components/bootstrap/app-bs-img-lazy/interfaces/app-comp-img-lazy.interface';

@Component({
  selector: 'sdjr2--app-bs-auth-form-template',
  templateUrl: './app-bs-auth-form-template.component.html',
  styleUrl: './app-bs-auth-form-template.component.scss'
})
export class BSAuthFormTemplateComponent {

  @Input({required: true}) imgLazyBgConfig!: ImageLazyConfig;
  @Input({required: true}) titleForm!: string;
}
