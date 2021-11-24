/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PCountSense14DComponent } from './pCountSense14D.component';

describe('PCountSense14DComponent', () => {
  let component: PCountSense14DComponent;
  let fixture: ComponentFixture<PCountSense14DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCountSense14DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCountSense14DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
