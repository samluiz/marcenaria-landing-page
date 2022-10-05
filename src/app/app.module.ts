import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { ButtonComponent } from './components/button/button.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { HeaderComponent } from './components/header/header.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { TransitionComponent } from './components/transition/transition.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    ButtonComponent,
    SecondSectionComponent,
    HeaderComponent,
    ThirdSectionComponent,
    TransitionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'inicio', component: FirstSectionComponent },
      { path: 'profissao', component: SecondSectionComponent },
      { path: 'sobre-mim', component: ThirdSectionComponent },
    ]),
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
