import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/core/models/experience/experience.model';
import {
  LanguageService,
  LanguagesTypes,
} from 'src/app/core/services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TranslateModule, CommonModule],
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experienceList: Experience[] = [];

  private translateService = inject(TranslateService);
  private languageService = inject(LanguageService);
  private languageSubscription!: Subscription; // To store the subscription

  ngOnInit(): void {
    this.loadExperiences();
    this.languageSubscription = this.languageSubscription =
      this.languageService.language$.subscribe((language: LanguagesTypes) => {
        // this.currentLanguage = language;
        // console.log('Language changed to:', language);
        this.loadExperiences();
      });
  }

  /**
   * Get experiences from the json translation
   */
  loadExperiences(): void {
    this.translateService
      .get('Experience.list')
      .subscribe((list: Experience[]) => {
        this.experienceList = list;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
      // console.log('Unsubscribed from language observable');
    }
  }
}
