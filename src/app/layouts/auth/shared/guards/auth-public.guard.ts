import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { AuthStore } from '../store/auth-store.service';
import { first, map, Observable, tap } from 'rxjs';

import { NAVIGATION_ROUTES } from '../../../../models/navigation-routes.model';

@Injectable({providedIn: 'root'})
export class AuthPublicGuard {

  navRoutes = NAVIGATION_ROUTES;

  constructor(
    private readonly router: Router,
    private readonly authStore: AuthStore,
  ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>  {
    return this.checkIfNoAuthenticated();
  }
  canActivateChild( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>   {
    return this.checkIfNoAuthenticated();
  }
  private checkIfNoAuthenticated() {
    return this.authStore.isLoggedOut$
      .pipe(
        map( loggedOut =>	loggedOut ? true : this.router.parseUrl( `/${this.navRoutes.web.self}/${this.navRoutes.web.home}` ) )
      );
  }
  canLoad( route: Route, segments: UrlSegment[] ): Observable<boolean>  {
    return this.authStore.isLoggedOut$
      .pipe(
        first(),
        tap( loggedOut => {
          if ( !loggedOut ) { this.router.navigateByUrl( `/${this.navRoutes.web.self}/${this.navRoutes.web.home}` ); }
        })
      );
  }
}
