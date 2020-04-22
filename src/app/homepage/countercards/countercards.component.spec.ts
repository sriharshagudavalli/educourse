import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountercardsComponent } from './countercards.component';

describe('CountercardsComponent', () => {
  let component: CountercardsComponent;
  let fixture: ComponentFixture<CountercardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountercardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
