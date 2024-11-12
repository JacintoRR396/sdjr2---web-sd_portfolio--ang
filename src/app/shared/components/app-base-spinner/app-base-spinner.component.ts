import { Component, ViewEncapsulation } from '@angular/core';

import { LoaderService } from '../../services/app-loader.service';

@Component({
  selector: 'sdjr2--app-base-spinner',
  templateUrl: './app-base-spinner.component.html',
  styleUrl: './app-base-spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSpinnerComponent {

  constructor(public loaderService: LoaderService) { }

}
