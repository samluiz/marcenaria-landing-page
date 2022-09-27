import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { ButtonComponent } from './components/button/button.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { TransitionComponent } from './components/transition/transition.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    ButtonComponent,
    SecondSectionComponent,
    HeaderComponent,
    ThirdSectionComponent,
    TransitionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
