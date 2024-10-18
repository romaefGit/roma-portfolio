import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectType } from 'src/app/components/base-modal/project-modal/project-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSubject.asObservable();

  showProjectModal = new EventEmitter<ProjectData>();

  constructor() {}

  openProjectModal(projectData: ProjectData) {
    this.showProjectModal.emit(projectData);
    this.modalOpenSubject.next(true);
  }

  closeModal() {
    this.modalOpenSubject.next(false);
  }
}

export interface ProjectData {
  info: any;
  type: ProjectType;
}
