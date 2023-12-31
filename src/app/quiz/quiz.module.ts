import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizLayoutComponent } from './quiz-layout/quiz-layout.component';
import { QsItemComponent } from './qs-item/qs-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartPageComponent } from './start-page/start-page.component';
import { OptionsStyleDirective } from './directives/options-style.directive';




@NgModule({
  declarations: [
    QuizLayoutComponent,
    QsItemComponent,
    StartPageComponent,
    OptionsStyleDirective,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FontAwesomeModule
  ],
  exports : [ ]
})
export class QuizModule { }
