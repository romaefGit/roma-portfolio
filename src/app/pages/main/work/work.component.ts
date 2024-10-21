import { Component, OnInit, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options, options2 } from '../constant';
import { inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  LanguageService,
  LanguagesTypes,
} from 'src/app/core/services/language/language.service';
import { Subscription } from 'rxjs';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { VideoComponent } from 'src/app/components/video/video.component';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import {
  Project,
  Slide,
  contentType,
} from 'src/app/core/models/project/project.model';
import { ChestPainComponent } from 'src/app/components/chest-pain/chest-pain.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    TranslateModule,
    NgOptimizedImage,
    CommonModule,
    DirectivesModule,
    VideoComponent,
    ChestPainComponent,
  ],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public customOptions: OwlOptions = options;
  public customOptions2: OwlOptions = options2;

  private translateService = inject(TranslateService);
  private modalService = inject(ModalService);

  private languageSubscription!: Subscription; // To store the subscription

  gameProjects: any[] = [];

  artProjects: any[] = [];

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

  openProject(project: Project, type: contentType) {
    this.modalService.openProjectModal({ info: project, type: type });
  }

  openArtProject(project: Project) {
    // console.log('project > ', project);

    if (project.contentType == 'artSlides') {
      // console.log('project.modal_info.slides > ', project.modal_info.slides);

      this.modalService.openGalleryModal(project.modal_info.slides);
    }
    if (project.contentType == 'art') {
      // console.log('project.contentType > ', project.contentType);
      this.modalService.openProjectModal({
        info: project,
        type: project.contentType,
      });
    }
  }

  // Unsubscribe when the component is destroyed
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
      // console.log('Unsubscribed from language observable');
    }
  }
}
