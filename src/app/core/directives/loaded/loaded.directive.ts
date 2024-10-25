import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[loaded]',
})
export class LoadedDirective {
  @Output() loaded = new EventEmitter();

  @HostListener('load')
  onLoad() {
    this.loaded.emit();
  }

  constructor(private elRef: ElementRef<HTMLImageElement>) {
    if (this.elRef.nativeElement.complete) {
      this.elRef.nativeElement.removeAttribute('placeholder');
      this.loaded.emit();
    }
  }
}
