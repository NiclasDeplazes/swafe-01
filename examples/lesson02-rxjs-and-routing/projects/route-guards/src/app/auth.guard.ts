import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService) {

  }  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.authenticated$.pipe(
        tap(authed => {
          if(authed) {
            return true;
          } else {
            window.confirm(`You need to be signed in to view path: '${state.url}'`)
            return false;
          } 
        }
      )
    )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.authenticated$.pipe(
        tap(authed => {
          if(authed) {
            return true;
          } else {
            window.confirm(`You need to be signed in to view path: '${route.path}'`)
            return false;
          } 
        }
      )
    )
  }
}
