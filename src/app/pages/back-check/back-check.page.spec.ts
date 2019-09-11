import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCheckPage } from './back-check.page';

describe('BackCheckPage', () => {
  let component: BackCheckPage;
  let fixture: ComponentFixture<BackCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
