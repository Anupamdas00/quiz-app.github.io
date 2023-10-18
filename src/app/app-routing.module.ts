import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { AuthGuard, AuthGuardQuiz } from './guard/auth.guard';
import { DeactivateGuard } from './guard/deactivate.guard';

const routes: Routes = [
  { path: '', component: RootComponent },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then((m) => m.QuizModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
