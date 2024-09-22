import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language: LanguagesTypes = 'es';

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}

  initLanguage() {
    this.translateService.addLangs(['en', 'es']);
    let language = navigator.language || (navigator as any).userLanguage;
    language = language.split('-').includes('es') ? 'es' : 'en';

    console.log('language >', language);

    this.translateService.setDefaultLang(language);

    // Change the URL without navigate:
    this.location.go(language);

    this.language = language;
  }

  changeLanguage(language: LanguagesTypes) {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
export type LanguagesTypes = 'es' | 'en';
