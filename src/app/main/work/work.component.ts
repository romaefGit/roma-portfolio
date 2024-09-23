import { Component, OnInit, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options, options2 } from '../constant';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LanguageService,
  LanguagesTypes,
} from 'src/app/core/services/language/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public customOptions: OwlOptions = options;
  public customOptions2: OwlOptions = options2;

  private translateService = inject(TranslateService);

  private languageSubscription!: Subscription; // To store the subscription

  gameProjects: any[] = [];

  artProjects: any[] = [];

  // Carousel slides
  slideIndexActive = 0;
  slidesLengthActiveSlider = 0;
  // @HostListener('document:keypress', ['$event'])
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    // console.log('e > ', e);

    switch (e.key) {
      case 'ArrowRight':
        this.next(this.slidesLengthActiveSlider);
        break;
      case 'ArrowLeft':
        this.prev(this.slidesLengthActiveSlider);
        break;
    }
  }
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.loadProjects();
    this.languageSubscription = this.languageService.language$.subscribe(
      (language: LanguagesTypes) => {
        // this.currentLanguage = language;
        // console.log('Language changed to:', language);
        this.loadProjects();
      },
    );
  }

  /**
   * Get projects from the json translation
   */
  loadProjects(): void {
    this.translateService.get('Work.games').subscribe((projects: any[]) => {
      this.gameProjects = projects;
    });
    this.translateService.get('Work.art').subscribe((projects: any[]) => {
      this.artProjects = projects;
    });
  }

  showGif(type: string, index: number, indexChild: any) {
    // console.log('lego');
    // console.log(type, index, indexChild);

    if (type == 'game')
      this.gameProjects[index].toShow = this.gameProjects[index].gif;
    if (type == 'art')
      this.artProjects[index].toShow = this.artProjects[index].gif;
    if (type == 'art_part' && indexChild >= 0) {
      this.artProjects[index].modal_info.parts[indexChild].toShow =
        this.artProjects[index].modal_info.parts[indexChild].gif;
    }
  }

  hideGif(type: string, index: number, indexChild: any) {
    if (type == 'game')
      this.gameProjects[index].toShow = this.gameProjects[index].img;
    if (type == 'art')
      this.artProjects[index].toShow = this.artProjects[index].img;
    if (type == 'art_part' && indexChild >= 0) {
      this.artProjects[index].modal_info.parts[indexChild].toShow =
        this.artProjects[index].modal_info.parts[indexChild].img;
    }
  }

  next(slidesLength: number) {
    if (this.slideIndexActive < slidesLength - 1) {
      this.setActiveSlide(this.slideIndexActive + 1);
    } else {
      this.setActiveSlide(0);
    }
  }

  prev(slidesLength: number) {
    if (this.slideIndexActive > 0) {
      this.setActiveSlide(this.slideIndexActive - 1);
    } else {
      this.setActiveSlide(slidesLength - 1);
    }
  }

  setActiveSlide(num: number) {
    this.slideIndexActive = num;
  }

  sliderClosed() {
    this.slideIndexActive = 0;
  }

  setSliderLength(num: number) {
    this.slidesLengthActiveSlider = num;
  }

  // Unsubscribe when the component is destroyed
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
      // console.log('Unsubscribed from language observable');
    }
  }
}
