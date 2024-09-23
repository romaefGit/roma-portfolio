import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {
  LanguageService,
  LanguagesTypes,
} from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private translateService = inject(TranslateService);
  roles: string[] = [];
  private languageService = inject(LanguageService);
  private languageSubscription!: Subscription; // To store the subscription

  ngOnInit(): void {
    this.loadData();
    this.languageSubscription = this.languageSubscription =
      this.languageService.language$.subscribe((language: LanguagesTypes) => {
        // this.currentLanguage = language;
        // console.log('Language changed to:', language);
        this.loadData();
      });
  }

  loadData() {
    this.translateService.get('About.roles').subscribe((list: string[]) => {
      this.roles = list;
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
