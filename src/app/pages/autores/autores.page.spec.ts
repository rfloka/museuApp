import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresPage } from './autores.page';

describe('AutoresPage', () => {
  let component: AutoresPage;
  let fixture: ComponentFixture<AutoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
