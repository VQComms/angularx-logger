# Changelog

## Version 3.0.0 (2018-05-14)

Updated for Angular 6 support.

## Version 2.0.0 (2018-01-26)

* Reworked to use angular-library-starter https://github.com/robisim74/angular-library-starter
* Upgraded for Angular 5

## Version 1.1.2 (2017-05-30)

Simplified logging logic using spread operator also leading to better formatting of optional parameters.

## Version 1.1.1 (2017-05-30)

Fixed logical mistake in debug protection on older browsers.
Improved README for `.forRoot(opts: {})`

## Version 1.1.0 (2017-05-30)

Added `LoggerOptions` to package. You can now set `enable` (boolean) and `globalPrefix` (string) so you can control the logger more.

I.e.

`let loggerOptions: LoggerOptions = { enable: true, globalPrefix: 'DEMO =>' };`

Called with:

`this.logger.error('You are dangerously awesome');`

Generates log entries like:

`DEMO => You are dangerously awesome`

See the demo project for more information.

## Version: 1.0.7 (2017-05-24)

Initial release. Basic functionality.