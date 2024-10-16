import { TitleCasePipe } from '@angular/common';
import { Component, inject, Input, Type } from '@angular/core';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [TitleCasePipe, DirectivesModule],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss',
})
export class SwitchThemeComponent {
  @Input({ required: true }) currentTheme!: themeType;
  private themeService = inject(ThemeService);

  // Toggle the theme between light and dark
  changeTheme(theme: themeType) {
    this.currentTheme = 'none';
    setTimeout(() => {
      this.currentTheme = theme;
      this.themeService.setTheme(this.currentTheme);
    });
  }

  toggleSwitch(theme: any = null): void {
    const newTheme: themeType =
      this.currentTheme === 'light' ? 'halloween' : 'light';
    console.log('newTheme > ', newTheme);
    this.changeTheme(newTheme);
  }
}

export type themeType = 'light' | 'halloween' | 'none';
