/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PCountSenseComponent } from './pCountSense.component';

describe('PCountSenseComponent', () => {
  let component: PCountSenseComponent;
  let fixture: ComponentFixture<PCountSenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCountSenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCountSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
