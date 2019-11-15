import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Self,
  HostListener
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appErrorDisplay]'
})
export class ErrorDisplayDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Self() private ngControl: NgControl
  ) {}

  ngOnInit(): void {}

  @HostListener('blur')
  handleBlur() {
    if (this.ngControl.valid) {
      this.renderer.removeClass(this.el.nativeElement, 'is-danger');
      this.renderer.addClass(this.el.nativeElement, 'is-success');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'is-success');
      this.renderer.addClass(this.el.nativeElement, 'is-danger');
    }
  }
}
