import { Component, OnInit, AfterViewInit } from '@angular/core';
import { quizQuestions } from '../../data';
import { AppService } from 'src/app/service/app.service';
import { IDeactivate } from 'src/app/guard/interface/canDeactive.interface';
import { Observable } from 'rxjs';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
  totalTimeSec! : number;
  totalTimeMin! : number;
  time! : string;
  totalPercent : number = 0;

  ngOnInit(): void {
    this.currentQs = this.data[0]
    this.index = 0;

   this.questionTab = new Array(this.data.length)
      .fill(0)
      .map((_, index) => `Question ${index + 1}`); 
      
    this.username = this.appService.getLocalStorageData() || 'Candidate';

    this.appService.qsSelected.subscribe(res => console.log('if answer selected', res))
    // console.log(parseFloat(this.totalTimeMin));
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
      return true;
    }else{
      return false
    }
  }

  startQuiz(event : boolean){
    this.quizStart = event;
    this.calculateTime()

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
    // this.totalTimeMin = parseFloat((this.totalTimeSec / 60).toFixed(2))
    this.totalTimeSec = Math.floor(this.data.length * 10)
    console.log(this.totalTimeSec / 100);
    let onePercent = 100 / this.totalTimeSec;
    let min = Math.floor(this.totalTimeSec / 60);
    let sec = this.totalTimeSec % 60; 
    let timeUp = false

    let interVal = setInterval(() => {  
      sec = sec - 1;
      this.totalPercent = Number((onePercent + this.totalPercent).toFixed(2));

      if(timeUp){
          clearInterval(interVal);
          return;
      }

      if(min == 0 && sec == 0){
        timeUp = true;
        this.time = 'Time Up'    
      }else if(sec <= 0){
        min = min - 1;
        sec = 59
      }

      
      this.time = `${min} Minute ${sec} Seconds`
    },1000)

    
  }


}
