import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { themeType } from 'src/app/components/switch-theme/switch-theme.component';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'selectedTheme'; // Key for localStorage
  private themeSubject: BehaviorSubject<themeType>;

  constructor() {
    // Get the stored theme from localStorage, or default to 'light'
    const storedTheme =
      (localStorage.getItem(this.storageKey) as themeType) || 'light';

    // Initialize the BehaviorSubject with the stored theme or default
    this.themeSubject = new BehaviorSubject<themeType>(storedTheme);

    // Set the initial theme attribute on the body
    document.body.setAttribute('data-bs-theme', storedTheme);
  }

  // Method to set and save the theme
  setTheme(theme: themeType) {
    // Update the BehaviorSubject
    this.themeSubject.next(theme);

    // Save the selected theme to localStorage
    localStorage.setItem(this.storageKey, theme);

    // Update the theme on the body tag
    document.body.setAttribute('data-bs-theme', theme);
  }

  // Method to get the theme observable
  getTheme() {
    return this.themeSubject.asObservable();
  }
}
