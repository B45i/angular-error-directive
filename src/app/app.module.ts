import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardInputFormComponent } from './employee/standard-input-form/standard-input-form.component';
import { SharedModule } from './shared/shared.module';
import { ErrorDisplayDirective } from './shared/directives/error-display.directive';

@NgModule({
  declarations: [
    AppComponent,
    StandardInputFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
