import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Categorized components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main.component';
import { PipeModule } from '../core/pipes/pipe.module';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { CarouselModule } from 'ngx-owl-carousel-o';

const SectionsMain = [
  MainComponent,
  HomeComponent,
  AboutComponent,
  ExperienceComponent,
  ServicesComponent,
  WorkComponent,
  TestimonialsComponent,
  BlogComponent,
  ContactComponent,
];

@NgModule({
  declarations: SectionsMain,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    PipeModule,
    CarouselModule,
    NgClickOutsideDirective,
  ],
  exports: SectionsMain,
})
export class MainModule { }
