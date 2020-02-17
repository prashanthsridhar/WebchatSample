import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bot1Component } from './bot1.component';

describe('Bot1Component', () => {
  let component: Bot1Component;
  let fixture: ComponentFixture<Bot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
