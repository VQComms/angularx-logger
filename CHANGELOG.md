# Changelog

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