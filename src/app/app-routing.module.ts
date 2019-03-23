import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DemoQuizComponent } from './demo-quiz/demo-quiz.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PsychometricComponent } from './psychometric/psychometric.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'demoquiz', component:DemoQuizComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'psychometric', component: PsychometricComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
