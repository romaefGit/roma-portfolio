import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  AnimateDelay,
  AnimateIteration,
  AnimateDuration,
  AnimationList,
} from 'src/app/core/models/animate.model';

@Directive({
  selector: '[appAnimateHover]',
})
export class AnimateHoverDirective implements OnInit {
  @Input() animationHover: AnimationList = 'bounce';

  @Input() animationDuration!: AnimateDuration;
  @Input() animationDelay!: AnimateDelay;
  @Input() animationIteration!: AnimateIteration;

  @Input() animationHasAnOut!: boolean;

  @Input() cancelAnimation!: boolean;

  constructor(
    public el: ElementRef,
    private renderer: Renderer2,
  ) {
    if (!this.cancelAnimation) this.setInitialClass();
  }

  ngOnInit(): void {
    if (!this.cancelAnimation) this.setInitialClass();
  }

  @HostListener('mouseover') onMouseOver() {
    if (!this.cancelAnimation) {
      // console.log("hearing enter > ");
      this.removeAnimation();
      this.addDuration(this.animationDuration);
      this.addDelay(this.animationDelay);
      this.addIteration(this.animationIteration);
      this.addAnimation(this.animationHover);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.cancelAnimation) {
      // console.log("hearing leave > ");
      this.removeAnimation();
    }
  }

  private setInitialClass() {
    this.renderer.addClass(this.el.nativeElement, 'animate__animated');
  }

  private addAnimation(animateClass: AnimationList) {
    if (animateClass)
      this.renderer.addClass(this.el.nativeElement, `animate__${animateClass}`);
  }

  private addDuration(duration: AnimateDuration) {
    // this.renderer.setStyle(this.el.nativeElement, '--animate-duration', duration);
    if (duration)
      this.renderer.addClass(this.el.nativeElement, `animate__${duration}`);
  }

  private addDelay(delay: AnimateDelay) {
    if (delay)
      this.renderer.addClass(this.el.nativeElement, `animate__${delay}`);
  }

  private addIteration(iteration: AnimateIteration) {
    if (iteration)
      this.renderer.addClass(this.el.nativeElement, `animate__${iteration}`);
  }

  private removeAnimation() {
    const classes = this.el.nativeElement.classList;
    const animateClasses = Array.from(classes).filter((className: any) =>
      className.startsWith('animate__'),
    );

    animateClasses.forEach((animateClass: any) => {
      if (animateClass !== 'animate__animated') {
        this.renderer.removeClass(this.el.nativeElement, animateClass);
      }

      // FOR HOLD animations
      if (animateClass.includes('Hold')) {
        // Create the corresponding "Out" class
        const animateOutClass = animateClass.replace('Hold', 'Out');

        // Add the "Out" class
        this.renderer.addClass(this.el.nativeElement, animateOutClass);
      }
    });
  }
}
