import { Component, OnInit } from '@angular/core';
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
export class QuizLayoutComponent implements OnInit, IDeactivate {

  constructor(private appService : AppService) {}

  data = quizQuestions;
  qsNum: string = 'Question 1';
  currentQs! : any;
  index! : number;
  questionTab! : Array<string>;
  username : string | undefined;
  exitBtn = faRightFromBracket;
  disable!:boolean;

  ngOnInit(): void {
    this.currentQs = this.data[0]
    this.index = 0;

   this.questionTab = new Array(this.data.length)
      .fill(0)
      .map((_, index) => `Question ${index + 1}`); 
      
    this.username = this.appService.getLocalStorageData() || 'Candidate';

    // this.appService.name.asObservable().subscribe(res => console.log(res))
    console.warn(this.index);
    
  }



  openContent(tabName: string, index: number) {
    this.qsNum = tabName;
    this.index = index;
    this.currentQs = this.data[this.index]  
  }

  changeQs(changeOption : string){
    if(changeOption === 'next'){
      this.index++
      this.qsNum = this.questionTab[this.index]
      this.currentQs = this.data[this.index]
      // this.disable = this.questionTab.length <= (this.index + 1) ? false : true;
    } else if(changeOption === 'prev'){
      this.index--
      this.qsNum = this.questionTab[this.index]
      this.currentQs = this.data[this.index]
      // this.disable = this.index < 0 ? true
    }
  }

  canExit(): boolean{
    if(window.confirm('Do You Want To Exit Quiz')){
      localStorage.removeItem('user');
      return true;
    }else{
      return false
    }
  }



}
