import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angularx-logger';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor(private logger: Logger) { }

  public ngOnInit(): void {
    this.logger.debug('OnInit');
  }

  public ngOnDestroy(): void {
    this.logger.debug('OnDestroy');
  }

  public debug(): void {
    this.logger.debug('You are kind of awesome');
  }

  public debugObject(): void {
    this.logger.debug('You are kind of awesome', { whoami: 'you', awesomeness: 9001, isAwesome: true });
  }

  public debugArray(): void {
    this.logger.debug('You are kind of awesome', [ 9001, 1337, 7, 3, 2 ]);
  }

  public info(): void {
    this.logger.info('You are awesome');
  }

  public warn(): void {
    this.logger.warn('You are seriously awesome');
  }

  public error(): void {
    this.logger.error('You are dangerously awesome');
  }

}
