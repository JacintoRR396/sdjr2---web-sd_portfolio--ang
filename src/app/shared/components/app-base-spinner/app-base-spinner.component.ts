import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderStore } from '../../services/app-loader.service';

@Component({
  selector: 'sdjr2--app-base-spinner',
  templateUrl: './app-base-spinner.component.html',
  styleUrl: './app-base-spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSpinnerComponent {

  constructor( private readonly loaderStore: LoaderStore ){}

  get isLoading(): Observable<boolean> {
    return this.loaderStore.loading$;
  }
}
