import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data : string = '';
  name : Subject<string> = new Subject;
  isQsSelected$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  qsSelected = this.isQsSelected$.asObservable();

  constructor() { }

  getLocalStorageData(): string | null{
    return localStorage.getItem('user');
  }

  setDataToLocalStorage(name : string){    
    localStorage.setItem('user', name)
  }

  inputObs(data: string){
    this.name.next(data);
  }

  ifQsSelected(value : boolean){
    return this.isQsSelected$.next(value);
  }
  
}
