import {
  Component,
  ViewChild,
  Input,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { VideoComponent } from '../../video/video.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  ModalService,
  ProjectData,
} from 'src/app/core/services/modal/modal.service';
import { contentType } from 'src/app/core/models/project/project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    BaseModalComponent,
    NgOptimizedImage,
    VideoComponent,
    TranslateModule,
    NgClass,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent implements AfterViewInit {
  @ViewChild('dialog') dialog!: BaseModalComponent;
  dialogOpened!: boolean;

  project!: any;
  typeOfProject!: contentType;

  // Carousel slides
  slideIndexActive = 0;
  slidesLengthActiveSlider = 0;

  modalContentLoaded!: boolean;

  constructor(private modalService: ModalService) {
    this.modalService.showProjectModal.subscribe((projectData: ProjectData) => {
      this.project = projectData.info;
      this.typeOfProject = projectData.type;
      this.openDialog();
    });
  }

  ngAfterViewInit(): void {
    this.modalContentLoaded = true;
  }

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
    setTimeout(() => {
      // wait close transition
      this.slideIndexActive = 0;
    }, 500);
  }

  /**
   * Opens the modal dialog and resets the form.
   * This method is typically called when the user initiates a create or update action.
   */
  openDialog() {
    this.dialog.openDialog();
  }

  /**
   * Closes the modal dialog and resets the form.
   * This method is typically called when the user cancels an action.
   */
  closeDialog() {
    this.dialog.closeDialog();
  }
}
