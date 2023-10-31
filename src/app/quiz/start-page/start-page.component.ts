import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { IQuestionInfo } from 'src/app/guard/interface/questionInfo.interface';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @Output()event : EventEmitter<boolean> = new EventEmitter()
  @Input()timeFinished!: boolean;
  @Input()qsInfo! : IQuestionInfo;
  totalNumQs! : number;
  minute!: number;
  second!:number

  constructor() { }

  ngOnInit(): void {
    console.log(this.timeFinished);
    console.log(this.qsInfo);

  }

  startQuiz(){
    this.event.emit(false);  
  }

}
