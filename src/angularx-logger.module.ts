import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularXLoggerComponent } from './angularx-logger.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AngularXLoggerComponent ],
  exports: [ AngularXLoggerComponent ]
})
export class AngularXLoggerModule { }
