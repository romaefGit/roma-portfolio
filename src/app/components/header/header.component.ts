import { Component } from '@angular/core';
import { FeatureFlagService } from 'src/app/core/services/feature-flag/feature-flag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  
  public sections: any = [
    { 
      id:"home",
      name: "Home",
      show: this.flagService.hasFlag('Home'),
    },
    { 
      id:"work",
      name: "Work",
      show: this.flagService.hasFlag('Work'),
    },
    { 
      id:"experience",
      name: "Experience",
      show: this.flagService.hasFlag('Experience'),
    },
    { 
      id:"about",
      name: "About",
      show: this.flagService.hasFlag('About'),
    },
    { 
      id:"services",
      name: "Services",
      show: this.flagService.hasFlag('Services'),
    },
    { 
      id:"testimonials",
      name: "Testimonials",
      show: this.flagService.hasFlag('Testimonials')
    },
    { 
      id:"blog",
      name: "Blog",
      show: this.flagService.hasFlag('Blog')
    }
  ]

  constructor(
    public flagService: FeatureFlagService
  ) {
    console.log("this.flagService.hasFlag('Services'), > ",this.flagService.hasFlag('Services'));
    
  }

  fullPageScroll(i:any) {
    if(this.sidebarOpen) this.sidebarOpen = false;
  }

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if(this.sidebarOpen) this.sidebarOpen = false;
  }

}
