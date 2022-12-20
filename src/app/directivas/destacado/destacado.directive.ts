import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[destacado]'
})
export class DestacadoDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.querySelector('.badge').style.backgroundColor = 'blue';
  }

}
