import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { NgClickOutsideDirective } from 'ng-click-outside2';

import { PipeModule } from 'src/app/core/pipes/pipe.module';
import { DirectivesModule } from './core/directives/directives.module';
import { SharedModule } from './components/shared.module';
import { MainModule } from './main/main.module';
// import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    SharedModule,
    MainModule,
    NgClickOutsideDirective,
    PipeModule,
    DirectivesModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
