import { Injectable, Inject } from '@angular/core';
import { ILogger } from './ilogger';
import { ConsoleLogger } from './loggers/console';
import { DevNullLogger } from './loggers/dev-null';
import { LoggerOptions } from './logger-options';

// Target ideas:
// Alert?
// HTML Element?

@Injectable()
export class Logger implements ILogger {

    private logger: ILogger;

    constructor( @Inject(LoggerOptions) private loggerOptions: LoggerOptions) {
        // TODO: Starting work on letting user choose a different target
        if (!this.loggerOptions.enable) {
            this.logger = new DevNullLogger();
        } else {
            this.logger = new ConsoleLogger();
        }
    }

    public error(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        this.logger.error(message, ...optionalParams);
    }

    public warn(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        this.logger.warn(message, ...optionalParams);
    }

    public info(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        this.logger.info(message, ...optionalParams);
    }

    public debug(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        this.logger.debug(message, ...optionalParams);
    }

    public log(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        this.logger.log(message, ...optionalParams);
    }

}
