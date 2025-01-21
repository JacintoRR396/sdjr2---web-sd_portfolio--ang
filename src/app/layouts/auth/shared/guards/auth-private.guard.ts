import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { AuthStore } from '../store/auth-store.service';
import { first, map, Observable, tap } from 'rxjs';

import { NAVIGATION_ROUTES } from '../../../../models/navigation-routes.model';

@Injectable({providedIn: 'root'})
export class AuthPrivateGuard implements CanActivate, CanActivateChild {

  navRoutes = NAVIGATION_ROUTES;

  constructor(
    private readonly router: Router,
    private readonly authStore: AuthStore,
  ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>  {
    return this.checkIfAuthenticated();
  }
  canActivateChild( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>   {
    return this.checkIfAuthenticated();
  }
  private checkIfAuthenticated() {
    return this.authStore.isLoggedIn$
      .pipe(
        map( loggedIn =>	loggedIn ? true : this.router.parseUrl( `/${this.navRoutes.auth.self}/${this.navRoutes.auth.login}` ) )
      );
  }
  canLoad( route: Route, segments: UrlSegment[] ): Observable<boolean>  {
    return this.authStore.isLoggedIn$
      .pipe(
        first(),
        tap( loggedIn => {
          if ( !loggedIn ) { this.router.navigateByUrl( `/${this.navRoutes.auth.self}/${this.navRoutes.auth.login}` ); }
        })
      );
  }
}
