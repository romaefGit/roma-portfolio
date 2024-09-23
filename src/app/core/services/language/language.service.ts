import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Create a BehaviorSubject to hold the current language
  private languageSubject: BehaviorSubject<LanguagesTypes> =
    new BehaviorSubject<LanguagesTypes>('en');

  // Create an Observable from the BehaviorSubject
  public language$: Observable<LanguagesTypes> =
    this.languageSubject.asObservable();

  constructor(
    public translateService: TranslateService,
    private location: Location,
  ) {}

  initLanguage() {
    this.translateService.addLangs(['en', 'es']);
    let language = this.getUserLanguage();
    this.translateService.setDefaultLang(language);
    // console.log('language >', language);
    // Change the URL without navigate:
    // this.location.go(language);
  }

  changeLanguage(language: LanguagesTypes) {
    this.translateService.setDefaultLang(language);
    // this.location.go(language);
    // Emit the new language
    this.languageSubject.next(language);
  }

  /**
   * Get language from the navigator
   * @returns LanguagesTypes
   */
  getUserLanguage(): LanguagesTypes {
    let language = navigator.language || (navigator as any).userLanguage;
    language = language.split('-').includes('es') ? 'es' : 'en';

    return language;
  }
}
export type LanguagesTypes = 'es' | 'en';
