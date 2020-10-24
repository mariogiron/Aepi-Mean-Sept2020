import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const randomNum = Math.random();
    console.log('Pasa por el guard: ' + randomNum);
    if (randomNum > 0.4) {
      return true;
    } else {
      this.router.navigateByUrl('/cursos/213');
      return false;
    }
  }

}
