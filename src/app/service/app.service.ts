import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data : string = '';
  name : Subject<string> = new Subject;
  // name : Observable<string> = new Observable()

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

  
}
