import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './modules/component/forms/forms.component';
import { IntroductionComponent } from './modules/layout/introduction/introduction.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { AngularCommonLibModule } from '@psubakar/angular-common-lib';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { NgRxComponent } from './modules/component/ng-rx/ng-rx.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    IntroductionComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NgRxComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularCommonLibModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
