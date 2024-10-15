import { Injectable } from '@angular/core';
import { themeType } from 'src/app/components/switch-theme/switch-theme.component';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  setTheme(theme: themeType) {
    console.log('theme > ', theme);

    document.body.setAttribute('data-bs-theme', theme);
  }
}
