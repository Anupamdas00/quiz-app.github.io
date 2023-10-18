import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  name : string = ''

  constructor(private appService: AppService, private router : Router) { }

  ngOnInit(): void {
  }

  getChar(event : Event){
    const target = event.target as HTMLInputElement
    this.name = target.value.trim();
  }

  enterQuiz(){
    if(!this.name !== null){
      this.appService.setDataToLocalStorage(this.name);
      this.appService.inputObs(this.name) 
      this.router.navigate(['/quiz']);  
    }
    this.name = ''
  }

}
