/*!
 * Copyright 2017 VQ Communications Ltd All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/vqcomms/angularx-logger/blob/master/LICENSE
 */

import { Injectable } from '@angular/core';

export interface ILogger {
    error: (message?: any, ...optionalParams: any[]) => { };

    warn: (message?: any, ...optionalParams: any[]) => { };

    info: (message?: any, ...optionalParams: any[]) => { };

    debug: (message?: any, ...optionalParams: any[]) => { };

    log: (message?: any, ...optionalParams: any[]) => { };
}

@Injectable()
export class Logger implements ILogger {

    public error: (message?: any, ...optionalParams: any[]) => { };

    public warn: (message?: any, ...optionalParams: any[]) => { };

    public info: (message?: any, ...optionalParams: any[]) => { };

    public debug: (message?: any, ...optionalParams: any[]) => { };

    public log: (message?: any, ...optionalParams: any[]) => { };

    constructor() {
        this.bind();
    }

    private bind(): void {
        // No console? Let's do nothing.
        if (!console) {
            return;
        }

        if (console.error) {
            this.error = console.error.bind(console);
        }

        if (console.warn) {
            this.warn = console.warn.bind(console);
        }

        if (console.info) {
            this.info = console.info.bind(console);
        }

        if (console.debug) {
            this.debug = console.debug.bind(console);
        }

        if (console.log) {
            this.log = console.log.bind(console);
        }
    }
}
