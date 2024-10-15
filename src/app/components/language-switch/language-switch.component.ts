import { Component, inject } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language/language.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent {
  private languageService = inject(LanguageService);

  toggleSwitch(language: any = null): void {
    const toggle = document.getElementById(
      'language-toggle',
    ) as HTMLInputElement;

    if (toggle) {
      if (language) toggle.checked = !toggle.checked;

      if (!toggle.checked) {
        this.languageService.changeLanguage('en');
      } else {
        this.languageService.changeLanguage('es');
      }
    }
  }
}
