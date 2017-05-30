import { Injectable, Inject } from '@angular/core';
import { LoggerOptions } from './logger-options';

export interface ILogger {
    error(message?: any, ...optionalParams: any[]);

    warn(message?: any, ...optionalParams: any[]);

    info(message?: any, ...optionalParams: any[]);

    debug(message?: any, ...optionalParams: any[]);

    log(message?: any, ...optionalParams: any[]);
}

export class DevNullLogger implements ILogger {
    public error(message?: any, ...optionalParams: any[]) {
        // Void
    }

    public warn(message?: any, ...optionalParams: any[]) {
        // Void
    }

    public info(message?: any, ...optionalParams: any[]) {
        // Void
    }

    public debug(message?: any, ...optionalParams: any[]) {
        // Void
    }

    public log(message?: any, ...optionalParams: any[]) {
        // Void
    }
}

export class ConsoleLogger implements ILogger {
    public error(message?: any, ...optionalParams: any[]) {
        console.error.apply(console, arguments);
    }

    public warn(message?: any, ...optionalParams: any[]) {
        console.warn.apply(console, arguments);
    }

    public info(message?: any, ...optionalParams: any[]) {
        console.info.apply(console, arguments);
    }

    public debug(message?: any, ...optionalParams: any[]) {
        // Deal with some browsers not having debug, IE
        if (console['debug'] === undefined) {
            console.log.apply(console, arguments);
        } else {
            console.debug.apply(console, arguments);
        }
    }

    public log(message?: any, ...optionalParams: any[]) {
        console.log.apply(console, arguments);
    }
}

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

        if (optionalParams && optionalParams.length > 0) {
            this.logger.error(message, optionalParams);
        } else {
            this.logger.error(message);
        }
    }

    public warn(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        if (optionalParams && optionalParams.length > 0) {
            this.logger.warn(message, optionalParams);
        } else {
            this.logger.warn(message);
        }
    }

    public info(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        if (optionalParams && optionalParams.length > 0) {
            this.logger.info(message, optionalParams);
        } else {
            this.logger.info(message);
        }
    }

    public debug(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        if (optionalParams && optionalParams.length > 0) {
            this.logger.debug(message, optionalParams);
        } else {
            this.logger.debug(message);
        }
    }

    public log(message?: any, ...optionalParams: any[]) {
        message = this.loggerOptions.globalPrefix + ' ' + message;

        if (optionalParams && optionalParams.length > 0) {
            this.logger.log(message, optionalParams);
        } else {
            this.logger.log(message);
        }
    }

}
