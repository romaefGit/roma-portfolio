import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MenuOptions } from 'src/app/core/models/menu-options.model';
import { FeatureFlagService } from 'src/app/core/services/feature-flag/feature-flag.service';
import {
  LanguageService,
  LanguagesTypes,
} from 'src/app/core/services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';

@Component({
  standalone: true,
  imports: [TranslateModule, CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';

  public sections: MenuOptions[] = [];
  private translateService = inject(TranslateService);
  private languageService = inject(LanguageService);
  private languageSubscription!: Subscription; // To store the subscription

  constructor(
    public flagService: FeatureFlagService,
    public scrollService: ScrollService,
  ) {
    // console.log(
    //   "this.flagService.hasFlag('Services'), > ",
    //   this.flagService.hasFlag('Services'),
    // );
  }

  ngOnInit(): void {
    this.loadOptions();
    this.languageSubscription = this.languageSubscription =
      this.languageService.language$.subscribe((language: LanguagesTypes) => {
        // this.currentLanguage = language;
        // console.log('Language changed to:', language);
        this.loadOptions();
      });
  }

  loadOptions() {
    this.translateService
      .get('Menu.options')
      .subscribe((options: MenuOptions[]) => {
        this.sections = options.map((option) => {
          return {
            ...option,
            show: this.flagService.hasFlag(option.id),
          };
        });
      });
  }

  fullPageScroll(i: any) {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
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
