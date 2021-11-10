import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[MyFor]'
})
export class ForDirective implements OnInit {

  @Input('MyForEm')
  numbers: number[] = [];

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) {}

  ngOnInit(): void{
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number });
    }
  }

}
