import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[destacado]'
})
export class DestacadoDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  constructor(private el: ElementRef) {}


}
