import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  inject,
  Injectable,
} from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LanguageService } from './core/services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { ProjectModalComponent } from './components/base-modal/project-modal/project-modal.component';
import { ImageGalleryComponent } from './components/base-modal/image-gallery/image-gallery.component';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeaderComponent,
    MainComponent,
    LanguageSwitchComponent,
    ProjectModalComponent,
    ImageGalleryComponent,
    RouterOutlet,
  ], // Add other necessary modules
})
export class AppComponent implements OnInit, AfterViewInit {
  private languageService = inject(LanguageService);

  constructor() {}

  ngOnInit() {
    this.languageService.initLanguage();
  }

  ngAfterViewInit() {
    // this.spyService.spy({ thresholdBottom: 50 });
    // this.toggleSwitch(this.languageService.getUserLanguage());
  }

  ngOnDestroy() {}
}

@Injectable({ providedIn: 'root' })
export class ClickListenerService {
  documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();
}
