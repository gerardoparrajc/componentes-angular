import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[destacado]'
})
export class DestacadoDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.destacado;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  @Input() destacado = '';

  constructor(private el: ElementRef) {}


}
