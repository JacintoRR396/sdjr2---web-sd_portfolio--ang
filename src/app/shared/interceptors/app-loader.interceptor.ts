import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoaderService } from '../services/app-loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor( private readonly loaderService: LoaderService ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.loaderService.showLoader<HttpEvent<any>>( next.handle( request ) );
  }
}
