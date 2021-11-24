/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PCountDisplay28Component } from './pCountDisplay28.component';

describe('PCountDisplay28Component', () => {
  let component: PCountDisplay28Component;
  let fixture: ComponentFixture<PCountDisplay28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCountDisplay28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCountDisplay28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
