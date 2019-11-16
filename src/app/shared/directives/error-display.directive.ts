import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Self,
  HostListener,
  ViewContainerRef,
  Optional,
  ComponentFactoryResolver
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { ErrorContainerDirective } from '../directive/error-container.directive';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';

@Directive({
  selector: '[appErrorDisplay]'
})
export class ErrorDisplayDirective implements OnInit {
  private vcr: ViewContainerRef;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    @Self() private ngControl: NgControl,
    @Optional() private errorContainerDirective: ErrorContainerDirective
  ) {
    this.vcr = errorContainerDirective ? errorContainerDirective.vcr : null;
  }

  ngOnInit(): void {}

  @HostListener('blur')
  handleBlur() {
    if (this.ngControl.valid) {
      this.renderer.removeClass(this.el.nativeElement, 'is-danger');
      this.renderer.addClass(this.el.nativeElement, 'is-success');
      if (this.errorContainerDirective && this.errorContainerDirective.vcr) {
        this.vcr.clear();
      }
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'is-success');
      this.renderer.addClass(this.el.nativeElement, 'is-danger');
      if (this.errorContainerDirective && this.errorContainerDirective.vcr) {
        this.vcr.clear();
        const factory = this.resolver.resolveComponentFactory(
          ErrorMessageComponent
        );
        this.vcr.createComponent(factory);
      }
    }
  }
}
