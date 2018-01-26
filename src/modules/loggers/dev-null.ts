import { ILogger } from '../ilogger';

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