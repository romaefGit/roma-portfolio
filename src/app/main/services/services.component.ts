import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: any[] = [
    {
      title: 'Front end development',
      description: 'I know how to develop a web project from scratch using Angular or IONIC.',
      url: 'assets/img/services-5.jpg'
    },
    {
      title: 'Front end development',
      description: 'I know how to develop a web project from scratch using Angular or IONIC.',
      url: 'assets/img/services-5.jpg'
    }
  ]
}
