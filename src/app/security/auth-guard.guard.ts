import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private userService : UserService, private router : Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url = state.url
    return this.validateCurrentUser(url)
  }

  validateCurrentUser(urlToRedirect : string) : boolean {
    if (localStorage.getItem("jwt")) return true
    
    console.log("Not logged user. Redirecting to login")
    this.userService.urlToRedirect = urlToRedirect
    this.router.navigateByUrl("signin")
    return false
  }
  
}
