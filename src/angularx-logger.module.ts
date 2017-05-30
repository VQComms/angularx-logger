import { NgModule, ModuleWithProviders } from '@angular/core';
import { Logger } from './logger';
import { LoggerOptions } from './logger-options';

@NgModule()
export class AngularXLoggerModule {

    public static forRoot(loggerOptions: LoggerOptions = new LoggerOptions()): ModuleWithProviders {
        return {
            ngModule: AngularXLoggerModule,
            providers: [
                Logger,
                { provide: LoggerOptions, useValue: loggerOptions }
            ]
        };
    }

}
