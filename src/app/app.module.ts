import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './router/app.router';//import router file
import {MomentModule} from 'angular2-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header-component/header-component.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { CustomDatePipePipe } from './pipes/custom-date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    CustomDatePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
