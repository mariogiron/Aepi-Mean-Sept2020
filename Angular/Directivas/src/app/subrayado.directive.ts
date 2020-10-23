import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.textDecoration = 'underline';
  }

}