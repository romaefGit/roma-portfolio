import { Component, inject, Input, Type } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss',
})
export class SwitchThemeComponent {
  @Input({ required: true }) selectTheme!: themeType;
  private themeService = inject(ThemeService);

  // Toggle the theme between light and dark
  changeTheme(theme: themeType) {
    this.selectTheme = theme;
    this.themeService.setTheme(this.selectTheme);
  }

  toggleSwitch(theme: any = null): void {
    const toggle = document.getElementById('theme-toggle') as HTMLInputElement;
    console.log('toggle > ', toggle);

    if (toggle) {
      if (theme) toggle.checked = !toggle.checked;

      if (!toggle.checked) {
        this.changeTheme('light');
      } else {
        this.changeTheme('halloween');
      }
    }
  }
}

export type themeType = 'light' | 'halloween';
