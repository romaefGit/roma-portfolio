import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';
import { checkInView } from 'src/app/core/utils';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Slide } from 'src/app/core/models/project/project.model';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [BaseModalComponent, NgClass, NgOptimizedImage],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
})
export class ImageGalleryComponent {
  @Input() loading = false;
  @ViewChild('dialog') dialog!: BaseModalComponent;
  @ViewChild('thumbnails') thumbnails!: ElementRef<HTMLElement>;
  keyboardListener;

  images: Slide[] = []; // just url strings
  activeImageIndex = 0;
  activeImageUrl = '';
  errorMessage = '';

  constructor(
    private renderer: Renderer2,
    private modalService: ModalService,
  ) {
    //Create keyboard listener to listen to left/right arrow presses
    this.keyboardListener = this.renderer.listen(
      'document',
      'keydown',
      (event: KeyboardEvent) => {
        if (!this.dialog.isOpen) return;
        if (event.key === 'ArrowLeft') {
          this.goToPreviousImage();
        } else if (event.key === 'ArrowRight') {
          this.goToNextImage();
        }
      },
    );
    this.modalService.showGalleryModal.subscribe((images: Slide[]) => {
      this.images = images;
      this.openDialog(images);
    });
  }

  openDialog(images: Slide[], index = 0, slide?: Slide) {
    //Set up the images
    this.images = images;

    if (slide) {
      const indexFromUrl = images.indexOf(slide);
      this.goToImage(indexFromUrl);
    } else if (index >= 0) {
      this.goToImage(index);
    }

    this.errorMessage = '';
    this.dialog.openDialog();
  }

  //Use this if you want to close the dialog from another component
  closeDialog() {
    this.dialog.closeDialog();
    this.errorMessage = '';
    this.loading = false;
    this.keyboardListener();
  }

  goToImage(index: number) {
    this.activeImageIndex = index;
    this.activeImageUrl = this.images[index].img;

    setTimeout(() => {
      this.scrollIntoView(index);
    }, 0);
  }

  //Check if the image is out of view, and scroll to it if it is
  scrollIntoView(index: number) {
    const activeImageThumbnail = this.thumbnails.nativeElement.children[
      index
    ] as HTMLElement;

    if (activeImageThumbnail) {
      if (
        !checkInView(this.thumbnails.nativeElement, activeImageThumbnail, false)
      ) {
        // Element is out of view, calculate scroll distance
        const container = this.thumbnails.nativeElement;
        const element = activeImageThumbnail;
        const scrollLeft = element.offsetLeft - container.offsetLeft;

        // Scroll container to bring element into view
        container.scrollLeft = scrollLeft;
      }
    }
  }
  goToNextImage() {
    if (this.getLastImageIndex() == this.activeImageIndex) {
      this.goToImage(0);
    } else {
      this.goToImage(this.activeImageIndex + 1);
    }
  }

  goToPreviousImage() {
    if (this.activeImageIndex == 0) {
      this.goToImage(this.getLastImageIndex());
    } else {
      this.goToImage(this.activeImageIndex - 1);
    }
  }

  getLastImageIndex() {
    return this.images.length - 1;
  }

  ngOnDestroy() {
    // Remove listener
    this.keyboardListener();
  }
}
