import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  inject,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { throttleTime } from 'rxjs/operators';
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  }

  ngOnDestroy() {
    this.windowScroll$.unsubscribe();
  }

  onScroll() {
    //code to fix header on scroll
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
