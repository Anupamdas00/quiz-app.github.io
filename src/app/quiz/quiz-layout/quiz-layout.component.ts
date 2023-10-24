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
  disableIndexArr : number[] = []

  ngOnInit(): void {
    this.currentQs = this.data[0]
    this.index = 0;

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
      return true;
    }else{
      return false
    }
  }

  startQuiz(event : boolean){
    this.quizStart = event;
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


}
