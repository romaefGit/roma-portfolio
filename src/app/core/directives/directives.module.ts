import { NgModule } from '@angular/core';
import { ParallaxMouseOverDirective } from './parallax/parallax-mouse-over/parallax-mouse-over.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LoadedDirective } from './loaded/loaded.directive';
import { AnimateHoverDirective } from './animate-hover/animate-hover.directive';

const DIRECTIVES = [
  ParallaxMouseOverDirective,
  LoadedDirective,
  AnimateHoverDirective,
];

@NgModule({
  declarations: DIRECTIVES,
  imports: [TranslateModule, CommonModule],
  exports: DIRECTIVES,
})
export class DirectivesModule {}
