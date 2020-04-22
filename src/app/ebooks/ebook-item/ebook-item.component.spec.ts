import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookItemComponent } from './ebook-item.component';

describe('EbookItemComponent', () => {
  let component: EbookItemComponent;
  let fixture: ComponentFixture<EbookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
