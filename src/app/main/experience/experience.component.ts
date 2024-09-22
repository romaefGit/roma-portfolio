import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Experience } from 'src/app/core/models/experience/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experienceList: Experience[] = [];

  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.loadExperiences();
  }

  /**
   * Get projects from the json translation
   */
  loadExperiences(): void {
    this.translateService
      .get('Experience.list')
      .subscribe((list: Experience[]) => {
        this.experienceList = list;
      });
  }
}
