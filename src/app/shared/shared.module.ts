import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayDirective } from './directives/error-display.directive';



@NgModule({
  declarations: [ErrorDisplayDirective],
  imports: [
    CommonModule
  ],
  exports: [ErrorDisplayDirective]
})
export class SharedModule { }
