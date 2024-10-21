import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IMAGE_CONFIG } from '@angular/common';
import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
// https://webcode.tools/css-generator/keyframe-animation
export const appConfig: ApplicationConfig = {
  providers: [
    {
      // disabling warnings of unoptimized images hehe
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
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
};
