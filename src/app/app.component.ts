import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  inject,
  Injectable,
} from '@angular/core';
import { fromEvent, Subscription, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { LanguageService } from './core/services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './main/main.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { ProjectModalComponent } from './components/base-modal/project-modal/project-modal.component';

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
    ProjectModalComponent,
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

@Injectable({ providedIn: 'root' })
export class ClickListenerService {
  documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();
}
