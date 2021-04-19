import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/signup/signup.component';
import { IntroductionComponent } from './modules/introduction/introduction.component';
import { AngularCommonLibModule } from '@psubakar/angular-common-lib';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCommonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
