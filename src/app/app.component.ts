import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  inject,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { LanguageService } from './core/services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, MainComponent], // Add other necessary modules
})
export class AppComponent implements OnInit, AfterViewInit {
  public fixedHeader: boolean = false;
  private windowScroll$: Subscription = Subscription.EMPTY;
  private languageService = inject(LanguageService);

  constructor() {}

  ngOnInit() {
    this.languageService.initLanguage();
    this.windowScroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(30))
      .subscribe(() => this.onScroll());
  }

  ngAfterViewInit() {
    // this.spyService.spy({ thresholdBottom: 50 });
    // this.toggleSwitch(this.languageService.getUserLanguage());
  }

  ngOnDestroy() {
    this.windowScroll$.unsubscribe();
  }

  onScroll() {
    if (
      document.documentElement.scrollTop >= 100 ||
      document.body.scrollTop >= 100
    ) {
      this.fixedHeader = true;
    } else {
      this.fixedHeader = false;
    }
  }

  toggleSwitch(language: any = null): void {
    const toggle = document.getElementById(
      'language-toggle',
    ) as HTMLInputElement;

    if (toggle) {
      if (language) toggle.checked = !toggle.checked;

      if (!toggle.checked) {
        this.languageService.changeLanguage('en');
      } else {
        this.languageService.changeLanguage('es');
      }
    }
  }
}
