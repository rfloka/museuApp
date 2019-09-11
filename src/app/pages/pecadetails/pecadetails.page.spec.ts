import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecadetailsPage } from './pecadetails.page';

describe('PecadetailsPage', () => {
  let component: PecadetailsPage;
  let fixture: ComponentFixture<PecadetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecadetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecadetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
