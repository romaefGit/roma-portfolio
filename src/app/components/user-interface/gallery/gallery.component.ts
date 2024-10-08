// gallery.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() images: Gallery[] = [];

  @Input() arrows!: boolean;

  imageSelected!: Gallery;

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectImage(this.images[0]);
  }

  prevImage() {
    const currentIndex = this.images.findIndex((image) => image?.active);
    const prevIndex =
      (currentIndex - 1 + this.images.length) % this.images.length;
    this.images[currentIndex].active = false;
    this.images[prevIndex].active = true;
    this.imageSelected = this.images[prevIndex];
  }

  nextImage() {
    const currentIndex = this.images.findIndex((image) => image.active);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.images[currentIndex].active = false;
    this.images[nextIndex].active = true;

    this.imageSelected = this.images[nextIndex];
  }

  selectImage(image: any) {
    this.images?.forEach((img) => (img.active = false));
    if (image) image.active = true;
    this.imageSelected = image;
  }

  openUniverse(internUrl: string) {
    this.router.navigate([internUrl]);
  }
}

export interface Gallery {
  url: string;
  internUrl?: string;
  active?: boolean;
  width?: any;
  height?: any;
}
