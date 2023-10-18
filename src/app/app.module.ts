import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { AuthGuard, AuthGuardQuiz } from './guard/auth.guard';
import { DeactivateGuard } from './guard/deactivate.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [AuthGuard, AuthGuardQuiz, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
