import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService:CookieService, private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkeCookieSesion();
  }
  checkeCookieSesion():boolean{
    try {
      const token=this.cookieService.check('token');
      if(!token){
        this.route.navigate(['/','auth'])
      }
      return token
    } catch (error) {
      console.log(error)
      return false;
    }
  }
  
}
