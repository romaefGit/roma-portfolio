import { NgClass } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ChestPainComponent } from 'src/app/components/chest-pain/chest-pain.component';
import { RomaComponent } from 'src/app/components/roma/roma.component';
import {
  SwitchThemeComponent,
  themeType,
} from 'src/app/components/switch-theme/switch-theme.component';
import { AnimateHoverDirective } from 'src/app/core/directives/animate-hover/animate-hover.directive';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
@Component({
  standalone: true,
  imports: [
    TranslateModule,
    RomaComponent,
    SwitchThemeComponent,
    DirectivesModule,
    ChestPainComponent,
    NgClass,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  currentTheme!: themeType; // Default theme
  themeSubscription: Subscription = new Subscription(); // Holds the subscription

  showEyes = false;

  onMouseEnter() {
    this.showEyes = true;
  }

  onMouseLeave() {
    this.showEyes = false;
  }

  ngOnInit(): void {
    // Subscribe to the theme observable and store the subscription
    this.themeSubscription = this.themeService
      .getTheme()
      .subscribe((theme: themeType) => {
        this.currentTheme = theme;
        console.log('Theme changed to:', theme);
      });
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  // Clean up the subscription to prevent memory leaks
  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
