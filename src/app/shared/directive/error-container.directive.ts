import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appErrorContainer]'
})
export class ErrorContainerDirective {

  constructor(public vcr: ViewContainerRef) { }

}
