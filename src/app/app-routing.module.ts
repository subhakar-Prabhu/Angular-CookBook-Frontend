import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { SignupComponent } from './modules/signup/signup.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
