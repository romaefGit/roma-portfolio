import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RomaComponent } from 'src/app/components/roma/roma.component';
@Component({
  standalone: true,
  imports: [TranslateModule, RomaComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
