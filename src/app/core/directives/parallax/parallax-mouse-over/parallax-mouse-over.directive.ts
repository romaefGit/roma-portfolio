import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * ParallaxMouseOverDirective - By Romario Estrada 
 * 
 * The directive handles mouse movement and mouse leave events to create a parallax effect.
 * It initializes parameters when the mouse moves for the first time (initParamsParallax).
 * It throttles the parallax effect to improve performance (throttleParallax).
 * It updates the parallax effect based on mouse movement (updateParallax).
 * It resets elements to their default position when the mouse leaves (setDefaultPosition).
 * Use Example: 
 * 
  <div class="relative flex flex-col w-full h-[500px] z-40" appParallaxMouseOver>
    <div class="bg-primary-400 w-[100px] h-[100px] absolute left-[50%] top-[50%] mouseOverObject" data-speed="10">Image 1</div>
    <div class="bg-red-01 w-[100px] h-[100px] absolute left-[50%] top-[50%] mouseOverObject" data-speed="20">Image 2</div>
    <div class="bg-purple-200 w-[100px] h-[100px] absolute left-[50%] top-[50%] mouseOverObject" data-speed="20">Image 3</div>
  </div>
 */
@Directive({
  selector: '[appParallaxMouseOver]'
})
export class ParallaxMouseOverDirective {

  private throttleTimeout: any | null = null;
  private throttleTimeoutLeave: any | null = null;
  
  section: any
  layers: any[] = []

  canvasSize: any
  paramsInit: boolean = false

  defaultSmoothTransition = 'transform 0.001s ease'

  offX: any
  offY: any

  constructor(private elementRef: ElementRef) { }

  // Listener for mouse move event
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if(!this.paramsInit) this.initParamsParallax(event)
    this.throttleParallax(event)
  }

  // Listener for mouse leave event
  @HostListener('mouseleave')
  onMouseLeave(event: MouseEvent) {
    if (!this.throttleTimeoutLeave) {
      this.throttleTimeoutLeave = setTimeout(() => {
        this.setDefaultPosition();
        this.throttleTimeoutLeave = null;
      }, 16); // 60fps
    }
  }

  // Initialize parallax parameters based on the mouse event
  initParamsParallax(event: MouseEvent) {
    this.section = this.elementRef.nativeElement;
    this.canvasSize = this.section?.getBoundingClientRect();
    const layers = this.section.querySelectorAll('.mouseOverObject');
    // Saving layers once to avoid querying the DOM multiple times
    layers.forEach((layer:any) => {
      const speed = parseInt(layer.getAttribute('data-speed'))
      this.layers.push({
        elementRef: layer,
        speed: speed
      })
    })
    this.paramsInit = true
    this.throttleParallax(event)
  }

  // Throttle the parallax effect to improve performance
  throttleParallax(event: MouseEvent) {
    if (!this.throttleTimeout) {
      this.throttleTimeout = setTimeout(() => {
        this.updateParallax(event);
        this.throttleTimeout = null;
      }, 16); // 60fps
    }
  }

  // Update the parallax effect based on the mouse movement
  private updateParallax(event: MouseEvent) {
    if(this.layers) {
      this.offX = event.pageX - (this.canvasSize.width * 0.5)
      this.offY = event.pageY - (this.canvasSize.width * 0.5)
      
      this.layers.forEach(layer => {
        const mouseX = (this.offX * layer.speed) / 100;
        const mouseY = (this.offY * layer.speed) / 100;
        layer.elementRef.style.transition = this.defaultSmoothTransition;
        layer.elementRef.style.transform = `translate(${-(mouseX / 10)}px, ${-(mouseY / 10)}px)`;
      });
    }
  }

  // Reset elements to their default position on mouse leave
  private setDefaultPosition() {
    const section = this.elementRef.nativeElement;

    const layers = section.querySelectorAll('.mouseOverObject');
    layers.forEach((layer:any) => {
      layer.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
      layer.style.transform = `translate(0px, 0px)`;

      // Remove transition after a short delay
      setTimeout(() => {
        layer.style.transition = this.defaultSmoothTransition;
      }, 500); // 500 milliseconds, same as the transition duration
    });
  }
}
