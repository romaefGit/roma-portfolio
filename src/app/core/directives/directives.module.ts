import { NgModule } from '@angular/core';
import { ParallaxMouseOverDirective } from './parallax/parallax-mouse-over/parallax-mouse-over.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const DIRECTIVES = [ParallaxMouseOverDirective];

@NgModule({
  declarations: DIRECTIVES,
  imports: [TranslateModule, CommonModule],
  exports: DIRECTIVES,
})
export class DirectivesModule {}
