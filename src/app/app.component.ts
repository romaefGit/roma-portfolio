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
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    MainComponent,
    LanguageSwitchComponent,
  ], // Add other necessary modules
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
}
