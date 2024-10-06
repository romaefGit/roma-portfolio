import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app/app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([]),
    importProvidersFrom(
      BrowserAnimationsModule,
      CarouselModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    TranslateService,
  ],
}).catch((err) => console.error(err));

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
