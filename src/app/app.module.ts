import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { AngularCommonLibModule } from '@psubakar/angular-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './modules/component/forms/forms.component';
import { IntroductionComponent } from './modules/layout/introduction/introduction.component';
import { DashboardComponent } from './modules/layout/dashboard/dashboard.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { NgRxComponent } from './modules/component/ng-rx/ng-rx.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRxEffects } from './modules/component/ng-rx/store/ngrx.effects';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    IntroductionComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NgRxComponent,
  ],
  imports: [
    CardModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularCommonLibModule,
    BrowserAnimationsModule,
    ToastModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([NgRxEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
