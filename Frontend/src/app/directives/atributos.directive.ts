import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAtributos]'
})
export class AtributosDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
   }

}
