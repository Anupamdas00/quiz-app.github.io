import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-qs-item',
  templateUrl: './qs-item.component.html',
  styleUrls: ['./qs-item.component.css'],
})
export class QsItemComponent implements OnInit {

  @Input('question') questionProps: any;
  answeredCorrectly : number = 0;
  selectedOptionIndex : number | undefined;
  isOptionCorrect! : boolean;
  

  @Output()isSelectedEvent:EventEmitter<boolean> = new EventEmitter()

  constructor(private appService : AppService) {}

  ngOnInit(): void {
    console.log(this.questionProps);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedOptionIndex = undefined;
  }

  submit(optionSelected: string, index: number) {
    this.questionProps.isSelected = true;
    this.selectedOptionIndex = index;

    this.isOptionCorrect = index === this.questionProps.options.indexOf(this.questionProps.correctAnswer) ? true : false;

    if(optionSelected == this.questionProps.correctAnswer){
      this.answeredCorrectly += 1;
      this.appService.rightAnswer(this.answeredCorrectly);
    }

    if(this.questionProps.isSelected){
      this.isSelectedEvent.emit(this.questionProps.isSelected)
    }  
  }

}
