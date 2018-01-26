import { ILogger } from '../ilogger';

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
