import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @Output()event : EventEmitter<boolean> = new EventEmitter()
  @Input()timeFinished!: boolean


  constructor() { }

  ngOnInit(): void {
    console.log(this.timeFinished);
    
  }

  startQuiz(){
    this.event.emit(false);  
  }

}
