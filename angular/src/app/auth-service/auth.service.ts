import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{

  constructor(
    httpClient : HttpClient,
    private router : Router
    ) {
    }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.isAuthenticated()) {
        return true;
      } else {
        return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
      }
    }

    isAuthenticated(): boolean {
      const authToken = localStorage.getItem('authToken');
      return !!authToken;
    }

   auth(): HttpHeaders{
      const token = localStorage.getItem('authToken');
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + token);
      return headers;
   }

   clear(){
    localStorage.removeItem('authToken');
   }
}
