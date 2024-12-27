import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoaderStore } from '../store/app-loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor( private readonly loaderStore: LoaderStore ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.loaderStore.showLoader<HttpEvent<any>>( next.handle( request ) );
  }
}
