import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
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
export class MainComponent implements OnInit, OnDestroy {
  private scrollSubscription!: Subscription; // To store the subscription
  constructor(
    public flagService: FeatureFlagService,
    private el: ElementRef,
    private scrollService: ScrollService,
  ) {}

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.sectionToScroll$.subscribe(
      (sectionId) => {
        // console.log('sectionId > ', sectionId);

        if (sectionId) {
          this.scrollToSection(sectionId);
        }
      },
    );
  }

  scrollToSection(sectionId: string): void {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    // console.log('section > ', section);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
