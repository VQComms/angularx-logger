import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularXLoggerModule, LoggerOptions } from 'angularx-logger';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

let loggerOptions: LoggerOptions = { enable: true, globalPrefix: 'DEMO =>' };
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularXLoggerModule.forRoot(loggerOptions)
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
