import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizLayoutComponent } from './quiz-layout/quiz-layout.component';
import { QsItemComponent } from './qs-item/qs-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    QuizLayoutComponent,
    QsItemComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FontAwesomeModule
  ]
})
export class QuizModule { }
