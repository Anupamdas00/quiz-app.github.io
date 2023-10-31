import { Component, OnInit, AfterViewInit } from '@angular/core';
import { quizQuestions } from '../../data';
import { AppService } from 'src/app/service/app.service';
import { IDeactivate } from 'src/app/guard/interface/canDeactive.interface';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { IQuestionInfo } from 'src/app/guard/interface/questionInfo.interface'; 
import { Question } from '../quiz.class';

@Component({
  selector: 'app-quiz-layout',
  templateUrl: './quiz-layout.component.html',
  styleUrls: ['./quiz-layout.component.css'],
})
export class QuizLayoutComponent implements OnInit, IDeactivate, AfterViewInit{

  constructor(private appService : AppService) {}

  data = quizQuestions;
  qsNum: string = 'Question 1';
  currentQs! : any;
  index! : number;
  questionTab! : Array<string>;
  username : string | undefined;
  exitBtn = faRightFromBracket;
  disable!:boolean;
  quizStart: boolean = true;
  disableIndexArr : number[] = [];
  totalTimeSec! : number
  totalTimeMin! : number;
  time! : string;
  totalPercent : number = 0;
  timeFinished : boolean = false;
  totalNumOfQs! : number;
  questionInfo: IQuestionInfo = new Question()
  totalTime! : string;
  sec! : number;
  min! : number;


  ngOnInit(): void {
    this.currentQs = this.data[0]
    this.index = 0;
    this.totalNumOfQs = this.data.length;
    this.totalTimeSec = Math.floor(this.data.length);
    
    this.sec = Math.floor(this.totalTimeSec % 60);
    this.min = Math.floor(this.totalTimeSec / 60);

    this.questionInfo.questions = this.totalNumOfQs;
    this.questionInfo.totalTime = `${this.min} Minute ${this.sec} Seconds`;

   this.questionTab = new Array(this.data.length)
      .fill(0)
      .map((_, index) => `Question ${index + 1}`); 
      
    this.username = this.appService.getLocalStorageData() || 'Candidate';

    this.appService.qsSelected.subscribe(res => console.log('if answer selected', res))

  }

  openContent(tabName: string, index: number) {
    this.qsNum = tabName;
    this.index = index;
    this.currentQs = this.data[this.index]  
  }

  nextQs(){
    this.index++;
    if(this.disableIndexArr.includes(this.index)){
      this.index++;
    }
    this.qsNum = this.questionTab[this.index]
    this.currentQs = this.data[this.index]
  }

  canExit(): boolean{
    if(window.confirm('Do You Want To Exit Quiz')){
      localStorage.removeItem('user');
      this.data.forEach((item : any) => {
        if(item.isSelected == true){
          delete item.isSelected;
        }
      })
   
      return true;
    }else{
      return false
    }
  }

  startQuiz(event : boolean){
    this.quizStart = event;
    this.calculateTime();
  }

  ngAfterViewInit(): void {
    console.log('triggered after view');
  }

  ifSelected(event : boolean){
    this.disable = event;
    this.disableIndexArr.push(this.index);
  }

  disableButton(index:number) : boolean{
    if(this.disable && this.disableIndexArr.includes(index)){
      return true;
    }else{
      return false;
    }
  }
  
  calculateTime(){
    let onePercent = 100 / this.totalTimeSec;
    let timeUp = false

    let interVal = setInterval(() => {  
      this.sec = this.sec - 1;
      this.totalPercent = Number((onePercent + this.totalPercent).toFixed(2));

      if(timeUp){
        this.timeFinished = true;
        this.quizStart = true
        clearInterval(interVal);
        return;
      }

      if(this.min == 0 && this.sec == 0){
        timeUp = true;
        this.time = 'Time Up' 
        return;   
      }else if(this.sec < 0){
        this.min = this.min - 1;
        this.sec = 59
      }   
      this.time = `${this.min} Minute ${this.sec} Seconds`
      this.totalTime = this.time
    },1000)
  
  }


}
