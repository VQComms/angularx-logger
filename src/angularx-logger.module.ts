import { NgModule, ModuleWithProviders } from '@angular/core';
import { Logger } from './logger';

@NgModule()
export class AngularXLoggerModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AngularXLoggerModule,
            providers: [Logger]
        };
    }

}
