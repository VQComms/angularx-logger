# Angularx-logger
> Logging for your Angular project

## Getting started

Install via npm:

```
npm install -S angularx-logger
```

Or

Install via yarn:

```
yarn add angularx-logger
```

Then add to your Angular app's app module:

```
import { NgModule }         from '@angular/core';
import { AngularXLoggerModule } from 'angularx-logger';
 
@NgModule({
    imports: [ AngularXLoggerModule.forRoot() ]
})
export class MyAwesomeAppModule { } 
```

Then use it in your app like so:

```
import { Component } from '@angular/core';
import { Logger } from 'angularx-logger';

@Component({
    selector: 'awesome',
    template: `<h1>Awesome</h1>`
})
export class MyAwesomeComponent {

    constructor(private logger: Logger){
    
        this.logger.log('Hello World!', { status: 'awesome' });
        
    }
}
```

And you're ready to go!

## Options

To use options, pass a `LoggerOptions` object to `forRoot` like:

```
AngularXLoggerModule.forRoot({ enabled: true, globalPrefix: 'Awesome App =>' })
```

`enabled` turn on or off the logger
`globalPrefix` adds a global prefix to each logged message, helpful for separating your logging from everyone elses!

## Future goals

* Component level "prefixes" to all log messages
* Multiple "targets" and custom "targets"
* Keep up to date
* Tests


## Scripts
* `"test"`: runs the test in mocha on node
* `"build:esm"`: builds the esm versions
* `"build:bundle"`: builds the UMD version
* `"build:aot"`: makes it work for aot
* `"build"`: does all the above
* `"copy"`: copies over file to dist
* `"release"`: does all the above
* `"pack-lib"`: does the packaging for npm
* `"publish-lib`: publishes to npm
