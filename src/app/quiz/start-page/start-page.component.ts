import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IQuestionInfo } from 'src/app/guard/interface/questionInfo.interface';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  @Output()event : EventEmitter<boolean> = new EventEmitter();
  @Input()timeFinished!: boolean;
  @Input()qsInfo! : IQuestionInfo;
  totalNumQs! : number;
  correctLyAns! : number;
  correctAns$! : Observable<number>

  constructor( private appService: AppService ) {}

  ngOnInit(): void {
    this.totalNumQs = this.qsInfo.questions;
    if(this.timeFinished){
      this.correctAns$ = this.appService.correctAnswer$
    }


  }

  startQuiz(){
    this.event.emit(false);  
  }

}
