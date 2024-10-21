import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { FeatureFlagService } from 'src/app/core/services/feature-flag/feature-flag.service';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LanguageSwitchComponent } from 'src/app/components/language-switch/language-switch.component';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    HomeComponent,
    WorkComponent,
    ExperienceComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    BlogComponent,
    TranslateModule,
    CommonModule,
    HeaderComponent,
    LanguageSwitchComponent,
  ],
})
export class MainComponent implements AfterViewInit, OnDestroy {
  public fixedHeader: boolean = false;
  private windowScroll$: Subscription = Subscription.EMPTY;
  private scrollSubscription!: Subscription; // To store the subscription

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  sectionIdActive!: string;

  constructor(
    public flagService: FeatureFlagService,
    private el: ElementRef,
    private scrollService: ScrollService,
  ) {}

  ngAfterViewInit(): void {
    this.windowScroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(30))
      .subscribe(() => this.onScroll());
  }

  scrollToSection(sectionId: string): void {
    this.waitForElement(`#${sectionId}`, (section) => {
      if (section) {
        // Scroll to the exact position smoothly
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          this.scrollService.scrollTo(sectionId);
        }, 100);
      }
    });
  }

  // Polling function to wait for the element
  waitForElement(
    selector: string,
    callback: (element: HTMLElement) => void,
  ): void {
    const section = this.el.nativeElement.querySelector(selector);
    if (section) {
      callback(section);
    } else {
      setTimeout(() => this.waitForElement(selector, callback), 100); // Retry every 100ms
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

  ngOnDestroy(): void {
    this.windowScroll$.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
      // console.log('Unsubscribed from language observable');
    }
  }
}
