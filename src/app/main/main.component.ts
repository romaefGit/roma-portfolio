import { Component, EventEmitter, Output } from '@angular/core';
import { FeatureFlagService } from 'src/app/core/services/feature-flag/feature-flag.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
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
