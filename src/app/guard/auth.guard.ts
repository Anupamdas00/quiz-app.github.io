import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../service/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private appService : AppService, private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.appService.getLocalStorageData() !== null && this.appService.getLocalStorageData() === localStorage.getItem('user')){
        return true;
      }
      this.router.navigateByUrl('/')
      return false;
    }
}



@Injectable({
  providedIn: 'root'
})
export class AuthGuardQuiz implements CanActivate{
  constructor(private appService : AppService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.appService.getLocalStorageData() == null){
      console.log(this.appService.getLocalStorageData());   
      return true;
    }
      this.router.navigateByUrl('/quiz')
      return false;
    }
}
  
  

