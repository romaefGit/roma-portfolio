import { NgModule } from '@angular/core';
import { ParallaxMouseOverDirective } from './parallax/parallax-mouse-over/parallax-mouse-over.directive';

const DIRECTIVES = [
  ParallaxMouseOverDirective
]

@NgModule({
  declarations: DIRECTIVES,
  imports: [],
  exports: DIRECTIVES,
})
export class DirectivesModule { }
