import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[destacado]'
})
export class DestacadoDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
