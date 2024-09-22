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

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
  declarations: [AppComponent],
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
    HttpClientModule, // the change from http module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
