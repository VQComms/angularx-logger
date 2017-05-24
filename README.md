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
    imports:      [ AngularXLoggerModule ]
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

## Future goals

* Global "prefix" to all log messages
* Component level "prefixes" to all log messages
* Multiple "targets" and custom "targets"
* Keep up to date
* Tests
* Demo project
* CHANGELOG / Releases


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
