import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DemoQuizComponent } from './demo-quiz/demo-quiz.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatCardModule, MatStepperModule, MatButtonModule, MatInputModule } from '@angular/material';
import { PsychometricComponent } from './psychometric/psychometric.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    DemoQuizComponent,
    UserProfileComponent,
    PsychometricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatCardModule,
    FormsModule,
      ReactiveFormsModule,
      MatStepperModule, MatInputModule, MatButtonModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
