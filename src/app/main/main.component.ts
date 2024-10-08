import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';
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
import { ScrollService } from '../core/services/scroll/scroll.service';
import { Subscription } from 'rxjs';

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
  ],
})
export class MainComponent implements AfterViewInit, OnDestroy {
  private scrollSubscription!: Subscription; // To store the subscription

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  sectionIdActive!: string;

  constructor(
    public flagService: FeatureFlagService,
    private el: ElementRef,
    private scrollService: ScrollService,
  ) {}

  ngAfterViewInit(): void {}

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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
      // console.log('Unsubscribed from language observable');
    }
  }
}
