import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Logger } from 'angularx-logger';
import { DemoComponent } from './demo.component';

describe('MyAwesomeComponentComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
      providers: [ Logger ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
