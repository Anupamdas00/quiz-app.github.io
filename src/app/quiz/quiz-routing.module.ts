import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizLayoutComponent } from './quiz-layout/quiz-layout.component';
import { DeactivateGuard } from '../guard/deactivate.guard';

const routes: Routes = [
  { path : '', component : QuizLayoutComponent, canDeactivate : [DeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
