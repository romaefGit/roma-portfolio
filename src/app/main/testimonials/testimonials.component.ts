import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options, options2 } from '../constant';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public currentSection = 'home';
  public customOptions: OwlOptions = options;
  public customOptions2: OwlOptions = options2;
  public slidesStore!: any[];

  ngOnInit(): void {
    this.slidesStore = [
      {
        id : 1,
        src: "assets/img/brand-1.png",
        alt: "brand-1",
        title: "brand-1",
      },
      {
        id : 2,
        src: "assets/img/brand-2.png",
        alt: "brand-2",
        title: "brand-2",
      },
      {
        id : 3,
        src: "assets/img/brand-3.png",
        alt: "brand-3",
        title: "brand-3",
      },
      {
        id : 4,
        src: "assets/img/brand-4.png",
        alt: "brand-4",
        title: "brand-4",
      },
      {
        id : 5,
        src: "assets/img/brand-1.png",
        alt: "brand-1",
        title: "brand-1",
      }
    ];
  }
}
