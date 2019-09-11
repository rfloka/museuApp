import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasComponent } from './pecas.component';

describe('PecasComponent', () => {
  let component: PecasComponent;
  let fixture: ComponentFixture<PecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
