import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/signup/signup.component';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { AngularCommonLibModule } from '@psubakar/angular-common-lib';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    IntroductionComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CardModule,
    BrowserModule,
    AppRoutingModule,
    AngularCommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
