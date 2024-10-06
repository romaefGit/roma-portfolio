import { Component, EventEmitter, Output } from '@angular/core';
import { FeatureFlagService } from 'src/app/core/services/feature-flag/feature-flag.service';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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
export class MainComponent {
  constructor(public flagService: FeatureFlagService) {}

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
