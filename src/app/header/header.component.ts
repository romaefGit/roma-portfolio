import { Component } from '@angular/core';

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
      name: "Home"
    },
    { 
      id:"about",
      name: "About"
    },
    { 
      id:"experience",
      name: "Experience"
    },
    { 
      id:"services",
      name: "Services"
    },
    { 
      id:"work",
      name: "Work"
    },
    // { 
    //   id:"testimonials",
    //   name: "Testimonials"
    // },
    // { 
    //   id:"blog",
    //   name: "Blog"
    // }
  ]

  constructor(
  ) {}

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
