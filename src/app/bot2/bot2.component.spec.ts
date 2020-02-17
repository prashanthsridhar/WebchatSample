import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bot2Component } from './bot2.component';

describe('Bot2Component', () => {
  let component: Bot2Component;
  let fixture: ComponentFixture<Bot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
