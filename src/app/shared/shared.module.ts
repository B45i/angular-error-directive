import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayDirective } from './directives/error-display.directive';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ErrorContainerDirective } from './directive/error-container.directive';



@NgModule({
  declarations: [ErrorDisplayDirective, ErrorMessageComponent, ErrorContainerDirective],
  imports: [
    CommonModule
  ],
  exports: [ErrorDisplayDirective, ErrorMessageComponent, ErrorContainerDirective],
  entryComponents: [ErrorMessageComponent]
})
export class SharedModule { }
