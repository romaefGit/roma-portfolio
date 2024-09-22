import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuOptions } from 'src/app/core/models/menu-options.model';
import { FeatureFlagService } from 'src/app/core/services/feature-flag/feature-flag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';

  public sections: MenuOptions[] = [];

  constructor(
    public flagService: FeatureFlagService,
    private translateService: TranslateService,
  ) {
    // console.log(
    //   "this.flagService.hasFlag('Services'), > ",
    //   this.flagService.hasFlag('Services'),
    // );
  }

  ngOnInit(): void {
    this.loadOptions();
    this.translateService
      .get('Menu.options')
      .subscribe((options: MenuOptions[]) => {
        this.sections = options.map((option) => {
          return {
            ...option,
            show: this.flagService.hasFlag(option.name),
          };
        });
      });
  }

  loadOptions() {}

  fullPageScroll(i: any) {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }
}
