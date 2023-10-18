import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-qs-item',
  templateUrl: './qs-item.component.html',
  styleUrls: ['./qs-item.component.css']
})
export class QsItemComponent implements OnInit {

  @Input('question')questionProps : any;
  answer!:string;
  isCorrect!:boolean
  selectedOptionIndex : number = -1;

  constructor() { }

  ngOnInit(): void {
    console.log(this.questionProps);

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);  
    
  // }

  submit(answer : string, index: number){
    if (this.questionProps.correctAnswer === answer) {
      this.selectedOptionIndex = index;
    } else {
      this.selectedOptionIndex = -1;
    }
    
  }

}
