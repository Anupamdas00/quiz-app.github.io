import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @Output()event : EventEmitter<boolean> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }


  startQuiz(){
    this.event.emit(false);  
  }

}
