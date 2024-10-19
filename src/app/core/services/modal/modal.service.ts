import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Slide, contentType } from '../../models/project/project.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalProjectOpenSubject = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalProjectOpenSubject.asObservable();

  showProjectModal = new EventEmitter<ProjectData>();
  showGalleryModal = new EventEmitter<Slide[]>();

  constructor() {}

  openProjectModal(projectData: ProjectData) {
    this.showProjectModal.emit(projectData);
    this.modalProjectOpenSubject.next(true);
  }

  openGalleryModal(images: Slide[]) {
    console.log('images > ', images);

    this.showGalleryModal.emit(images);
  }

  closeModal() {
    this.modalProjectOpenSubject.next(false);
  }
}

export interface ProjectData {
  info: any;
  type: contentType;
}
