import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizLayoutComponent } from '../quiz/quiz-layout/quiz-layout.component';
import { IDeactivate } from './interface/canDeactive.interface';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<IDeactivate> {
  component! : Object

  canDeactivate(
    component: IDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return component.canExit ? component.canExit() : true;
  }
  
}
