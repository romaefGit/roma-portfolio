import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
@Component({
  standalone: true,
  imports: [TranslateModule, CommonModule, PipeModule],
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services: any[] = [
    {
      title: 'Front end development',
      description:
        'I know how to develop a web project from scratch using Angular or IONIC.',
      url: 'assets/img/services-5.jpg',
    },
    {
      title: 'Front end development',
      description:
        'I know how to develop a web project from scratch using Angular or IONIC.',
      url: 'assets/img/services-5.jpg',
    },
  ];
}
