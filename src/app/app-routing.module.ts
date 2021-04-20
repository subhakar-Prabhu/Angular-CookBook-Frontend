import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './modules/layout/introduction/introduction.component';
import { FormsComponent } from './modules/component/forms/forms.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { NgRxComponent } from './modules/component/ng-rx/ng-rx.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ngRx', component: NgRxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
