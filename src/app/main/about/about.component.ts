import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private translateService = inject(TranslateService);
  roles: string[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.translateService.get('About.roles').subscribe((list: string[]) => {
      this.roles = list;
    });
  }
}
