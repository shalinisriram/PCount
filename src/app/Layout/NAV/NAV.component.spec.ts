/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NAVComponent } from './NAV.component';

describe('NAVComponent', () => {
  let component: NAVComponent;
  let fixture: ComponentFixture<NAVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
